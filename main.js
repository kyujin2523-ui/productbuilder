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
    <input type="text" class="player-input" placeholder="이름 입력" />
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
    <input type="text" class="result-input" placeholder="결과 입력" />
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

  if (players.length < 2) return showToast('참가자를 2명 이상 입력해주세요.');
  if (results.length < 2) return showToast('결과를 2명 이상 입력해주세요.');

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
