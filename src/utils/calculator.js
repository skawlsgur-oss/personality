import { PERSONALITY_TYPES } from '../data/personalityTypes.js';

/**
 * 사용자 응답 배열을 받아 6개 성향 점수 및 최종 유형을 계산하는 유틸리티 (calculator.js)
 * 
 * @param {Array} userAnswers - 사용자 선택 정보 [{ questionId, selectedOption: 'optionA' | 'optionB', types: [...] }]
 * @returns {Object} { primaryType, scores, scorePercentages }
 */
export function calculatePersonalityResult(userAnswers) {
  // 1. 점수판 초기화
  const scores = {
    IDEA: 0,
    MAKER: 0,
    STRATEGY: 0,
    PEOPLE: 0,
    ANALYSIS: 0,
    ACTION: 0
  };

  // 2. 응답에 따른 유형별 점수 누적
  userAnswers.forEach((answer) => {
    if (answer && answer.types && Array.isArray(answer.types)) {
      answer.types.forEach((typeKey) => {
        if (scores[typeKey] !== undefined) {
          scores[typeKey] += 1;
        }
      });
    }
  });

  // 3. 최고 점수 성향 산출
  let primaryTypeKey = 'IDEA';
  let maxScore = -1;

  // 동점자 처리를 위한 우선순위 가중치
  const priority = ['IDEA', 'MAKER', 'STRATEGY', 'PEOPLE', 'ACTION', 'ANALYSIS'];

  priority.forEach((typeKey) => {
    if (scores[typeKey] > maxScore) {
      maxScore = scores[typeKey];
      primaryTypeKey = typeKey;
    }
  });

  // 4. 백분율 점수 계산 (그래프용 10~100% 스케일링)
  const totalPoints = Object.values(scores).reduce((acc, curr) => acc + curr, 0) || 1;
  const scorePercentages = {};

  Object.keys(scores).forEach((typeKey) => {
    const rawRatio = scores[typeKey] / totalPoints;
    // 시각적 방사형 그래프 가독성을 위한 최소 25% ~ 최대 95% 보정
    scorePercentages[typeKey] = Math.min(95, Math.max(25, Math.round(rawRatio * 200 + 20)));
  });

  return {
    primaryType: PERSONALITY_TYPES[primaryTypeKey],
    scores,
    scorePercentages
  };
}
