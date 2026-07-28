/**
 * Q1~Q12 A/B 상황 선택지 카드 컴포넌트 (OptionCard.js)
 * 
 * @param {Object} props { optionKey ('optionA'|'optionB'), label ('A'|'B'), text, isSelected }
 * @returns {string} HTML Template String
 */
export function createOptionCard({ optionKey = 'optionA', label = 'A', text = '', isSelected = false } = {}) {
  const badgeBg = label === 'A' ? '#FFD166' : '#00BBF9';

  return `
    <div class="option-card ${isSelected ? 'selected' : ''}" data-option="${optionKey}" style="
      background-color: ${isSelected ? 'var(--color-primary)' : 'var(--color-surface)'};
      color: ${isSelected ? 'var(--color-text-white)' : 'var(--color-text-main)'};
      border: var(--neo-border);
      box-shadow: ${isSelected ? 'var(--neo-shadow-sm)' : 'var(--neo-shadow-md)'};
      border-radius: var(--radius-md);
      padding: 20px;
      margin-bottom: 16px;
      cursor: pointer;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
      transform: ${isSelected ? 'translate(2px, 2px)' : 'none'};
      user-select: none;
    ">
      <div style="
        background-color: ${isSelected ? '#FFFFFF' : badgeBg};
        color: #1E1E24;
        font-weight: 900;
        font-size: 1.125rem;
        min-width: 36px;
        height: 36px;
        border-radius: var(--radius-sm);
        border: var(--neo-border-thin);
        box-shadow: 2px 2px 0px var(--color-border);
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        ${label}
      </div>

      <div style="
        flex: 1;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5;
        padding-top: 4px;
      ">
        ${text}
      </div>
    </div>
  `;
}
