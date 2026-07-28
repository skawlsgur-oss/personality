import { PERSONALITY_TYPES } from './data/personalityTypes.js';

import { createHeader } from './components/Header.js';
import { createProgressBar } from './components/ProgressBar.js';
import { createPrimaryButton } from './components/PrimaryButton.js';
import { createOptionCard } from './components/OptionCard.js';
import { createLandingForm } from './components/LandingForm.js';
import { createLandingPage } from './components/LandingPage.js';
import { createLoadingSpinner } from './components/LoadingSpinner.js';
import { createResultCard } from './components/ResultCard.js';
import { createRadarChart } from './components/RadarChart.js';
import { createChemistryBadge } from './components/ChemistryBadge.js';
import { createActionButtons } from './components/ActionButtons.js';

document.addEventListener('DOMContentLoaded', () => {
  renderShowcase('all');
  bindFilterEvents();
});

function bindFilterEvents() {
  const filterBtns = document.querySelectorAll('.demo-tab-btn[data-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderShowcase(category);
    });
  });
}

function renderShowcase(category = 'all') {
  const grid = document.getElementById('demo-grid');
  if (!grid) return;

  const components = [
    {
      id: 'header',
      category: 'nav',
      title: '1. Header (상단 헤더)',
      tag: 'src/components/Header.js',
      html: `
        <div class="preview-box">
          <p class="text-caption" style="margin-bottom: 8px;">• 랜딩페이지 헤더</p>
          ${createHeader({ title: '창업 성향 테스트' })}
          <p class="text-caption" style="margin: 12px 0 8px 0;">• 퀴즈 진행 헤더 (Q3/12)</p>
          ${createHeader({ title: '창업 상황극 테스트', step: 3, totalSteps: 12 })}
        </div>
      `
    },
    {
      id: 'progressbar',
      category: 'nav',
      title: '2. ProgressBar (프로그레스 바)',
      tag: 'src/components/ProgressBar.js',
      html: `
        <div class="preview-box">
          <p class="text-caption" style="margin-bottom: 8px;">• 25% 진행 상태</p>
          ${createProgressBar({ step: 3, totalSteps: 12 })}
          <p class="text-caption" style="margin: 12px 0 8px 0;">• 75% 진행 상태</p>
          ${createProgressBar({ step: 9, totalSteps: 12 })}
        </div>
      `
    },
    {
      id: 'buttons',
      category: 'buttons',
      title: '3. PrimaryButton (공통 3D 버튼)',
      tag: 'src/components/PrimaryButton.js',
      html: `
        <div class="preview-box" style="display: flex; flex-direction: column; gap: 12px;">
          ${createPrimaryButton({ text: '🚀 Accent (Pop Yellow) CTA 버튼', variant: 'accent' })}
          ${createPrimaryButton({ text: '🔗 Primary (Vivid Purple) 공유 버튼', variant: 'primary' })}
          ${createPrimaryButton({ text: '🔄 Secondary (White) 다시하기 버튼', variant: 'secondary' })}
        </div>
      `
    },
    {
      id: 'optioncard',
      category: 'buttons',
      title: '4. OptionCard (A/B 선택지 카드)',
      tag: 'src/components/OptionCard.js',
      html: `
        <div class="preview-box">
          <p class="text-caption" style="margin-bottom: 8px;">• 기본 (Normal) 상태 카드 A</p>
          ${createOptionCard({ optionKey: 'optionA', label: 'A', text: '요즘 대학생들이 진짜 불편해하는 획기적인 새로운 아이템이 떠올랐어!', isSelected: false })}
          <p class="text-caption" style="margin: 12px 0 8px 0;">• 선택됨 (Selected) 활성 상태 카드 B</p>
          ${createOptionCard({ optionKey: 'optionB', label: 'B', text: '우선 최근 성공한 스타트업 모델이랑 시장 규모부터 조사해보자.', isSelected: true })}
        </div>
      `
    },
    {
      id: 'landingform',
      category: 'forms',
      title: '5. LandingForm (랜딩 인트로 폼)',
      tag: 'src/components/LandingForm.js',
      html: `
        <div class="preview-box">
          ${createLandingForm()}
        </div>
      `
    },
    {
      id: 'loadingspinner',
      category: 'feedback',
      title: '6. LoadingSpinner (분석 대기 모션)',
      tag: 'src/components/LoadingSpinner.js',
      html: `
        <div class="preview-box">
          ${createLoadingSpinner()}
        </div>
      `
    },
    {
      id: 'resultcard',
      category: 'result',
      title: '7. ResultCard (결과 캐릭터 카드)',
      tag: 'src/components/ResultCard.js',
      html: `
        <div class="preview-box">
          ${createResultCard({
            typeData: PERSONALITY_TYPES.IDEA,
            userName: '김스타',
            major: '경영/상경계열'
          })}
        </div>
      `
    },
    {
      id: 'radarchart',
      category: 'result',
      title: '8. RadarChart (6대 능력치 그래프)',
      tag: 'src/components/RadarChart.js',
      html: `
        <div class="preview-box">
          ${createRadarChart({
            scorePercentages: {
              IDEA: 90,
              MAKER: 60,
              STRATEGY: 75,
              PEOPLE: 80,
              ANALYSIS: 45,
              ACTION: 85
            }
          })}
        </div>
      `
    },
    {
      id: 'chemistrybadge',
      category: 'result',
      title: '9. ChemistryBadge (팀 빌딩 궁합)',
      tag: 'src/components/ChemistryBadge.js',
      html: `
        <div class="preview-box">
          ${createChemistryBadge({ typeData: PERSONALITY_TYPES.IDEA })}
        </div>
      `
    },
    {
      id: 'actionbuttons',
      category: 'result',
      title: '10. ActionButtons (결과 하단 액션 버튼)',
      tag: 'src/components/ActionButtons.js',
      html: `
        <div class="preview-box">
          ${createActionButtons()}
        </div>
      `
    }
  ];

  const filtered = category === 'all' 
    ? components 
    : components.filter(c => c.category === category);

  grid.innerHTML = filtered.map(c => `
    <div class="demo-card">
      <div class="demo-card-title">
        <span>${c.title}</span>
        <span class="demo-tag">${c.tag}</span>
      </div>
      ${c.html}
    </div>
  `).join('');
}
