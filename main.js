/* ── i18n ── */
const LANGS = {
  ko: {
    title: '사다리 타기',
    subtitle: '참가자와 결과를 입력하고 운명의 사다리를 타보세요',
    players: '참가자', results: '결과',
    playerPlaceholder: '이름 입력', resultPlaceholder: '결과 입력',
    addPlayer: '참가자 추가', addResult: '결과 추가',
    startBtn: '사다리 생성하기', resetBtn: '↩ 다시 설정',
    hint: '참가자 이름을 클릭하면 개별 결과를 확인할 수 있어요',
    runAll: '✨ 전체 결과 보기', finalResult: '🏆 최종 결과',
    toastPlayers: '참가자를 2명 이상 입력해주세요.',
    toastResults: '결과를 2명 이상 입력해주세요.',
    comments: '💬 댓글',
    siteName: '사다리 타기',
    navHowTo: '사용법', navFaq: 'FAQ', navPrivacy: '개인정보처리방침', navContact: '문의하기',
    howToTitle: '📖 사용 방법',
    step1Title: '참가자 입력', step1Desc: '왼쪽 칸에 참가자 이름을 입력하세요. ＋ 참가자 추가 버튼으로 인원을 늘릴 수 있어요.',
    step2Title: '결과 입력', step2Desc: '오른쪽 칸에 결과(당번, 메뉴, 상품 등)를 입력하세요. 참가자 수만큼 입력하면 됩니다.',
    step3Title: '사다리 생성', step3Desc: '사다리 생성하기 버튼을 누르면 랜덤 사다리가 자동으로 만들어집니다.',
    step4Title: '결과 확인', step4Desc: '참가자 이름을 클릭하면 개별 경로가 애니메이션으로 표시되고, 전체 결과 보기로 한 번에 확인할 수 있어요.',
    useCaseTitle: '💡 이런 상황에 활용하세요',
    useCase1: '회식 메뉴 정하기', useCase2: '청소 당번 정하기', useCase3: '팀 나누기',
    useCase4: '선물 교환 파트너', useCase5: '발표 순서 정하기', useCase6: '게임 캐릭터 배정',
    faqTitle: '❓ 자주 묻는 질문',
    faq1Q: '사다리 결과는 정말 랜덤인가요?', faq1A: '네, 사다리의 가로선은 매번 새롭게 랜덤으로 생성됩니다. 같은 참가자와 결과를 입력해도 사다리를 새로 생성할 때마다 결과가 달라집니다.',
    faq2Q: '참가자 수에 제한이 있나요?', faq2A: '제한은 없지만, 화면 크기를 고려해 2~10명 정도에서 가장 잘 보입니다. 스마트폰에서는 가로 스크롤로 확인할 수 있어요.',
    faq3Q: '참가자 수와 결과 수가 다르면 어떻게 되나요?', faq3A: "결과가 부족할 경우 자동으로 '?'로 채워집니다. 결과가 더 많을 경우 참가자 수에 맞게 잘립니다.",
    faq4Q: '모바일에서도 사용할 수 있나요?', faq4A: '네, 모바일 환경에 최적화되어 있습니다. 스마트폰, 태블릿 모두에서 편리하게 사용할 수 있어요.',
    font: "'Noto Sans KR', sans-serif", htmlLang: 'ko',
  },
  en: {
    title: 'Ladder Game',
    subtitle: 'Enter players and prizes, then ride the ladder of fate!',
    players: 'Players', results: 'Prizes',
    playerPlaceholder: 'Enter name', resultPlaceholder: 'Enter prize',
    addPlayer: 'Add Player', addResult: 'Add Prize',
    startBtn: 'Generate Ladder', resetBtn: '↩ Reset',
    hint: 'Click a player name to reveal their result individually',
    runAll: '✨ Reveal All', finalResult: '🏆 Final Results',
    toastPlayers: 'Please enter at least 2 players.',
    toastResults: 'Please enter at least 2 prizes.',
    comments: '💬 Comments',
    siteName: 'Ladder Game',
    navHowTo: 'How to Use', navFaq: 'FAQ', navPrivacy: 'Privacy Policy', navContact: 'Contact',
    howToTitle: '📖 How to Use',
    step1Title: 'Enter Players', step1Desc: 'Enter participant names on the left. Click ＋ Add Player to add more.',
    step2Title: 'Enter Results', step2Desc: 'Enter the prizes or outcomes on the right. Match the number of players.',
    step3Title: 'Generate Ladder', step3Desc: 'Click Generate Ladder and a random ladder will be created automatically.',
    step4Title: 'See Results', step4Desc: 'Click a player name to animate their path, or click Reveal All to show everyone at once.',
    useCaseTitle: '💡 Perfect For',
    useCase1: 'Choosing lunch spots', useCase2: 'Assigning chores', useCase3: 'Team selection',
    useCase4: 'Gift exchange partners', useCase5: 'Presentation order', useCase6: 'Game character assignment',
    faqTitle: '❓ FAQ',
    faq1Q: 'Are results truly random?', faq1A: 'Yes! Horizontal bridges are randomly generated each time. Even with the same players and prizes, every new ladder gives different results.',
    faq2Q: 'Is there a player limit?', faq2A: 'No hard limit, but 2–10 players works best visually. On mobile, scroll horizontally for larger groups.',
    faq3Q: 'What if player and result counts differ?', faq3A: "If results are fewer than players, missing ones are filled with '?'. Extra results are trimmed to match player count.",
    faq4Q: 'Does it work on mobile?', faq4A: 'Yes! The site is fully optimized for smartphones and tablets.',
    font: "'Segoe UI', sans-serif", htmlLang: 'en',
  },
  zh: {
    title: '抽签游戏',
    subtitle: '输入参与者和奖项，开始命运之旅！',
    players: '参与者', results: '奖项',
    playerPlaceholder: '输入姓名', resultPlaceholder: '输入奖项',
    addPlayer: '添加参与者', addResult: '添加奖项',
    startBtn: '生成阶梯', resetBtn: '↩ 重置',
    hint: '点击参与者名字可单独查看结果',
    runAll: '✨ 查看全部结果', finalResult: '🏆 最终结果',
    toastPlayers: '请输入至少2名参与者。',
    toastResults: '请输入至少2个奖项。',
    comments: '💬 评论',
    siteName: '抽签游戏',
    navHowTo: '使用方法', navFaq: '常见问题', navPrivacy: '隐私政策', navContact: '联系我们',
    howToTitle: '📖 使用方法',
    step1Title: '输入参与者', step1Desc: '在左侧输入参与者姓名，点击 ＋ 添加参与者 来增加人数。',
    step2Title: '输入奖项', step2Desc: '在右侧输入奖项或结果，数量与参与者一致即可。',
    step3Title: '生成阶梯', step3Desc: '点击生成阶梯按钮，系统将自动随机生成阶梯图。',
    step4Title: '查看结果', step4Desc: '点击参与者姓名可动态展示路径，或点击查看全部结果一次性显示所有结果。',
    useCaseTitle: '💡 适用场景',
    useCase1: '决定午餐地点', useCase2: '分配值日任务', useCase3: '分组',
    useCase4: '礼物交换搭档', useCase5: '决定发言顺序', useCase6: '游戏角色分配',
    faqTitle: '❓ 常见问题',
    faq1Q: '结果真的是随机的吗？', faq1A: '是的！每次生成时横桥都会随机变化，即使输入相同的参与者和奖项，每次结果也会不同。',
    faq2Q: '参与者人数有限制吗？', faq2A: '没有硬性限制，但2~10人时显示效果最佳。人数较多时可在手机上横向滚动查看。',
    faq3Q: '参与者和奖项数量不一致怎么办？', faq3A: "奖项不足时自动用'?'补充，奖项过多时按参与者数量截取。",
    faq4Q: '支持手机使用吗？', faq4A: '支持！本站已针对智能手机和平板电脑进行了优化。',
    font: "'Noto Sans SC', sans-serif", htmlLang: 'zh',
  },
  ja: {
    title: 'あみだくじ',
    subtitle: '参加者と結果を入力して、運命のはしごを引こう！',
    players: '参加者', results: '結果',
    playerPlaceholder: '名前を入力', resultPlaceholder: '結果を入力',
    addPlayer: '参加者を追加', addResult: '結果を追加',
    startBtn: 'はしごを生成', resetBtn: '↩ 設定に戻る',
    hint: '参加者の名前をクリックして個別に結果を確認できます',
    runAll: '✨ 全結果を表示', finalResult: '🏆 最終結果',
    toastPlayers: '参加者を2名以上入力してください。',
    toastResults: '結果を2件以上入力してください。',
    comments: '💬 コメント',
    siteName: 'あみだくじ',
    navHowTo: '使い方', navFaq: 'よくある質問', navPrivacy: 'プライバシーポリシー', navContact: 'お問い合わせ',
    howToTitle: '📖 使い方',
    step1Title: '参加者を入力', step1Desc: '左側に参加者の名前を入力してください。＋ 参加者を追加 ボタンで人数を増やせます。',
    step2Title: '結果を入力', step2Desc: '右側に結果（当番、メニュー、賞品など）を入力してください。参加者の数に合わせて入力します。',
    step3Title: 'はしごを生成', step3Desc: 'はしごを生成ボタンを押すと、ランダムなはしごが自動的に作られます。',
    step4Title: '結果を確認', step4Desc: '参加者名をクリックすると個別の経路がアニメーションで表示されます。全結果を表示で一括確認もできます。',
    useCaseTitle: '💡 活用シーン',
    useCase1: 'ランチの場所決め', useCase2: '掃除当番決め', useCase3: 'チーム分け',
    useCase4: 'プレゼント交換', useCase5: '発表順の決定', useCase6: 'ゲームキャラクター割り当て',
    faqTitle: '❓ よくある質問',
    faq1Q: '結果は本当にランダムですか？', faq1A: 'はい！横棒は毎回ランダムに生成されます。同じ参加者と結果を入力しても、生成するたびに異なる結果になります。',
    faq2Q: '参加者数に制限はありますか？', faq2A: '制限はありませんが、2〜10人程度が最も見やすいです。人数が多い場合はスマートフォンで横スクロールして確認できます。',
    faq3Q: '参加者数と結果数が異なる場合は？', faq3A: "結果が少ない場合は自動的に「?」で補完されます。結果が多い場合は参加者数に合わせて切り取られます。",
    faq4Q: 'スマートフォンでも使えますか？', faq4A: 'はい！スマートフォンやタブレットに最適化されています。',
    font: "'Noto Sans JP', sans-serif", htmlLang: 'ja',
  },
};

