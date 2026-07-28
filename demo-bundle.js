/* ==========================================================================
   📦 STANDALONE DEMO BUNDLE (demo-bundle.js)
   demo.html 탐색기 더블클릭 (file://) 및 웹 서버 100% 호환 보장 스크립트
   ========================================================================== */

(function () {
  'use strict';

  const PERSONALITY_TYPES = {
    IDEA: {
      id: 'IDEA', name: '💡 아이디어형', englishName: 'Visionary Innovator',
      tagline: '새로운 문제를 발굴하고 끝없는 아이디어를 제시하는 뇌섹남녀',
      color: '#FFD166', icon: '💡', role: '문제 정의, 비전 제시, 아이디어 발상 및 피보팅',
      strengths: ['트렌드를 빠르게 읽는 사냥꾼 같은 직관력', '남들이 보지 못하는 문제점을 찾아내는 창의력', '막힘없는 아이디어와 고정관념을 깨는 유연함'],
      founder: '스티브 잡스 (Steve Jobs) 스타일', bestComboTitle: '🛠️ 제작형 (아이디어를 눈앞에 구현해 줌)', worstComboTitle: '🔍 분석형 (아이디어를 꺼내자마자 팩트 검증함)'
    }
  };

  function createHeader({ title = '창업 성향 테스트', step = 0, totalSteps = 12 } = {}) {
    const isQuizPage = step > 0 && step <= totalSteps;
    return `
      <header class="app-header" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: var(--neo-border); background-color: var(--color-surface);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="background-color: var(--color-accent); border: var(--neo-border-thin); box-shadow: 2px 2px 0px var(--color-border); border-radius: var(--radius-sm); padding: 2px 8px; font-weight: 800; font-size: 0.75rem;">CAMP</span>
          <h1 class="text-h3" style="font-weight: 800; color: var(--color-text-main);">${title}</h1>
        </div>
        ${isQuizPage ? `<div style="font-weight: 800; font-size: 0.875rem; background-color: #F1F3F5; border: var(--neo-border-thin); border-radius: var(--radius-full); padding: 4px 12px;"><span style="color: var(--color-primary);">${step}</span> / ${totalSteps}</div>` : `<button style="background: none; border: none; font-size: 1.25rem; cursor: pointer; padding: 4px;">🚀</button>`}
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
          <div style="width: ${percentage}%; height: 100%; background-color: var(--color-accent); background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent); background-size: 20px 20px; animation: stripeMove 2s linear infinite; border-radius: var(--radius-full);"></div>
        </div>
      </div>
    `;
  }

  function createPrimaryButton({ text = '버튼', variant = 'accent', fullWidth = true } = {}) {
    let bgColor = 'var(--color-accent)';
    let textColor = 'var(--color-text-main)';
    if (variant === 'primary') { bgColor = 'var(--color-primary)'; textColor = 'var(--color-text-white)'; }
    else if (variant === 'secondary') { bgColor = '#FFFFFF'; textColor = 'var(--color-text-main)'; }

    return `
      <button class="btn-neo" style="width: ${fullWidth ? '100%' : 'auto'}; background-color: ${bgColor}; color: ${textColor}; font-size: 1.125rem; font-weight: 800; padding: 16px 24px; border-radius: var(--radius-md); border: var(--neo-border); box-shadow: var(--neo-shadow-md); cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; font-family: inherit;">
        <span>${text}</span>
      </button>
    `;
  }

  function createOptionCard({ optionKey = 'optionA', label = 'A', text = '', isSelected = false } = {}) {
    const badgeBg = label === 'A' ? '#FFD166' : '#00BBF9';
    return `
      <div class="option-card ${isSelected ? 'selected' : ''}" style="background-color: ${isSelected ? 'var(--color-primary)' : 'var(--color-surface)'}; color: ${isSelected ? 'var(--color-text-white)' : 'var(--color-text-main)'}; border: var(--neo-border); box-shadow: ${isSelected ? 'var(--neo-shadow-sm)' : 'var(--neo-shadow-md)'}; border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px; cursor: pointer; display: flex; align-items: flex-start; gap: 14px;">
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
        </div>
        <div class="input-card" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-md); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 16px;">
          <div><label class="text-h3">👤 닉네임 / 이름</label><input type="text" placeholder="예: 김스타 (최대 8자)" style="width: 100%; padding: 14px; border: var(--neo-border); border-radius: var(--radius-sm); margin-top: 6px;"></div>
        </div>
        ${createPrimaryButton({ text: '🚀 창업 성향 테스트 시작하기', variant: 'accent' })}
      </div>
    `;
  }

  function createLoadingSpinner() {
    return `
      <div class="loading-view" style="text-align: center; padding: 30px;">
        <div class="loading-character animate-pulse" style="width: 90px; height: 90px; margin: 0 auto 16px; background-color: var(--color-accent); border: var(--neo-border); box-shadow: var(--neo-shadow-lg); border-radius: var(--radius-lg); display: flex; justify-content: center; align-items: center; font-size: 3rem;">📊</div>
        <h2 class="text-h2">창업 성향 데이터 분석 중...</h2>
      </div>
    `;
  }

  function createResultCard({ typeData, userName = '김스타', major = '경영/상경계열' } = {}) {
    return `
      <div class="result-card" style="background-color: var(--color-surface); border: var(--neo-border); box-shadow: var(--neo-shadow-lg); border-radius: var(--radius-lg); padding: 24px;">
        <span style="background-color: ${typeData.color}; color: #1E1E24; font-weight: 800; padding: 4px 12px; border-radius: var(--radius-full); border: var(--neo-border-thin);">👤 ${userName} (${major})</span>
        <div style="text-align: center; margin-top: 16px;">
          <div style="font-size: 4rem;">${typeData.icon}</div>
          <h2 class="text-h1">${typeData.name}</h2>
          <p class="text-body-sm" style="margin-top: 8px;">"${typeData.tagline}"</p>
        </div>
      </div>
    `;
  }

  function createRadarChart() {
    return `
      <div style="background-color: var(--color-surface); border: var(--neo-border); border-radius: var(--radius-lg); padding: 20px; text-align: center;">
        <h3 class="text-h3">📈 나의 창업 6대 능력치 밸런스</h3>
        <p class="text-caption" style="margin-top: 8px; color: var(--color-primary); font-weight: 800;">아이디어(90%) | 제작(60%) | 전략(75%) | 협업(80%) | 분석(45%) | 실행(85%)</p>
      </div>
    `;
  }

  function createChemistryBadge({ typeData } = {}) {
    return `
      <div style="background-color: var(--color-surface); border: var(--neo-border); border-radius: var(--radius-lg); padding: 20px;">
        <h3 class="text-h3" style="text-align: center; margin-bottom: 12px;">🤝 팀 빌딩 궁합</h3>
        <div style="background-color: #E8F5E9; border: 2px solid #2E7D32; border-radius: var(--radius-md); padding: 12px;">
          <b style="color: #1B5E20;">💖 BEST COMBO:</b> ${typeData.bestComboTitle}
        </div>
      </div>
    `;
  }

  function createActionButtons() {
    return `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${createPrimaryButton({ text: '🖼️ 결과 카드 이미지 저장하기', variant: 'accent' })}
        ${createPrimaryButton({ text: '🔗 결과 링크 복사하여 공유하기', variant: 'primary' })}
      </div>
    `;
  }

  function renderShowcase(category = 'all') {
    const grid = document.getElementById('demo-grid');
    if (!grid) return;

    const components = [
      { id: 'header', category: 'nav', title: '1. Header (상단 헤더)', tag: 'Header.js', html: createHeader({ title: '창업 성향 테스트', step: 3, totalSteps: 12 }) },
      { id: 'progressbar', category: 'nav', title: '2. ProgressBar (프로그레스 바)', tag: 'ProgressBar.js', html: createProgressBar({ step: 9, totalSteps: 12 }) },
      { id: 'buttons', category: 'buttons', title: '3. PrimaryButton (공통 3D 버튼)', tag: 'PrimaryButton.js', html: createPrimaryButton({ text: '🚀 Accent (Pop Yellow) CTA 버튼', variant: 'accent' }) },
      { id: 'optioncard', category: 'buttons', title: '4. OptionCard (A/B 선택지 카드)', tag: 'OptionCard.js', html: createOptionCard({ optionKey: 'optionA', label: 'A', text: '요즘 대학생들이 진짜 불편해하는 획기적인 새로운 아이템이 떠올랐어!', isSelected: true }) },
      { id: 'landingform', category: 'forms', title: '5. LandingForm (랜딩 인트로 폼)', tag: 'LandingForm.js', html: createLandingForm() },
      { id: 'loadingspinner', category: 'feedback', title: '6. LoadingSpinner (분석 대기 모션)', tag: 'LoadingSpinner.js', html: createLoadingSpinner() },
      { id: 'resultcard', category: 'result', title: '7. ResultCard (결과 캐릭터 카드)', tag: 'ResultCard.js', html: createResultCard({ typeData: PERSONALITY_TYPES.IDEA }) },
      { id: 'radarchart', category: 'result', title: '8. RadarChart (6대 능력치 그래프)', tag: 'RadarChart.js', html: createRadarChart() },
      { id: 'chemistrybadge', category: 'result', title: '9. ChemistryBadge (팀 빌딩 궁합)', tag: 'ChemistryBadge.js', html: createChemistryBadge({ typeData: PERSONALITY_TYPES.IDEA }) },
      { id: 'actionbuttons', category: 'result', title: '10. ActionButtons (결과 하단 액션 버튼)', tag: 'ActionButtons.js', html: createActionButtons() }
    ];

    const filtered = category === 'all' ? components : components.filter(c => c.category === category);

    grid.innerHTML = filtered.map(c => `
      <div class="demo-card">
        <div class="demo-card-title">
          <span>${c.title}</span>
          <span class="demo-tag">${c.tag}</span>
        </div>
        <div class="preview-box">${c.html}</div>
      </div>
    `).join('');
  }

  function initDemo() {
    renderShowcase('all');
    const filterBtns = document.querySelectorAll('.demo-tab-btn[data-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderShowcase(btn.getAttribute('data-filter'));
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initDemo);
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initDemo();
  }
})();
