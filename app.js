const questions = [
  {
    id: 1,
    title: '영화제 첫날, 가장 먼저 결제하고 싶은 것은?',
    answers: [
      { text: '보고 싶던 GV 상영작부터 예매한다', type: 'C' },
      { text: '일단 패스/패키지부터 계산해서 가장 이득인 조합을 고른다', type: 'P' },
    ],
  },
  {
    id: 2,
    title: '영화제 굿즈를 보면 나는?',
    answers: [
      { text: '한정판이면 고민 없이 장바구니에 담는다', type: 'C' },
      { text: '진짜 자주 쓸 것만 고르고 예산을 지킨다', type: 'P' },
    ],
  },
  {
    id: 3,
    title: '상영 사이 공백 시간 1시간이 생겼다.',
    answers: [
      { text: '근처 카페에서 영화 이야기하며 여유를 즐긴다', type: 'C' },
      { text: '다음 동선 체크하고 이동 시간을 최소화한다', type: 'P' },
    ],
  },
  {
    id: 4,
    title: '예산보다 지출이 조금 초과됐다면?',
    answers: [
      { text: '영화제 기간만큼은 경험이 우선이라고 생각한다', type: 'C' },
      { text: '남은 일정은 즉시 조정해 총액을 맞춘다', type: 'P' },
    ],
  },
  {
    id: 5,
    title: '숙소를 고를 때 더 중요한 기준은?',
    answers: [
      { text: '분위기 좋은 감성 숙소와 편안함', type: 'C' },
      { text: '상영관 접근성과 실속 있는 가격', type: 'P' },
    ],
  },
  {
    id: 6,
    title: '보고 싶은 작품이 매진이라면?',
    answers: [
      { text: '현장 취소표/추가 상영을 끝까지 노려본다', type: 'C' },
      { text: '바로 플랜 B 작품으로 스케줄을 재정비한다', type: 'P' },
    ],
  },
  {
    id: 7,
    title: '영화제 음식 소비 스타일은?',
    answers: [
      { text: '지역 맛집 탐방도 영화제의 중요한 즐거움이다', type: 'C' },
      { text: '간단히 해결하고 티켓/이동 비용에 더 투자한다', type: 'P' },
    ],
  },
  {
    id: 8,
    title: '행사 마지막 날, 남은 예산이 있다면?',
    answers: [
      { text: '기념 굿즈나 추가 관람에 시원하게 쓴다', type: 'C' },
      { text: '남은 금액은 다음 영화제 준비 자금으로 남긴다', type: 'P' },
    ],
  },
  {
    id: 9,
    title: '현장 이벤트 부스에서 한정 혜택을 봤을 때 나는?',
    answers: [
      { text: '지금 아니면 못 받으니 바로 참여한다', type: 'C' },
      { text: '조건과 실제 혜택을 먼저 확인하고 결정한다', type: 'P' },
    ],
  },
  {
    id: 10,
    title: '영화제 마지막 저녁, 추가로 한 편 더 볼 기회가 생겼다.',
    answers: [
      { text: '체력보다 아쉬움이 크다. 한 편 더 본다', type: 'C' },
      { text: '내일 일정을 위해 여기서 마무리하고 귀가한다', type: 'P' },
    ],
  },
];

const OFFICIAL_INSTAGRAM_URL = 'https://www.instagram.com/jbsupporters_official/';
const TEAM_INSTAGRAM_URL = 'https://www.instagram.com/jbs_jeonjin.zip/';

