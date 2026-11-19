window.CATEGORIES = [
  {
    "id": "face",
    "name": "눈코입 퀴즈",
    "en": "WHO IS IT?",
    "icon": "◉",
    "description": "분명 아는 얼굴인데… 누구였더라?",
    "tint": "#e8eddc"
  },
  {
    "id": "poster",
    "name": "낙서 영화 퀴즈",
    "en": "DOODLE MOVIES",
    "icon": "▣",
    "description": "AI가 그린 하찮은 낙서 속 숨은 영화, 알아보겠어요?",
    "tint": "#eee8db",
    "ai": true
  },
  {
    "id": "ox",
    "name": "진짜일까요? 가짜일까요?",
    "en": "REAL OR AI?",
    "icon": "⭕",
    "description": "실제로 찍은 영상이면 O, AI가 만든 가짜면 X!",
    "tint": "#dce9e3",
    "ai": true
  },
  {
    "id": "song",
    "name": "노래 맞히기",
    "en": "SOUND ON",
    "icon": "♫",
    "description": "짧게 듣고 딱! 마음속 플레이리스트.",
    "tint": "#e9e6ee"
  }
];

window.QUESTIONS = [
  {
    "id": "face-01",
    "category": "face",
    "number": 1,
    "title": "이 눈·코·입의 주인공은?",
    "prompt": "눈·코·입 조각을 보고 인물의 이름을 맞혀주세요.",
    "answer": "마크 저커버그",
    "hint": "초성: ㅁㅋ ㅈㅋㅂㄱ",
    "explanation": "정답은 마크 저커버그입니다.",
    "original": "assets/face-01-answer.jpg",
    "sources": [],
    "credit": "사용자 제공 문제 이미지 및 전체 사진. 정답 이름은 사용자가 지정했습니다. 첨부 이미지를 편집 없이 사용했습니다.",
    "image": "assets/face-01-collage.jpg"
  },
  {
    "id": "face-02",
    "category": "face",
    "number": 2,
    "title": "이 눈·코·입의 주인공은?",
    "prompt": "눈·코·입 조각을 보고 인물의 이름을 맞혀주세요.",
    "answer": "강호동",
    "hint": "초성: ㄱㅎㄷ",
    "explanation": "정답은 강호동입니다.",
    "original": "assets/face-02-answer.jpg",
    "sources": [],
    "credit": "사용자 제공 문제 이미지 및 전체 사진. 정답 이름은 사용자가 지정했습니다. 첨부 이미지를 편집 없이 사용했습니다.",
    "image": "assets/face-02-collage.jpg"
  },
  {
    "id": "face-03",
    "category": "face",
    "number": 3,
    "title": "이 눈·코·입의 주인공은?",
    "prompt": "눈·코·입 조각을 보고 인물의 이름을 맞혀주세요.",
    "answer": "아이유",
    "hint": "초성: ㅇㅇㅇ",
    "explanation": "정답은 아이유입니다.",
    "original": "assets/face-03-answer.webp",
    "sources": [],
    "credit": "사용자 제공 문제 이미지 및 전체 사진. 정답 이름은 사용자가 지정했습니다. 첨부 이미지를 편집 없이 사용했습니다.",
    "image": "assets/face-03-collage.jpg"
  },
  {
    "id": "face-04",
    "category": "face",
    "title": "이 눈·코·입의 주인공은?",
    "prompt": "눈·코·입 조각을 보고 인물의 이름을 맞혀주세요.",
    "answer": "황정민",
    "hint": "초성: ㅎㅈㅁ",
    "explanation": "정답은 황정민입니다.",
    "image": "assets/face-ex-question.jpeg",
    "original": "assets/face-ex-answer.webp",
    "sources": [],
    "credit": "사용자 제공 문제 이미지 및 정답 사진(편집 없이 사용).",
    "number": 4
  },
  {
    "id": "poster-v2-01",
    "category": "poster",
    "number": 1,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "괴물",
    "hint": "초성: ㄱㅁ",
    "explanation": "정답은 괴물입니다. 원본 포스터와 낙서의 구도를 비교해 보세요.",
    "image": "assets/poster-v2-01.png",
    "original": "assets/poster-v2-01-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다."
  },
  {
    "id": "poster-v2-02",
    "category": "poster",
    "number": 2,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "오디세이",
    "hint": "초성: ㅇㄷㅅㅇ",
    "explanation": "정답은 오디세이입니다. 원본 포스터와 낙서의 구도를 비교해 보세요.",
    "image": "assets/poster-v2-02.png",
    "original": "assets/poster-v2-02-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다."
  },
  {
    "id": "poster-v2-03",
    "category": "poster",
    "number": 3,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "인터스텔라",
    "hint": "초성: ㅇㅌㅅㅌㄹ",
    "explanation": "정답은 인터스텔라입니다. 원본 포스터와 낙서의 구도를 비교해 보세요.",
    "image": "assets/poster-v2-03.png",
    "original": "assets/poster-v2-03-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다."
  },
  {
    "id": "poster-v2-04",
    "category": "poster",
    "number": 4,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "기생충",
    "hint": "초성: ㄱㅅㅊ",
    "explanation": "정답은 기생충입니다. 원본 포스터와 낙서의 구도를 비교해 보세요.",
    "image": "assets/poster-v2-04.png",
    "original": "assets/poster-v2-04-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다."
  },
  {
    "id": "poster-v2-05",
    "category": "poster",
    "number": 5,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "조커",
    "hint": "초성: ㅈㅋ",
    "explanation": "정답은 조커입니다. 원본 포스터와 낙서의 구도를 비교해 보세요.",
    "image": "assets/poster-v2-05.png",
    "original": "assets/poster-v2-05-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다."
  },
  {
    "id": "ox-01",
    "category": "ox",
    "number": 1,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-01-b.mp4",
    "poster": "assets/real-01-b.jpg",
    "real": true,
    "scene": "눈밭을 달려오는 블랙노즈 양",
    "answer": "O · 진짜 (실제 촬영)",
    "hint": "털이 바람에 날리고 발밑의 눈이 튀는 모습, 자연스러운가요?",
    "explanation": "진짜입니다! 눈밭을 달려오는 스위스 블랙노즈 양. Count The Fingers 이용자 약 2만 명 중 52%만 진짜로 맞혔습니다.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-02",
    "category": "ox",
    "number": 2,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-02-b.mp4",
    "poster": "assets/real-02-b.jpg",
    "real": false,
    "scene": "계단을 굴러 내려오는 고양이",
    "answer": "X · 가짜 (AI 생성)",
    "hint": "고양이의 털과 몸이 물리적으로 자연스럽게 움직이는지 보세요.",
    "explanation": "가짜(AI 생성)입니다. 계단을 데굴데굴 굴러 내려오는 고양이 — 이용자 55%만 AI로 맞혔습니다.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-03",
    "category": "ox",
    "number": 3,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-05-a.mp4",
    "poster": "assets/real-05-a.jpg",
    "real": true,
    "scene": "공중에 얼어붙은 스파게티와 포크",
    "answer": "O · 진짜 (실제 촬영)",
    "hint": "말도 안 되는 장면… 그런데 날씨가 만든 기적일 수도?",
    "explanation": "진짜입니다! 2026년 1월 23일 미국 미니애폴리스(최저 -29℃, 체감 -43℃)에서 기상캐스터 Jennifer McDermed가 찍은 영상으로, FOX Weather·Fox News가 보도했습니다. 삶은 스파게티가 포크를 든 채 그대로 얼어붙었습니다. 이용자 정답률 87%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-04",
    "category": "ox",
    "number": 4,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-03-a.mp4",
    "poster": "assets/real-03-a.jpg",
    "real": false,
    "scene": "침대 위 아기와 새끼 고양이",
    "answer": "X · 가짜 (AI 생성)",
    "hint": "고양이 앞발과 아기 손의 움직임을 끝까지 보세요.",
    "explanation": "가짜(AI 생성)입니다. 침대 위 아기와 새끼 고양이 — 이용자 정답률 59%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-05",
    "category": "ox",
    "number": 5,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-06-b.mp4",
    "poster": "assets/real-06-b.jpg",
    "real": true,
    "scene": "타이어 속에 몸을 끼워 넣는 정비사",
    "answer": "O · 진짜 (실제 촬영)",
    "hint": "믿기 힘든 몸개그… 몸의 움직임이 물리적으로 자연스러운가요?",
    "explanation": "진짜입니다! 타이어 가게 정비사가 타이어 안에 몸을 말아 넣고 굴러다니는 실제 영상. 믿기 힘든 쪽이 진짜일 수 있어요. 이용자 정답률 78%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-06",
    "category": "ox",
    "number": 6,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-01-a.mp4",
    "poster": "assets/real-01-a.jpg",
    "real": false,
    "scene": "은하수 아래 밤바다 카약",
    "answer": "X · 가짜 (AI 생성)",
    "hint": "너무 아름다운 풍경. 화면이 지나치게 완벽하지 않나요?",
    "explanation": "가짜(AI 생성)입니다. 은하수 아래 밤바다 카약 — 이용자 49%만 AI로 맞혔습니다.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-07",
    "category": "ox",
    "number": 7,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-05-b.mp4",
    "poster": "assets/real-05-b.jpg",
    "real": false,
    "scene": "야생 흑곰과 껴안는 셀카",
    "answer": "X · 가짜 (AI 생성)",
    "hint": "야생 맹수가 이렇게까지 다정할까요?",
    "explanation": "가짜(AI 생성)입니다. 야생 흑곰과 껴안는 셀카 — 너무 다정한 맹수. 이용자 정답률 59%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-08",
    "category": "ox",
    "number": 8,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-03-b.mp4",
    "poster": "assets/real-03-b.jpg",
    "real": true,
    "scene": "눈밭의 아이와 황제펭귄",
    "answer": "O · 진짜 (실제 촬영)",
    "hint": "펭귄 날개에 무언가 달려 있나요? 배경 간판 글자도 끝까지 보세요.",
    "explanation": "진짜입니다! 눈밭에서 황제펭귄과 노는 아이. 펭귄 날개의 식별 밴드와 23초 내내 흐트러지지 않는 중국어 간판이 실제 촬영의 단서입니다. 이용자 정답률 51%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-09",
    "category": "ox",
    "number": 9,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-06-a.mp4",
    "poster": "assets/real-06-a.jpg",
    "real": false,
    "scene": "호버보드 타다 넘어지는 남성",
    "answer": "X · 가짜 (AI 생성)",
    "hint": "넘어지는 순간 몸과 주변 사람들의 반응이 물리적으로 자연스러운가요?",
    "explanation": "가짜(AI 생성)입니다. 호버보드 타다 넘어지는 남성 — 이용자 절반 이상(51%)이 진짜라고 속았습니다.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "id": "ox-10",
    "category": "ox",
    "number": 10,
    "title": "이 영상, 진짜일까요? 가짜일까요?",
    "prompt": "실제로 촬영한 영상이면 O, AI가 만든 영상이면 X!",
    "video": "assets/real-02-a.mp4",
    "poster": "assets/real-02-a.jpg",
    "real": true,
    "scene": "금장식 의상을 입은 고양이",
    "answer": "O · 진짜 (실제 촬영)",
    "hint": "옷 장식과 고양이의 움직임이 끝까지 자연스러운가요?",
    "explanation": "진짜입니다! 화려한 금장식 의상을 걸친 고양이. 이용자 정답률 61%.",
    "sources": [
      {
        "label": "Count The Fingers · 진짜/AI 구분 게임",
        "url": "https://countthefingers.com/"
      }
    ],
    "credit": "Count The Fingers(countthefingers.com) 문제 영상과 공개 정답·통계 기준. 원 게시자 미확인 — 행사 내부 진행용. 음소거·재인코딩(최대 20초).",
    "licenseUrl": null
  },
  {
    "category": "song",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "sources": [],
    "credit": "사용자 제공 가사 영상에서 음원만 추출해 사용합니다. 저작권은 각 권리자에게 있습니다.",
    "intro": {
      "start": 0,
      "length": 5
    },
    "id": "song-01",
    "number": 1,
    "era": "20s",
    "answer": "Ditto",
    "hint": "2022년 겨울, 하얀 눈과 몽환적인 코러스로 사랑받은 걸그룹 곡입니다.",
    "explanation": "뉴진스 · Ditto (2022).",
    "highlight": {
      "start": 84.8,
      "length": 15,
      "note": "\"Stay in the middle\" → \"말해줘 say it back\""
    },
    "audio": "assets/song-01.m4a"
  },
  {
    "id": "song-02",
    "category": "song",
    "number": 2,
    "era": "20s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "Drowning",
    "hint": "2023년 발표, 라이브 영상으로 뒤늦게 역주행한 남자 솔로 가수의 곡입니다.",
    "explanation": "WOODZ(우즈) · Drowning (2023).",
    "youtube": "NbKH4iZqq1Y",
    "reveal": {
      "youtube": "NbKH4iZqq1Y",
      "label": "음원"
    },
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 59,
      "length": 15,
      "note": "\"Oh, I'm drowning\" 후렴"
    },
    "sources": [
      {
        "label": "문제 음원 · YouTube WOODZ - Topic",
        "url": "https://www.youtube.com/watch?v=NbKH4iZqq1Y"
      }
    ],
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다.",
    "audio": "assets/song-02.m4a"
  },
  {
    "id": "song-03",
    "category": "song",
    "number": 3,
    "era": "00s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "벌써 일년",
    "hint": "2001년, 나얼·윤건 R&B 듀오의 데뷔곡입니다.",
    "explanation": "브라운 아이즈 · 벌써 일년 (2001).",
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 53.5,
      "length": 15,
      "note": "\"I believe in you, I believe in your mind / 벌써 일년이 지났지만\" 후렴"
    },
    "sources": [],
    "credit": "사용자 제공 가사 영상에서 음원만 추출해 사용합니다. 저작권은 각 권리자에게 있습니다.",
    "audio": "assets/song-03.m4a"
  },
  {
    "id": "song-04",
    "category": "song",
    "number": 4,
    "era": "90s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "애상",
    "hint": "1998년 혼성 3인조 그룹의 여름 히트곡. 가사에 \"삐삐\"가 나옵니다.",
    "explanation": "쿨 · 애상 (1998).",
    "youtube": "3YSfRCtZ-AY",
    "reveal": {
      "youtube": "3YSfRCtZ-AY",
      "label": "음원"
    },
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 55.8,
      "length": 15,
      "note": "\"일부러 피하는 거니\" → \"말리지 마\""
    },
    "sources": [
      {
        "label": "문제 음원 · YouTube COOL - Topic",
        "url": "https://www.youtube.com/watch?v=3YSfRCtZ-AY"
      }
    ],
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다.",
    "audio": "assets/song-04.m4a"
  },
  {
    "id": "song-05",
    "category": "song",
    "number": 5,
    "era": "10s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "좋은 날",
    "hint": "2010년, '3단 고음'으로 유명해진 곡입니다.",
    "explanation": "아이유 · 좋은 날 (2010).",
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 60.5,
      "length": 15,
      "note": "\"한 번도 못했던 말\" → \"나는요 오빠가 좋은걸 어떡해\""
    },
    "sources": [],
    "credit": "사용자 제공 가사 영상에서 음원만 추출해 사용합니다. 저작권은 각 권리자에게 있습니다.",
    "audio": "assets/song-05.m4a"
  },
  {
    "id": "song-06",
    "category": "song",
    "number": 6,
    "era": "20s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "아무노래",
    "hint": "2020년 초, 춤 챌린지 열풍을 일으킨 래퍼의 곡입니다.",
    "explanation": "지코 · 아무노래 (2020).",
    "youtube": "GOtF5_Ow0_Y",
    "reveal": {
      "youtube": "UdyjeUwPz_E",
      "label": "뮤직비디오"
    },
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 26.6,
      "length": 15,
      "note": "\"○○ 노래나 일단 틀어\" 후렴"
    },
    "sources": [
      {
        "label": "문제 음원 · YouTube ZICO - Topic",
        "url": "https://www.youtube.com/watch?v=GOtF5_Ow0_Y"
      },
      {
        "label": "정답 영상 · KOZ Entertainment · 아무노래 Official Music Video",
        "url": "https://www.youtube.com/watch?v=UdyjeUwPz_E"
      }
    ],
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다.",
    "audio": "assets/song-06.m4a"
  }
];
