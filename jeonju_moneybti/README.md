# JIFF MoneyBTI Landing

전주국제영화제 현장 이벤트용 `MoneyBTI` 테스트 웹페이지 초안입니다.

## 실행 방법

아래 중 하나로 열면 됩니다.

1. 파일 탐색기에서 `index.html` 직접 열기
2. 간단한 로컬 서버 실행

```bash
cd "/Users/parkyoung-ju/visual studio/JB_supporters/jeonju_moneybti"
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속

## 파일 구조

- `index.html`: 화면 구조
- `styles.css`: 모바일 중심 스타일
- `app.js`: 질문/점수/결과 로직

## 현재 구현 상태

- 홈 화면 -> 질문 화면 -> 결과 화면
- 진행률 바, 이전 버튼, 재시작 버튼
- 영화제 문맥의 8개 질문
- 2개 결과 타입(`C`, `P`)과 맞춤 팁
- 결과 화면 인스타그램 바로가기 버튼 (`@jbs_jeonjin.zip`)
- 스토리 공유용 결과 이미지 생성/공유(Web Share API, 미지원 시 다운로드 폴백)

## 다음 단계 제안

- 결과 공유 이미지(캡처 카드) 생성
- 영화제 브랜딩 컬러/로고 반영
- 설문 결과 수집 API 연동
