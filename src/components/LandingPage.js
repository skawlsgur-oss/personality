import { createHeader } from './Header.js';
import { createLandingForm } from './LandingForm.js';

/**
 * 1. 시작 화면 (Landing Screen) 컴포넌트 (LandingPage.js)
 * @prd.md F-1 및 @design.md 규격을 준수한 시작 화면 컴포넌트
 * 
 * @param {Object} props { initialNickname, initialMajor }
 * @returns {string} HTML Template String
 */
export function createLandingPage({ initialNickname = '', initialMajor = '경영/상경계열' } = {}) {
  return `
    <div id="landing-page-component" class="landing-page-wrapper" style="
      display: flex;
      flex-direction: column;
      min-height: 100%;
    ">
      <!-- 1.1 상단 헤더 컴포넌트 조합 -->
      ${createHeader({ title: '창업 성향 테스트' })}

      <!-- 1.2 메인 랜딩 컨텐츠 뷰 -->
      <main class="view-wrapper animate-slide-in" style="flex: 1;">
        ${createLandingForm()}
      </main>

      <!-- 1.3 푸터 카피라이트 -->
      <footer style="
        text-align: center;
        padding: 16px;
        font-size: 0.75rem;
        color: var(--color-text-sub);
        border-top: 1px dashed #E9ECEF;
        margin-top: 20px;
      ">
        © 2026 대학생 창업 캠프 팀 빌딩 가이드 | Neo-Brutalism Design System
      </footer>
    </div>
  `;
}

/**
 * 시작 화면 (Landing Screen) 이벤트 바인딩 함수
 * 
 * @param {Object} handlers { onStartQuiz: ({ userName, major }) => void }
 */
export function bindLandingPageEvents({ onStartQuiz } = {}) {
  const btnStart = document.getElementById('btn-start-quiz');
  const inputNickname = document.getElementById('input-nickname');
  const selectMajor = document.getElementById('select-major');

  if (!btnStart || !inputNickname || !selectMajor) return;

  // 닉네임 입력란 엔터키 지원
  inputNickname.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btnStart.click();
    }
  });

  // 시작 버튼 클릭 시 유효성 검사 및 콜백 호출
  btnStart.addEventListener('click', () => {
    const userName = inputNickname.value.trim();
    const major = selectMajor.value;

    if (!userName) {
      inputNickname.style.borderColor = '#FF6B6B';
      inputNickname.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.3)';
      inputNickname.focus();
      
      // 흔들림 경고 애니메이션
      inputNickname.parentElement.classList.add('animate-pulse');
      setTimeout(() => {
        inputNickname.parentElement.classList.remove('animate-pulse');
      }, 1000);
      return;
    }

    // 유효성 통과 - 입력 스타일 원복
    inputNickname.style.borderColor = 'var(--color-border)';
    inputNickname.style.boxShadow = 'none';

    if (typeof onStartQuiz === 'function') {
      onStartQuiz({ userName, major });
    }
  });
}