let currentLang = 'ko';

function setLang(lang) {
  currentLang = lang;
  const t = LANGS[lang];
  document.documentElement.lang = t.htmlLang;
  document.body.style.fontFamily = t.font;

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // page title
  document.title = t.title;

  // active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('ladder-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ladder-lang') || 'ko';
  setLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});

const COLORS = [
  'linear-gradient(135deg,#667eea,#764ba2)',
  'linear-gradient(135deg,#f5576c,#f093fb)',
  'linear-gradient(135deg,#4facfe,#00f2fe)',
  'linear-gradient(135deg,#43e97b,#38f9d7)',
  'linear-gradient(135deg,#fa709a,#fee140)',
  'linear-gradient(135deg,#a18cd1,#fbc2eb)',
  'linear-gradient(135deg,#fccb90,#d57eeb)',
  'linear-gradient(135deg,#84fab0,#8fd3f4)',
];
const STROKE_COLORS = ['#667eea','#f5576c','#4facfe','#43e97b','#fa709a','#a18cd1','#fccb90','#84fab0'];

const LINE_COLOR   = '#ddd6fe';
const BRIDGE_COLOR = '#c4b5f4';
let PADDING_X = 60, PADDING_Y = 10;
let ROWS = 12;
let players = [], results = [], bridges = [];
let colX = [], rowY = [];
let canvasW, canvasH;
let animating = false;
let revealedPaths = [];