const resultMap = {
  C: {
    title: '🎬 축제형 영화 탐험가',
    image: './assets/result-c.svg',
    imageAlt: 'C 타입 결과 대표 이미지',
    description:
      '영화제를 통해 새로운 사람들과 연결되고, 낯선 이야기에 영감을 얻는 타입!\n다양한 장르를 넘나들며 영화제의 에너지를 온몸으로 흡수합니다.\n굿즈도 충동구매 한 번쯤은 있을 걸요?',
    tipsTitle: '나에게 맞는 영화제 꿀팁',
    tips: [
      '다양한 장르 도전을 두려워하지 마세요!',
      'GV(대화 이벤트)에 적극 참여해보세요.',
      '굿즈 예산은 미리 정해두는 게 좋아요.',
    ],
  },
  P: {
    title: '🧭 전략형 영화 큐레이터',
    image: './assets/result-p.svg',
    imageAlt: 'P 타입 결과 대표 이미지',
    description:
      '관람 동선과 예산을 정확하게 세우는 타입입니다.\n한정된 시간 안에서 최대의 만족을 뽑아내는 계획형 관람자예요.\n효율과 만족을 모두 잡는 영화제 마스터에 가깝습니다.',
    tipsTitle: '나에게 맞는 영화제 꿀팁',
    tips: [
      '보고 싶은 작품은 우선순위를 3단계로 나눠보세요.',
      '상영관 이동 시간을 고려해 1일 3편 내외로 구성하세요.',
      '예산표에 식비/교통비를 분리하면 훨씬 정확해져요.',
    ],
  },
};

const ui = {
  start: document.getElementById('start-screen'),
  question: document.getElementById('question-screen'),
  result: document.getElementById('result-screen'),
  startBtn: document.getElementById('start-btn'),
  backBtn: document.getElementById('back-btn'),
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar'),
  questionTitle: document.getElementById('question-title'),
  answers: document.getElementById('answers'),
  resultVisual: document.getElementById('result-visual'),
  resultTitle: document.getElementById('result-title'),
  resultDesc: document.getElementById('result-desc'),
  resultTips: document.getElementById('result-tips'),
  officialInstagramBtn: document.getElementById('official-instagram-btn'),
  teamInstagramBtn: document.getElementById('team-instagram-btn'),
  storyShareBtn: document.getElementById('story-share-btn'),
  retryBtn: document.getElementById('retry-btn'),
};

const state = {
  step: 0,
  score: { C: 0, P: 0 },
  history: [],
  resultType: null,
};

function setScreen(target) {
  ui.start.classList.toggle('active', target === 'start');
  ui.question.classList.toggle('active', target === 'question');
  ui.result.classList.toggle('active', target === 'result');
}

function renderQuestion() {
  const q = questions[state.step];
  ui.progressText.textContent = `${state.step + 1} / ${questions.length}`;
  ui.progressBar.style.width = `${((state.step + 1) / questions.length) * 100}%`;
  ui.questionTitle.textContent = q.title;
  ui.answers.innerHTML = '';

  q.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.type));
    ui.answers.appendChild(btn);
  });
}

function selectAnswer(type) {
  state.history.push(type);
  state.score[type] += 1;

  if (state.step === questions.length - 1) {
    renderResult();
    setScreen('result');
    return;
  }

  state.step += 1;
  renderQuestion();
}

function goBack() {
  if (state.step === 0) {
    setScreen('start');
    return;
  }

  const previousType = state.history.pop();
  if (previousType) {
    state.score[previousType] = Math.max(0, state.score[previousType] - 1);
  }

  state.step -= 1;
  renderQuestion();
}

