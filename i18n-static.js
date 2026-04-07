/* ── Lightweight i18n for static content pages ── */

const STATIC_LANGS = ['ko', 'en', 'zh', 'ja'];

function detectStaticLang() {
  const saved = localStorage.getItem('ladder-lang');
  if (saved && STATIC_LANGS.includes(saved)) return saved;
  const browserLangs = navigator.languages || [navigator.language || 'en'];
  for (const bl of browserLangs) {
    const code = bl.toLowerCase().split('-')[0];
    if (STATIC_LANGS.includes(code)) return code;
  }
  return 'en';
}

function applyStaticLang(lang) {
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'zh' ? 'zh' : lang === 'ja' ? 'ja' : 'en';

  // Show/hide language-specific content blocks
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
  });

  // Active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('ladder-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyStaticLang(detectStaticLang());
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyStaticLang(btn.dataset.lang));
  });
});
