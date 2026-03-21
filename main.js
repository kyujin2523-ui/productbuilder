const COLORS = ['#667eea','#f5576c','#43e97b','#f093fb','#4facfe','#fa709a','#a18cd1','#fccb90'];
const LINE_COLOR = '#c4b5e8';
const BRIDGE_COLOR = '#a78bd4';
const PATH_COLOR = '#ff6b6b';

let players = [];
let results = [];
let bridges = []; // bridges[col] = array of row indices where horizontal bridge starts
let colX = [];
let rowY = [];
let ROWS = 12;
let canvasW, canvasH;
let PADDING_X = 50;
let PADDING_Y = 20;
let animating = false;
let revealedPaths = []; // which player indices have been revealed

function addPlayer() {
  const div = document.createElement('div');
  div.className = 'input-row';
  div.innerHTML = `<input type="text" class="player-input" placeholder="참가자 이름" /><button class="remove-btn" onclick="removeRow(this)">✕</button>`;
  document.getElementById('players-input').appendChild(div);
}

function addResult() {
  const div = document.createElement('div');
  div.className = 'input-row';
  div.innerHTML = `<input type="text" class="result-input" placeholder="결과 항목" /><button class="remove-btn" onclick="removeRow(this)">✕</button>`;
  document.getElementById('results-input').appendChild(div);
}

function removeRow(btn) {
  btn.parentElement.remove();
}

function startGame() {
  players = [...document.querySelectorAll('.player-input')]
    .map(i => i.value.trim()).filter(v => v);
  results = [...document.querySelectorAll('.result-input')]
    .map(i => i.value.trim()).filter(v => v);

  if (players.length < 2) return alert('참가자를 2명 이상 입력해주세요.');
  if (results.length < 2) return alert('결과를 2명 이상 입력해주세요.');

  // Align counts
  while (results.length < players.length) results.push('?');
  while (players.length < results.length) results.pop();

  revealedPaths = [];
  generateLadder();
  renderSetupLabels();
  document.getElementById('setup').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  document.getElementById('results-display').classList.add('hidden');
  document.getElementById('results-display').innerHTML = '';
  drawLadder();
}

function generateLadder() {
  const cols = players.length;
  ROWS = Math.max(10, cols * 3);
  bridges = Array.from({length: cols - 1}, () => []);

  for (let row = 0; row < ROWS; row++) {
    let col = 0;
    while (col < cols - 1) {
      if (Math.random() < 0.35) {
        // Check no adjacent bridge at same row
        if (col === 0 || !bridges[col-1].includes(row)) {
          bridges[col].push(row);
          col += 2; // skip next col to avoid overlap
          continue;
        }
      }
      col++;
    }
  }
}

function renderSetupLabels() {
  const cols = players.length;
  const playerDiv = document.getElementById('player-labels');
  const resultDiv = document.getElementById('result-labels');
  playerDiv.innerHTML = '';
  resultDiv.innerHTML = '';

  players.forEach((name, i) => {
    const item = document.createElement('div');
    item.className = 'label-item';
    item.id = `player-label-${i}`;
    item.innerHTML = `<div class="label-box" style="background:linear-gradient(135deg,${COLORS[i%COLORS.length]},${COLORS[(i+1)%COLORS.length]})">${name}</div>`;
    item.onclick = () => runPlayer(i);
    playerDiv.appendChild(item);
  });

  results.forEach((res, i) => {
    const item = document.createElement('div');
    item.className = 'label-item';
    item.id = `result-label-${i}`;
    item.innerHTML = `<div class="result-box">${res}</div>`;
    resultDiv.appendChild(item);
  });
}

function getCanvasSize() {
  const wrapper = document.querySelector('.ladder-wrapper');
  const cols = players.length;
  const minW = cols * 80 + PADDING_X * 2;
  canvasW = Math.max(minW, wrapper.clientWidth - 20);
  canvasH = 400;
}

function drawLadder(highlightPaths) {
  getCanvasSize();
  const canvas = document.getElementById('ladder-canvas');
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvasW, canvasH);

  const cols = players.length;
  const colSpacing = (canvasW - PADDING_X * 2) / (cols - 1);
  colX = Array.from({length: cols}, (_, i) => PADDING_X + i * colSpacing);
  const rowSpacing = (canvasH - PADDING_Y * 2) / (ROWS - 1);
  rowY = Array.from({length: ROWS}, (_, i) => PADDING_Y + i * rowSpacing);

  // Draw vertical lines
  ctx.lineWidth = 3;
  for (let c = 0; c < cols; c++) {
    ctx.strokeStyle = LINE_COLOR;
    ctx.beginPath();
    ctx.moveTo(colX[c], rowY[0]);
    ctx.lineTo(colX[c], rowY[ROWS-1]);
    ctx.stroke();
  }

  // Draw horizontal bridges
  ctx.lineWidth = 3;
  for (let c = 0; c < cols - 1; c++) {
    bridges[c].forEach(row => {
      ctx.strokeStyle = BRIDGE_COLOR;
      ctx.beginPath();
      ctx.moveTo(colX[c], rowY[row]);
      ctx.lineTo(colX[c+1], rowY[row]);
      ctx.stroke();
    });
  }

  // Draw highlighted paths
  if (highlightPaths) {
    highlightPaths.forEach(({path, color}) => drawPath(ctx, path, color));
  }

  // Update label positions
  syncLabelPositions();
}

