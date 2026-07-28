/**
 * 재사용 가능한 네오 브루탈리즘 버튼 컴포넌트 (PrimaryButton.js)
 * 
 * @param {Object} props { id, text, icon, variant ('accent'|'primary'|'secondary'), fullWidth }
 * @returns {string} HTML Template String
 */
export function createPrimaryButton({ id = '', text = '버튼', icon = '', variant = 'accent', fullWidth = true } = {}) {
  let bgColor = 'var(--color-accent)';
  let textColor = 'var(--color-text-main)';

  if (variant === 'primary') {
    bgColor = 'var(--color-primary)';
    textColor = 'var(--color-text-white)';
  } else if (variant === 'secondary') {
    bgColor = '#FFFFFF';
    textColor = 'var(--color-text-main)';
  }

  return `
    <button id="${id}" class="btn-neo" style="
      width: ${fullWidth ? '100%' : 'auto'};
      background-color: ${bgColor};
      color: ${textColor};
      font-size: 1.125rem;
      font-weight: 800;
      padding: 16px 24px;
      border-radius: var(--radius-md);
      border: var(--neo-border);
      box-shadow: var(--neo-shadow-md);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease-in-out;
      font-family: inherit;
    ">
      ${icon ? `<span>${icon}</span>` : ''}
      <span>${text}</span>
    </button>
  `;
}
