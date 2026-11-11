'use strict';
const $ = (id) => document.getElementById(id);
const categories = window.CATEGORIES;
const questions = window.QUESTIONS;
const storageKey = 'playroom-workshop-20261111-v2';
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const HOW = { face: '인물 이름 맞히기', poster: '영화 제목 맞히기', video: 'A·B 중 진짜 영상 고르기', song: '노래 제목 맞히기' };
const TIMER_MS = 20000;
const ARC = 2 * Math.PI * 45;
const aiSticker = (c) => (c.ai ? ' <b class="ai-sticker" aria-label="AI 활용 라운드">AI</b>' : '');

let completed = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) completed = new Set(saved.filter((id) => questions.some((q) => q.id === id))); } catch { /* 저장소가 막혀도 동작 */ }
let currentIndex = 0;
let isRevealed = false;
let timerHandle = null;
let timerRemaining = TIMER_MS;
let timerDeadline = 0;
let currentAudio = null;
let audioLimit = null;
let mediaGeneration = 0;
let songPlayer = null; // { id, ready: Promise<YT.Player> }
let songPoll = null;
const dialog = $('quiz-dialog');

function saveProgress() { try { localStorage.setItem(storageKey, JSON.stringify([...completed])); } catch { /* 저장 없이도 동작 */ } }
function toast(message) { const t = $('toast'); t.textContent = message; t.classList.add('visible'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('visible'), 3000); }

/* ── 메뉴 ───────────────────────────────────────── */
function renderBoard() {
  document.querySelectorAll('[data-total-questions]').forEach((el) => (el.textContent = questions.length));
  $('completed-count').textContent = completed.size;
  $('overall-fill').style.width = `${(completed.size / questions.length) * 100}%`;
  $('start').textContent = completed.size === 0 ? '▶ 첫 문제 시작' : completed.size === questions.length ? '✓ 모두 완료 · 처음부터' : '▶ 이어서 시작';
  $('category-grid').innerHTML = categories.map((c, ci) => {
    const qs = questions.filter((q) => q.category === c.id);
    const done = qs.filter((q) => completed.has(q.id)).length;
    return `<section class="round" style="--tint:${c.tint}" aria-label="${escapeHtml(c.name)}">
      <div class="round-head">
        <div class="round-top">ROUND ${ci + 1}${aiSticker(c)}</div>
        <h2 class="round-name">${escapeHtml(c.name)}</h2>
        <p class="round-how">${HOW[c.id] || escapeHtml(c.description)}</p>
        <span class="round-count">${done}/${qs.length}</span>
      </div>
      <div class="tiles">${qs.map((q) => `<button class="tile ${completed.has(q.id) ? 'done' : ''}" data-question="${q.id}" aria-label="${escapeHtml(c.name)} ${q.number}번${completed.has(q.id) ? ', 완료' : ''}"><b>${q.number}</b>${q.era ? `<small>${q.era}</small>` : ''}</button>`).join('')}</div>
    </section>`;
  }).join('');
}

/* ── 타이머 ─────────────────────────────────────── */
function stopTimer() { if (timerHandle) clearInterval(timerHandle); timerHandle = null; }
function updateTimer() {
  const secs = Math.max(0, Math.ceil(timerRemaining / 1000));
  const t = $('timer');
  $('timer-value').textContent = secs;
  $('timer-label').textContent = timerHandle ? '일시정지 · T' : secs === 0 ? '다시 · T' : timerRemaining < TIMER_MS ? '계속 · T' : '시작 · T';
  $('timer-arc').style.strokeDashoffset = String(ARC * (1 - timerRemaining / TIMER_MS));
  t.classList.toggle('running', !!timerHandle);
  t.classList.toggle('low', !!timerHandle && secs <= 5);
  t.classList.toggle('expired', secs === 0);
}
function toggleTimer() {
  if (isRevealed) return;
  if (timerHandle) { timerRemaining = Math.max(0, timerDeadline - performance.now()); stopTimer(); $('timer-status').textContent = '타이머 일시정지'; updateTimer(); return; }
  if (timerRemaining <= 0) timerRemaining = TIMER_MS;
  timerDeadline = performance.now() + timerRemaining;
  timerHandle = setInterval(() => {
    timerRemaining = Math.max(0, timerDeadline - performance.now());
    if (!timerRemaining) { stopTimer(); $('timer-status').textContent = '시간 종료! 정답을 공개해 주세요.'; }
    updateTimer();
  }, 100);
  $('timer-status').textContent = '';
  updateTimer();
}

