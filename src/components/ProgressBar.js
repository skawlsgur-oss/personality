/**
 * 프로그레스 바 컴포넌트 (ProgressBar.js)
 * 
 * @param {Object} props { step, totalSteps }
 * @returns {string} HTML Template String
 */
export function createProgressBar({ step = 0, totalSteps = 12 } = {}) {
  const percentage = Math.min(100, Math.max(0, Math.round((step / totalSteps) * 100)));

  return `
    <div class="progress-bar-container" style="
      width: 100%;
      padding: 12px 20px 0 20px;
    ">
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
      ">
        <span class="text-caption" style="color: var(--color-text-sub);">테스트 진행률</span>
        <span class="text-caption" style="font-weight: 800; color: var(--color-primary);">${percentage}%</span>
      </div>
      
      <div style="
        width: 100%;
        height: 16px;
        background-color: #E9ECEF;
        border: var(--neo-border-thin);
        border-radius: var(--radius-full);
        overflow: hidden;
        position: relative;
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
      ">
        <div style="
          width: ${percentage}%;
          height: 100%;
          background-color: var(--color-accent);
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.4) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.4) 75%,
            transparent 75%,
            transparent
          );
          background-size: 20px 20px;
          animation: stripeMove 2s linear infinite;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: var(--radius-full);
        "></div>
      </div>
    </div>
  `;
}
