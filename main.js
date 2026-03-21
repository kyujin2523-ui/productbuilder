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