/* ── 미디어 ─────────────────────────────────────── */
function stopMedia() {
  mediaGeneration++;
  if (currentAudio) { currentAudio.pause(); currentAudio.removeAttribute('src'); currentAudio.load(); currentAudio = null; }
  clearTimeout(audioLimit); audioLimit = null;
  clearInterval(songPoll); songPoll = null;
  songPlayer?.ready.then((p) => p.pauseVideo?.()).catch(() => {});
  dialog.querySelectorAll('video').forEach((v) => v.pause());
  dialog.querySelector('.disc')?.classList.remove('playing');
  dialog.querySelectorAll('.song-buttons button').forEach((b) => b.classList.remove('playing'));
  dialog.querySelector('.media-play')?.classList.remove('hidden');
}

function renderVideo(area, q) {
  const AB = 'AB';
  area.innerHTML = `<div class="pair-grid">${q.clips.map((c, i) => c.video
    ? `<figure class="pair-clip" data-slot="${i}"><video playsinline muted loop preload="auto" poster="${c.poster}" aria-label="${AB[i]} 영상"><source src="${c.video}" type="video/mp4"></video><span class="pair-label">${AB[i]}</span><span class="pair-verdict">${c.real ? 'REAL · 실제 촬영' : 'AI 생성'}</span><button class="pair-pick" data-slot="${i}" aria-pressed="false">${AB[i]}가 진짜!</button></figure>`
    : `<figure class="pair-clip" data-slot="${i}"><div class="pair-empty">비교 영상 준비 중</div><span class="pair-label">${AB[i]}</span></figure>`).join('')}</div>
    <button class="media-play" aria-label="두 영상 함께 재생">▶</button><button class="media-restart">↻ 처음부터</button>`;
  const vids = [...area.querySelectorAll('video')];
  const playBtn = area.querySelector('.media-play');
  const play = async (restart) => {
    const generation = mediaGeneration;
    if (restart) vids.forEach((v) => { v.currentTime = 0; });
    try { await Promise.all(vids.map((v) => v.play())); if (generation !== mediaGeneration) { vids.forEach((v) => v.pause()); return; } playBtn.classList.add('hidden'); }
    catch { toast('영상을 재생하지 못했습니다. ▶를 다시 눌러주세요.'); }
  };
  const pause = () => { vids.forEach((v) => v.pause()); playBtn.classList.remove('hidden'); };
  playBtn.onclick = () => play(false);
  area.querySelector('.media-restart').onclick = () => play(true);
  vids.forEach((v) => { v.onclick = () => (v.paused ? play(false) : pause()); v.addEventListener('error', () => toast('영상 파일을 찾지 못했습니다. dist/assets 폴더를 확인하세요.')); });
  area.querySelectorAll('.pair-pick').forEach((b) => (b.onclick = () => {
    if (isRevealed) return;
    area.querySelectorAll('.pair-pick').forEach((x) => { x.classList.remove('selected'); x.setAttribute('aria-pressed', 'false'); });
    b.classList.add('selected'); b.setAttribute('aria-pressed', 'true');
  }));
}

const SONG_CLIPS = { intro: (q) => `처음 ${q.intro.length}초`, highlight: () => '하이라이트' };
const FILE_MSG = '유튜브 음원은 웹 주소(http)로 열어야 재생됩니다. "로컬서버로_열기.cmd"로 실행하세요.';
let ytApi = null;
function loadYoutubeApi() {
  if (!ytApi) ytApi = new Promise((resolve, reject) => {
    if (window.YT?.Player) return resolve(window.YT);
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => { ytApi = null; reject(new Error('api')); };
    document.head.appendChild(s);
  });
  return ytApi;
}
function destroySongPlayer() {
  const sp = songPlayer; songPlayer = null;
  sp?.ready.then((p) => p.destroy()).catch(() => {});
}
function getSongPlayer(q) {
  if (songPlayer?.id === q.id) return songPlayer.ready;
  destroySongPlayer();
  const holder = dialog.querySelector('.song-player');
  const ready = loadYoutubeApi().then((YT) => new Promise((resolve, reject) => {
    const el = document.createElement('div'); holder.replaceChildren(el);
    let ok = false;
    const p = new YT.Player(el, { width: '100%', height: '100%', videoId: q.youtube,
      playerVars: { controls: 0, disablekb: 1, fs: 0, rel: 0, playsinline: 1, iv_load_policy: 3 },
      events: { onReady: () => { ok = true; resolve(p); },
        onError: (e) => { if (!ok) reject(e); else songStatus(`유튜브 재생 오류(${e.data}). 인터넷 연결을 확인하세요.`); } } });
  }));
  songPlayer = { id: q.id, ready, loaded: q.youtube }; // loaded: 지금 플레이어에 올라간 영상(음원 ↔ 뮤비)
  ready.catch(() => { if (songPlayer?.ready === ready) songPlayer = null; });
  return ready;
}
const songStatus = (text) => { const el = dialog.querySelector('.song-status'); if (el) el.textContent = text; };

