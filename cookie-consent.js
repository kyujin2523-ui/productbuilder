/* ── Cookie Consent Banner ── */
(function() {
  if (localStorage.getItem('cookie-consent') === 'accepted') return;

  var texts = {
    en: {
      msg: 'This site uses cookies for advertising (Google AdSense) and to save your language preference. By continuing to use this site, you consent to the use of cookies.',
      btn: 'Accept',
      link: 'Learn more'
    },
    ko: {
      msg: '이 사이트는 광고(Google AdSense) 및 언어 설정 저장을 위해 쿠키를 사용합니다. 사이트를 계속 이용하시면 쿠키 사용에 동의하는 것으로 간주됩니다.',
      btn: '동의',
      link: '자세히 보기'
    },
    zh: {
      msg: '本网站使用Cookie用于广告（Google AdSense）和保存您的语言偏好。继续使用本网站即表示您同意使用Cookie。',
      btn: '同意',
      link: '了解更多'
    },
    ja: {
      msg: 'このサイトでは、広告（Google AdSense）および言語設定の保存のためにCookieを使用しています。サイトの利用を続けることで、Cookieの使用に同意したものとみなされます。',
      btn: '同意する',
      link: '詳細を見る'
    }
  };

  var lang = localStorage.getItem('ladder-lang') || 'en';
  var t = texts[lang] || texts.en;

  var banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.innerHTML =
    '<p>' + t.msg + ' <a href="privacy.html">' + t.link + '</a></p>' +
    '<button id="cookie-accept-btn">' + t.btn + '</button>';
  document.body.appendChild(banner);

  document.getElementById('cookie-accept-btn').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.style.display = 'none';
  });
})();