/* ── Input helpers ── */
function updateCounts() {
  document.getElementById('player-count').textContent =
    document.querySelectorAll('.player-input').length;
  document.getElementById('result-count').textContent =
    document.querySelectorAll('.result-input').length;
}

function renumberRows(listId, numClass) {
  document.querySelectorAll(`#${listId} .${numClass}`).forEach((el, i) => {
    el.textContent = i + 1;
  });
}

function addPlayer() {
  const list = document.getElementById('players-input');
  const n = list.children.length + 1;
  const div = document.createElement('div');
  div.className = 'input-row';
  div.innerHTML = `
    <span class="row-num">${n}</span>
    <input type="text" class="player-input" data-i18n-placeholder="playerPlaceholder" placeholder="${LANGS[currentLang].playerPlaceholder}" />
    <button class="remove-btn" onclick="removeRow(this,'player')">✕</button>`;
  list.appendChild(div);
  div.querySelector('input').focus();
  updateCounts();
}

function addResult() {
  const list = document.getElementById('results-input');
  const n = list.children.length + 1;
  const div = document.createElement('div');
  div.className = 'input-row';
  div.innerHTML = `
    <span class="row-num result-num">${n}</span>
    <input type="text" class="result-input" data-i18n-placeholder="resultPlaceholder" placeholder="${LANGS[currentLang].resultPlaceholder}" />
    <button class="remove-btn" onclick="removeRow(this,'result')">✕</button>`;
  list.appendChild(div);
  div.querySelector('input').focus();
  updateCounts();
}