function renderSong(area, q) {
  area.innerHTML = `<div class="song-scene">
    <div class="song-screen"><div class="song-player"></div><div class="song-cover" aria-hidden="true"><div class="disc"></div></div></div>
    <div class="song-side">
      <div class="song-era">${q.era ? `${q.era} HIT` : 'NOW PLAYING'}</div>
      <div class="song-buttons">
        <button data-clip="intro">▶ ${SONG_CLIPS.intro(q)} <kbd>1</kbd></button>
        <button data-clip="highlight">★ 하이라이트 <kbd>2</kbd></button>
        <button data-clip="full" class="song-full">${q.reveal ? `▶ ${escapeHtml(q.reveal.label)}` : '♫ 계속 듣기'} <kbd>3</kbd></button>
      </div>
      <button class="song-stop">■ 멈추기</button>
      <div class="song-status" role="status">처음 ${q.intro.length}초부터 들려주세요.</div>
    </div></div>`;
  area.querySelectorAll('[data-clip]').forEach((b) => (b.onclick = () => playSong(q, b.dataset.clip, b)));
  area.querySelector('.song-stop').onclick = () => { stopMedia(); songStatus('멈췄습니다.'); };
  if (q.youtube && !q.audio) {
    if (location.protocol === 'file:') songStatus(FILE_MSG);
    else getSongPlayer(q).catch(() => songStatus('유튜브 플레이어를 불러오지 못했습니다. 인터넷 연결을 확인하세요.'));
  }
}

// kind: intro | highlight → 문제용 음원(유튜브 뮤직 Topic, 0초 = 곡 시작)
//       full → 정답 공개 후: q.reveal(뮤직비디오 등)이 있으면 그 영상, 없으면 음원을 이어서 재생
async function playSong(q, kind, button) {
  stopMedia();
  const generation = mediaGeneration;
  const full = kind === 'full';
  const seg = full ? { start: q.reveal ? 0 : null, length: Infinity } : q[kind];
  const label = full ? (q.reveal ? q.reveal.label : '노래') : SONG_CLIPS[kind](q);
  const videoId = full && q.reveal ? q.reveal.youtube : q.youtube;
  const disc = dialog.querySelector('.disc');
  let started = false;
  const begin = () => { started = true; button.classList.add('playing'); disc?.classList.add('playing'); songStatus(`${label} 재생 중…`); };
  const finish = () => {
    if (generation !== mediaGeneration) return;
    stopMedia(); button.classList.add('played');
    songStatus(isRevealed ? `${label} 끝!` : `${label} 끝! 제목이 뭘까요?`);
  };
  songStatus('재생 준비 중…');

  if (q.audio && !(full && q.reveal)) { // 내려받은 음원 파일을 넣으면(questions의 audio) 이쪽으로 같은 구간을 재생
    const audio = new Audio(q.audio); currentAudio = audio;
    audio.addEventListener('ended', finish);
    audio.addEventListener('error', () => { if (currentAudio === audio) songStatus('음원 파일을 찾지 못했습니다. dist/assets 폴더를 확인하세요.'); });
    audio.addEventListener('timeupdate', () => { if (started && audio.currentTime >= seg.start + seg.length) finish(); });
    try {
      if (seg.start != null) audio.currentTime = seg.start;
      await audio.play();
      if (generation !== mediaGeneration) { audio.pause(); return; }
      begin();
    } catch { if (generation === mediaGeneration) songStatus('재생하지 못했습니다. 다시 눌러주세요.'); }
    return;
  }

  if (location.protocol === 'file:') { songStatus(FILE_MSG); return; }
  let p;
  try { p = await getSongPlayer(q); } catch { if (generation === mediaGeneration) songStatus('유튜브 플레이어를 불러오지 못했습니다. 인터넷 연결을 확인하세요.'); return; }
  if (generation !== mediaGeneration) return;
  p.unMute(); p.setVolume(100);
  if (songPlayer && songPlayer.loaded !== videoId) {
    songPlayer.loaded = videoId;
    p.loadVideoById({ videoId, startSeconds: seg.start ?? 0 });
  } else {
    if (seg.start != null) p.seekTo(seg.start, true);
    p.playVideo();
  }
  const t0 = performance.now();
  songPoll = setInterval(() => {
    if (generation !== mediaGeneration) { clearInterval(songPoll); return; }
    const t = p.getCurrentTime(), playing = p.getPlayerState() === 1;
    // seek 직후엔 이전 위치가 잠깐 보일 수 있어서, 시작 지점 근처에서 실제 재생이 확인된 뒤부터 잰다
    if (!started && playing && (seg.start == null || (t >= seg.start - 0.5 && t < seg.start + 2))) begin();
    if (started && t >= seg.start + seg.length) finish();
    if (!started && performance.now() - t0 > 6000) songStatus('재생이 늦어지고 있습니다… (광고·네트워크 확인)');
  }, 40);
}