function syncLabelPositions() {
  const cols = players.length;
  const playerLabels = document.getElementById('player-labels');
  const resultLabels = document.getElementById('result-labels');
  playerLabels.style.width = canvasW + 'px';
  resultLabels.style.width = canvasW + 'px';

  const labelItems = playerLabels.querySelectorAll('.label-item');
  labelItems.forEach((item, i) => {
    item.style.position = 'absolute';
    item.style.left = (colX[i] - 40) + 'px';
    item.style.width = '80px';
    item.style.textAlign = 'center';
  });

  const resultItems = resultLabels.querySelectorAll('.label-item');
  resultItems.forEach((item, i) => {
    item.style.position = 'absolute';
    item.style.left = (colX[i] - 40) + 'px';
    item.style.width = '80px';
    item.style.textAlign = 'center';
  });

  playerLabels.style.position = 'relative';
  playerLabels.style.height = '50px';
  resultLabels.style.position = 'relative';
  resultLabels.style.height = '50px';
}

function tracePath(startCol) {
  let col = startCol;
  const path = [{col, row: 0}];

  for (let row = 0; row < ROWS - 1; row++) {
    // Check if bridge goes right from col
    if (col < players.length - 1 && bridges[col].includes(row)) {
      col++;
    } else if (col > 0 && bridges[col-1].includes(row)) {
      col--;
    }
    path.push({col, row: row + 1});
  }
  return path;
}

function drawPath(ctx, path, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.shadowColor = color;
  ctx.shadowBlur = 8;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();

  path.forEach((pt, i) => {
    const x = colX[pt.col];
    const y = rowY[pt.row];
    if (i === 0) ctx.moveTo(x, y);
    else {
      const prev = path[i-1];
      if (prev.col !== pt.col) {
        // horizontal move: draw H-line at prev row level first then go down is already handled
        // path records each step separately
        ctx.lineTo(colX[prev.col], rowY[pt.row]);
        ctx.lineTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
  });
  ctx.stroke();
  ctx.restore();
}

function animatePath(path, color, onDone) {
  const canvas = document.getElementById('ladder-canvas');
  const ctx = canvas.getContext('2d');
  let step = 0;

  function frame() {
    // Redraw base ladder with all revealed paths
    drawLadder(revealedPaths.map(pi => ({path: tracePath(pi), color: COLORS[pi % COLORS.length] + 'aa'})));

    // Draw current animating path up to step
    const partial = path.slice(0, step + 1);
    drawPath(ctx, partial, color);

    if (step < path.length - 1) {
      step++;
      setTimeout(frame, 30);
    } else {
      if (onDone) onDone();
    }
  }
  frame();
}

function runPlayer(playerIdx) {
  if (animating) return;
  if (revealedPaths.includes(playerIdx)) return;

  animating = true;
  const path = tracePath(playerIdx);
  const color = COLORS[playerIdx % COLORS.length];

  animatePath(path, color, () => {
    revealedPaths.push(playerIdx);
    animating = false;

    const endCol = path[path.length - 1].col;
    // Highlight result label
    const resultItem = document.getElementById(`result-label-${endCol}`);
    if (resultItem) resultItem.classList.add('revealed');

    // Show result in list
    showResultRow(players[playerIdx], results[endCol], color);
  });
}

function runAll() {
  if (animating) return;
  const remaining = players.map((_, i) => i).filter(i => !revealedPaths.includes(i));
  if (remaining.length === 0) return;

  function runNext(idx) {
    if (idx >= remaining.length) return;
    const pi = remaining[idx];
    animating = true;
    const path = tracePath(pi);
    const color = COLORS[pi % COLORS.length];
    animatePath(path, color, () => {
      revealedPaths.push(pi);
      animating = false;
      const endCol = path[path.length - 1].col;
      const resultItem = document.getElementById(`result-label-${endCol}`);
      if (resultItem) resultItem.classList.add('revealed');
      showResultRow(players[pi], results[endCol], color);
      setTimeout(() => runNext(idx + 1), 200);
    });
  }
  runNext(0);
}

function showResultRow(name, prize, color) {
  const display = document.getElementById('results-display');
  display.classList.remove('hidden');
  if (!display.querySelector('h3')) {
    const h3 = document.createElement('h3');
    h3.textContent = '결과';
    display.prepend(h3);
  }

  const row = document.createElement('div');
  row.className = 'result-row';
  row.innerHTML = `
    <span class="name" style="color:${color}">${name}</span>
    <span class="arrow">▶</span>
    <span class="prize">${prize}</span>
  `;
  display.appendChild(row);
}

function resetGame() {
  document.getElementById('setup').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden');
}
