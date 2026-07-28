/**
 * 결과 카드 이미지 저장 및 링크 공유 유틸리티 (share.js)
 */

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
