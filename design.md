# 🎨 대학생 창업 성향 테스트 UI/UX 디자인 가이드 (design.md)

> **문서 정보**
> - **프로젝트명**: 대학생 창업 성향 테스트 (Startup Personality Test)
> - **작성자**: 프론트엔드 개발 역량을 갖춘 UI/UX 디자인 전문가
> - **작성일**: 2026년 7월 29일
> - **기반 문서**: [prd.md](file:///c:/Users/user/.gemini/antigravity-ide/scratch/personality-test/prd.md)
> - **버전**: v1.0
> - **상태**: 작성 완료

---

## 📌 1. 디자인 컨셉 & 비주얼 테마 (Design Concept)

```
========================================================================
 🎨 Theme Concept: "Neo-Brutalism & Trendy Vivid"
 ----------------------------------------------------------------------
 [Youthful & Pop] + [Bold 2.5px Stroke] + [Solid 3D Drop Shadow]
========================================================================
```

### 1.1 디자인 컨셉 명세
- **키워드**: `Trendy`, `Vivid Pop`, `Neo-Brutalism`, `Mobile-First`, `Interactive Card`
- **비주얼 스타일에 대한 정의**:
  - 대학생 타겟의 밝고 당찬 에너지와 위트를 전달하기 위해 **선명하고 검은 굵은 외곽선(Solid 2.5px Stroke)**과 **비대칭 3D 보더 섀도우(Solid Offset Box Shadow)**를 핵심 요소로 사용하는 **네오 브루탈리즘(Neo-Brutalism)** 스타일을 채택합니다.
  - 기존 에듀테크나 정형화된 심리검사 사이트의 딱딱한 분위기에서 벗어나, 알록달록한 **비비드 시그니처 컬러**와 **통통 튀는 모션 인터랙션**으로 흥미 유발을 극대화합니다.

### 1.2 UX 디자인 핵심 원칙
1. **Zero-Friction Flow**: 닉네임 입력부터 테스트 진행, 결과 확인까지 클릭 수와 사고 대기 시간을 최소화합니다.
2. **Tactile Haptic Feedback**: 버튼 및 A/B 선택지 카드 클릭 시 3D 위치 이동(`translateY`)과 그림자 축소로 실물 카드를 누르는 듯한 물리적 오감을 자극합니다.
3. **Instagrammable Result Card**: 결과 카드 단 한 장으로 인스타그램 스토리 및 단톡방에 공유 시 한눈에 시선을 사로잡는 높은 대비감의 시각 그래픽을 제공합니다.

---

## 🎨 2. 컬러 시스템 (Color System)

모든 컬러는 프론트엔드 개발자가 즉시 사용할 수 있도록 CSS Custom Properties(`var(--color-name)`)와 exact Hex 코드로 정의합니다.

### 2.1 메인 브랜드 & 테마 컬러

```css
:root {
  /* Brand Core Colors */
  --color-primary: #6C5CE7;        /* Vivid Purple - 메인 브랜드 & 헤더 */
  --color-primary-hover: #5A4AD1;  /* Purple Hover State */
  --color-accent: #FFD166;         /* Pop Yellow - 강조 포인트 & 주요 CTA 버튼 */
  --color-accent-hover: #F4C44F;   /* Yellow Hover State */

  /* Neutral & Base Colors */
  --color-bg: #F8F9FA;             /* Light Gray Background - 서비스 기본 배경 */
  --color-surface: #FFFFFF;        /* Card & Container Surface */
  --color-border: #1E1E24;         /* Solid Dark Stroke - 굵은 테두리 및 3D 그림자 */
  
  /* Text & Content Colors */
  --color-text-main: #191919;      /* Main Headline & Body Text */
  --color-text-sub: #6C757D;       /* Subtitle, Caption & Muted Text */
  --color-text-white: #FFFFFF;     /* Text on Dark Surfaces */
}
```

### 2.2 6가지 창업 성향 캐릭터 시그니처 컬러

| 성향 캐릭터 | Hex 코드 | CSS 변수명 | 비주얼 상징 & 무드 |
| :--- | :--- | :--- | :--- |
| **💡 아이디어형** (Visionary) | `#FFD166` | `--color-type-idea` | 톡톡 튀는 아이디어 팝 옐로우 |
| **🛠️ 제작형** (Maker) | `#00BBF9` | `--color-type-maker` | 기술 구현의 사이다 비비드 블루 |
| **📊 전략형** (Strategist) | `#6C5CE7` | `--color-type-strategy` | 통찰력 있는 딥 퍼플 |
| **🤝 협업형** (Facilitator) | `#F15BB5` | `--color-type-people` | 에너지 넘치는 비비드 핫 핑크 |
| **🔍 분석형** (Analyst) | `#1D3557` | `--color-type-analysis` | 팩트 중심 딥 세레인 네이비 |
| **⚡ 실행형** (Action Driver) | `#70E000` | `--color-type-action` | 현장 돌파 라임 그린 |

---

## 🔤 3. 타이포그래피 가이드 (Typography)

### 3.1 폰트 패밀리
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', sans-serif;
```

### 3.2 타이포 스케일 명세

| 계층 (Level) | 크기 (Rem / Px) | 두께 (Weight) | 행간 (Line-Height) | 사용 위치 예시 |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `1.75rem (28px)` | Bold (700) | `1.3` | 랜딩 메인 제목, 결과 유형 캐릭터명 |
| **Heading H2** | `1.375rem (22px)` | Bold (700) | `1.4` | 질문(Q1~Q12) 타이틀 문구 |
| **Heading H3** | `1.125rem (18px)` | SemiBold (600) | `1.4` | A/B 선택지 텍스트, 세부 섹션 타이틀 |
| **Body Large** | `1.0rem (16px)` | Medium (500) | `1.5` | 성향 설명 본문, 팀 내 역할 가이드 |
| **Body Small** | `0.875rem (14px)` | Regular (400) | `1.5` | 팁 텍스트, 강약점 상세 가이드 |
| **Caption Tag**| `0.75rem (12px)` | SemiBold (600) | `1.2` | 프로그레스 카운터(3/12), 전공 뱃지 태그 |

---

## 🔘 4. UI 컴포넌트 & 디자인 시스템 (Component Specs)

### 4.1 네오 브루탈리즘 3D 토큰
```css
:root {
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  
  /* Solid 2.5px Stroke & 3D Shadow Tokens */
  --neo-border: 2.5px solid var(--color-border);
  --neo-shadow-sm: 2px 2px 0px var(--color-border);
  --neo-shadow-md: 4px 4px 0px var(--color-border);
  --neo-shadow-lg: 6px 6px 0px var(--color-border);
}
```

### 4.2 대표 컴포넌트별 상세 스펙

#### 1. 주 액션 버튼 (Primary CTA Button)
```css
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-text-main);
  font-size: 1.125rem;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: var(--radius-md);
  border: var(--neo-border);
  box-shadow: var(--neo-shadow-md);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow-lg);
  background-color: var(--color-accent-hover);
}