function renderResult() {
  const type = state.score.C >= state.score.P ? 'C' : 'P';
  const data = resultMap[type];
  state.resultType = type;

  ui.resultVisual.src = data.image;
  ui.resultVisual.alt = data.imageAlt;
  ui.resultTitle.textContent = data.title;
  ui.resultDesc.textContent = data.description;
  ui.resultTips.innerHTML = `
    <h3>${data.tipsTitle || '나에게 맞는 영화제 꿀팁'}</h3>
    <ul>
      ${data.tips
        .map(
          (tip) => `
            <li>
              <span class="tip-icon">▹</span>
              <span class="tip-text">${tip}</span>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    const { width } = ctx.measureText(testLine);
    if (width > maxWidth && line) {
      ctx.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
      return;
    }
    line = testLine;
  });
  if (line) {
    ctx.fillText(line.trim(), x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

function createResultCardBlob() {
  const resultType = state.resultType || (state.score.C >= state.score.P ? 'C' : 'P');
  const data = resultMap[resultType];
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context를 생성할 수 없습니다.');
  }

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, '#0d4cde');
  gradient.addColorStop(0.5, '#1881ff');
  gradient.addColorStop(1, '#73c5ff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  ctx.beginPath();
  ctx.arc(920, 240, 220, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(150, 1700, 240, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 44px Pretendard, sans-serif';
  ctx.fillText('전주국제영화제 X 전북은행 대학생 서포터즈', 80, 140);
  ctx.font = '800 76px Pretendard, sans-serif';
  ctx.fillText('MoneyBTI 결과', 80, 250);

  ctx.fillStyle = 'rgba(255,255,255,0.96)';
  ctx.fillRect(60, 340, 960, 1080);
  ctx.fillStyle = '#1453cf';
  ctx.font = '800 66px Pretendard, sans-serif';
  ctx.fillText(data.title, 110, 470);

  ctx.fillStyle = '#263142';
  ctx.font = '500 42px Pretendard, sans-serif';
  let y = 570;
  data.description.split('\n').forEach((line) => {
    y = wrapText(ctx, line, 110, y, 860, 62);
    y += 6;
  });

  ctx.fillStyle = '#0c3ca7';
  ctx.font = '700 48px Pretendard, sans-serif';
  ctx.fillText('추천 팁', 110, 820);

  ctx.fillStyle = '#2b3a55';
  ctx.font = '500 38px Pretendard, sans-serif';
  y = 900;
  data.tips.forEach((tip) => {
    y = wrapText(ctx, `• ${tip}`, 110, y, 860, 56);
    y += 8;
  });

  ctx.fillStyle = '#ffffff';
  ctx.font = '600 40px Pretendard, sans-serif';
  ctx.fillText('@jbsupporters_official  @jbs_jeonjin.zip', 80, 1740);
  ctx.font = '500 34px Pretendard, sans-serif';
  ctx.fillText('인스타그램에서 더 많은 현장 소식을 확인하세요', 80, 1810);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('결과 이미지를 생성하지 못했습니다.'));
        return;
      }
      resolve(blob);
    }, 'image/png');
  });
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

async function shareToInstagramStory() {
  ui.storyShareBtn.disabled = true;
  ui.storyShareBtn.textContent = '이미지 준비 중...';

  try {
    const blob = await createResultCardBlob();
    const file = new File([blob], `jiff-moneybti-${Date.now()}.png`, { type: 'image/png' });
    const shareData = {
      title: 'JIFF MoneyBTI 결과',
      text: '전주국제영화제 X 전북은행 대학생 서포터즈 MoneyBTI 결과입니다. @jbsupporters_official @jbs_jeonjin.zip',
      files: [file],
    };

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share(shareData);
      return;
    }

    downloadBlob(blob, file.name);
    window.open(TEAM_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    window.alert('현재 환경에서는 직접 공유가 제한되어 결과 이미지를 저장했습니다. 인스타 스토리에서 업로드해 주세요.');
  } catch (error) {
    const isAbort = error instanceof DOMException && error.name === 'AbortError';
    if (!isAbort) {
      window.alert('공유 중 문제가 발생했습니다. 다시 시도해 주세요.');
    }
  } finally {
    ui.storyShareBtn.disabled = false;
    ui.storyShareBtn.textContent = '인스타 스토리용 이미지 공유';
  }
}

function resetTest() {
  state.step = 0;
  state.score = { C: 0, P: 0 };
  state.history = [];
  state.resultType = null;
  renderQuestion();
  setScreen('start');
}

ui.startBtn.addEventListener('click', () => {
  state.step = 0;
  state.score = { C: 0, P: 0 };
  state.history = [];
  renderQuestion();
  setScreen('question');
});

ui.backBtn.addEventListener('click', goBack);
ui.officialInstagramBtn.addEventListener('click', () => {
  window.open(OFFICIAL_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
});
ui.teamInstagramBtn.addEventListener('click', () => {
  window.open(TEAM_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
});
ui.storyShareBtn.addEventListener('click', shareToInstagramStory);
ui.retryBtn.addEventListener('click', resetTest);