function removeRow(btn, type) {
  btn.parentElement.remove();
  if (type === 'player') renumberRows('players-input', 'row-num');
  else renumberRows('results-input', 'result-num');
  updateCounts();
}

/* ── Game start ── */
function startGame() {
  players = [...document.querySelectorAll('.player-input')].map(i => i.value.trim()).filter(Boolean);
  results = [...document.querySelectorAll('.result-input')].map(i => i.value.trim()).filter(Boolean);

  if (players.length < 2) return showToast(LANGS[currentLang].toastPlayers);
  if (results.length < 2) return showToast(LANGS[currentLang].toastResults);

  while (results.length < players.length) results.push('?');
  results = results.slice(0, players.length);

  revealedPaths = [];
  generateLadder();
  buildLabels();

  document.getElementById('setup').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  document.getElementById('results-display').classList.add('hidden');
  document.getElementById('results-list').innerHTML = '';

  requestAnimationFrame(() => drawLadder());
}

function resetGame() {
  document.getElementById('setup').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden');
}

/* ── Ladder logic ── */
function generateLadder() {
  const cols = players.length;
  ROWS = Math.max(10, cols * 3);
  bridges = Array.from({ length: cols - 1 }, () => []);
  for (let row = 0; row < ROWS; row++) {
    let col = 0;
    while (col < cols - 1) {
      if (Math.random() < 0.38 && (col === 0 || !bridges[col - 1].includes(row))) {
        bridges[col].push(row);
        col += 2;
      } else col++;
    }
  }
}

function tracePath(startCol) {
  let col = startCol;
  const path = [{ col, row: 0 }];
  for (let row = 0; row < ROWS - 1; row++) {
    if (col < players.length - 1 && bridges[col].includes(row)) col++;
    else if (col > 0 && bridges[col - 1].includes(row)) col--;
    path.push({ col, row: row + 1 });
  }
  return path;
}

/* ── Canvas ── */
function getCanvasSize() {
  const wrapper = document.querySelector('.ladder-wrapper');
  const cols = players.length;
  canvasW = Math.max(cols * 90 + PADDING_X * 2, wrapper.clientWidth - 4);
  canvasH = 380;
}

function computeGrid() {
  const cols = players.length;
  const colSpacing = (canvasW - PADDING_X * 2) / (cols - 1);
  colX = Array.from({ length: cols }, (_, i) => PADDING_X + i * colSpacing);
  const rowSpacing = (canvasH - PADDING_Y * 2) / (ROWS - 1);
  rowY = Array.from({ length: ROWS }, (_, i) => PADDING_Y + i * rowSpacing);
}

function drawLadder(highlights) {
  getCanvasSize();
  const canvas = document.getElementById('ladder-canvas');
  canvas.width  = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvasW, canvasH);
  computeGrid();

  // vertical lines
  const cols = players.length;
  for (let c = 0; c < cols; c++) {
    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(colX[c], rowY[0]);
    ctx.lineTo(colX[c], rowY[ROWS - 1]);
    ctx.stroke();
  }

  // bridges
  for (let c = 0; c < cols - 1; c++) {
    bridges[c].forEach(row => {
      ctx.strokeStyle = BRIDGE_COLOR;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(colX[c], rowY[row]);
      ctx.lineTo(colX[c + 1], rowY[row]);
      ctx.stroke();
    });
  }

  // highlight paths
  if (highlights) highlights.forEach(({ path, color }) => renderPath(ctx, path, color));

  syncLabels();
}