.btn-primary:active {
  transform: translate(3px, 3px);
  box-shadow: var(--neo-shadow-sm);
}
```

#### 2. Q1~Q12 질문 카드 & A/B 선택지 버튼 (Quiz Card & Option Button)
- **기본 카드 상태**: 흰색 배경, `2.5px Solid Black Border`, `4px 3D Drop Shadow`
- **마우스 호버 & 선택 시**:
  ```css
  .option-card {
    background: var(--color-surface);
    border: var(--neo-border);
    box-shadow: var(--neo-shadow-md);
    border-radius: var(--radius-md);
    padding: 20px;
    transition: all 0.2s ease;
  }
  
  .option-card:hover {
    background-color: #F3F0FF;
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
  
  .option-card.selected {
    background-color: var(--color-primary);
    color: var(--color-text-white);
    box-shadow: var(--neo-shadow-sm);
    transform: translate(2px, 2px);
  }
  ```

#### 3. 프로그레스 바 (Progress Bar)
- **트랙 (Track)**: `#E9ECEF` 배경, `2px Solid Black` 테두리, `Height: 16px`, `Border-Radius: 999px`
- **채움 (Indicator)**: `var(--color-accent)` (팝 옐로우) 내부에 주스트라이프 패턴 애니메이션 적용

---

## 🎬 5. 애니메이션 & 프론트엔드 모션 가이드 (Animations)

### 5.1 CSS Keyframes 정의

```css
/* 문항 카드 좌측 슬라이드 인 애니메이션 */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* 데이터 분석 로딩 스피너 펄스 효과 */
@keyframes pulseBouncing {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

/* 컴포넌트 클래스 바인딩 */
.quiz-card-enter {
  animation: slideInRight 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.loading-character {
  animation: pulseBouncing 1.2s infinite ease-in-out;
}
```

---

## 📱 6. 레이아웃 & 모바일 퍼스트 프레임 (Responsive Grid)

```
+-------------------------------------------------------+
|  Desktop View (Center Phone Frame)                   |
|                                                       |
|       +---------------------------------------+       |
|       |  Mobile Container (Max-Width: 480px)  |       |
|       |  -----------------------------------  |       |
|       |  [Header & Progress Bar]              |       |
|       |  -----------------------------------  |       |
|       |  [Quiz / Result Card Surface]         |       |
|       |  -----------------------------------  |       |
|       |  [Sticky Bottom Action Buttons]       |       |
|       +---------------------------------------+       |
|                                                       |
+-------------------------------------------------------+
```

1. **컨테이너 너비**: 스마트폰 모바일 화면에 최적화된 **Max-Width 480px** 중앙 정렬
2. **패딩 시스템**:
   - 화면 기본 좌우 Padding: `20px`
   - 카드 내부 Padding: `24px`
3. **데스크톱 접속 지원**: PC 브라우저로 접속 시 배경에 영(Young)한 감성의 비비드 그래픽 패턴을 깔고, 중앙에 세련된 스마트폰 디바이스 뷰포트 카드를 띄워 가독성을 극대화합니다.

---

## 🛠️ 7. 프론트엔드 구현 개발 팁 (Developer Checklist)

- [x] **CSS 변수 선언**: `:root`에 명시된 폰트, 색상, 그림자 토큰을 global CSS에 등록
- [x] **Accessibility (a11y)**: 버튼 명암비 4.5:1 이상 유지 (`#191919` on `#FFD166`)
- [x] **Performance Optimization**: GPU 가속 애니메이션 사용 (`transform`, `opacity` 속성 위주)
- [x] **Image Export Ready**: 결과 카드를 `html2canvas`로 캡처할 때 폰트 렌더링 결함이 없도록 고정 픽셀 규격 레이아웃 보장