/* ── 문제 화면 ─────────────────────────────────── */
function openQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  stopMedia(); stopTimer(); destroySongPlayer();
  timerRemaining = TIMER_MS; isRevealed = false; currentIndex = index;
  const q = questions[index], c = categories.find((x) => x.id === q.category);
  const siblings = questions.filter((x) => x.category === q.category);
  $('question-round').textContent = `ROUND ${categories.indexOf(c) + 1}`;
  $('question-category').innerHTML = escapeHtml(c.name) + aiSticker(c);
  $('question-dots').innerHTML = siblings.map((x) => `<button class="quiz-dot ${x.id === q.id ? 'current' : completed.has(x.id) ? 'done' : ''}" data-question="${x.id}" aria-label="${x.number}번 문제">${x.number}</button>`).join('');
  $('question-index').textContent = `전체 ${index + 1} / ${questions.length}`;
  $('question-title').textContent = q.title;
  $('answer-panel').hidden = true; $('answer-panel').innerHTML = '';
  $('hint-panel').hidden = true; $('hint-panel').textContent = q.hint;
  $('hint-button').disabled = false; $('hint-button').innerHTML = '💡 힌트 <kbd>H</kbd>';
  $('reveal').disabled = false; $('reveal').innerHTML = '정답 공개 <kbd>Space</kbd>';
  $('timer').disabled = false; $('timer-status').textContent = ''; updateTimer();
  $('previous').disabled = index === 0;
  $('next').textContent = index === questions.length - 1 ? '목록으로' : '다음 →';
  const area = $('question-media');
  area.className = `stage-media ${q.category}`;
  if (q.category === 'face') area.innerHTML = `<img src="${q.image}" alt="눈·코·입 조각으로 만든 인물 문제 이미지">`;
  else if (q.category === 'poster') area.innerHTML = `<img src="${q.image}" alt="영화 포스터를 흑백 낙서로 다시 그린 문제 이미지">`;
  else if (q.category === 'video') renderVideo(area, q);
  else if (q.category === 'song') renderSong(area, q);
  if (!dialog.open) dialog.showModal();
  $('reveal').focus({ preventScroll: true });
}

function toggleHint() {
  if (isRevealed) return;
  const p = $('hint-panel'); p.hidden = !p.hidden;
  $('hint-button').innerHTML = p.hidden ? '💡 힌트 <kbd>H</kbd>' : '💡 힌트 접기 <kbd>H</kbd>';
}

