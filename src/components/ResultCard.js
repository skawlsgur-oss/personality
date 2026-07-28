/**
 * 결과 상세 캐릭터 카드 컴포넌트 (ResultCard.js)
 * 
 * @param {Object} props { typeData, userName, major }
 * @returns {string} HTML Template String
 */
export function createResultCard({ typeData, userName = '참가자', major = '자유전공' } = {}) {
  if (!typeData) return '';

  return `
    <div class="result-card" style="
      background-color: var(--color-surface);
      border: var(--neo-border);
      box-shadow: var(--neo-shadow-lg);
      border-radius: var(--radius-lg);
      padding: 24px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    ">
      <!-- Top Badge Banner -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      ">
        <span style="
          background-color: ${typeData.color};
          color: #1E1E24;
          font-weight: 800;
          font-size: 0.875rem;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: var(--neo-border-thin);
        ">👤 ${userName} (${major})</span>

        <span style="
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-sub);
        ">VERIFIED RESULT</span>
      </div>

      <!-- Icon & Name Header -->
      <div style="text-align: center; margin: 12px 0 20px 0;">
        <div style="
          font-size: 4.5rem;
          line-height: 1;
          margin-bottom: 12px;
          display: inline-block;
          background-color: #F8F9FA;
          padding: 16px;
          border-radius: var(--radius-lg);
          border: var(--neo-border-thin);
          box-shadow: 3px 3px 0px var(--color-border);
        ">
          ${typeData.icon}
        </div>

        <h2 class="text-h1" style="color: var(--color-text-main); margin-bottom: 4px;">
          ${typeData.name}
        </h2>
        <span class="text-caption" style="color: var(--color-text-sub); font-size: 0.875rem;">
          ${typeData.englishName}
        </span>
      </div>

      <!-- Tagline Box -->
      <div style="
        background-color: #F8F9FA;
        border: var(--neo-border-thin);
        border-radius: var(--radius-md);
        padding: 14px 16px;
        text-align: center;
        margin-bottom: 20px;
      ">
        <p class="text-h3" style="font-weight: 800; color: #191919; font-size: 1rem;">
          "${typeData.tagline}"
        </p>
      </div>

      <!-- Role & Strengths Section -->
      <div style="margin-bottom: 20px;">
        <h3 class="text-h3" style="margin-bottom: 8px; font-weight: 800;">
          💡 창업 팀 내 대표 역할
        </h3>
        <p class="text-body-sm" style="color: #333; font-weight: 600; margin-bottom: 12px;">
          ${typeData.role}
        </p>

        <h3 class="text-h3" style="margin-bottom: 8px; font-weight: 800;">
          ⚡ 나의 핵심 강점
        </h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px;">
          ${typeData.strengths.map(str => `
            <li style="
              font-size: 0.875rem;
              font-weight: 500;
              background-color: #FFF9E6;
              padding: 8px 12px;
              border-radius: var(--radius-sm);
              border: 1px solid #FFE082;
              display: flex;
              align-items: center;
              gap: 8px;
            ">
              <span>✔</span> <span>${str}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Founder Analogy -->
      <div style="
        background-color: #F3F0FF;
        border: var(--neo-border-thin);
        border-radius: var(--radius-sm);
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
      ">
        <span style="font-size: 1.25rem;">👔</span>
        <span class="text-body-sm" style="font-weight: 700; color: var(--color-primary);">
          대표 유명 창업가 비유: ${typeData.founder}
        </span>
      </div>
    </div>
  `;
}
