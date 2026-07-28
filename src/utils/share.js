/**
 * 결과 카드 이미지 저장 및 링크 공유 유틸리티 (share.js)
 */

/**
 * Kakao SDK 초기화 실행
 */
export function initKakaoSDK() {
  const kakaoKey = (window.ENV && window.ENV.KAKAO_JAVASCRIPT_KEY)
    || (typeof process !== 'undefined' && process.env && (process.env.KAKAO_JAVASCRIPT_KEY || process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY || process.env.VITE_KAKAO_JAVASCRIPT_KEY))
    || 'ced65b9479f95948866c4b2dab594609';

  if (window.Kakao && !window.Kakao.isInitialized() && kakaoKey) {
    try {
      window.Kakao.init(kakaoKey);
      console.log('✅ Kakao SDK 초기화 완료');
    } catch (err) {
      console.warn('⚠️ Kakao SDK 초기화 경고:', err);
    }
  }
}

/**
 * 현재 결과를 URL 클립보드에 복사
 */
export async function copyShareLink(userName = '참가자') {
  const shareUrl = window.location.href;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(shareUrl);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    alert(`🎉 ${userName}님의 창업 성향 결과 링크가 클립보드에 복사되었습니다!\n단톡방이나 조원들에게 공유해보세요.`);
    return true;
  } catch (err) {
    console.error('링크 복사 실패:', err);
    alert('링크 복사 중 오류가 발생했습니다. 브라우저 주소를 직접 복사해주세요.');
    return false;
  }
}

/**
 * 카카오톡 공유하기 유틸리티 함수 (PC 웹 & 모바일 웹 100% 전천후 지원)
 * 환경변수 (window.ENV.KAKAO_JAVASCRIPT_KEY 또는 process.env.KAKAO_JAVASCRIPT_KEY) 사용
 */
export function shareKakaoTalk({ typeData, userName = '대학생' } = {}) {
  const kakaoKey = (window.ENV && window.ENV.KAKAO_JAVASCRIPT_KEY)
    || (typeof process !== 'undefined' && process.env && (process.env.KAKAO_JAVASCRIPT_KEY || process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY || process.env.VITE_KAKAO_JAVASCRIPT_KEY))
    || 'ced65b9479f95948866c4b2dab594609';

  // 로컬 file:// 프로토콜일 경우 Kakao SDK PC/모바일 웹 호환성을 위해 기본 HTTP URL 지정
  const isFileProtocol = window.location.protocol === 'file:';
  const currentOriginUrl = isFileProtocol 
    ? 'https://personality-test.vercel.app' 
    : window.location.href;

  // 카카오 PC 톡에서 웹 브라우저로 이동하도록 webUrl과 mobileWebUrl을 명확히 정의
  const targetWebUrl = currentOriginUrl;
  const targetMobileUrl = currentOriginUrl;

  const title = `[창업 성향 진단] ${userName}님의 결과: ${typeData ? typeData.name : '창업가'}`;
  const description = typeData 
    ? `"${typeData.tagline}"\n팀 내 대표 역할: ${typeData.role}` 
    : '대학생 창업 캠프 승률 200% 팀 빌딩 성향 진단!';

  if (!window.Kakao) {
    alert('카카오 SDK를 불러오지 못했습니다. 링크 복사를 대신 실행합니다.');
    return copyShareLink(userName);
  }

  // Kakao SDK 미초기화 시 초기화 시도
  if (!window.Kakao.isInitialized() && kakaoKey) {
    try {
      window.Kakao.init(kakaoKey);
    } catch (e) {
      console.warn('Kakao init error:', e);
    }
  }

  if (!window.Kakao.isInitialized()) {
    alert('카카오 SDK 키가 설정되지 않았습니다. 결과 링크 복사를 실행합니다.');
    return copyShareLink(userName);
  }

  const shareConfig = {
    objectType: 'feed',
    content: {
      title: title,
      description: description,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      link: {
        webUrl: targetWebUrl,
        mobileWebUrl: targetMobileUrl
      }
    },
    buttons: [
      {
        title: '나도 성향 테스트하기 🚀',
        link: {
          webUrl: targetWebUrl,
          mobileWebUrl: targetMobileUrl
        }
      }
    ]
  };

  try {
    // 1. Kakao SDK v2 (Kakao.Share.sendDefault)
    if (window.Kakao.Share && typeof window.Kakao.Share.sendDefault === 'function') {
      window.Kakao.Share.sendDefault(shareConfig);
      return;
    } 
    // 2. Legacy Kakao SDK (Kakao.Link.sendDefault)
    else if (window.Kakao.Link && typeof window.Kakao.Link.sendDefault === 'function') {
      window.Kakao.Link.sendDefault(shareConfig);
      return;
    }
  } catch (err) {
    console.error('카카오톡 공유 에러:', err);
    alert('카카오톡 공유 중 오류가 발생했습니다. (카카오 디벨로퍼스 웹 도메인 등록을 확인해 주세요)\n결과 링크 복사로 대체합니다.');
    copyShareLink(userName);
  }
}

