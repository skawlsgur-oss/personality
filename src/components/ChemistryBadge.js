/**
 * 팀 빌딩 궁합 파트너 컴포넌트 (ChemistryBadge.js)
 * 
 * @param {Object} props { typeData }
 * @returns {string} HTML Template String
 */
export function createChemistryBadge({ typeData } = {}) {
  if (!typeData) return '';

  return `
    <div class="chemistry-container" style="
      background-color: var(--color-surface);
      border: var(--neo-border);
      box-shadow: var(--neo-shadow-md);
      border-radius: var(--radius-lg);
      padding: 20px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    ">
      <h3 class="text-h3" style="font-weight: 800; text-align: center;">
        🤝 캠프 조 편성 팀 빌딩 궁합
      </h3>

      <!-- Best Combo -->
      <div style="
        background-color: #E8F5E9;
        border: 2px solid #2E7D32;
        border-radius: var(--radius-md);
        padding: 14px;
        box-shadow: 2px 2px 0px #2E7D32;
      ">
        <div style="
          display: inline-block;
          background-color: #2E7D32;
          color: white;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          margin-bottom: 6px;
        ">💖 BEST COMBO</div>

        <h4 class="text-h3" style="color: #1B5E20; font-size: 1rem; margin-bottom: 4px; font-weight: 800;">
          ${typeData.bestComboTitle}
        </h4>
        <p class="text-body-sm" style="color: #2E7D32; font-size: 0.8125rem;">
          나의 약점을 완벽하게 보완해 주는 최고의 환상적인 조원!
        </p>
      </div>

      <!-- Worst / Caution Combo -->
      <div style="
        background-color: #FFEBEE;
        border: 2px solid #C62828;
        border-radius: var(--radius-md);
        padding: 14px;
        box-shadow: 2px 2px 0px #C62828;
      ">
        <div style="
          display: inline-block;
          background-color: #C62828;
          color: white;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          margin-bottom: 6px;
        ">⚠️ CAUTION COMBO</div>

        <h4 class="text-h3" style="color: #B71C1C; font-size: 1rem; margin-bottom: 4px; font-weight: 800;">
          ${typeData.worstComboTitle}
        </h4>
        <p class="text-body-sm" style="color: #C62828; font-size: 0.8125rem;">
          의견 충돌이 생길 수 있으므로 상호 존중과 명확한 역할 분담이 필요합니다.
        </p>
      </div>
    </div>
  `;
}
