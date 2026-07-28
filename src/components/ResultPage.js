import { createHeader } from './Header.js';
import { createResultCard } from './ResultCard.js';
import { createRadarChart } from './RadarChart.js';
import { createChemistryBadge } from './ChemistryBadge.js';
import { createActionButtons } from './ActionButtons.js';

import { generateResultCardImage, copyShareLink } from '../utils/share.js';

/**
 * 4. 진단 결과 화면 (Result Screen) 컴포넌트 (ResultPage.js)
 * @prd.md F-4 및 @design.md 규격을 준수한 결과 화면 컴포넌트
 * 
 * @param {Object} props { resultData, userName, major }
 * @returns {string} HTML Template String
 */
export function createResultPage({
  resultData,
  userName = '대학생',
  major = '경영/상경계열'
} = {}) {
  if (!resultData || !resultData.primaryType) {
    return '<div>결과 데이터를 찾을 수 없습니다.</div>';
  }

  const { primaryType, scorePercentages } = resultData;

  return `
    <div id="result-page-component" class="result-page-wrapper" style="
      display: flex;
      flex-direction: column;
      min-height: 100%;
    ">
      <!-- 4.1 헤더 컴포넌트 -->
      ${createHeader({ title: '나의 창업 성향 결과' })}

      <!-- 4.2 메인 결과 컨텐츠 뷰 -->
      <main class="view-wrapper animate-slide-in" style="flex: 1;">
        <!-- 결과 캐릭터 메인 카드 -->
        ${createResultCard({
          typeData: primaryType,
          userName: userName || '대학생',
          major: major
        })}

        <!-- 6대 능력치 레이더 바 차트 -->
        ${createRadarChart({
          scorePercentages: scorePercentages
        })}

        <!-- 팀 빌딩 케미 궁합 뱃지 -->
        ${createChemistryBadge({
          typeData: primaryType
        })}

        <!-- 하단 공유 / 저장 / 다시하기 액션 버튼 모음 -->
        ${createActionButtons()}
      </main>

      <!-- 4.3 푸터 카피라이트 -->
      <footer style="
        text-align: center;
        padding: 16px;
        font-size: 0.75rem;
        color: var(--color-text-sub);
        border-top: 1px dashed #E9ECEF;
        margin-top: 10px;
      ">
        © 2026 대학생 창업 캠프 팀 빌딩 가이드 | Neo-Brutalism Design System
      </footer>
    </div>
  `;
}

/**
 * 4. 진단 결과 화면 이벤트 바인딩 함수
 * 
 * @param {Object} handlers { resultData, userName, onRestartQuiz }
 */
export function bindResultPageEvents({ resultData, userName = '대학생', onRestartQuiz } = {}) {
  // 결과 카드 이미지 저장 버튼
  const btnDownload = document.getElementById('btn-download-card');
  if (btnDownload && resultData) {
    btnDownload.addEventListener('click', () => {
      generateResultCardImage(resultData.primaryType, userName);
    });
  }

  // 결과 링크 복사 버튼
  const btnCopy = document.getElementById('btn-copy-link');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      copyShareLink(userName);
    });
  }

  // 다시 테스트하기 버튼
  const btnRestart = document.getElementById('btn-restart-quiz');
  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      if (typeof onRestartQuiz === 'function') {
        onRestartQuiz();
      }
    });
  }
}
