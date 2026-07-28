import { createPrimaryButton } from './PrimaryButton.js';

/**
 * 결과 페이지 하단 액션 버튼 모음 (ActionButtons.js)
 * 
 * @returns {string} HTML Template String
 */
export function createActionButtons() {
  return `
    <div class="action-buttons-container" style="
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    ">
      ${createPrimaryButton({
        id: 'btn-download-card',
        text: '🖼️ 결과 카드 이미지 저장하기',
        icon: '',
        variant: 'accent',
        fullWidth: true
      })}

      ${createPrimaryButton({
        id: 'btn-copy-link',
        text: '🔗 결과 링크 복사하여 공유하기',
        icon: '',
        variant: 'primary',
        fullWidth: true
      })}

      ${createPrimaryButton({
        id: 'btn-restart-quiz',
        text: '🔄 테스트 다시하기',
        icon: '',
        variant: 'secondary',
        fullWidth: true
      })}
    </div>
  `;
}
