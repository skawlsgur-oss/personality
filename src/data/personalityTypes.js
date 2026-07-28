/**
 * 6가지 창업 성향 캐릭터 메타데이터 및 설명 데이터 (personalityTypes.js)
 */
export const PERSONALITY_TYPES = {
  IDEA: {
    id: 'IDEA',
    name: '💡 아이디어형',
    englishName: 'Visionary Innovator',
    tagline: '새로운 문제를 발굴하고 끝없는 아이디어를 제시하는 뇌섹남녀',
    color: '#FFD166',
    cssVar: '--color-type-idea',
    icon: '💡',
    role: '문제 정의, 비전 제시, 아이디어 발상 및 피보팅',
    strengths: [
      '트렌드를 빠르게 읽는 사냥꾼 같은 직관력',
      '남들이 보지 못하는 문제점을 찾아내는 창의력',
      '막힘없는 아이디어와 고정관념을 깨는 유연함'
    ],
    weaknesses: [
      '아이디어가 너무 많아 집중이 흐트러질 수 있음',
      '실행 단계에서 구체적인 세부 작업에 쉽게 지루해함'
    ],
    founder: '스티브 잡스 (Steve Jobs) 스타일',
    bestCombo: 'MAKER',
    bestComboTitle: '🛠️ 제작형 (아이디어를 눈앞에 구현해 줌)',
    worstCombo: 'ANALYSIS',
    worstComboTitle: '🔍 분석형 (아이디어를 꺼내자마자 팩트 검증함)'
  },
  MAKER: {
    id: 'MAKER',
    name: '🛠️ 제작형',
    englishName: 'Maker / Tech Builder',
    tagline: '아이디어를 눈앞에 보이는 실체(MVP)로 만들어내는 연금술사',
    color: '#00BBF9',
    cssVar: '--color-type-maker',
    icon: '🛠️',
    role: 'MVP 프로토타이핑, 개발/디자인 구현, 서비스 구조화',
    strengths: [
      '상상을 눈앞의 실체로 만드는 압도적 구현력',
      '기술적 문제를 논리적으로 해결하는 파워',
      '마감 기한을 지키는 끈기와 집중력'
    ],
    weaknesses: [
      '완벽주의에 빠져 고객 피드백 수용이 느릴 수 있음',
      '비기술자와의 커뮤니케이션에서 답답함을 느낄 수 있음'
    ],
    founder: '스티브 워즈니악 (Steve Wozniak) 스타일',
    bestCombo: 'IDEA',
    bestComboTitle: '💡 아이디어형 (끊임없이 흥미로운 과제를 줌)',
    worstCombo: 'PEOPLE',
    worstComboTitle: '🤝 협업형 (코딩할 시간 부족한데 회의를 자주 함)'
  },
  STRATEGY: {
    id: 'STRATEGY',
    name: '📊 전략형',
    englishName: 'Business Strategist',
    tagline: '돈이 되는 구조와 시장 판세를 읽는 꼼꼼한 전략가',
    color: '#6C5CE7',
    cssVar: '--color-type-strategy',
    icon: '📊',
    role: '비즈니스 모델(BM) 수립, 수익 구조 설계, 시장 분석',
    strengths: [
      '시장 규모와 수익 모델을 정확히 짚어내는 논리력',
      '경쟁사를 다각도로 파헤치는 정밀 분석력',
      '사업의 정당성과 성장성을 증명하는 수치화 능력'
    ],
    weaknesses: [
      '지나치게 숫자에 치중하여 신선한 도전을 망설임',
      '초기 스피드가 중요한 시점에 기획만 길어질 수 있음'
    ],
    founder: '찰리 멍거 (Charlie Munger) 스타일',
    bestCombo: 'ACTION',
    bestComboTitle: '⚡ 실행형 (수립한 전략을 빠르게 시장에 검증함)',
    worstCombo: 'IDEA',
    worstComboTitle: '💡 아이디어형 (기획 다 짜놨더니 아이디어를 바꿈)'
  },
  PEOPLE: {
    id: 'PEOPLE',
    name: '🤝 협업형',
    englishName: 'People Facilitator',
    tagline: '팀의 사기를 북돋우고 매끄러운 분위기를 만드는 팀의 비타민',
    color: '#F15BB5',
    cssVar: '--color-type-people',
    icon: '🤝',
    role: '팀 커뮤니케이션, 발표(Pitching), 고객 인터뷰 진행',
    strengths: [
      '누구와도 쉽게 친해지는 미친 친화력과 공감 능력',
      '청중과 심사위원을 사로잡는 설득력 높은 피칭력',
      '팀원 간 충돌을 부드럽게 해결하는 중재력'
    ],
    weaknesses: [
      '타인의 눈치를 과하게 봐서 단호한 결정이 어려움',
      '객관적인 리스크 평가를 감정적으로 수용할 수 있음'
    ],
    founder: '브라이언 체스키 (Brian Chesky) 스타일',
    bestCombo: 'ANALYSIS',
    bestComboTitle: '🔍 분석형 (냉철한 데이터 분석을 부드럽게 전달해 줌)',
    worstCombo: 'MAKER',
    worstComboTitle: '🛠️ 제작형 (대화보다는 작업만 하려고 함)'
  },
  ANALYSIS: {
    id: 'ANALYSIS',
    name: '🔍 분석형',
    englishName: 'Data & Risk Analyst',
    tagline: '허점을 찾아내고 데이터로 리스크를 막아내는 팩트폭격기',
    color: '#1D3557',
    cssVar: '--color-type-analysis',
    icon: '🔍',
    role: '리스크 검증, 타겟 고객 데이터 분석, 사업계획서 다듬기',
    strengths: [
      '사업 모델의 약점을 송곳처럼 찾아내는 검증 능력',
      '데이터와 지표 기반의 차가운 이성적 사고',
      '발표 장표의 논리적 오류를 사전에 막아내는 예리함'
    ],
    weaknesses: [
      '비판적인 지적이 과할 경우 팀 사기를 꺾을 수 있음',
      '완벽한 확신이 없으면 행동으로 옮기기 주저함'
    ],
    founder: '피터 틸 (Peter Thiel) 스타일',
    bestCombo: 'PEOPLE',
    bestComboTitle: '🤝 협업형 (피드백을 상처 없이 다정하게 전달해 줌)',
    worstCombo: 'IDEA',
    worstComboTitle: '💡 아이디어형 (근거 없는 자신감으로 설침)'
  },
  ACTION: {
    id: 'ACTION',
    name: '⚡ 실행형',
    englishName: 'Action Driver',
    tagline: '생각보다 행동이 먼저! 현장으로 달려가는 돌격대장',
    color: '#70E000',
    cssVar: '--color-type-action',
    icon: '⚡',
    role: '현장 실전 검증, 고객 발로 뛰기, 빠른 리소스 확보',
    strengths: [
      '말보다 빠르게 몸이 먼저 움직이는 압도적 추진력',
      '현장에서 고객 피드백을 직접 따오는 담대함',
      '위기 상황에서도 굴하지 않는 순발력'
    ],
    weaknesses: [
      '사전 논의 없이 뛰어들어 원점으로 돌아올 수 있음',
      '팀원들이 자신의 속도를 따라오지 못할 때 조바심을 느낌'
    ],
    founder: '일론 머스크 (Elon Musk) 스타일',
    bestCombo: 'STRATEGY',
    bestComboTitle: '📊 전략형 (돌격할 목표와 방안을 체계적으로 쥐여줌)',
    worstCombo: 'ANALYSIS',
    worstComboTitle: '🔍 분석형 (움직이려고 할 때마다 태클을 검)'
  }
};
