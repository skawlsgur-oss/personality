/**
 * 2.5초 분석 대기 로딩 컴포넌트 (LoadingSpinner.js)
 * 
 * @returns {string} HTML Template String
 */
export function createLoadingSpinner() {
  return `
    <div class="loading-view" style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 480px;
      text-align: center;
      gap: 24px;
      padding: 40px 20px;
    ">
      <div class="loading-character animate-pulse" style="
        width: 120px;
        height: 120px;
        background-color: var(--color-accent);
        border: var(--neo-border);
        box-shadow: var(--neo-shadow-lg);
        border-radius: var(--radius-lg);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
      ">
        📊
      </div>

      <div>
        <h2 class="text-h2" style="margin-bottom: 8px; font-weight: 800;">
          창업 성향 데이터 분석 중...
        </h2>
        <p class="text-body-sm">
          당신의 12가지 응답을 기반으로 <br>
          6대 창업 능력치와 찰떡 조 편성 궁합을 산출하고 있습니다.
        </p>
      </div>

      <div style="
        background-color: #F8F9FA;
        border: var(--neo-border-thin);
        border-radius: var(--radius-md);
        padding: 14px 20px;
        width: 100%;
        max-width: 360px;
      ">
        <span class="text-caption" style="color: var(--color-primary); display: block; margin-bottom: 4px; font-weight: 800;">💡 CAMP TIP</span>
        <span class="text-body-sm" style="color: #333; font-weight: 600;">"창업 캠프 성공의 80%는 찰떡같은 조 편성에 있습니다!"</span>
      </div>
    </div>
  `;
}