/**
 * HTML5 Canvas를 활용하여 결과 카드 이미지를 생성하고 다운로드
 */
export function generateResultCardImage(typeData, userName = '대학생') {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');

  // 1. 네오 브루탈리즘 카키/비비드 배경
  ctx.fillStyle = '#6C5CE7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. 메인 카드 박스 (굵은 외곽선 & 3D 그림자)
  const cardX = 40;
  const cardY = 50;
  const cardW = 520;
  const cardH = 700;

  // 3D Drop Shadow
  ctx.fillStyle = '#1E1E24';
  ctx.fillRect(cardX + 8, cardY + 8, cardW, cardH);

  // Card Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(cardX, cardY, cardW, cardH);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#1E1E24';
  ctx.strokeRect(cardX, cardY, cardW, cardH);

  // 3. Header Title
  ctx.fillStyle = '#1E1E24';
  ctx.font = 'bold 22px Pretendard, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🚀 대학생 창업 성향 테스트 결과 카드', canvas.width / 2, cardY + 50);

  // User Name Badge
  ctx.fillStyle = typeData.color || '#FFD166';
  ctx.fillRect(canvas.width / 2 - 120, cardY + 70, 240, 36);
  ctx.strokeRect(canvas.width / 2 - 120, cardY + 70, 240, 36);
  ctx.fillStyle = '#1E1E24';
  ctx.font = 'bold 18px Pretendard, sans-serif';
  ctx.fillText(`[ ${userName} 님 ]`, canvas.width / 2, cardY + 94);

  // 4. Character Icon & Name
  ctx.font = '72px sans-serif';
  ctx.fillText(typeData.icon || '💡', canvas.width / 2, cardY + 200);

  ctx.font = 'bold 32px Pretendard, sans-serif';
  ctx.fillStyle = '#1E1E24';
  ctx.fillText(typeData.name, canvas.width / 2, cardY + 250);

  ctx.font = '16px Pretendard, sans-serif';
  ctx.fillStyle = '#6C757D';
  ctx.fillText(typeData.englishName, canvas.width / 2, cardY + 276);

  // 5. Tagline Box
  ctx.fillStyle = '#F8F9FA';
  ctx.fillRect(cardX + 30, cardY + 300, cardW - 60, 70);
  ctx.strokeRect(cardX + 30, cardY + 300, cardW - 60, 70);
  ctx.fillStyle = '#191919';
  ctx.font = 'bold 15px Pretendard, sans-serif';
  ctx.fillText(`"${typeData.tagline}"`, canvas.width / 2, cardY + 342);

  // 6. Strengths List
  ctx.textAlign = 'left';
  ctx.font = 'bold 18px Pretendard, sans-serif';
  ctx.fillStyle = '#1E1E24';
  ctx.fillText('⚡ 창업 팀 내 대표 강점', cardX + 40, cardY + 410);

  ctx.font = '15px Pretendard, sans-serif';
  ctx.fillStyle = '#333333';
  if (typeData.strengths) {
    typeData.strengths.forEach((str, idx) => {
      ctx.fillText(`• ${str}`, cardX + 40, cardY + 445 + idx * 28);
    });
  }

  // 7. Best Synergy Partner
  ctx.font = 'bold 16px Pretendard, sans-serif';
  ctx.fillStyle = '#6C5CE7';
  ctx.fillText(`🤝 환상의 짝꿍: ${typeData.bestComboTitle}`, cardX + 40, cardY + 560);

  ctx.font = '14px Pretendard, sans-serif';
  ctx.fillStyle = '#888888';
  ctx.fillText(`대표 스타일: ${typeData.founder}`, cardX + 40, cardY + 590);

  // Footer Branding
  ctx.textAlign = 'center';
  ctx.font = 'bold 14px Pretendard, sans-serif';
  ctx.fillStyle = '#1E1E24';
  ctx.fillText('대학생 창업 캠프 팀 빌딩 가이드 🚀', canvas.width / 2, cardY + 660);

  // Download Trigger
  const imageURI = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = `창업성향카드_${userName}_${typeData.id}.png`;
  link.href = imageURI;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 자동 Kakao SDK 초기화 실행
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initKakaoSDK();
  });
}
