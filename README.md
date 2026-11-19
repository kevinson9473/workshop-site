# 워크숍 레크리에이션 (배포용)

빌드가 필요 없는 정적 파일입니다.

| 주소 | 내용 |
|---|---|
| `/` | 첫 화면 |
| `/draw/` | 추첨기 |

## GitHub Pages
Settings → Pages → Build and deployment
- Source: **Deploy from a branch**
- Branch: **main**, 폴더: **/ (root)**

Cloudflare Pages / Netlify 에 이 폴더를 그대로 올려도 됩니다 (빌드 명령 없음, 출력 폴더 `/`).

## 참고
- 퀴즈는 배포에서 뺐습니다 (2026-11-19). 다시 넣으려면 make-deploy.mjs 의 `WITH_QUIZ` 를 true 로.
- 추첨기 배경음악은 `draw/bgm/bgm.mp3` 파일이 재생됩니다.