function revealAnswer() {
  if (isRevealed) return;
  isRevealed = true;
  const q = questions[currentIndex];
  stopTimer(); stopMedia(); updateTimer();
  completed.add(q.id); saveProgress(); renderBoard();
  dialog.querySelector(`.quiz-dot[data-question="${q.id}"]`)?.classList.add('done');
  $('timer').disabled = true; $('hint-button').disabled = true; $('hint-panel').hidden = true; $('hint-button').innerHTML = '💡 힌트 <kbd>H</kbd>';
  $('reveal').disabled = true; $('reveal').textContent = '✓ 공개 완료';
  const sources = q.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)} ↗</a>`).join('');
  const panel = $('answer-panel');
  panel.innerHTML = `<span class="answer-label">정답</span><h2>${escapeHtml(q.answer)}</h2><p>${escapeHtml(q.explanation)}</p>${q.original ? `<img src="${q.original}" alt="정답 원본 이미지">` : ''}<details><summary>출처 보기</summary>${sources}<div class="credit">${escapeHtml(q.credit)}</div>${q.licenseUrl ? `<a href="${q.licenseUrl}" target="_blank" rel="noopener noreferrer">라이선스 ↗</a>` : ''}</details>`;
  panel.hidden = false;
  if (q.category === 'video') {
    const realSlot = String(q.clips.findIndex((c) => c.real));
    dialog.querySelectorAll('.pair-pick').forEach((b) => (b.disabled = true));
    dialog.querySelectorAll('.pair-clip').forEach((f) => { const c = q.clips[+f.dataset.slot]; if (c.video) f.classList.add(f.dataset.slot === realSlot ? 'is-real' : 'is-ai'); });
  }
  if (q.category === 'song') {
    dialog.querySelector('.song-scene')?.classList.add('revealed');
    // 정답 공개와 함께 뮤직비디오(또는 무대 영상)를 바로 재생
    if (q.reveal) dialog.querySelector('[data-clip=full]')?.click();
    else songStatus('정답 공개! ♫ 계속 듣기로 이어서 들어보세요.');
  }
  $('next').focus({ preventScroll: true });
}

function closeQuiz() { stopTimer(); stopMedia(); destroySongPlayer(); dialog.close(); }
function nextQuestion() { if (currentIndex === questions.length - 1) closeQuiz(); else openQuestion(currentIndex + 1); }

async function toggleFullscreen() {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
  catch { toast('이 브라우저에서는 전체 화면을 쓸 수 없습니다. F11을 눌러주세요.'); }
}

/* ── 이벤트 ─────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const qb = e.target.closest('[data-question]');
  if (qb) openQuestion(questions.findIndex((q) => q.id === qb.dataset.question));
});
$('start').onclick = () => { const i = questions.findIndex((q) => !completed.has(q.id)); openQuestion(i < 0 ? 0 : i); };
$('hint-button').onclick = toggleHint; $('reveal').onclick = revealAnswer; $('timer').onclick = toggleTimer;
$('close-quiz').onclick = closeQuiz; $('previous').onclick = () => openQuestion(currentIndex - 1); $('next').onclick = nextQuestion;
$('fullscreen').onclick = toggleFullscreen; $('quiz-fullscreen').onclick = toggleFullscreen;
dialog.addEventListener('cancel', (e) => { e.preventDefault(); closeQuiz(); });
$('reset').onclick = () => {
  if (!completed.size) { toast('아직 완료한 문제가 없습니다.'); return; }
  if (!confirm('완료 기록을 모두 지울까요?')) return;
  completed.clear(); saveProgress(); renderBoard(); toast('진행 기록을 초기화했습니다.');
};
document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('a, input, textarea')) return;
  const k = e.key.toLowerCase();
  if (k === 'f') { e.preventDefault(); toggleFullscreen(); return; }
  if (!dialog.open) return;
  if (e.key === ' ') { e.preventDefault(); revealAnswer(); }
  else if (k === 'h') { e.preventDefault(); toggleHint(); }
  else if (k === 't') { e.preventDefault(); toggleTimer(); }
  else if (['1', '2', '3'].includes(e.key) && questions[currentIndex].category === 'song') {
    e.preventDefault();
    if (e.key === '3' && !isRevealed) return; // 뮤비는 정답 공개 뒤에만
    dialog.querySelector(`[data-clip=${{ 1: 'intro', 2: 'highlight', 3: 'full' }[e.key]}]`)?.click();
  }
  else if (e.key === 'ArrowRight') { e.preventDefault(); nextQuestion(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); openQuestion(currentIndex - 1); }
});
renderBoard();
