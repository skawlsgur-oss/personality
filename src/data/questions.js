/**
 * 12가지 창업 캠프 상황극 A/B 질문 데이터 (questions.js)
 */
export const QUESTIONS = [
  {
    id: 1,
    stage: '💡 아이템 선정 단계',
    question: '팀원들과 첫 아이디어 회의시간, 당신이 가장 먼저 꺼내는 말은?',
    optionA: {
      text: '요즘 대학생들이 진짜 불편해하는 획기적인 새로운 아이템이 하나 떠올랐어!',
      types: ['IDEA', 'ACTION']
    },
    optionB: {
      text: '우선 최근 성공한 스타트업 모델이랑 우리가 노릴 수 있는 시장 규모부터 조사해보자.',
      types: ['STRATEGY', 'ANALYSIS']
    }
  },
  {
    id: 2,
    stage: '🛠️ 프로토타입 제작',
    question: '캠프 제한시간 12시간 남은 상황! 와이어프레임 설계 시 당신의 스타일은?',
    optionA: {
      text: '디테일한 기능보다 핵심 가치를 보여줄 프로토타입(MVP)을 지금 바로 만들어보자!',
      types: ['MAKER', 'ACTION']
    },
    optionB: {
      text: '사용자가 서비스를 이용할 때 불편함이 없도록 메뉴 구조와 유저 플로우부터 다듬자.',
      types: ['STRATEGY', 'ANALYSIS']
    }
  },
  {
    id: 3,
    stage: '🎯 타겟 고객 검증',
    question: '아이템이 대학생들에게 진짜 필요한지 확인하고 싶을 때 당신의 행동은?',
    optionA: {
      text: '지금 당장 밖으로 나가서 길거리 대학생 10명에게 직접 인터뷰를 시도한다!',
      types: ['ACTION', 'PEOPLE']
    },
    optionB: {
      text: '에브리타임이나 에타 설문조사 링크를 만들어서 통계 데이터를 정량적으로 집계한다.',
      types: ['ANALYSIS', 'STRATEGY']
    }
  },
  {
    id: 4,
    stage: '👨‍🏫 멘토 피드백',
    question: '창업 멘토님에게 "이 아이디어는 현실성이 떨어진다"는 혹평을 들었을 때 반응은?',
    optionA: {
      text: '멘토님 피드백의 핵심 리스크가 뭔지 데이터로 재검토하고 BM을 다듬어본다.',
      types: ['ANALYSIS', 'STRATEGY']
    },
    optionB: {
      text: '팀원들 사기 떨어지지 않게 다독이고, 빠른 피보팅으로 새로운 안을 발표한다!',
      types: ['PEOPLE', 'IDEA']
    }
  },
  {
    id: 5,
    stage: '🤝 팀 내 의견 충돌',
    question: '개발/디자인 담당자와 기획 담당자 간에 심각한 의견 대립이 생겼다. 당신은?',
    optionA: {
      text: '양쪽 말을 경청하고 서로 상처받지 않게 원만한 절충안을 제안하여 분위기를 푼다.',
      types: ['PEOPLE', 'IDEA']
    },
    optionB: {
      text: '기술적 구현 가능성과 남은 마감 시간을 객관적인 기준 삼아 단호하게 결정한다.',
      types: ['MAKER', 'ANALYSIS']
    }
  },
  {
    id: 6,
    stage: '📈 비즈니스 모델',
    question: '심사위원이 "그래서 이 서비스는 돈을 어떻게 버나요?"라고 물었을 때 매력적인 답변은?',
    optionA: {
      text: '초기 유저 1만 명 확보 후 정기 구독 및 기업 제휴 B2B 수수료 모델로 확장합니다!',
      types: ['STRATEGY', 'ANALYSIS']
    },
    optionB: {
      text: '지금 당장 결제 가능한 파격적인 이벤트와 압도적인 유저 반응 지표를 보여준다!',
      types: ['ACTION', 'MAKER']
    }
  },
  {
    id: 7,
    stage: '🎤 최종 발표 (Pitching)',
    question: '캠프 해커톤 최종 피칭 무대를 앞두고 당신이 담당하고 싶은 역할은?',
    optionA: {
      text: '열정과 스토리가 넘치는 당당한 프레젠테이션으로 청중의 마음을 사로잡는 발표자!',
      types: ['PEOPLE', 'IDEA']
    },
    optionB: {
      text: '발표자가 어떤 질문을 받아도 완벽히 방어할 수 있도록 피칭 덱 장표와 데이터를 무장시키는 조력자!',
      types: ['STRATEGY', 'ANALYSIS']
    }
  },
  {
    id: 8,
    stage: '⚡ 급작스러운 피보팅',
    question: '발표 3시간 전, 예상치 못한 큰 법적 리스크를 발견했다! 당신의 선택은?',
    optionA: {
      text: '당장 법적 이슈를 비켜나갈 신선하고 새로운 컨셉으로 즉시 피보팅(방향 전환)을 감행한다!',
      types: ['IDEA', 'ACTION']
    },
    optionB: {
      text: '기존 안의 리스크 방어 논리를 꼼꼼하게 정리하고, 문제점을 보완할 해결책을 장표에 추가한다.',
      types: ['ANALYSIS', 'MAKER']
    }
  },
  {
    id: 9,
    stage: '🔥 밤샘 개발 및 작업',
    question: '새벽 3시, 모두가 지쳐갈 때 팀에 에너지를 불어넣는 당신의 방식은?',
    optionA: {
      text: '야식이나 당 충전 음료를 챙겨주며 파이팅 넘치는 텐션으로 팀원들을 격려한다.',
      types: ['PEOPLE', 'ACTION']
    },
    optionB: {
      text: '조용히 모니터에 집중해서 당장 부족한 기능 버그를 잡거나 발표 자료를 최종 완성해 낸다.',
      types: ['MAKER', 'STRATEGY']
    }
  },
  {
    id: 10,
    stage: '📊 경쟁사 분석',
    question: '이미 시장에 강력한 1등 경쟁업체가 존재한다는 사실을 알게 되었을 때 당신은?',
    optionA: {
      text: '1등 기업이 미처 신경 쓰지 못하는 Niche(틈새) 시장과 우리만의 확실한 엣지를 찾는다.',
      types: ['STRATEGY', 'IDEA']
    },
    optionB: {
      text: '경쟁사의 서비스 화면과 리뷰를 싹 긁어 모아 불편점(Pain point)을 데이터로 비교 분석한다.',
      types: ['ANALYSIS', 'MAKER']
    }
  },
  {
    id: 11,
    stage: '🚀 서비스 오픈 당일',
    question: '랜딩 페이지를 열자마자 작은 버그와 오류 문의가 들어온다. 당신의 반응은?',
    optionA: {
      text: '오류 원인을 빠르게 파악해서 즉시 코드 수정을 완료하고 새로고침하여 업데이트한다.',
      types: ['MAKER', 'ACTION']
    },
    optionB: {
      text: '불편을 겪은 유저에게 친절하게 정중한 사과와 감사 답변을 남겨 팬으로 만든다.',
      types: ['PEOPLE', 'IDEA']
    }
  },
  {
    id: 12,
    stage: '🏆 캠프 마감 및 소회',
    question: '창업 캠프가 끝난 뒤, 당신이 가장 보람을 느끼는 순간은?',
    optionA: {
      text: '팀원들과 하나가 되어 밤새우며 단단한 신뢰와 찰떡같은 케미를 쌓았다는 것을 느낄 때!',
      types: ['PEOPLE', 'ACTION']
    },
    optionB: {
      text: '아무것도 없던 백지상태에서 실제 시장에 먹히는 탄탄한 사업 결과물을 완성해 냈을 때!',
      types: ['MAKER', 'STRATEGY']
    }
  }
];
