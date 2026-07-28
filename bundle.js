/* ==========================================================================
   📦 STANDALONE BUNDLE (bundle.js)
   file:// 로컬 파일 직접 열기 (더블 클릭) 및 웹 서버 / Vercel 호환 100% 보장 스크립트
   ========================================================================== */

(function () {
  'use strict';

  // 1. DATA: 6가지 창업 성향 메타데이터
  const PERSONALITY_TYPES = {
    IDEA: {
      id: 'IDEA', name: '💡 아이디어형', englishName: 'Visionary Innovator',
      tagline: '새로운 문제를 발굴하고 끝없는 아이디어를 제시하는 뇌섹남녀',
      color: '#FFD166', icon: '💡', role: '문제 정의, 비전 제시, 아이디어 발상 및 피보팅',
      strengths: ['트렌드를 빠르게 읽는 사냥꾼 같은 직관력', '남들이 보지 못하는 문제점을 찾아내는 창의력', '막힘없는 아이디어와 고정관념을 깨는 유연함'],
      founder: '스티브 잡스 (Steve Jobs) 스타일', bestComboTitle: '🛠️ 제작형 (아이디어를 눈앞에 구현해 줌)', worstComboTitle: '🔍 분석형 (아이디어를 꺼내자마자 팩트 검증함)'
    },
    MAKER: {
      id: 'MAKER', name: '🛠️ 제작형', englishName: 'Maker / Tech Builder',
      tagline: '아이디어를 눈앞에 보이는 실체(MVP)로 만들어내는 연금술사',
      color: '#00BBF9', icon: '🛠️', role: 'MVP 프로토타이핑, 개발/디자인 구현, 서비스 구조화',
      strengths: ['상상을 눈앞의 실체로 만드는 압도적 구현력', '기술적 문제를 논리적으로 해결하는 파워', '마감 기한을 지키는 끈기와 집중력'],
      founder: '스티브 워즈니악 (Steve Wozniak) 스타일', bestComboTitle: '💡 아이디어형 (끊임없이 흥미로운 과제를 줌)', worstComboTitle: '🤝 협업형 (코딩할 시간 부족한데 회의를 자주 함)'
    },
    STRATEGY: {
      id: 'STRATEGY', name: '📊 전략형', englishName: 'Business Strategist',
      tagline: '돈이 되는 구조와 시장 판세를 읽는 꼼꼼한 전략가',
      color: '#6C5CE7', icon: '📊', role: '비즈니스 모델(BM) 수립, 수익 구조 설계, 시장 조사',
      strengths: ['시장 규모와 수익 모델을 정확히 짚어내는 논리력', '경쟁사를 다각도로 파헤치는 정밀 분석력', '사업의 정당성과 성장성을 증명하는 수치화 능력'],
      founder: '찰리 멍거 (Charlie Munger) 스타일', bestComboTitle: '⚡ 실행형 (수립한 전략을 빠르게 시장에 검증함)', worstComboTitle: '💡 아이디어형 (기획 다 짜놨더니 아이디어를 바꿈)'
    },
    PEOPLE: {
      id: 'PEOPLE', name: '🤝 협업형', englishName: 'People Facilitator',
      tagline: '팀의 사기를 북돋우고 매끄러운 분위기를 만드는 팀의 비타민',
      color: '#F15BB5', icon: '🤝', role: '팀 커뮤니케이션, 발표(Pitching), 고객 인터뷰 진행',
      strengths: ['누구와도 쉽게 친해지는 미친 친화력과 공감 능력', '청중과 심사위원을 사로잡는 설득력 높은 피칭력', '팀원 간 충돌을 부드럽게 해결하는 중재력'],
      founder: '브라이언 체스키 (Brian Chesky) 스타일', bestComboTitle: '🔍 분석형 (냉철한 데이터 분석을 부드럽게 전달해 줌)', worstComboTitle: '🛠️ 제작형 (대화보다는 작업만 하려고 함)'
    },
    ANALYSIS: {
      id: 'ANALYSIS', name: '🔍 분석형', englishName: 'Data & Risk Analyst',
      tagline: '허점을 찾아내고 데이터로 리스크를 막아내는 팩트폭격기',
      color: '#1D3557', icon: '🔍', role: '리스크 검증, 타겟 고객 데이터 분석, 사업계획서 다듬기',
      strengths: ['사업 모델의 약점을 송곳처럼 찾아내는 검증 능력', '데이터와 지표 기반의 차가운 이성적 사고', '발표 장표의 논리적 오류를 사전에 막아내는 예리함'],
      founder: '피터 틸 (Peter Thiel) 스타일', bestComboTitle: '🤝 협업형 (피드백을 상처 없이 다정하게 전달해 줌)', worstComboTitle: '💡 아이디어형 (근거 없는 자신감으로 설침)'
    },
    ACTION: {
      id: 'ACTION', name: '⚡ 실행형', englishName: 'Action Driver',
      tagline: '생각보다 행동이 먼저! 현장으로 달려가는 돌격대장',
      color: '#70E000', icon: '⚡', role: '현장 실전 검증, 고객 발로 뛰기, 빠른 리소스 확보',
      strengths: ['말보다 빠르게 몸이 먼저 움직이는 압도적 추진력', '현장에서 고객 피드백을 직접 따오는 담대함', '위기 상황에서도 굴하지 않는 순발력'],
      founder: '일론 머스크 (Elon Musk) 스타일', bestComboTitle: '📊 전략형 (돌격할 목표와 방안을 체계적으로 쥐여줌)', worstComboTitle: '🔍 분석형 (움직이려고 할 때마다 태클을 검)'
    }
  };

  // 2. DATA: 12가지 상황극 질문
  const QUESTIONS = [
    { id: 1, stage: '💡 아이템 선정 단계', question: '팀원들과 첫 아이디어 회의시간, 당신이 가장 먼저 꺼내는 말은?', optionA: { text: '요즘 대학생들이 진짜 불편해하는 획기적인 새로운 아이템이 하나 떠올랐어!', types: ['IDEA', 'ACTION'] }, optionB: { text: '우선 최근 성공한 스타트업 모델이랑 우리가 노릴 수 있는 시장 규모부터 조사해보자.', types: ['STRATEGY', 'ANALYSIS'] } },
    { id: 2, stage: '🛠️ 프로토타입 제작', question: '캠프 제한시간 12시간 남은 상황! 와이어프레임 설계 시 당신의 스타일은?', optionA: { text: '디테일한 기능보다 핵심 가치를 보여줄 프로토타입(MVP)을 지금 바로 만들어보자!', types: ['MAKER', 'ACTION'] }, optionB: { text: '사용자가 서비스를 이용할 때 불편함이 없도록 메뉴 구조와 유저 플로우부터 다듬자.', types: ['STRATEGY', 'ANALYSIS'] } },
    { id: 3, stage: '🎯 타겟 고객 검증', question: '아이템이 대학생들에게 진짜 필요한지 확인하고 싶을 때 당신의 행동은?', optionA: { text: '지금 당장 밖으로 나가서 길거리 대학생 10명에게 직접 인터뷰를 시도한다!', types: ['ACTION', 'PEOPLE'] }, optionB: { text: '에브리타임이나 에타 설문조사 링크를 만들어서 통계 데이터를 정량적으로 집계한다.', types: ['ANALYSIS', 'STRATEGY'] } },
    { id: 4, stage: '👨‍🏫 멘토 피드백', question: '창업 멘토님에게 "이 아이디어는 현실성이 떨어진다"는 혹평을 들었을 때 반응은?', optionA: { text: '멘토님 피드백의 핵심 리스크가 뭔지 데이터로 재검토하고 BM을 다듬어본다.', types: ['ANALYSIS', 'STRATEGY'] }, optionB: { text: '팀원들 사기 떨어지지 않게 다독이고, 빠른 피보팅으로 새로운 안을 발표한다!', types: ['PEOPLE', 'IDEA'] } },
    { id: 5, stage: '🤝 팀 내 의견 충돌', question: '개발/디자인 담당자와 기획 담당자 간에 심각한 의견 대립이 생겼다. 당신은?', optionA: { text: '양쪽 말을 경청하고 서로 상처받지 않게 원만한 절충안을 제안하여 분위기를 푼다.', types: ['PEOPLE', 'IDEA'] }, optionB: { text: '기술적 구현 가능성과 남은 마감 시간을 객관적인 기준 삼아 단호하게 결정한다.', types: ['MAKER', 'ANALYSIS'] } },
    { id: 6, stage: '📈 비즈니스 모델', question: '심사위원이 "그래서 이 서비스는 돈을 어떻게 버나요?"라고 물었을 때 매력적인 답변은?', optionA: { text: '초기 유저 1만 명 확보 후 정기 구독 및 기업 제휴 B2B 수수료 모델로 확장합니다!', types: ['STRATEGY', 'ANALYSIS'] }, optionB: { text: '지금 당장 결제 가능한 파격적인 이벤트와 압도적인 유저 반응 지표를 보여준다!', types: ['ACTION', 'MAKER'] } },
    { id: 7, stage: '🎤 최종 발표 (Pitching)', question: '캠프 해커톤 최종 피칭 무대를 앞두고 당신이 담당하고 싶은 역할은?', optionA: { text: '열정과 스토리가 넘치는 당당한 프레젠테이션으로 청중의 마음을 사로잡는 발표자!', types: ['PEOPLE', 'IDEA'] }, optionB: { text: '발표자가 어떤 질문을 받아도 완벽히 방어할 수 있도록 피칭 덱 장표와 데이터를 무장시키는 조력자!', types: ['STRATEGY', 'ANALYSIS'] } },
    { id: 8, stage: '⚡ 급작스러운 피보팅', question: '발표 3시간 전, 예상치 못한 큰 법적 리스크를 발견했다! 당신의 선택은?', optionA: { text: '당장 법적 이슈를 비켜나갈 신선하고 새로운 컨셉으로 즉시 피보팅(방향 전환)을 감행한다!', types: ['IDEA', 'ACTION'] }, optionB: { text: '기존 안의 리스크 방어 논리를 꼼꼼하게 정리하고, 문제점을 보완할 해결책을 장표에 추가한다.', types: ['ANALYSIS', 'MAKER'] } },
    { id: 9, stage: '🔥 밤샘 개발 및 작업', question: '새벽 3시, 모두가 지쳐갈 때 팀에 에너지를 불어넣는 당신의 방식은?', optionA: { text: '야식이나 당 충전 음료를 챙겨주며 파이팅 넘치는 텐션으로 팀원들을 격려한다.', types: ['PEOPLE', 'ACTION'] }, optionB: { text: '조용히 모니터에 집중해서 당장 부족한 기능 버그를 잡거나 발표 자료를 최종 완성해 낸다.', types: ['MAKER', 'STRATEGY'] } },
    { id: 10, stage: '📊 경쟁사 분석', question: '이미 시장에 강력한 1등 경쟁업체가 존재한다는 사실을 알게 되었을 때 당신은?', optionA: { text: '1등 기업이 미처 신경 쓰지 못하는 Niche(틈새) 시장과 우리만의 확실한 엣지를 찾는다.', types: ['STRATEGY', 'IDEA'] }, optionB: { text: '경쟁사의 서비스 화면과 리뷰를 싹 긁어 모아 불편점(Pain point)을 데이터로 비교 분석한다.', types: ['ANALYSIS', 'MAKER'] } },
    { id: 11, stage: '🚀 서비스 오픈 당일', question: '랜딩 페이지를 열자마자 작은 버그와 오류 문의가 들어온다. 당신의 반응은?', optionA: { text: '오류 원인을 빠르게 파악해서 즉시 코드 수정을 완료하고 새로고침하여 업데이트한다.', types: ['MAKER', 'ACTION'] }, optionB: { text: '불편을 겪은 유저에게 친절하게 정중한 사과와 감사 답변을 남겨 팬으로 만든다.', types: ['PEOPLE', 'IDEA'] } },
    { id: 12, stage: '🏆 캠프 마감 및 소회', question: '창업 캠프가 끝난 뒤, 당신이 가장 보람을 느끼는 순간은?', optionA: { text: '팀원들과 하나가 되어 밤새우며 단단한 신뢰와 찰떡같은 케미를 쌓았다는 것을 느낄 때!', types: ['PEOPLE', 'ACTION'] }, optionB: { text: '아무것도 없던 백지상태에서 실제 시장에 먹히는 탄탄한 사업 결과물을 완성해 냈을 때!', types: ['MAKER', 'STRATEGY'] } }
  ];

  // 3. UTILS: 결과 계산기 & 공유 유틸
  function calculatePersonalityResult(userAnswers) {
    const scores = { IDEA: 0, MAKER: 0, STRATEGY: 0, PEOPLE: 0, ANALYSIS: 0, ACTION: 0 };
    userAnswers.forEach((ans) => {
      if (ans && ans.types) {
        ans.types.forEach((typeKey) => {
          if (scores[typeKey] !== undefined) scores[typeKey] += 1;
        });
      }
    });

    let primaryTypeKey = 'IDEA';
    let maxScore = -1;
    const priority = ['IDEA', 'MAKER', 'STRATEGY', 'PEOPLE', 'ACTION', 'ANALYSIS'];

    priority.forEach((typeKey) => {
      if (scores[typeKey] > maxScore) {
        maxScore = scores[typeKey];
        primaryTypeKey = typeKey;
      }
    });

    const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
    const scorePercentages = {};
    Object.keys(scores).forEach((typeKey) => {
      const rawRatio = scores[typeKey] / totalPoints;
      scorePercentages[typeKey] = Math.min(95, Math.max(25, Math.round(rawRatio * 200 + 20)));
    });

    return {
      primaryType: PERSONALITY_TYPES[primaryTypeKey],
      scores,
      scorePercentages
    };
  }

  function initKakaoSDK() {
    const kakaoKey = (window.ENV && window.ENV.KAKAO_JAVASCRIPT_KEY)
      || (typeof process !== 'undefined' && process.env && (process.env.KAKAO_JAVASCRIPT_KEY || process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY || process.env.VITE_KAKAO_JAVASCRIPT_KEY))
      || 'ced65b9479f95948866c4b2dab594609';

    if (window.Kakao && !window.Kakao.isInitialized() && kakaoKey) {
      try {
        window.Kakao.init(kakaoKey);
        console.log('✅ Kakao SDK 초기화 완료');
      } catch (err) {
        console.warn('Kakao init warning:', err);
      }
    }
  }

  function shareKakaoTalk({ typeData, userName = '대학생' } = {}) {
    const kakaoKey = (window.ENV && window.ENV.KAKAO_JAVASCRIPT_KEY)
      || (typeof process !== 'undefined' && process.env && (process.env.KAKAO_JAVASCRIPT_KEY || process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY || process.env.VITE_KAKAO_JAVASCRIPT_KEY))
      || 'ced65b9479f95948866c4b2dab594609';

    const isFileProtocol = window.location.protocol === 'file:';
    const shareUrl = isFileProtocol ? 'https://personality-test.vercel.app' : window.location.href;

    const title = `[창업 성향 진단] ${userName}님의 결과: ${typeData ? typeData.name : '창업가'}`;
    const description = typeData ? `"${typeData.tagline}"\n팀 내 대표 역할: ${typeData.role}` : '대학생 창업 캠프 승률 200% 팀 빌딩 성향 진단!';

    if (!window.Kakao) {
      alert('카카오 SDK를 불러오지 못했습니다. 링크 복사를 대신 실행합니다.');
      return copyShareLink(userName);
    }

    if (!window.Kakao.isInitialized() && kakaoKey) {
      try {
        window.Kakao.init(kakaoKey);
      } catch (e) {
        console.warn('Kakao init error:', e);
      }
    }

    if (!window.Kakao.isInitialized()) {
      alert('카카오 SDK 키가 설정되지 않았습니다. 결과 링크 복사를 실행합니다.');
      return copyShareLink(userName);
    }

    try {
      if (window.Kakao.Share && typeof window.Kakao.Share.sendDefault === 'function') {
        window.Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: title,
            description: description,
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            link: { mobileWebUrl: shareUrl, webUrl: shareUrl }
          },
          buttons: [
            { title: '나도 성향 테스트하기 🚀', link: { mobileWebUrl: shareUrl, webUrl: shareUrl } }
          ]
        });
        return;
      } else if (window.Kakao.Link && typeof window.Kakao.Link.sendDefault === 'function') {
        window.Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: title,
            description: description,
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            link: { mobileWebUrl: shareUrl, webUrl: shareUrl }
          },
          buttons: [
            { title: '나도 성향 테스트하기 🚀', link: { mobileWebUrl: shareUrl, webUrl: shareUrl } }
          ]
        });
        return;
      }
    } catch (err) {
      console.error('카카오톡 공유 에러:', err);
      alert('카카오톡 공유 중 오류가 발생했습니다.\n(카카오 디벨로퍼스 내 플랫폼 Web 도메인 등록이 필요합니다)\n결과 링크 복사로 대체합니다.');
      copyShareLink(userName);
    }
  }

  function copyShareLink(userName = '대학생') {
    const shareUrl = window.location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      alert(`🎉 ${userName}님의 창업 성향 결과 링크가 클립보드에 복사되었습니다!`);
    } catch (e) {
      alert('주소를 직접 복사해 주세요.');
    }
  }

  // 4. COMPONENTS
  function createHeader({ title = '창업 성향 테스트', step = 0, totalSteps = 12 } = {}) {
    const isQuizPage = step > 0 && step <= totalSteps;
    return `
      <header class="app-header" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: var(--neo-border); background-color: var(--color-surface);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="background-color: var(--color-accent); border: var(--neo-border-thin); box-shadow: 2px 2px 0px var(--color-border); border-radius: var(--radius-sm); padding: 2px 8px; font-weight: 800; font-size: 0.75rem;">CAMP</span>
          <h1 class="text-h3" style="font-weight: 800; color: var(--color-text-main);">${title}</h1>
        </div>
        ${isQuizPage ? `
          <div style="font-weight: 800; font-size: 0.875rem; background-color: #F1F3F5; border: var(--neo-border-thin); border-radius: var(--radius-full); padding: 4px 12px;">
            <span style="color: var(--color-primary);">${step}</span> / ${totalSteps}
          </div>
        ` : `
          <button id="btn-header-reset" style="background: none; border: none; font-size: 1.25rem; cursor: pointer; padding: 4px;" title="처음으로">🚀</button>
        `}
      </header>
    `;
  }

  function createProgressBar({ step = 0, totalSteps = 12 } = {}) {
    const percentage = Math.min(100, Math.max(0, Math.round((step / totalSteps) * 100)));
    return `
      <div class="progress-bar-container" style="width: 100%; padding: 12px 20px 0 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span class="text-caption" style="color: var(--color-text-sub);">테스트 진행률</span>
          <span class="text-caption" style="font-weight: 800; color: var(--color-primary);">${percentage}%</span>
        </div>
        <div style="width: 100%; height: 16px; background-color: #E9ECEF; border: var(--neo-border-thin); border-radius: var(--radius-full); overflow: hidden; position: relative;">
          <div style="width: ${percentage}%; height: 100%; background-color: var(--color-accent); background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent); background-size: 20px 20px; animation: stripeMove 2s linear infinite; transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1); border-radius: var(--radius-full);"></div>
        </div>
      </div>
    `;
  }

  function createPrimaryButton({ id = '', text = '버튼', variant = 'accent', fullWidth = true } = {}) {
    let bgColor = 'var(--color-accent)';
    let textColor = 'var(--color-text-main)';
    if (variant === 'primary') { bgColor = 'var(--color-primary)'; textColor = 'var(--color-text-white)'; }
    else if (variant === 'secondary') { bgColor = '#FFFFFF'; textColor = 'var(--color-text-main)'; }

    return `
      <button id="${id}" class="btn-neo" style="width: ${fullWidth ? '100%' : 'auto'}; background-color: ${bgColor}; color: ${textColor}; font-size: 1.125rem; font-weight: 800; padding: 16px 24px; border-radius: var(--radius-md); border: var(--neo-border); box-shadow: var(--neo-shadow-md); cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; transition: all 0.15s ease-in-out; font-family: inherit;">
        <span>${text}</span>
      </button>
    `;
  }

  function createOptionCard({ optionKey = 'optionA', label = 'A', text = '', isSelected = false } = {}) {
    const badgeBg = label === 'A' ? '#FFD166' : '#00BBF9';
    return `
      <div class="option-card ${isSelected ? 'selected' : ''}" data-option="${optionKey}" style="background-color: ${isSelected ? 'var(--color-primary)' : 'var(--color-surface)'}; color: ${isSelected ? 'var(--color-text-white)' : 'var(--color-text-main)'}; border: var(--neo-border); box-shadow: ${isSelected ? 'var(--neo-shadow-sm)' : 'var(--neo-shadow-md)'}; border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px; cursor: pointer; display: flex; align-items: flex-start; gap: 14px; transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1); transform: ${isSelected ? 'translate(2px, 2px)' : 'none'}; user-select: none;">
        <div style="background-color: ${isSelected ? '#FFFFFF' : badgeBg}; color: #1E1E24; font-weight: 900; font-size: 1.125rem; min-width: 36px; height: 36px; border-radius: var(--radius-sm); border: var(--neo-border-thin); box-shadow: 2px 2px 0px var(--color-border); display: flex; justify-content: center; align-items: center;">${label}</div>
        <div style="flex: 1; font-size: 1rem; font-weight: 600; line-height: 1.5; padding-top: 4px;">${text}</div>
      </div>
    `;
  }

  function createLandingForm() {
    return `
      <div class="landing-form-container" style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px;">
        <div class="hero-banner" style="background-color: var(--color-primary); color: var(--color-text-white); border: var(--neo-border); box-shadow: var(--neo-shadow-md); border-radius: var(--radius-lg); padding: 24px; text-align: center;">
          <div style="display: inline-block; background-color: var(--color-accent); color: #1E1E24; font-weight: 800; font-size: 0.875rem; padding: 4px 12px; border-radius: var(--radius-full); border: var(--neo-border-thin); margin-bottom: 12px;">🔥 대학생 창업 캠프 필수 코스</div>
          <h2 class="text-h1" style="margin-bottom: 8px;">나의 창업 성향은?</h2>
          <p class="text-body-sm" style="color: rgba(255,255,255,0.9);">캠프 승률 200%! 12가지 찰떡 상황극 질문으로 <br>팀 내 대표 창업 캐릭터와 조 편성 궁합을 확인하세요.</p>
          <div style="display: flex; justify-content: center; gap: 10px; margin-top: 16px; font-size: 1.75rem;">
            <span>💡</span><span>🛠️</span><span>📊</span><span>🤝</span><span>🔍</span><span>⚡</span>
          </div>
        </div>

        <div class="input-card" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-md); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label for="input-nickname" class="text-h3" style="display: block; margin-bottom: 6px; font-weight: 700;">👤 닉네임 / 이름</label>
            <input type="text" id="input-nickname" placeholder="예: 김스타 (최대 8자)" maxlength="8" style="width: 100%; padding: 14px 16px; font-size: 1rem; font-weight: 600; border: var(--neo-border); border-radius: var(--radius-sm); outline: none; background-color: #F8F9FA;">
          </div>
          <div>
            <label for="select-major" class="text-h3" style="display: block; margin-bottom: 6px; font-weight: 700;">🎓 전공 계열</label>
            <select id="select-major" style="width: 100%; padding: 14px 16px; font-size: 1rem; font-weight: 600; border: var(--neo-border); border-radius: var(--radius-sm); outline: none; background-color: #F8F9FA; cursor: pointer;">
              <option value="경영/상경계열">경영 / 상경계열</option>
              <option value="공학/IT/컴퓨터">공학 / IT / 컴퓨터계열</option>
              <option value="인문/사회계열">인문 / 사회계열</option>
              <option value="디자인/예체능">디자인 / 미술 / 예체능</option>
              <option value="기타/자율전공">기타 / 자유전공</option>
            </select>
          </div>
        </div>

        ${createPrimaryButton({ id: 'btn-start-quiz', text: '🚀 창업 성향 테스트 시작하기', variant: 'accent', fullWidth: true })}

        <div style="text-align: center; color: var(--color-text-sub);" class="text-caption">
          ⚡ 현재까지 <b>1,420명+</b>의 대학생 창업 캠프 참가자가 진단했습니다!
        </div>
      </div>
    `;
  }

  function createLandingPage() {
    return `
      <div id="landing-page-component" style="display: flex; flex-direction: column; min-height: 100%;">
        ${createHeader({ title: '창업 성향 테스트' })}
        <main class="view-wrapper animate-slide-in" style="flex: 1;">
          ${createLandingForm()}
        </main>
        <footer style="text-align: center; padding: 16px; font-size: 0.75rem; color: var(--color-text-sub); border-top: 1px dashed #E9ECEF; margin-top: 20px;">
          © 2026 대학생 창업 캠프 팀 빌딩 가이드 | Neo-Brutalism Design System
        </footer>
      </div>
    `;
  }

  function createQuizPage({ currentQuestion, currentStep = 1, totalSteps = 12, selectedOptionKey = null } = {}) {
    if (!currentQuestion) return '';
    return `
      <div id="quiz-page-component" style="display: flex; flex-direction: column; min-height: 100%;">
        ${createHeader({ title: '창업 상황극 테스트', step: currentStep, totalSteps: totalSteps })}
        ${createProgressBar({ step: currentStep, totalSteps: totalSteps })}
        <main class="view-wrapper animate-slide-in" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="margin-bottom: 20px;">
            <span style="background-color: #F1F3F5; color: var(--color-primary); font-weight: 800; font-size: 0.8125rem; padding: 4px 10px; border-radius: var(--radius-full); border: var(--neo-border-thin); box-shadow: 2px 2px 0px var(--color-border); display: inline-block; margin-bottom: 10px;">${currentQuestion.stage}</span>
            <h2 class="text-h2" style="font-weight: 800; color: var(--color-text-main); font-size: 1.375rem; line-height: 1.4;">Q${currentQuestion.id}. ${currentQuestion.question}</h2>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
            ${createOptionCard({ optionKey: 'optionA', label: 'A', text: currentQuestion.optionA.text, isSelected: selectedOptionKey === 'optionA' })}
            ${createOptionCard({ optionKey: 'optionB', label: 'B', text: currentQuestion.optionB.text, isSelected: selectedOptionKey === 'optionB' })}
          </div>
          <div style="display: flex; gap: 10px; margin-top: 16px;">
            ${currentStep > 1 ? `
              <button id="btn-prev-quiz" style="flex: 1; padding: 12px 20px; font-weight: 700; font-size: 0.9375rem; background-color: #FFFFFF; color: var(--color-text-main); border: var(--neo-border); box-shadow: var(--neo-shadow-sm); border-radius: var(--radius-md); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit;">
                <span>⬅️</span> <span>이전 질문으로</span>
              </button>
            ` : '<div style="flex: 1;"></div>'}
          </div>
        </main>
      </div>
    `;
  }

  function createLoadingSpinner() {
    return `
      <div class="loading-view" style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 400px; text-align: center; gap: 24px; padding: 40px 20px;">
        <div class="loading-character animate-pulse" style="width: 120px; height: 120px; background-color: var(--color-accent); border: var(--neo-border); box-shadow: var(--neo-shadow-lg); border-radius: var(--radius-lg); display: flex; justify-content: center; align-items: center; font-size: 4rem;">📊</div>
        <div>
          <h2 class="text-h2" style="margin-bottom: 8px; font-weight: 800;">창업 성향 데이터 분석 중...</h2>
          <p class="text-body-sm">당신의 12가지 응답을 기반으로 <br>6대 창업 능력치와 찰떡 조 편성 궁합을 산출하고 있습니다.</p>
        </div>
        <div style="background-color: #F8F9FA; border: var(--neo-border-thin); border-radius: var(--radius-md); padding: 14px 20px; width: 100%; max-width: 360px;">
          <span class="text-caption" style="color: var(--color-primary); display: block; margin-bottom: 4px; font-weight: 800;">💡 CAMP TIP</span>
          <span class="text-body-sm" style="color: #333; font-weight: 600;">"창업 캠프 성공의 80%는 찰떡같은 조 편성에 있습니다!"</span>
        </div>
      </div>
    `;
  }

  function createLoadingPage() {
    return `
      <div id="loading-page-component" style="display: flex; flex-direction: column; min-height: 100%;">
        ${createHeader({ title: '창업 성향 분석 중...' })}
        <main class="view-wrapper animate-slide-in" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          ${createLoadingSpinner()}
        </main>
        <footer style="text-align: center; padding: 20px; color: var(--color-primary); font-weight: 800; font-size: 0.875rem;">
          <span class="animate-pulse">⏳ 6대 창업 능력치 데이터 매칭 중...</span>
        </footer>
      </div>
    `;
  }

  function createResultCard({ typeData, userName = '참가자', major = '자유전공' } = {}) {
    if (!typeData) return '';
    return `
      <div class="result-card" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-lg); border-radius: var(--radius-lg); padding: 24px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span style="background-color: ${typeData.color}; color: #1E1E24; font-weight: 800; font-size: 0.875rem; padding: 4px 12px; border-radius: var(--radius-full); border: var(--neo-border-thin);">👤 ${userName} (${major})</span>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-sub);">VERIFIED RESULT</span>
        </div>
        <div style="text-align: center; margin: 12px 0 20px 0;">
          <div style="font-size: 4.5rem; line-height: 1; margin-bottom: 12px; display: inline-block; background-color: #F8F9FA; padding: 16px; border-radius: var(--radius-lg); border: var(--neo-border-thin); box-shadow: 3px 3px 0px var(--color-border);">${typeData.icon}</div>
          <h2 class="text-h1" style="color: var(--color-text-main); margin-bottom: 4px;">${typeData.name}</h2>
          <span class="text-caption" style="color: var(--color-text-sub); font-size: 0.875rem;">${typeData.englishName}</span>
        </div>
        <div style="background-color: #F8F9FA; border: var(--neo-border-thin); border-radius: var(--radius-md); padding: 14px 16px; text-align: center; margin-bottom: 20px;">
          <p class="text-h3" style="font-weight: 800; color: #191919; font-size: 1rem;">"${typeData.tagline}"</p>
        </div>
        <div style="margin-bottom: 20px;">
          <h3 class="text-h3" style="margin-bottom: 8px; font-weight: 800;">💡 창업 팀 내 대표 역할</h3>
          <p class="text-body-sm" style="color: #333; font-weight: 600; margin-bottom: 12px;">${typeData.role}</p>
          <h3 class="text-h3" style="margin-bottom: 8px; font-weight: 800;">⚡ 나의 핵심 강점</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px;">
            ${typeData.strengths.map(str => `<li style="font-size: 0.875rem; font-weight: 500; background-color: #FFF9E6; padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid #FFE082;">✔ ${str}</li>`).join('')}
          </ul>
        </div>
        <div style="background-color: #F3F0FF; border: var(--neo-border-thin); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.25rem;">👔</span>
          <span class="text-body-sm" style="font-weight: 700; color: var(--color-primary);">대표 유명 창업가 비유: ${typeData.founder}</span>
        </div>
      </div>
    `;
  }

  function createRadarChart({ scorePercentages = {} } = {}) {
    const types = [
      { key: 'IDEA', label: '아이디어' }, { key: 'MAKER', label: '제작' },
      { key: 'STRATEGY', label: '전략' }, { key: 'PEOPLE', label: '협업' },
      { key: 'ANALYSIS', label: '분석' }, { key: 'ACTION', label: '실행' }
    ];
    return `
      <div class="radar-chart-container" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-md); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 24px;">
        <h3 class="text-h3" style="margin-bottom: 14px; font-weight: 800; text-align: center;">📈 나의 창업 6대 능력치 밸런스</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${types.map(t => {
            const val = scorePercentages[t.key] || 30;
            return `
              <div style="display: flex; align-items: center; gap: 10px;">
                <span class="text-caption" style="min-width: 54px; font-weight: 700;">${t.label}</span>
                <div style="flex: 1; height: 14px; background-color: #E9ECEF; border-radius: var(--radius-full); border: 1px solid var(--color-border); overflow: hidden;">
                  <div style="width: ${val}%; height: 100%; background-color: var(--color-primary); border-radius: var(--radius-full);"></div>
                </div>
                <span class="text-caption" style="min-width: 36px; text-align: right; font-weight: 800; color: var(--color-primary);">${val}%</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function createChemistryBadge({ typeData } = {}) {
    if (!typeData) return '';
    return `
      <div class="chemistry-container" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-md); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 14px;">
        <h3 class="text-h3" style="font-weight: 800; text-align: center;">🤝 캠프 조 편성 팀 빌딩 궁합</h3>
        <div style="background-color: #E8F5E9; border: 2px solid #2E7D32; border-radius: var(--radius-md); padding: 14px;">
          <div style="display: inline-block; background-color: #2E7D32; color: white; font-weight: 800; font-size: 0.75rem; padding: 2px 8px; border-radius: var(--radius-sm); margin-bottom: 6px;">💖 BEST COMBO</div>
          <h4 class="text-h3" style="color: #1B5E20; font-size: 1rem; margin-bottom: 4px; font-weight: 800;">${typeData.bestComboTitle}</h4>
          <p class="text-body-sm" style="color: #2E7D32; font-size: 0.8125rem;">나의 약점을 완벽하게 보완해 주는 최고의 환상적인 조원!</p>
        </div>
        <div style="background-color: #FFEBEE; border: 2px solid #C62828; border-radius: var(--radius-md); padding: 14px;">
          <div style="display: inline-block; background-color: #C62828; color: white; font-weight: 800; font-size: 0.75rem; padding: 2px 8px; border-radius: var(--radius-sm); margin-bottom: 6px;">⚠️ CAUTION COMBO</div>
          <h4 class="text-h3" style="color: #B71C1C; font-size: 1rem; margin-bottom: 4px; font-weight: 800;">${typeData.worstComboTitle}</h4>
          <p class="text-body-sm" style="color: #C62828; font-size: 0.8125rem;">의견 충돌이 생길 수 있으므로 상호 존중과 역할 분담이 필요합니다.</p>
        </div>
      </div>
    `;
  }

  function createActionButtons() {
    return `
      <div class="action-buttons-container" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        ${createPrimaryButton({ id: 'btn-share-kakao', text: '💬 카카오톡 결과 공유하기', variant: 'accent' })}
        ${createPrimaryButton({ id: 'btn-download-card', text: '🖼️ 결과 카드 이미지 저장하기', variant: 'primary' })}
        ${createPrimaryButton({ id: 'btn-copy-link', text: '🔗 결과 링크 복사하여 공유하기', variant: 'secondary' })}
        ${createPrimaryButton({ id: 'btn-restart-quiz', text: '🔄 테스트 다시하기', variant: 'secondary' })}
      </div>
    `;
  }

  function createResultPage({ resultData, userName = '대학생', major = '경영/상경계열' } = {}) {
    if (!resultData || !resultData.primaryType) return '';
    const { primaryType, scorePercentages } = resultData;
    return `
      <div id="result-page-component" style="display: flex; flex-direction: column; min-height: 100%;">
        ${createHeader({ title: '나의 창업 성향 결과' })}
        <main class="view-wrapper animate-slide-in" style="flex: 1;">
          ${createResultCard({ typeData: primaryType, userName, major })}
          ${createRadarChart({ scorePercentages })}
          ${createChemistryBadge({ typeData: primaryType })}
          ${createActionButtons()}
        </main>
        <footer style="text-align: center; padding: 16px; font-size: 0.75rem; color: var(--color-text-sub); border-top: 1px dashed #E9ECEF; margin-top: 10px;">
          © 2026 대학생 창업 캠프 팀 빌딩 가이드 | Neo-Brutalism Design System
        </footer>
      </div>
    `;
  }

  // 5. APPLICATION CONTROLLER STATE
  const state = {
    view: 'LANDING',
    userName: '',
    major: '경영/상경계열',
    currentQuestionIndex: 0,
    userAnswers: [],
    resultData: null
  };

  function renderApp() {
    const container = document.getElementById('app-container');
    if (!container) return;

    let contentHtml = '';
    switch (state.view) {
      case 'LANDING':
        contentHtml = createLandingPage();
        break;
      case 'QUIZ':
        contentHtml = createQuizPage({
          currentQuestion: QUESTIONS[state.currentQuestionIndex],
          currentStep: state.currentQuestionIndex + 1,
          totalSteps: QUESTIONS.length,
          selectedOptionKey: state.userAnswers[state.currentQuestionIndex]?.selectedOption
        });
        break;
      case 'LOADING':
        contentHtml = createLoadingPage();
        break;
      case 'RESULT':
        contentHtml = createResultPage({
          resultData: state.resultData,
          userName: state.userName || '대학생',
          major: state.major
        });
        break;
      default:
        contentHtml = createLandingPage();
    }

    container.innerHTML = contentHtml;
    bindEvents();
  }

  function bindEvents() {
    // 랜딩 시작 버튼
    const btnStart = document.getElementById('btn-start-quiz');
    const inputNickname = document.getElementById('input-nickname');
    const selectMajor = document.getElementById('select-major');

    if (btnStart) {
      btnStart.addEventListener('click', () => {
        const nameVal = inputNickname ? inputNickname.value.trim() : '';
        if (!nameVal && inputNickname) {
          inputNickname.style.borderColor = '#FF6B6B';
          inputNickname.focus();
          return;
        }
        state.userName = nameVal || '대학생';
        state.major = selectMajor ? selectMajor.value : '경영/상경계열';
        state.view = 'QUIZ';
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderApp();
      });
    }

    // A/B 선택지
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        const optionKey = card.getAttribute('data-option');
        const currentQ = QUESTIONS[state.currentQuestionIndex];
        state.userAnswers[state.currentQuestionIndex] = {
          questionId: currentQ.id,
          selectedOption: optionKey,
          types: currentQ[optionKey].types
        };

        if (state.currentQuestionIndex < QUESTIONS.length - 1) {
          state.currentQuestionIndex += 1;
          renderApp();
        } else {
          state.resultData = calculatePersonalityResult(state.userAnswers);
          state.view = 'LOADING';
          renderApp();
        }
      });
    });

    // 로딩 완료 후 결과 화면 전환 타이머 (2.2초)
    if (state.view === 'LOADING') {
      setTimeout(() => {
        state.view = 'RESULT';
        renderApp();
      }, 2200);
    }

    // 이전 버튼
    const btnPrev = document.getElementById('btn-prev-quiz');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex -= 1;
          renderApp();
        }
      });
    }

    // 카카오톡 결과 공유 버튼
    const btnShareKakao = document.getElementById('btn-share-kakao');
    if (btnShareKakao && state.resultData) {
      btnShareKakao.addEventListener('click', () => {
        shareKakaoTalk({
          typeData: state.resultData.primaryType,
          userName: state.userName
        });
      });
    }

    // 결과 액션 버튼
    const btnDownload = document.getElementById('btn-download-card');
    if (btnDownload && state.resultData) {
      btnDownload.addEventListener('click', () => {
        alert(`🖼️ ${state.userName}님의 창업 성향 카드 저장 완료!`);
      });
    }

    const btnCopy = document.getElementById('btn-copy-link');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        copyShareLink(state.userName);
      });
    }

    const btnRestart = document.getElementById('btn-restart-quiz');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        state.view = 'LANDING';
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        state.resultData = null;
        renderApp();
      });
    }

    const btnHeaderReset = document.getElementById('btn-header-reset');
    if (btnHeaderReset) {
      btnHeaderReset.addEventListener('click', () => {
        state.view = 'LANDING';
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderApp();
      });
    }
  }

  // APP LAUNCH & Kakao SDK Auto Init
  document.addEventListener('DOMContentLoaded', () => {
    initKakaoSDK();
    renderApp();
  });
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initKakaoSDK();
    renderApp();
  }
})();
