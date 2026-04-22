const questions = [
  {
    id: 1,
    title: '영화제 티켓을 예매할 때 나는?',
    answers: [
      { text: '오픈과 동시에 예매! 보고 싶은 작품은 무조건 선점', type: 'P' },
      { text: '여유롭게 현장에서 사거나 취소표 노림', type: 'C' },
      { text: '지인과 함께 볼 작품 먼저 맞추고 예매', type: 'C' },
      { text: '평점·리뷰 꼼꼼히 보고 신중하게 결정', type: 'P' },
    ],
  },
  {
    id: 2,
    title: '영화제 기간, 하루 몇 편을 볼 계획인가요?',
    answers: [
      { text: '1편! 여유롭게 제대로 즐기기', type: 'P' },
      { text: '2~3편, 적당히 알차게', type: 'P' },
      { text: '4편 이상! 영화제는 몰아보는 맛', type: 'C' },
      { text: '그날그날 기분에 따라 달라요', type: 'C' },
    ],
  },
  {
    id: 3,
    title: '영화 관람 후 나의 행동은?',
    answers: [
      { text: '바로 SNS에 후기 올리기', type: 'C' },
      { text: '혼자 여운 느끼며 조용히 있기', type: 'P' },
      { text: '친구들과 카페에서 영화 얘기 나누기', type: 'C' },
      { text: '감독·배우 정보 찾아보며 분석하기', type: 'P' },
    ],
  },
  {
    id: 4,
    title: '영화제 굿즈숍 앞에 섰을 때 나는?',
    answers: [
      { text: '마음에 드는 거 다 담기! 나중에 후회하면 아쉽잖아', type: 'C' },
      { text: '실용적인 것 위주로 딱 필요한 것만', type: 'P' },
      { text: '예쁜 거 하나 골라 기념으로', type: 'C' },
      { text: '구경만 하고 그냥 나옴', type: 'P' },
    ],
  },
  {
    id: 5,
    title: '영화제 식사 계획은?',
    answers: [
      { text: '맛집 리스트 미리 뽑아두고 정해진 곳만', type: 'P' },
      { text: '걷다가 땡기면 아무데나', type: 'C' },
      { text: '함께 온 사람들이 먹고 싶은 곳으로', type: 'C' },
      { text: '편의점 or 간단히 해결, 영화가 우선!', type: 'P' },
    ],
  },
  {
    id: 6,
    title: '영화제에서 가장 중요한 것은?',
    answers: [
      { text: '희귀한 작품, 특별 상영작을 보는 것', type: 'P' },
      { text: '좋은 사람들과 함께하는 시간', type: 'C' },
      { text: '나만의 특별한 추억과 감동', type: 'C' },
      { text: '영화감독/배우 GV 참여 등 특별 이벤트', type: 'P' },
    ],
  },
  {
    id: 7,
    title: '영화제 예산을 짤 때 나는?',
    answers: [
      { text: '티켓·굿즈·식비 항목별로 예산 설정', type: 'P' },
      { text: '대략 이 정도 쓰면 되겠지~ 하고 감으로', type: 'C' },
      { text: '특별한 경험에는 아끼지 않는 편', type: 'C' },
      { text: '가능하면 최대한 아끼는 편', type: 'P' },
    ],
  },
  {
    id: 8,
    title: '영화제 동행은 어떻게 하나요?',
    answers: [
      { text: '혼자가 편해! 내 페이스대로', type: 'P' },
      { text: '친한 친구 1~2명과 함께', type: 'C' },
      { text: '영화 좋아하는 사람들 많이 모아서 단체로', type: 'C' },
      { text: '그때그때 달라요, 혼자도 단체도 다 OK', type: 'P' },
    ],
  },
  {
    id: 9,
    title: '영화제 기간 숙소/이동 계획은?',
    answers: [
      { text: '미리 숙소 예약하고 교통 루트도 다 짜둠', type: 'P' },
      { text: '당일치기! 교통편만 체크', type: 'C' },
      { text: '즉흥적으로! 되면 되는 거지', type: 'C' },
      { text: '같이 가는 친구한테 다 맡김', type: 'P' },
    ],
  },
  {
    id: 10,
    title: '영화제가 끝난 뒤 나는?',
    answers: [
      { text: '관람 기록 정리하고 포스터·티켓 보관', type: 'P' },
      { text: '이미 다음 영화제 기대 중', type: 'C' },
      { text: '여운이 길게 남아서 한동안 그 생각만', type: 'P' },
      { text: 'SNS에 후기 올리고 친구들에게 추천', type: 'C' },
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
  questionLabel: document.getElementById('question-label'),
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
  ui.questionLabel.textContent = `Q${state.step + 1}`;
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
  const tipIcons = ['▹', '♡', '▣'];
  ui.resultTips.innerHTML = `
    <h3>${data.tipsTitle || '나에게 맞는 영화제 꿀팁'}</h3>
    <ul>
      ${data.tips
        .map(
          (tip, index) => `
            <li>
              <span class="tip-icon">${tipIcons[index] || '•'}</span>
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
