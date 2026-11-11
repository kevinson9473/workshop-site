# 워크숍 레크리에이션 (배포용)

빌드가 필요 없는 정적 파일입니다.

| 주소 | 내용 |
|---|---|
| `/` | 첫 화면 |
| `/quiz/` | 퀴즈 |
| `/draw/` | 추첨기 |

## GitHub Pages
Settings → Pages → Build and deployment
- Source: **Deploy from a branch**
- Branch: **main**, 폴더: **/ (root)**

Cloudflare Pages / Netlify 에 이 폴더를 그대로 올려도 됩니다 (빌드 명령 없음, 출력 폴더 `/`).

## 참고
- 노래 퀴즈와 추첨기 배경음악은 유튜브 임베드라 **https 주소에서만** 재생됩니다 (파일 더블클릭으로 열면 재생 안 됨).
- 추첨기 배경음악을 파일로 쓰려면 `draw/bgm/bgm.mp3` 를 넣으면 유튜브 대신 그 파일이 재생됩니다.