function renderPath(ctx, path, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  path.forEach((pt, i) => {
    const x = colX[pt.col], y = rowY[pt.row];
    if (i === 0) { ctx.moveTo(x, y); return; }
    const prev = path[i - 1];
    if (prev.col !== pt.col) {
      ctx.lineTo(colX[prev.col], rowY[pt.row]);
    }
    ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.restore();
}

/* ── Labels ── */
function buildLabels() {
  const playerDiv = document.getElementById('player-labels');
  const resultDiv = document.getElementById('result-labels');
  playerDiv.innerHTML = '';
  resultDiv.innerHTML = '';

  players.forEach((name, i) => {
    const item = document.createElement('div');
    item.className = 'label-item';
    item.id = `player-label-${i}`;
    item.innerHTML = `<div class="label-chip" style="background:${COLORS[i % COLORS.length]}">${name}</div>`;
    item.onclick = () => runPlayer(i);
    playerDiv.appendChild(item);
  });

  results.forEach((res, i) => {
    const item = document.createElement('div');
    item.className = 'label-item';
    item.id = `result-label-${i}`;
    item.innerHTML = `<div class="result-chip">${res}</div>`;
    resultDiv.appendChild(item);
  });
}

function syncLabels() {
  const playerLabels = document.getElementById('player-labels');
  const resultLabels = document.getElementById('result-labels');
  playerLabels.style.width = canvasW + 'px';
  resultLabels.style.width = canvasW + 'px';

  playerLabels.querySelectorAll('.label-item').forEach((item, i) => {
    item.style.left = colX[i] + 'px';
    item.style.top  = '4px';
  });
  resultLabels.querySelectorAll('.label-item').forEach((item, i) => {
    item.style.left = colX[i] + 'px';
    item.style.top  = '4px';
  });
}

/* ── Animation ── */
function animatePath(path, color, onDone) {
  const ctx = document.getElementById('ladder-canvas').getContext('2d');
  let step = 0;
  function frame() {
    drawLadder(revealedPaths.map(pi => ({
      path: tracePath(pi),
      color: STROKE_COLORS[pi % STROKE_COLORS.length] + '99'
    })));
    renderPath(ctx, path.slice(0, step + 1), color);
    if (step < path.length - 1) { step++; setTimeout(frame, 28); }
    else if (onDone) onDone();
  }
  frame();
}

function runPlayer(playerIdx) {
  if (animating || revealedPaths.includes(playerIdx)) return;
  animating = true;
  const path  = tracePath(playerIdx);
  const color = STROKE_COLORS[playerIdx % STROKE_COLORS.length];
  animatePath(path, color, () => {
    revealedPaths.push(playerIdx);
    animating = false;
    const endCol = path[path.length - 1].col;
    document.getElementById(`result-label-${endCol}`)?.classList.add('revealed');
    addResultRow(players[playerIdx], results[endCol], playerIdx);
  });
}

function runAll() {
  if (animating) return;
  const remaining = players.map((_, i) => i).filter(i => !revealedPaths.includes(i));
  if (!remaining.length) return;
  function next(idx) {
    if (idx >= remaining.length) return;
    const pi = remaining[idx];
    animating = true;
    const path  = tracePath(pi);
    const color = STROKE_COLORS[pi % STROKE_COLORS.length];
    animatePath(path, color, () => {
      revealedPaths.push(pi);
      animating = false;
      const endCol = path[path.length - 1].col;
      document.getElementById(`result-label-${endCol}`)?.classList.add('revealed');
      addResultRow(players[pi], results[endCol], pi);
      setTimeout(() => next(idx + 1), 250);
    });
  }
  next(0);
}

function addResultRow(name, prize, playerIdx) {
  const display = document.getElementById('results-display');
  display.classList.remove('hidden');

  const color = STROKE_COLORS[playerIdx % STROKE_COLORS.length];
  const bg    = COLORS[playerIdx % COLORS.length];
  const row   = document.createElement('div');
  row.className = 'result-row';
  row.style.animationDelay = (revealedPaths.length * 0.05) + 's';
  row.innerHTML = `
    <span class="player-chip" style="background:${bg}">${name}</span>
    <span class="arrow-icon">▶</span>
    <span class="prize-text">${prize}</span>`;
  document.getElementById('results-list').appendChild(row);
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'30px', left:'50%', transform:'translateX(-50%)',
    background:'#333', color:'#fff', padding:'12px 24px', borderRadius:'12px',
    fontSize:'0.9rem', fontFamily:'inherit', zIndex:'9999',
    animation:'fadeIn 0.3s ease', boxShadow:'0 4px 20px rgba(0,0,0,0.2)'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}
