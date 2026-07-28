import { createHeader } from './Header.js';
import { createProgressBar } from './ProgressBar.js';
import { createOptionCard } from './OptionCard.js';

/**
 * 2. 테스트 진행 화면 (Quiz Screen) 컴포넌트 (QuizPage.js)
 * @prd.md F-2 및 @design.md 규격을 준수한 질문 진행 화면 컴포넌트
 * 
 * @param {Object} props { currentQuestion, currentStep, totalSteps, selectedOptionKey }
 * @returns {string} HTML Template String
 */
export function createQuizPage({
  currentQuestion,
  currentStep = 1,
  totalSteps = 12,
  selectedOptionKey = null
} = {}) {
  if (!currentQuestion) return '<div>질문 데이터를 불러올 수 없습니다.</div>';

  return `
    <div id="quiz-page-component" class="quiz-page-wrapper" style="
      display: flex;
      flex-direction: column;
      min-height: 100%;
    ">
      <!-- 2.1 헤더 컴포넌트 (단계 인디케이터 포함) -->
      ${createHeader({
        title: '창업 상황극 테스트',
        step: currentStep,
        totalSteps: totalSteps
      })}

      <!-- 2.2 프로그레스 바 컴포넌트 -->
      ${createProgressBar({
        step: currentStep,
        totalSteps: totalSteps
      })}

      <!-- 2.3 질문 및 A/B 선택지 카드 컨테이너 -->
      <main class="view-wrapper animate-slide-in" style="
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      ">
        <!-- 질문 헤더 및 단계 태그 -->
        <div style="margin-bottom: 20px;">
          <span style="
            background-color: #F1F3F5;
            color: var(--color-primary);
            font-weight: 800;
            font-size: 0.8125rem;
            padding: 4px 10px;
            border-radius: var(--radius-full);
            border: var(--neo-border-thin);
            box-shadow: 2px 2px 0px var(--color-border);
            display: inline-block;
            margin-bottom: 10px;
          ">
            ${currentQuestion.stage}
          </span>

          <h2 class="text-h2" style="
            font-weight: 800;
            color: var(--color-text-main);
            font-size: 1.375rem;
            line-height: 1.4;
          ">
            Q${currentQuestion.id}. ${currentQuestion.question}
          </h2>
        </div>

        <!-- A/B 선택지 카드 영역 -->
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          ${createOptionCard({
            optionKey: 'optionA',
            label: 'A',
            text: currentQuestion.optionA.text,
            isSelected: selectedOptionKey === 'optionA'
          })}

          ${createOptionCard({
            optionKey: 'optionB',
            label: 'B',
            text: currentQuestion.optionB.text,
            isSelected: selectedOptionKey === 'optionB'
          })}
        </div>

        <!-- 하단 이전 질문 버튼 영역 -->
        <div style="
          display: flex;
          gap: 10px;
          margin-top: 16px;
        ">
          ${currentStep > 1 ? `
            <button id="btn-prev-quiz" style="
              flex: 1;
              padding: 12px 20px;
              font-weight: 700;
              font-size: 0.9375rem;
              background-color: #FFFFFF;
              color: var(--color-text-main);
              border: var(--neo-border);
              box-shadow: var(--neo-shadow-sm);
              border-radius: var(--radius-md);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              transition: all 0.15s ease;
              font-family: inherit;
            ">
              <span>⬅️</span> <span>이전 질문으로</span>
            </button>
          ` : '<div style="flex: 1;"></div>'}
        </div>
      </main>
    </div>
  `;
}

/**
 * 2. 테스트 진행 화면 이벤트 바인딩 함수
 * 
 * @param {Object} handlers { onSelectOption: (optionKey) => void, onPrevQuestion: () => void }
 */
export function bindQuizPageEvents({ onSelectOption, onPrevQuestion } = {}) {
  // A/B 선택지 카드리스트 이벤트
  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const optionKey = card.getAttribute('data-option');
      if (typeof onSelectOption === 'function') {
        onSelectOption(optionKey);
      }
    });
  });

  // 이전 질문 버튼 이벤트
  const btnPrev = document.getElementById('btn-prev-quiz');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (typeof onPrevQuestion === 'function') {
        onPrevQuestion();
      }
    });
  }
}
