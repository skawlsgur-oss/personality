/**
 * 6개 창업 성향 능력치 그래프 컴포넌트 (RadarChart.js)
 * SVG 기반의 오각형/육각형 방사형 능력치 그래프
 * 
 * @param {Object} props { scorePercentages }
 * @returns {string} HTML Template String
 */
export function createRadarChart({ scorePercentages = {} } = {}) {
  const types = [
    { key: 'IDEA', label: '아이디어' },
    { key: 'MAKER', label: '제작' },
    { key: 'STRATEGY', label: '전략' },
    { key: 'PEOPLE', label: '협업' },
    { key: 'ANALYSIS', label: '분석' },
    { key: 'ACTION', label: '실행' }
  ];

  return `
    <div class="radar-chart-container" style="
      background-color: var(--color-surface);
      border: var(--neo-border);
      box-shadow: var(--neo-shadow-md);
      border-radius: var(--radius-lg);
      padding: 20px;
      margin-bottom: 24px;
    ">
      <h3 class="text-h3" style="margin-bottom: 14px; font-weight: 800; text-align: center;">
        📈 나의 창업 6대 능력치 밸런스
      </h3>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${types.map(t => {
          const val = scorePercentages[t.key] || 30;
          return `
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="text-caption" style="min-width: 54px; font-weight: 700;">${t.label}</span>
              <div style="
                flex: 1;
                height: 14px;
                background-color: #E9ECEF;
                border-radius: var(--radius-full);
                border: 1px solid var(--color-border);
                overflow: hidden;
              ">
                <div style="
                  width: ${val}%;
                  height: 100%;
                  background-color: var(--color-primary);
                  border-radius: var(--radius-full);
                  transition: width 0.6s ease-out;
                "></div>
              </div>
              <span class="text-caption" style="min-width: 36px; text-align: right; font-weight: 800; color: var(--color-primary);">${val}%</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
