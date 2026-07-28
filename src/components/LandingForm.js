import { createPrimaryButton } from './PrimaryButton.js';

/**
 * 랜딩 인트로 폼 컴포넌트 (LandingForm.js)
 * 
 * @returns {string} HTML Template String
 */
export function createLandingForm() {
  return `
    <div class="landing-form-container" style="
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 10px;
    ">
      <div class="hero-banner" style="
        background-color: var(--color-primary);
        color: var(--color-text-white);
        border: var(--neo-border);
        box-shadow: var(--neo-shadow-md);
        border-radius: var(--radius-lg);
        padding: 24px;
        text-align: center;
        position: relative;
        overflow: hidden;
      ">
        <div style="
          display: inline-block;
          background-color: var(--color-accent);
          color: #1E1E24;
          font-weight: 800;
          font-size: 0.875rem;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: var(--neo-border-thin);
          margin-bottom: 12px;
        ">🔥 대학생 창업 캠프 필수 코스</div>
        
        <h2 class="text-h1" style="margin-bottom: 8px;">나의 창업 성향은?</h2>
        <p class="text-body-sm" style="color: rgba(255,255,255,0.9);">
          캠프 승률 200%! 12가지 찰떡 상황극 질문으로 <br>
          팀 내 대표 창업 캐릭터와 조 편성 궁합을 확인하세요.
        </p>

        <div style="
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 16px;
          font-size: 1.75rem;
        ">
          <span>💡</span><span>🛠️</span><span>📊</span><span>🤝</span><span>🔍</span><span>⚡</span>
        </div>
      </div>

      <div class="input-card" style="
        background-color: var(--color-surface);
        border: var(--neo-border);
        box-shadow: var(--neo-shadow-md);
        border-radius: var(--radius-md);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      ">
        <div>
          <label for="input-nickname" class="text-h3" style="display: block; margin-bottom: 6px; font-weight: 700;">
            👤 닉네임 / 이름
          </label>
          <input type="text" id="input-nickname" placeholder="예: 김스타 (최대 8자)" maxlength="8" style="
            width: 100%;
            padding: 14px 16px;
            font-size: 1rem;
            font-weight: 600;
            border: var(--neo-border);
            border-radius: var(--radius-sm);
            outline: none;
            font-family: inherit;
            background-color: #F8F9FA;
          ">
        </div>

        <div>
          <label for="select-major" class="text-h3" style="display: block; margin-bottom: 6px; font-weight: 700;">
            🎓 전공 계열
          </label>
          <select id="select-major" style="
            width: 100%;
            padding: 14px 16px;
            font-size: 1rem;
            font-weight: 600;
            border: var(--neo-border);
            border-radius: var(--radius-sm);
            outline: none;
            font-family: inherit;
            background-color: #F8F9FA;
            cursor: pointer;
          ">
            <option value="경영/상경계열">경영 / 상경계열</option>
            <option value="공학/IT/컴퓨터">공학 / IT / 컴퓨터계열</option>
            <option value="인문/사회계열">인문 / 사회계열</option>
            <option value="디자인/예체능">디자인 / 미술 / 예체능</option>
            <option value="기타/자율전공">기타 / 자유전공</option>
          </select>
        </div>
      </div>

      ${createPrimaryButton({
        id: 'btn-start-quiz',
        text: '🚀 창업 성향 테스트 시작하기',
        variant: 'accent',
        fullWidth: true
      })}

      <div style="text-align: center; color: var(--color-text-sub);" class="text-caption">
        ⚡ 현재까지 <b>1,420명+</b>의 대학생 창업 캠프 참가자가 진단했습니다!
      </div>
    </div>
  `;
}
