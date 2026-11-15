window.CATEGORIES = [
  {
    "id": "ppt",
    "name": "송년회 PPT 퀴즈",
    "en": "WERE YOU WATCHING?",
    "icon": "▤",
    "description": "방금 본 발표 자료, 얼마나 기억하나요?",
    "tint": "#e3ebf3"
  },
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
    "sources": [],
    "credit": "송년회 발표 자료(DRAM_AXPI_2026_송년회.pptx)와 행사 기록 기준.",
    "id": "ppt-ex",
    "category": "ppt",
    "example": true,
    "title": "오늘 송년회 행사 시간은?",
    "prompt": "보기 A~D 중 하나를 고르세요.",
    "choices": [
      [
        "6:00 ~ 7:20"
      ],
      [
        "7:20 ~ 8:00"
      ],
      [
        "6:30 ~ 8:00"
      ],
      [
        "7:00 ~ 8:30"
      ]
    ],
    "correct": 1,
    "answer": "B · 7:20 ~ 8:00",
    "hint": "식사는 6:00 ~ 7:20 이었죠. 그다음은?",
    "explanation": "식사 6:00 ~ 7:20, 행사 7:20 ~ 8:00. 발표 자료 첫 장에 있었습니다.",
    "number": 0
  },
  {
    "sources": [],
    "credit": "송년회 발표 자료(DRAM_AXPI_2026_송년회.pptx)와 행사 기록 기준.",
    "id": "ppt-01",
    "category": "ppt",
    "title": "조직과 리더 이름이 모두 알맞게 짝지어진 것은?",
    "prompt": "보기 A~D 중 네 쌍이 모두 맞는 것을 고르세요.",
    "choices": [
      [
        "방종민 · 설계 AX",
        "권남용 · PE AX",
        "이종범 · FASTAR",
        "권형달 · AX2"
      ],
      [
        "방종민 · 설계 AX",
        "권남용 · FASTAR",
        "이종범 · PE AX",
        "권형달 · AX2"
      ],
      [
        "방종민 · FASTAR",
        "권남용 · 설계 AX",
        "이종범 · PE AX",
        "권형달 · AX2"
      ],
      [
        "방종민 · 설계 AX",
        "권남용 · FASTAR",
        "이종범 · AX2",
        "권형달 · PE AX"
      ]
    ],
    "correct": 1,
    "answer": "B",
    "hint": "개회사 순서를 떠올려 보세요. FASTAR 는 권남용 TL님!",
    "explanation": "설계 AX 방종민 TL님, FASTAR 권남용 TL님, PE AX 이종범 TL님, AX2 그룹 권형달 PL님.",
    "number": 1
  },
  {
    "sources": [],
    "credit": "송년회 발표 자료(DRAM_AXPI_2026_송년회.pptx)와 행사 기록 기준.",
    "id": "ppt-02",
    "category": "ppt",
    "title": "팀장님과 준비해주신 선물이 알맞게 짝지어진 것은?",
    "prompt": "보기 A~D 중 맞는 것 하나를 고르세요.",
    "choices": [
      [
        "손교민 팀장님",
        "→ 갤럭시 북"
      ],
      [
        "손영수 설계팀장님",
        "→ 갤럭시 버즈4 프로"
      ],
      [
        "이병현 PA팀장님",
        "→ 갤럭시 워치9"
      ],
      [
        "홍희일 PE팀장님",
        "→ 갤럭시 탭 S12+"
      ]
    ],
    "correct": 1,
    "answer": "B",
    "hint": "네 분 중 갤럭시 선물을 준비하신 팀장님은 딱 한 분이에요.",
    "explanation": "손영수 설계팀장님이 갤럭시 버즈4 프로(+이솝 세트)를 준비하셨습니다. 손교민 팀장님은 무빙스타일, 이병현 PA팀장님은 JBL 헤드폰, 홍희일 PE팀장님은 양주 3병. 갤럭시 워치9 는 배승준 부사장님, 갤럭시 탭 S12+ 는 황상준 담당님 선물이에요.",
    "number": 2
  },
  {
    "id": "face-ex",
    "category": "face",
    "example": true,
    "title": "이 눈·코·입의 주인공은?",
    "prompt": "눈·코·입 조각을 보고 인물의 이름을 맞혀주세요.",
    "answer": "황정민",
    "hint": "초성: ㅎㅈㅁ",
    "explanation": "정답은 황정민입니다. 이런 식으로 세 문제가 이어집니다!",
    "image": "assets/face-ex-question.jpeg",
    "original": "assets/face-ex-answer.webp",
    "sources": [],
    "credit": "사용자 제공 문제 이미지 및 정답 사진(편집 없이 사용).",
    "number": 0
  },
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
    "id": "poster-ex",
    "category": "poster",
    "number": 0,
    "title": "이 낙서, 어떤 영화일까요?",
    "prompt": "서툰 그림 속 구도와 단서를 보고 영화 제목을 맞혀주세요.",
    "answer": "기생충",
    "hint": "초성: ㄱㅅㅊ",
    "explanation": "정답은 기생충입니다. 이런 식으로 세 문제가 이어집니다!",
    "image": "assets/poster-v2-04.png",
    "original": "assets/poster-v2-04-answer.jpeg",
    "sources": [],
    "credit": "사용자 제공 포스터를 참고해 AI로 생성한 흑백 낙서(V2). 정답 화면은 사용자 제공 원본 포스터입니다.",
    "example": true
  },
  {
    "id": "poster-v2-05",
    "category": "poster",
    "number": 1,
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
    "id": "poster-v2-01",
    "category": "poster",
    "number": 2,
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
    "number": 3,
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
    "id": "song-ex",
    "category": "song",
    "number": 0,
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
    "example": true
  },
  {
    "id": "song-01",
    "category": "song",
    "number": 1,
    "era": "20s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "Hype Boy",
    "hint": "2022년 데뷔한 5인조 걸그룹의 데뷔 앨범 수록곡. 챌린지로도 유명했죠.",
    "explanation": "뉴진스 · Hype Boy (2022).",
    "youtube": "ghrlZIMDzbM",
    "reveal": {
      "youtube": "11cta61wi0g",
      "label": "뮤직비디오"
    },
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 48,
      "length": 15,
      "note": "\"I just want you call my phone right now\" → 후렴"
    },
    "sources": [
      {
        "label": "문제 음원 · YouTube NewJeans - Topic",
        "url": "https://www.youtube.com/watch?v=ghrlZIMDzbM"
      },
      {
        "label": "정답 영상 · HYBE LABELS · Hype Boy Official MV (Performance ver.1)",
        "url": "https://www.youtube.com/watch?v=11cta61wi0g"
      }
    ],
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다."
  },
  {
    "id": "song-03",
    "category": "song",
    "number": 2,
    "era": "10s",
    "title": "이 노래, 제목이 뭘까요?",
    "prompt": "처음 5초 → 하이라이트 순서로 들려주세요.",
    "answer": "Blueming (블루밍)",
    "hint": "2019년, 메신저 대화를 꽃이 피는 것에 빗댄 솔로 여가수의 곡입니다.",
    "explanation": "아이유 · Blueming (블루밍) (2019).",
    "youtube": "I0_ZXHzKysc",
    "reveal": {
      "youtube": "D1PvIWdJ8xo",
      "label": "뮤직비디오"
    },
    "intro": {
      "start": 0,
      "length": 5
    },
    "highlight": {
      "start": 44.5,
      "length": 15,
      "note": "\"우리의 네모 칸은 bloom\" 후렴"
    },
    "sources": [
      {
        "label": "문제 음원 · YouTube IU - Topic",
        "url": "https://www.youtube.com/watch?v=I0_ZXHzKysc"
      },
      {
        "label": "정답 영상 · 1theK · [MV] IU _ Blueming",
        "url": "https://www.youtube.com/watch?v=D1PvIWdJ8xo"
      }
    ],
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다."
  },
  {
    "id": "song-04",
    "category": "song",
    "number": 3,
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
    "credit": "문제는 유튜브 뮤직 음원(아티스트 - Topic), 정답 공개 때는 공식 뮤직비디오(없으면 앨범 표지 음원 영상)를 임베드로 재생합니다. 저작권은 각 권리자에게 있습니다."
  }
];
