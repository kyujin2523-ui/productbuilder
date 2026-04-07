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
    navAbout: '소개', navGuide: '활용 가이드', navTips: '추첨 팁', navFaqDetail: 'FAQ',
    navPrivacy: '개인정보처리방침', navContact: '문의하기',
    howToTitle: '📖 사용 방법',
    step1Title: '참가자 입력', step1Desc: '왼쪽 칸에 참가자 이름을 입력하세요. ＋ 참가자 추가 버튼으로 인원을 늘릴 수 있어요.',
    step2Title: '결과 입력', step2Desc: '오른쪽 칸에 결과(당번, 메뉴, 상품 등)를 입력하세요. 참가자 수만큼 입력하면 됩니다.',
    step3Title: '사다리 생성', step3Desc: '사다리 생성하기 버튼을 누르면 랜덤 사다리가 자동으로 만들어집니다.',
    step4Title: '결과 확인', step4Desc: '참가자 이름을 클릭하면 개별 경로가 애니메이션으로 표시되고, 전체 결과 보기로 한 번에 확인할 수 있어요.',
    useCaseTitle: '💡 이런 상황에 활용하세요',
    useCase1: '회식 메뉴 정하기', useCase2: '청소 당번 정하기', useCase3: '팀 나누기',
    useCase4: '선물 교환 파트너', useCase5: '발표 순서 정하기', useCase6: '게임 캐릭터 배정',
    aboutIntroTitle: '🪜 사다리 타기란?',
    aboutIntroP1: '사다리 타기는 한국에서 가장 널리 사용되는 공정한 추첨 방법 중 하나입니다. 일본에서는 \'아미다쿠지(あみだくじ)\'라고 불리며, 수백 년의 역사를 가지고 있습니다. 세로줄과 가로줄로 이루어진 사다리 구조를 통해 참가자와 결과를 무작위로 연결하는 방식입니다.',
    aboutIntroP2: '사다리 타기의 핵심 원리는 수학적 \'순열(permutation)\'에 기반합니다. 각 가로선은 인접한 두 줄의 위치를 바꾸는 \'전치(transposition)\' 역할을 하며, 이러한 전치들이 무작위로 조합되어 예측할 수 없는 결과를 만들어냅니다. 이 때문에 참가자 수가 동일하다면 어떤 결과든 동일한 확률로 배정됩니다.',
    aboutIntroP3: '디지털 사다리 타기는 종이에 그리는 것보다 훨씬 편리합니다. 가로선이 컴퓨터 난수 생성기를 통해 자동 배치되므로 사람이 의도적으로 결과를 조작할 수 없고, 참가자가 많아져도 깔끔하게 표시됩니다. 회식 메뉴 정하기, 청소 당번 배정, 팀 나누기, 발표 순서 정하기 등 일상생활의 다양한 장면에서 활용할 수 있습니다.',
    readMore: '자세히 알아보기 →',
    useCase1Desc: '팀원들의 의견이 갈릴 때 사다리 타기로 오늘의 메뉴를 정해보세요. 결과에 후보 메뉴를 입력하면 공정하게 결정됩니다.',
    useCase2Desc: '사무실이나 교실에서 청소 구역을 배정할 때 불만 없이 공평하게 나눌 수 있습니다.',
    useCase3Desc: '체육 수업, 워크숍, 게임 등에서 팀을 구성할 때 편향 없이 무작위로 팀원을 배정합니다.',
    useCase4Desc: '시크릿 산타나 선물 교환 이벤트에서 누가 누구에게 선물을 줄지 비밀스럽게 정할 수 있습니다.',
    useCase5Desc: '수업이나 회의에서 발표 순서를 정할 때 누구도 불리하지 않은 공정한 순서를 만듭니다.',
    useCase6Desc: '보드게임이나 온라인 게임에서 캐릭터, 역할, 진영을 랜덤으로 배정할 때 활용하세요.',
    guideMore: '활용 가이드 전체 보기 →',
    faqTitle: '❓ 자주 묻는 질문',
    faq1Q: '사다리 결과는 정말 랜덤인가요?', faq1A: '네, 사다리의 가로선은 매번 새롭게 랜덤으로 생성됩니다. 같은 참가자와 결과를 입력해도 사다리를 새로 생성할 때마다 결과가 달라집니다.',
    faq2Q: '참가자 수에 제한이 있나요?', faq2A: '제한은 없지만, 화면 크기를 고려해 2~10명 정도에서 가장 잘 보입니다. 스마트폰에서는 가로 스크롤로 확인할 수 있어요.',
    faq3Q: '참가자 수와 결과 수가 다르면 어떻게 되나요?', faq3A: "결과가 부족할 경우 자동으로 '?'로 채워집니다. 결과가 더 많을 경우 참가자 수에 맞게 잘립니다.",
    faq4Q: '모바일에서도 사용할 수 있나요?', faq4A: '네, 모바일 환경에 최적화되어 있습니다. 스마트폰, 태블릿 모두에서 편리하게 사용할 수 있어요.',
    faq5Q: '사다리 타기는 수학적으로 공정한가요?', faq5A: '네, 사다리 타기는 순열(permutation) 원리에 기반한 공정한 추첨 방식입니다. 충분한 수의 가로선이 무작위로 배치되면 모든 참가자가 어떤 결과든 동일한 확률로 받게 됩니다.',
    faq6Q: '입력한 데이터가 서버에 저장되나요?', faq6A: '아니요. 모든 데이터는 사용자의 브라우저에서만 처리되며 서버로 전송되거나 저장되지 않습니다. 페이지를 새로고침하면 입력 데이터가 초기화됩니다.',
    faq7Q: '같은 사다리를 다시 볼 수 있나요?', faq7A: '현재는 사다리를 저장하는 기능이 없습니다. 사다리를 새로 생성할 때마다 완전히 새로운 랜덤 사다리가 만들어집니다. 결과를 기록해두고 싶다면 스크린샷을 저장하는 것을 권장합니다.',
    faq8Q: '인터넷 연결 없이도 사용할 수 있나요?', faq8A: '사다리 생성과 결과 확인은 브라우저에서 실행되므로 페이지가 한번 로드되면 오프라인에서도 기본 기능을 사용할 수 있습니다. 다만 광고와 댓글 기능은 인터넷 연결이 필요합니다.',
    faqMore: '더 많은 질문 보기 →',
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
    navAbout: 'About', navGuide: 'Guide', navTips: 'Tips', navFaqDetail: 'FAQ',
    navPrivacy: 'Privacy Policy', navContact: 'Contact',
    howToTitle: '📖 How to Use',
    step1Title: 'Enter Players', step1Desc: 'Enter participant names on the left. Click ＋ Add Player to add more.',
    step2Title: 'Enter Results', step2Desc: 'Enter the prizes or outcomes on the right. Match the number of players.',
    step3Title: 'Generate Ladder', step3Desc: 'Click Generate Ladder and a random ladder will be created automatically.',
    step4Title: 'See Results', step4Desc: 'Click a player name to animate their path, or click Reveal All to show everyone at once.',
    useCaseTitle: '💡 Perfect For',
    useCase1: 'Choosing lunch spots', useCase2: 'Assigning chores', useCase3: 'Team selection',
    useCase4: 'Gift exchange partners', useCase5: 'Presentation order', useCase6: 'Game character assignment',
    aboutIntroTitle: '🪜 What is a Ladder Game?',
    aboutIntroP1: 'The ladder game (also known as Amidakuji in Japan) is one of the most popular fair lottery methods in Korea and Japan, with a history spanning hundreds of years. It uses a structure of vertical and horizontal lines to randomly connect participants with outcomes.',
    aboutIntroP2: 'The core principle is based on mathematical permutations. Each horizontal bridge swaps two adjacent positions (a transposition), and these random combinations of transpositions create unpredictable results. This means every participant has an equal probability of receiving any outcome.',
    aboutIntroP3: 'Digital ladder games are far more convenient than drawing on paper. Horizontal bridges are automatically placed using a computer random number generator, making it impossible to manipulate results intentionally. It works perfectly for choosing lunch spots, assigning chores, team selection, presentation order, and many more everyday scenarios.',
    readMore: 'Learn more →',
    useCase1Desc: 'When your team can\'t decide on lunch, let the ladder choose! Enter candidate restaurants as results for a fair decision.',
    useCase2Desc: 'Assign cleaning zones in the office or classroom fairly without any complaints.',
    useCase3Desc: 'Form unbiased random teams for PE class, workshops, or games.',
    useCase4Desc: 'Secretly assign gift exchange partners for Secret Santa or similar events.',
    useCase5Desc: 'Create a fair presentation order where no one feels disadvantaged.',
    useCase6Desc: 'Randomly assign characters, roles, or factions in board games or online games.',
    guideMore: 'View full guide →',
    faqTitle: '❓ FAQ',
    faq1Q: 'Are results truly random?', faq1A: 'Yes! Horizontal bridges are randomly generated each time. Even with the same players and prizes, every new ladder gives different results.',
    faq2Q: 'Is there a player limit?', faq2A: 'No hard limit, but 2–10 players works best visually. On mobile, scroll horizontally for larger groups.',
    faq3Q: 'What if player and result counts differ?', faq3A: "If results are fewer than players, missing ones are filled with '?'. Extra results are trimmed to match player count.",
    faq4Q: 'Does it work on mobile?', faq4A: 'Yes! The site is fully optimized for smartphones and tablets.',
    faq5Q: 'Is the ladder game mathematically fair?', faq5A: 'Yes, the ladder game is based on the permutation principle. When enough horizontal bridges are randomly placed, every participant has an equal chance of receiving any outcome.',
    faq6Q: 'Is my data stored on the server?', faq6A: 'No. All data is processed only in your browser and is never sent to or stored on any server. Refreshing the page resets all input data.',
    faq7Q: 'Can I view the same ladder again?', faq7A: 'Currently there is no save feature. A completely new random ladder is generated each time. If you want to keep the results, we recommend taking a screenshot.',
    faq8Q: 'Does it work offline?', faq8A: 'The ladder generation and results work in your browser, so basic features work offline once the page is loaded. However, ads and comments require an internet connection.',
    faqMore: 'View more questions →',
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
    navAbout: '介绍', navGuide: '使用指南', navTips: '抽签技巧', navFaqDetail: '常见问题',
    navPrivacy: '隐私政策', navContact: '联系我们',
    howToTitle: '📖 使用方法',
    step1Title: '输入参与者', step1Desc: '在左侧输入参与者姓名，点击 ＋ 添加参与者 来增加人数。',
    step2Title: '输入奖项', step2Desc: '在右侧输入奖项或结果，数量与参与者一致即可。',
    step3Title: '生成阶梯', step3Desc: '点击生成阶梯按钮，系统将自动随机生成阶梯图。',
    step4Title: '查看结果', step4Desc: '点击参与者姓名可动态展示路径，或点击查看全部结果一次性显示所有结果。',
    useCaseTitle: '💡 适用场景',
    useCase1: '决定午餐地点', useCase2: '分配值日任务', useCase3: '分组',
    useCase4: '礼物交换搭档', useCase5: '决定发言顺序', useCase6: '游戏角色分配',
    aboutIntroTitle: '🪜 什么是抽签游戏？',
    aboutIntroP1: '抽签游戏（日本称为"阿弥陀签"）是韩国和日本最流行的公平抽签方式之一，拥有数百年的历史。它通过纵线和横线组成的阶梯结构，将参与者和结果随机连接。',
    aboutIntroP2: '其核心原理基于数学中的"排列（permutation）"。每条横线交换相邻两条纵线的位置（即"对换"），这些随机组合的对换产生不可预测的结果。因此，每位参与者获得任何结果的概率都是相等的。',
    aboutIntroP3: '数字化抽签游戏比纸质版更加便捷。横线由计算机随机数生成器自动放置，无法人为操纵结果，且参与人数增加时仍能清晰显示。适用于决定午餐地点、分配值日、分组、决定发言顺序等多种日常场景。',
    readMore: '了解更多 →',
    useCase1Desc: '当团队无法决定午餐时，让抽签来决定！将候选餐厅输入结果即可公平决策。',
    useCase2Desc: '在办公室或教室中公平分配清洁区域，不会有人抱怨。',
    useCase3Desc: '在体育课、研讨会或游戏中组建无偏见的随机团队。',
    useCase4Desc: '在秘密圣诞老人或类似活动中秘密分配礼物交换伙伴。',
    useCase5Desc: '创建公平的发言顺序，让每个人都不会感到不利。',
    useCase6Desc: '在桌游或网络游戏中随机分配角色、职责或阵营。',
    guideMore: '查看完整指南 →',
    faqTitle: '❓ 常见问题',
    faq1Q: '结果真的是随机的吗？', faq1A: '是的！每次生成时横桥都会随机变化，即使输入相同的参与者和奖项，每次结果也会不同。',
    faq2Q: '参与者人数有限制吗？', faq2A: '没有硬性限制，但2~10人时显示效果最佳。人数较多时可在手机上横向滚动查看。',
    faq3Q: '参与者和奖项数量不一致怎么办？', faq3A: "奖项不足时自动用'?'补充，奖项过多时按参与者数量截取。",
    faq4Q: '支持手机使用吗？', faq4A: '支持！本站已针对智能手机和平板电脑进行了优化。',
    faq5Q: '抽签游戏在数学上公平吗？', faq5A: '是的，抽签游戏基于排列原理。当足够多的横线随机放置时，每位参与者获得任何结果的概率都是相等的。',
    faq6Q: '我的数据会存储在服务器上吗？', faq6A: '不会。所有数据仅在您的浏览器中处理，不会发送到或存储在任何服务器上。刷新页面将重置所有输入数据。',
    faq7Q: '可以再次查看同一个抽签吗？', faq7A: '目前没有保存功能。每次都会生成全新的随机阶梯。如果想保留结果，建议截图保存。',
    faq8Q: '离线状态下可以使用吗？', faq8A: '阶梯生成和结果查看在浏览器中运行，因此页面加载后基本功能可离线使用。但广告和评论功能需要网络连接。',
    faqMore: '查看更多问题 →',
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
    navAbout: '紹介', navGuide: '活用ガイド', navTips: '抽選のコツ', navFaqDetail: 'よくある質問',
    navPrivacy: 'プライバシーポリシー', navContact: 'お問い合わせ',
    howToTitle: '📖 使い方',
    step1Title: '参加者を入力', step1Desc: '左側に参加者の名前を入力してください。＋ 参加者を追加 ボタンで人数を増やせます。',
    step2Title: '結果を入力', step2Desc: '右側に結果（当番、メニュー、賞品など）を入力してください。参加者の数に合わせて入力します。',
    step3Title: 'はしごを生成', step3Desc: 'はしごを生成ボタンを押すと、ランダムなはしごが自動的に作られます。',
    step4Title: '結果を確認', step4Desc: '参加者名をクリックすると個別の経路がアニメーションで表示されます。全結果を表示で一括確認もできます。',
    useCaseTitle: '💡 活用シーン',
    useCase1: 'ランチの場所決め', useCase2: '掃除当番決め', useCase3: 'チーム分け',
    useCase4: 'プレゼント交換', useCase5: '発表順の決定', useCase6: 'ゲームキャラクター割り当て',
    aboutIntroTitle: '🪜 あみだくじとは？',
    aboutIntroP1: 'あみだくじは、韓国と日本で最も広く使われている公平な抽選方法の一つで、数百年の歴史を持っています。縦線と横線で構成されたはしご構造を通じて、参加者と結果をランダムに結びつける方式です。',
    aboutIntroP2: 'その核心原理は数学的な「順列（permutation）」に基づいています。各横線は隣接する2本の縦線の位置を交換する「互換（transposition）」の役割を果たし、これらのランダムな組み合わせが予測不可能な結果を生み出します。そのため、すべての参加者がどの結果も同じ確率で受け取ることになります。',
    aboutIntroP3: 'デジタルあみだくじは紙に描くよりもはるかに便利です。横線はコンピュータの乱数生成器で自動配置されるため、意図的に結果を操作することができず、参加者が増えてもきれいに表示されます。ランチの場所決め、掃除当番、チーム分け、発表順の決定など、日常の様々な場面で活用できます。',
    readMore: '詳しく見る →',
    useCase1Desc: 'チームでランチの場所が決まらない時、あみだくじで決めましょう！候補のレストランを結果に入力するだけです。',
    useCase2Desc: 'オフィスや教室で掃除エリアを不満なく公平に割り当てられます。',
    useCase3Desc: '体育の授業、ワークショップ、ゲームなどで偏りのないランダムなチームを作ります。',
    useCase4Desc: 'シークレットサンタやプレゼント交換イベントで、誰が誰に贈るかを秘密に決められます。',
    useCase5Desc: '授業や会議で、誰も不利にならない公平な発表順を作ります。',
    useCase6Desc: 'ボードゲームやオンラインゲームでキャラクター、役割、陣営をランダムに割り当てましょう。',
    guideMore: '活用ガイド全体を見る →',
    faqTitle: '❓ よくある質問',
    faq1Q: '結果は本当にランダムですか？', faq1A: 'はい！横棒は毎回ランダムに生成されます。同じ参加者と結果を入力しても、生成するたびに異なる結果になります。',
    faq2Q: '参加者数に制限はありますか？', faq2A: '制限はありませんが、2〜10人程度が最も見やすいです。人数が多い場合はスマートフォンで横スクロールして確認できます。',
    faq3Q: '参加者数と結果数が異なる場合は？', faq3A: "結果が少ない場合は自動的に「?」で補完されます。結果が多い場合は参加者数に合わせて切り取られます。",
    faq4Q: 'スマートフォンでも使えますか？', faq4A: 'はい！スマートフォンやタブレットに最適化されています。',
    faq5Q: 'あみだくじは数学的に公平ですか？', faq5A: 'はい、あみだくじは順列の原理に基づいた公平な抽選方式です。十分な数の横棒がランダムに配置されれば、すべての参加者がどの結果も同じ確率で受け取ることになります。',
    faq6Q: '入力したデータはサーバーに保存されますか？', faq6A: 'いいえ。すべてのデータはお使いのブラウザでのみ処理され、サーバーに送信・保存されることはありません。ページを更新すると入力データはリセットされます。',
    faq7Q: '同じあみだくじをもう一度見られますか？', faq7A: '現在、保存機能はありません。毎回完全に新しいランダムなはしごが生成されます。結果を残したい場合は、スクリーンショットの保存をお勧めします。',
    faq8Q: 'オフラインでも使えますか？', faq8A: 'はしごの生成と結果の確認はブラウザで動作するため、ページが一度読み込まれればオフラインでも基本機能を使えます。ただし、広告とコメント機能にはインターネット接続が必要です。',
    faqMore: 'もっと質問を見る →',
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

function detectLang() {
  // 1) 사용자가 이전에 직접 선택한 언어가 있으면 우선
  const saved = localStorage.getItem('ladder-lang');
  if (saved && LANGS[saved]) return saved;

  // 2) 브라우저 언어 자동 감지
  const browserLangs = navigator.languages || [navigator.language || 'en'];
  for (const bl of browserLangs) {
    const code = bl.toLowerCase().split('-')[0]; // "ko-KR" → "ko"
    if (LANGS[code]) return code;
  }

  // 3) 기본값: 영어
  return 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(detectLang());
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
