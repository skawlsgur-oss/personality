import { createHeader } from './Header.js';
import { createLoadingSpinner } from './LoadingSpinner.js';

/**
 * 3. 데이터 분석 로딩 화면 (Loading Screen) 컴포넌트 (LoadingPage.js)
 * @prd.md F-3 및 @design.md 규격을 준수한 성향 분석 로딩 화면 컴포넌트
 * 
 * @param {Object} props { tipMessage }
 * @returns {string} HTML Template String
 */
export function createLoadingPage({ tipMessage = '창업 캠프 성공의 80%는 찰떡같은 팀 빌딩에 있습니다!' } = {}) {
  return `
    <div id="loading-page-component" class="loading-page-wrapper" style="
      display: flex;
      flex-direction: column;
      min-height: 100%;
    ">
      <!-- 3.1 상단 헤더 컴포넌트 -->
      ${createHeader({ title: '창업 성향 분석 중...' })}

      <!-- 3.2 로딩 스피너 및 팁 애니메이션 컨테이너 -->
      <main class="view-wrapper animate-slide-in" style="
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      ">
        ${createLoadingSpinner()}
      </main>

      <!-- 3.3 하단 로딩 게이지 카운터 -->
      <footer style="
        text-align: center;
        padding: 20px;
        color: var(--color-primary);
        font-weight: 800;
        font-size: 0.875rem;
      ">
        <span class="animate-pulse">⏳ 6대 창업 능력치 데이터 매칭 중...</span>
      </footer>
    </div>
  `;
}

/**
 * 3. 로딩 화면 타이머 및 자동 전환 이벤트 제어 함수
 * 
 * @param {Object} handlers { duration: 2200, onComplete: () => void }
 */
export function startLoadingTimer({ duration = 2200, onComplete } = {}) {
  const loadingChar = document.querySelector('.loading-character');
  if (loadingChar) {
    loadingChar.classList.add('animate-pulse');
  }

  const timer = setTimeout(() => {
    if (typeof onComplete === 'function') {
      onComplete();
    }
  }, duration);

  return () => clearTimeout(timer);
}
