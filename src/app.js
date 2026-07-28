import { QUESTIONS } from './data/questions.js';
import { PERSONALITY_TYPES } from './data/personalityTypes.js';
import { calculatePersonalityResult } from './utils/calculator.js';
import { copyShareLink, generateResultCardImage } from './utils/share.js';

import { createHeader } from './components/Header.js';
import { createProgressBar } from './components/ProgressBar.js';
import { createLandingForm } from './components/LandingForm.js';
import { createLandingPage, bindLandingPageEvents } from './components/LandingPage.js';
import { createQuizPage, bindQuizPageEvents } from './components/QuizPage.js';
import { createOptionCard } from './components/OptionCard.js';
import { createLoadingSpinner } from './components/LoadingSpinner.js';
import { createResultCard } from './components/ResultCard.js';
import { createRadarChart } from './components/RadarChart.js';
import { createChemistryBadge } from './components/ChemistryBadge.js';
import { createActionButtons } from './components/ActionButtons.js';

// Application State
const state = {
  view: 'LANDING', // 'LANDING' | 'QUIZ' | 'LOADING' | 'RESULT'
  userName: '',
  major: '경영/상경계열',
  currentQuestionIndex: 0,
  userAnswers: [], // [{ questionId, selectedOption, types }]
  resultData: null
};

// Main App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

function renderApp() {
  const container = document.getElementById('app-container');
  if (!container) return;

  let contentHtml = '';

  switch (state.view) {
    case 'LANDING':
      contentHtml = renderLandingView();
      break;
    case 'QUIZ':
      contentHtml = renderQuizView();
      break;
    case 'LOADING':
      contentHtml = renderLoadingView();
      break;
    case 'RESULT':
      contentHtml = renderResultView();
      break;
    default:
      contentHtml = renderLandingView();
  }

  container.innerHTML = contentHtml;
  bindEvents();
}

// 1. 랜딩 뷰 (시작 화면) 렌더링
function renderLandingView() {
  return createLandingPage({
    initialNickname: state.userName,
    initialMajor: state.major
  });
}

// 2. 질문 퀴즈 뷰 (테스트 진행 화면) 렌더링
function renderQuizView() {
  const currentQ = QUESTIONS[state.currentQuestionIndex];
  const step = state.currentQuestionIndex + 1;
  const currentAnswer = state.userAnswers[state.currentQuestionIndex];

  return createQuizPage({
    currentQuestion: currentQ,
    currentStep: step,
    totalSteps: QUESTIONS.length,
    selectedOptionKey: currentAnswer?.selectedOption
  });
}

// 3. 분석 대기 로딩 뷰 렌더링
function renderLoadingView() {
  return `
    ${createHeader({ title: '성향 분석 중...' })}
    <main class="view-wrapper">
      ${createLoadingSpinner()}
    </main>
  `;
}

// 4. 결과 상세 뷰 렌더링
function renderResultView() {
  if (!state.resultData) return renderLandingView();

  const { primaryType, scorePercentages } = state.resultData;

  return `
    ${createHeader({ title: '나의 창업 성향 결과' })}
    <main class="view-wrapper animate-slide-in">
      ${createResultCard({
        typeData: primaryType,
        userName: state.userName || '대학생',
        major: state.major
      })}

      ${createRadarChart({ scorePercentages })}

      ${createChemistryBadge({ typeData: primaryType })}

      ${createActionButtons()}
    </main>
  `;
}

// Event Bindings
function bindEvents() {
  // 1. 랜딩 (시작 화면) 이벤트 바인딩
  if (state.view === 'LANDING') {
    bindLandingPageEvents({
      onStartQuiz: ({ userName, major }) => {
        state.userName = userName;
        state.major = major;
        state.view = 'QUIZ';
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderApp();
      }
    });
  }

  // 2. 질문 퀴즈 (테스트 진행 화면) 이벤트 바인딩
  if (state.view === 'QUIZ') {
    bindQuizPageEvents({
      onSelectOption: (optionKey) => {
        const currentQ = QUESTIONS[state.currentQuestionIndex];
        const selectedObj = currentQ[optionKey];

        state.userAnswers[state.currentQuestionIndex] = {
          questionId: currentQ.id,
          selectedOption: optionKey,
          types: selectedObj.types
        };

        // 다음 질문 또는 분석 로딩으로 이동
        if (state.currentQuestionIndex < QUESTIONS.length - 1) {
          state.currentQuestionIndex += 1;
          renderApp();
        } else {
          // 완료 - 결과 계산 후 2.2초 로딩 화면 전환
          state.resultData = calculatePersonalityResult(state.userAnswers);
          state.view = 'LOADING';
          renderApp();

          setTimeout(() => {
            state.view = 'RESULT';
            renderApp();
          }, 2200);
        }
      },
      onPrevQuestion: () => {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex -= 1;
          renderApp();
        }
      }
    });
  }

  // 결과 - 카드 이미지 저장
  const btnDownload = document.getElementById('btn-download-card');
  if (btnDownload && state.resultData) {
    btnDownload.addEventListener('click', () => {
      generateResultCardImage(state.resultData.primaryType, state.userName);
    });
  }

  // 결과 - 링크 복사
  const btnCopy = document.getElementById('btn-copy-link');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      copyShareLink(state.userName);
    });
  }

  // 결과 - 다시 테스트하기
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

  // 헤더 리셋 버튼
  const btnHeaderReset = document.getElementById('btn-header-reset');
  if (btnHeaderReset) {
    btnHeaderReset.addEventListener('click', () => {
      if (confirm('처음 화면으로 돌아가시겠습니까?')) {
        state.view = 'LANDING';
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderApp();
      }
    });
  }
}
