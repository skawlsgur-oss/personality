/**
 * 상단 헤더 컴포넌트 (Header.js)
 * 
 * @param {Object} props { title, step, totalSteps, onReset }
 * @returns {string} HTML Template String
 */
export function createHeader({ title = '창업 성향 테스트', step = 0, totalSteps = 12, onReset } = {}) {
  const isQuizPage = step > 0 && step <= totalSteps;

  return `
    <header class="app-header" style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: var(--neo-border);
      background-color: var(--color-surface);
    ">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="
          background-color: var(--color-accent);
          border: var(--neo-border-thin);
          box-shadow: 2px 2px 0px var(--color-border);
          border-radius: var(--radius-sm);
          padding: 2px 8px;
          font-weight: 800;
          font-size: 0.75rem;
        ">CAMP</span>
        <h1 class="text-h3" style="font-weight: 800; color: var(--color-text-main);">${title}</h1>
      </div>

      ${isQuizPage ? `
        <div style="
          font-weight: 800;
          font-size: 0.875rem;
          background-color: #F1F3F5;
          border: var(--neo-border-thin);
          border-radius: var(--radius-full);
          padding: 4px 12px;
        ">
          <span style="color: var(--color-primary);">${step}</span> / ${totalSteps}
        </div>
      ` : `
        <button id="btn-header-reset" style="
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          padding: 4px;
        " title="처음으로">🚀</button>
      `}
    </header>
  `;
}
