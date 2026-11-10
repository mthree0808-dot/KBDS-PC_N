본 문서는 Figma 기반 UI/UX 디자인 시스템의 변수, 서체, 레이아웃 규격, 컴포넌트 간격 및 12장 레이어 명명·그룹핑 규칙을 정리한 가이드입니다.

---

## 1. 개요 및 디자인 시스템 환경

- **디자인 시스템 경로**:  
  [MO 디자인 라이브러리 v0.97 배포준비](https://www.figma.com/design/09eGMNTNnkE0CTxPdr7lnk/MO-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-v0.97-%EB%B0%B0%ED%8F%AC%EC%A4%80%EB%B9%84-?m=auto&node-id=0-1&t=hdIDoEVSSEiSca7d-1)
- **적용 원칙**:
  - 화면 생성 및 레이어 구성 시 **오로지 디자인 시스템에 정의된 변수(Variable/Token) 값**만 사용합니다 (색상, 서체, 간격, 라운드 등).
  - 임의의 하드코딩 수치 또는 분리(Detach) 인스턴스 사용을 엄격히 금지합니다.

---

## 2. 서체(Typography) 규칙

- **한글 및 일반 UI 텍스트**: `KBFG Text`
- **숫자 전용 표현 (금액, 날짜, 수치 등)**: `Pretendard`

---


### 2.1 복수 TextList / Unordered의 그룹 간격 (2026-11-10 사용자 확정)

- 복수 `TextList / Unordered`는 실제 세로 Auto Layout의 `TextList Group`으로 묶고 **gap: 4px (`spacing/xs`)**를 적용한다.
- 이 규칙은 안내 박스·약관 안내·테이블 하단 설명 등 복수 TextList 묶음에 공통 적용하며, 참조 화면의 항목 간격이 8 또는 12여도 4를 우선한다.
- **테이블과 하단 TextList Group 사이 간격 16px (`spacing/xl`)은 유지한다.** 항목 간격 4와 묶음 바깥 간격 16을 혼동하지 않는다. 일반 Text Group이나 다른 컴포넌트 내부 고유 gap에 일괄 적용하지 않는다.

## 3. 화면 레이아웃 및 영역 규격

### 3.1 화면의 기본 3단 구조
일반 화면은 최상위에서 다음 3개 기본 영역 프레임으로 분할합니다. (Popup 컴포넌트 내부 영역명은 대소문자를 구분하여 `Header`, `Body`, `Footer` 사용)

```text
화면
├─ ## HEADER
├─ ## BODY
└─ ## FOOTER
3.2 ## BODY 기본 레이아웃 속성Width: 1440px (고정)Height: Hug contentsAuto Layout Flow: HorizontalPadding: 48px 40px (상하 48px, 좌우 40px)Gap: 기본 48px (LNB 배치 시 32px)3.3 LNB 및 2단 본문 레이아웃 구조LNB가 포함된 화면 구조는 ## BODY 하위에 Container 1과 Container 2로 나누어 가로 배치합니다.## BODY Gap: 32pxLNB 영역: Container 1 (Width: 316px)메인 콘텐츠 영역: Container 2 (Width: 664px)Plaintext## BODY (flow: horizontal, gap: 32px, padding: 48px 40px, width: 1440)
├─ Container 1 (LNB, width: 316)
└─ Container 2 (Main Contents, width: 664)
4. 컴포넌트 조합 및 패턴별 세부 규칙4.1 상단 타이틀 및 인포박스 간격## HEADER 다음: Title / Page 배치Title / Page + Infobox / FullWidth 조합:Title / Page와 Infobox / FullWidth 사이 간격: 48pxInfobox / FullWidth와 그 다음 하단 콘텐츠 사이 간격: 48pxPagination / Basic 배치: 상단 콘텐츠와의 간격 16px4.2 Table 컴포넌트 규칙반응형 높이 맞춤 (Fill):Table / Header 또는 Table / Cell이 수평으로 배치될 때, 한쪽 셀의 콘텐츠 증가로 높이가 커지면 상대적으로 작은 쪽의 높이 값을 fill로 설정합니다.Title / Headline + Table 조합:Title / Headline과 Table 사이 간격: gap: 20px동일한 [Title / Headline + Table] 그룹이 하단에 반복될 경우 그룹 간 간격: 48px테이블 하단 설명 텍스트 (TextList / Unordered):테이블 하단에 단일 또는 복수의 TextList / Unordered가 조합될 경우 간격: gap: 16px이때 사용되는 TextList / Unordered의 폰트 사이즈: size: 144.3 콘텐츠 박스 3종 (Card / Surface, Data Block, Text Box) 분류 및 제작 기준구분Card / SurfaceData BlockText Box주된 목적정보와 사용자 동작의 결합사실 데이터 조회·대조설명·안내·주의·상태 전달사용 예시계좌·상품 선택, 상세 이동, 이체이름, 전화번호, 계좌정보, 금액유의사항, 상담센터 안내, 상태 설명사용자 동작박스 전체 또는 내부 요소에 동작 있음박스 자체에는 동작 없음정보 전달이 주목적 (동작 없음)제작 방식실제 디자인 시스템 컴포넌트 인스턴스Auto Layout 프레임으로 직접 구성Auto Layout 프레임으로 직접 구성주요 콘텐츠원형 Slot·Card 하위 컴포넌트Title, DataListTitle, Text, TextList, Divider1) Card / Surface최신 디자인 시스템의 실제 Card / Surface 인스턴스를 유지하며 절대 Detach하지 않습니다.내부 패딩: 32px (사방)제목/설명 구성: 제목은 Card / Body / Group-A, 설명·목록은 Card / Body / Group-C의 해당 variant 사용간격: Groups 간격 16px, 설명 목록용 Group 내부 간격 12px라디오 선택형 Card:Card / Header / Affix — variant=radio (24×24px) 사용Body: 가로 Auto Layout, 가로 Fill, 세로 Hug, gap: 12pxGroups: 가로 Fill카드당 Affix는 1개만 노출하며 카드와 라디오의 선택/비활성 상태를 일치시킵니다.2) Data Block사실 데이터 조회 목적의 Auto Layout 프레임입니다.PlaintextData Block
├─ Title — 필요한 경우
└─ DataList Group — gap: 12px
   ├─ DataList
   └─ DataList
레이아웃: Vertical Auto Layout (가로 Fill, 세로 Hug)내부 패딩: 사방 32px내부 간격 (Gap): 16px (spacing/xl)Radius: 20px (radius/2xl)Fill: surface/neutral/quaternary-mutedBorder: stroke/md + border/neutral/secondary-muted (항상 아웃라인형)DataList 속성: 기본값 layout=split, size=14, hasDivider=falseDataList Group: 복수 DataList일 때 묶으며 gap: 12px 적용 (단일 쌍이면 Group 없이 직접 배치)3) Text Box설명·이용 안내·주의·상태 전달 목적의 Auto Layout 프레임입니다.PlaintextText Box
├─ Title / Section — 필요한 경우
└─ TextList Group
   ├─ TextList / Unordered
   └─ TextList / Unordered
레이아웃: Vertical Auto Layout내부 패딩: 사방 32px내부 간격 (Gap): 16px (spacing/xl)Radius: 14px (radius/lg)스타일 옵션:아웃라인형: Fill surface/neutral/quaternary-muted / Border stroke/md + border/neutral/secondary-muted (독립 영역 경계 필요 시)회색 배경·무테형: Fill surface/neutral/tertiary-muted / Border 없음 (strokes: []) (보조 안내 구분 및 테두리 중첩 방지 시)4.4 박스 분류 판정 및 반복 배치 규칙사실 데이터에 상태 Label/Badge가 붙어 있어도 동작이 없으면 Data Block입니다.전화번호나 이메일이 포함되어도 안내 문맥이 주목적이면 Text Box입니다.Data Block 외부에 형제 Button Area가 있어도 박스 자체에 동작이 없으면 Data Block을 유지합니다.반복 배치 및 열거 간격:Card / Surface, Data Block, Text Box가 열거될 때의 간격: gap: 12px반복 묶음은 실제 Auto Layout의 Card Group, Data Block Group, Text Box Group으로 명명합니다.반복 자식 요소에 숫자 순번(Card 1, Card 2 등)을 임의로 붙이지 않습니다.4.5 버튼 조합 및 하단 CTA 패턴4.5.1 최하단 CTA (ButtonGroup)화면 최하단 주요 액션 버튼 영역 규격입니다.래퍼 명칭: Container [숫자]컴포넌트: ButtonGroup컴포넌트 속성: count: multi, size: large내부 슬롯 (slot-button) 구성: BoxButton 2개 배치좌측 버튼 (부정/이전 등): variant: tertiary우측 버튼 (긍정/다음 등): variant: primary두 버튼 간격: gap: 12pxPlaintextContainer [N]
└─ ButtonGroup (count: multi, size: large)
   └─ slot-button (gap: 12px)
      ├─ BoxButton (variant: tertiary) — 좌측 / 부정
      └─ BoxButton (variant: primary) — 우측 / 긍정
4.5.2 본문 중간 보조 버튼 조합최하단 CTA 외에 본문 중간 특정 콘텐츠 그룹과 버튼이 결합할 때의 규격입니다.컴포넌트: BoxButton (variant: secondary, size: medium)간격: 선행 콘텐츠 그룹과 버튼 사이 간격 gap: 24px레이어 구조: [콘텐츠 그룹] / Button AreaPlaintext[콘텐츠 그룹] / Button Area (gap: 24px)
├─ [콘텐츠 그룹] (예: Card Group, InputField Group 등)
└─ Button Area
   └─ BoxButton (variant: secondary, size: medium)
4.6 단계형 화면 (Step Indicator)스텝을 나타내는 화면 상단 타이틀 영역 규격입니다.Container [숫자] 프레임 내부에서 Title / Page 우측에 StepIndicator / Horizontal을 가로 배치합니다.PlaintextContainer [N] (Auto Layout Horizontal)
├─ Title / Page
└─ StepIndicator / Horizontal
4.7 완료 화면 (Feedback)업무 완료 또는 결과 안내 화면 패턴입니다.Container 1 내부에 Feedback 컴포넌트를 배치합니다.Padding: 20px 0 (상하 20px, 좌우 0)Plaintext## BODY
└─ Container 1 (padding: 20px 0)
   └─ Feedback
5. 레이어 명명 및 그룹핑 규칙 (12장)최상위 화면 프레임의 이름은 61.9장의 화면ID_화면명 규칙을 따릅니다. 화면 내부의 사용자 정의 레이어 및 그룹은 아래 명명 규칙을 적용합니다.12.0 참조 화면 학습과 생성 시 적용 우선순위참조 화면의 간격, 패딩, 크기, 서체, 색상, 컴포넌트 변형, 시각적 위계를 파악하여 규칙으로 정리합니다.참조 화면의 ## BODY 내부 레이어 이름과 미정리 상태(잘못된 Group 명칭, 불필요한 중간 래퍼 등)는 복제 기준으로 삼지 않습니다.신규 화면 생성 시 기획상의 역할과 본 절(12.1~12.11)의 명명 규칙을 우선 적용합니다.기존 화면 정리 시 Container의 개수, 부모, 순서, 역할 분할을 임의로 변경하지 않습니다.디자인 시스템 인스턴스의 원형 이름과 내부 고유 계층을 유지하며, 정리를 위해 인스턴스를 Detach하지 않습니다.12.1 기본 원칙사용자 정의 레이어/그룹 이름은 역할을 알 수 있는 영문(PascalCase 등)으로 작성합니다.디자인 시스템 컴포넌트의 원형 이름과 내부 고유 계층은 그대로 유지합니다.관련 항목은 이름만 Group으로 변경하지 않고 실제 Auto Layout으로 묶습니다.12.2 화면의 기본 영역화면: ## HEADER, ## BODY, ## FOOTERPopup 컴포넌트 내부: Header, Body, Footer12.3 Container 명명 규칙본문 Container가 1개인 경우: Container본문 Container가 복수인 경우: 위에서부터 순서대로 Container 1, Container 2, Container 3으로 명명개별 Slot 내부에서도 동일한 기준을 적용합니다.다른 화면이나 다른 Slot의 Container 개수는 합산하지 않습니다.Plaintext## BODY
├─ Container 1
├─ Container 2
└─ Container 3
12.4 동일 항목의 반복 ([명칭] Group)동일한 종류 및 역할의 항목이 복수로 반복되면 Auto Layout으로 묶고 [명칭] Group으로 명명합니다. 자식 요소는 원래 이름을 유지하며 순번(InputField 1 등)을 붙이지 않습니다.PlaintextInputField Group
├─ InputField
├─ InputField
└─ InputField
그룹 명칭 예시:Text GroupTextList Group (기본 gap: 4px / spacing/xs)InputField GroupDataList Group (기본 gap: 12px)Card Group (기본 gap: 12px)Data Block Group (기본 gap: 12px)Text Box Group (기본 gap: 12px)Accordion GroupRadio GroupCheckbox Group12.5 단일 항목의 래퍼단일 항목을 배치 목적으로 감싸는 경우 Group을 붙이지 않고 해당 컴포넌트 명칭을 그대로 사용합니다.PlaintextInputField (Auto Layout 래퍼)
└─ InputField (컴포넌트 인스턴스)
12.6 서로 다른 두 요소의 결합 ([요소 1] / [요소 2])실제 구성 요소의 대표 명칭을 /로 연결합니다. 세부 유형(Title / Page, Title / Section)은 대표 명칭인 Title로 정리하며, Group이나 Button Area와 같은 역할 명칭은 보존합니다.자식 구성부모 레이어 이름Title / Page + InputFieldTitle / InputFieldTitle / Section + InputField GroupTitle / InputField GroupTitle / Section + List GroupTitle / List GroupTitle / Element + TextTitle / TextInputField Group + Button AreaInputField Group / Button AreaCard Group + Button AreaCard Group / Button AreaText + TextList GroupText / TextList Group12.7 여러 종류의 콘텐츠 결합 ([첫 요소] / Contents)서로 다른 3개 이상의 덩어리 또는 제목과 복합 본문을 묶을 때는 [첫 요소의 대표 명칭] / Contents로 명명합니다.PlaintextTitle / Contents
├─ Title / Page
├─ InputField Group
└─ Accordion
PlaintextTitle / Contents
├─ Title / Section
└─ Text / TextList Group
복수의 제목-콘텐츠 조합을 아우르는 상위 래퍼 역시 Title / Contents를 사용하며, 동일한 결합 명칭을 상·하위로 중첩하지 않습니다.12.8 Text와 TextList 구분단일 일반 본문:PlaintextText
└─ Content
복수 일반 본문:PlaintextText Group
├─ Text
│  └─ Content
└─ Text
   └─ Content
복수 TextList:PlaintextTextList Group (gap: 4px / spacing/xs)
├─ TextList / Unordered
└─ TextList / Unordered
혼합 본문:PlaintextTitle / Contents
├─ Title / Element
└─ Text / TextList Group
   ├─ Text
   │  └─ Content
   └─ TextList Group
      ├─ TextList / Unordered
      └─ TextList / Unordered
일반 Text만 반복되는 그룹을 TextList Group으로 명명하지 않습니다.Text와 TextList가 결합된 전체를 TextList Group으로 명명하지 않습니다.12.9 버튼 영역 (Button Area)본문의 독립적인 버튼 그룹 또는 영역은 Button Area로 명명합니다.PlaintextInputField Group / Button Area
├─ InputField Group
│  ├─ InputField
│  └─ InputField
└─ Button Area
   └─ BoxButton

```

---

## 6. 삭제 예정 참조 화면의 재사용 패턴

다음 기록은 2026-11-10 Figma 원본의 구조·서체·스크린샷을 직접 확인한 결과다. 원본 화면이 삭제되어도 패턴을 재사용할 수 있도록 실측값과 컴포넌트 참조를 보존한다. 향후 전달되는 참조 화면도 이 절에 누적한다.

- 기존 필수 디자인 규칙과 원본 기획안을 우선한다. 참조 화면의 미정리 명칭·중첩은 복제하지 않는다.
- px 값은 실측 설명이며 생성 시 디자인 시스템 토큰을 사용한다. 바인딩 확인값과 적용 제안을 구분한다.
- 조건부 노출의 업무 조건은 기획안에 따르며, 아래에서는 확인된 현재 상태와 향후 구성 원칙을 구분한다.

### P01. 목록 상단 총 건수·도구 / 목록 하단 텍스트 버튼·일괄 변경

#### 원본과 기록 범위

- 확인일: 2026-11-10
- 파일: `03. 고객정보 관리` / fileKey `2MavuzZhNpHpqer5fk3ML4`
- 페이지: `01. 고객정보조회/수정(기획 v0.81)` / `2:278`
- 화면: `Case_관리_2` / `88:23627` / 표시 제목 `자주쓰는 계좌관리`
- 사용자 지정 출발점: `Container 3` / `88:23650`
- 원본 링크: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-23650
- 원본 화면은 1440×1667, 본문은 1440×1158. 본문의 콘텐츠 폭은 1360이다.
- 구조·서체를 Plugin API로 확인하고 화면 스크린샷과 대조했다. Figma 원본은 수정하거나 삭제하지 않았다.
- 보존 범위는 그룹 관계, 간격, 상·하단 도구 패턴이다. 전체 표의 모든 데이터/셀, 헤더·푸터를 복원하는 명세는 아니다.

#### 1. 원본 계층

```text
Case_관리_2
├─ ## HEADER (기업용헤더 X)              1440×157
├─ ## BODY                              V / gap 48 / padding 48 40
│  ├─ Container 5                       Title / Page
│  ├─ Container 2                       Infobox / FullWidth
│  ├─ Container 3                       V / gap 20
│  │  ├─ Tab                            1depth / 높이 60
│  │  └─ Amount / Contents [외부]         V / gap 20
│  │     ├─ Amount / Contents [상단 행]   H / gap 20 / 아래 정렬
│  │     │  ├─ Amount                   Fill W / Hug H
│  │     │  │  ├─ Left                  총 건수
│  │     │  │  └─ Right                 23 + 건
│  │     │  └─ BoxButton Group / InputField
│  │     │     ├─ BoxButton Group       H / gap 8
│  │     │     │  ├─ BoxButton          계좌순서변경
│  │     │     │  └─ BoxButton          계좌그룹관리
│  │     │     └─ InputField            그룹 전체
│  │     └─ Table [외부 래퍼]            V / gap 16
│  │        ├─ Table [실제 표]           GRID / 1360×540
│  │        └─ TextButton Group / Contents
│  │           ├─ TextButton Group      필터 / 검색 / 편집
│  │           └─ Text / Contents       H / gap 8
│  │              ├─ Text               다중선택 그룹변경
│  │              │  └─ Title
│  │              ├─ InputField         전체
│  │              └─ BoxButton          이동
│  └─ Container 4                       ButtonGroup: 삭제 / 수정
└─ ## FOOTER (기업용푸터 X)              1440×352
```

`H`는 가로, `V`는 세로 Auto Layout이다. `[외부]` 같은 대괄호 설명은 문서상 구분용이며 실제 레이어 이름이 아니다.

#### 2. 그룹 간 간격과 배치

| 관계/영역 | 실측 | 토큰/상태 | 적용 의미 |
|---|---:|---|---|
| BODY 상하 패딩 | 48 | `spacing/7xl`, 바인딩 확인 | 본문 시작·끝 여백 |
| BODY 좌우 패딩 | 40 | `spacing/6xl`, 바인딩 확인 | 1440 중 콘텐츠 1360 |
| 제목 ↔ Infobox | 48 | BODY gap, `spacing/7xl` | 형제 Container 간격 |
| Infobox ↔ Container 3 | 48 | BODY gap, `spacing/7xl` | 안내와 목록의 구분 |
| Container 3 ↔ 하단 CTA | 48 | BODY gap, `spacing/7xl` | 목록·도구 전체 다음 CTA |
| Tab ↔ 상단 총 건수/도구 행 | 20 | `spacing/2xl`, 바인딩 확인 | Container 3 gap |
| 상단 총 건수/도구 행 ↔ 표 | 20 | 외부 `Amount / Contents` gap, `spacing/2xl` | 목록 요약과 실제 표 간격 |
| 상단 행 Amount ↔ 오른쪽 도구 | 20 | 원본에 직접 바인딩 없음 | 재구성 시 20 토큰 `spacing/2xl` 사용 |
| 상단 BoxButton 상호 간격 | 8 | `spacing/md`, 바인딩 확인 | 두 버튼을 실제 Auto Layout 그룹으로 묶음 |
| 상단 BoxButton Group ↔ InputField | 8 | 원본에 직접 바인딩 없음 | 재구성 시 `spacing/md` 사용 |
| Amount의 Left ↔ Right | 4 | `spacing/xs`, 바인딩 확인 | 문구와 수량 사이 |
| Amount의 숫자 ↔ 단위 | 2 | `spacing/2xs`, 바인딩 확인 | `23`과 `건`을 분리 |
| 표 ↔ 하단 도구 행 | 16 | `spacing/xl`, 바인딩 확인 | Table 외부 래퍼 gap |
| 하단 TextButton 상호 간격 | 16 | `spacing/xl`, 바인딩 확인 | 필터·검색·편집 간격 |
| 하단 왼쪽 그룹 ↔ 오른쪽 그룹 | 자동 분배 | `SPACE_BETWEEN`, itemSpacing 값 20 | 실제 양쪽 사이 빈 폭은 20 고정이 아님 |
| 하단 오른쪽 Text ↔ InputField ↔ BoxButton | 8 | `spacing/md`, 바인딩 확인 | 안내문·선택·실행의 결합 |
| CTA 삭제 ↔ 수정 | 12 | ButtonGroup의 `Slot-Button` 실측 | 그룹 바깥 gap 0과 혼동하지 않음 |

본문 자식의 BODY 상대 y는 제목 48, Infobox 132, 목록 270, CTA 1054이다. 목록 높이 736, CTA 높이 56이며 내용 변경 시 고정 복제하지 않고 Hug로 재계산한다.

참고: Infobox는 padding 상하 20/좌우 24, gap 12. 원본에서 제목·CTA를 감싼 Container의 gap 10은 자식이 하나라 시각적 간격에 영향을 주지 않는다. 이를 공통 간격 규칙으로 학습하지 않는다.

#### 3. Amount / Contents: 총 건수 + 오른쪽 버튼/필드

이 패턴의 핵심은 **왼쪽 Amount가 Fill로 남는 폭을 차지하고, 오른쪽 도구는 Hug로 오른쪽 끝에 붙는 것**이다. 상단 행 자체는 `SPACE_BETWEEN`이 아니라 `primaryAxisAlignItems=MIN`, `counterAxisAlignItems=MAX`이다.

- 상단 행: 가로 Auto Layout, 가로 Fill·세로 Hug, padding 0, gap 20, 세로 아래 정렬.
- 실측 1360×40: Amount 952×24 + gap 20 + 오른쪽 도구 388×40.
- Amount는 y=16에 배치되어 40 높이의 버튼·필드 하단과 맞는다. 임의 y 오프셋으로 재현하지 않고 아래 정렬을 사용한다.
- Amount 내부: 가로, gap 4, 세로 중앙 정렬. Left/Right는 모두 Hug.
- Right 내부: 가로, gap 2, 세로 중앙 정렬. 숫자와 단위를 별도 텍스트로 둔다.
- 오른쪽 `BoxButton Group / InputField`: 가로, gap 8, 가로·세로 Hug, 세로 중앙 정렬.
- `BoxButton Group`: 가로, gap 8, Hug. 버튼 variant는 `secondary`, size는 `small`, 높이 40.
- `계좌순서변경`: 폭 120 고정, 선행 `line-reorder01` 아이콘 16×16.
- `계좌그룹관리`: 폭 100 실측, Hug.
- 상단 InputField는 폭 152 고정, 높이 40/Hug. 표시 문구 `그룹 전체`, 오른쪽 `line-chevron-down` 20×20인 선택형 구성이다.
- 필드 내부 인스턴스 계층: `InputField > Item / Input > Item / FilledStyle > text + Item / Affix`. 기본 InputField 인스턴스만 가져오는 것으로 선택형 구성이 완성되는 것은 아니므로 해당 하위 구성도 유지한다.

#### 4. TextButton Group / Contents: 표 하단 양쪽 도구

- 전체 행: 가로 Auto Layout, 가로 Fill·세로 Hug, padding 0, **가로 SPACE_BETWEEN / 세로 MIN(위 정렬)**.
- 실측 1360×40. 왼쪽 161×20, 오른쪽 289×40. 왼쪽 버튼은 오른쪽 필드와 세로 중앙이 아니라 윗선이 맞는다.
- 원본 itemSpacing 속성은 20이지만 양끝 정렬로 실제 사이 빈 공간은 `1360 - 161 - 289 = 910`이다. 910을 고정 gap으로 저장하거나 만들지 않는다.
- 왼쪽 `TextButton Group`: H, gap 16, Hug/Hug, 세로 중앙 정렬.
- 순서: `필터`, `검색`, `편집`. 각각 TextButton `variant=primary, size=small`, 43×20 실측. 16×16 선행 아이콘이 표시되며 버튼 내부 아이콘·라벨 gap은 2이다. 필터 아이콘의 실제 이름은 `line-filter`; 검색·편집의 정확한 아이콘 key는 수집하지 않았다.
- 오른쪽 `Text / Contents`: H, gap 8, Hug/Hug, 세로 중앙 정렬.
- 구성: 안내 Text `다중선택 그룹변경` 103×20 + InputField `전체` 120×40 + BoxButton `이동` 50×40.
- 오른쪽 InputField 역시 선택형이며 오른쪽 chevron 20×20을 포함한다. 이동 버튼은 `secondary/small`이다.
- 표와 이 행을 같은 세로 래퍼에 넣고 gap 16으로 결합한다. 하단 CTA와는 구별되는 표 조작 도구 영역이다.

#### 5. 서체·색상

| 요소 | 폰트 | 크기/행높이 | 텍스트 토큰 또는 확인 스타일 |
|---|---|---|---|
| 총 건수 | KBFG Text Medium | 14/20 | `text/neutral/quaternary` |
| 숫자 23 | Pretendard SemiBold | 17/24 | `text/neutral/secondary` |
| 단위 건 | KBFG Text Bold | 14/20 | `text/neutral/secondary` |
| 소형 BoxButton·선택 필드 라벨 | KBFG Text Bold | 14/20 | 원본 텍스트 스타일 ID는 아래 참조 |
| 필터·검색·편집 | KBFG Text Medium | 14/20 | 원본 텍스트 스타일 ID는 아래 참조 |
| 다중선택 그룹변경 | KBFG Text Medium | 14/20 | `text/neutral/tertiary` |
| 페이지 제목 | KBFG Text Bold | 26 / 미수집 | 실제 Title / Page 인스턴스 유지 |
| 활성 / 비활성 탭 | KBFG Text Bold / Medium | 20 / 미수집 | 실제 Tab 인스턴스 유지 |
| 하단 삭제·수정 | KBFG Text Bold | 18/25 | 실제 ButtonGroup 인스턴스 유지 |

직접 확인한 본문/수량 텍스트의 자간은 0px이다. 숫자에 `font-size/title/lg-numeric`, `line-height/title/lg`, `font-family/numeric`, `font-weight/semibold`가 바인딩되어 있다. 일반 14px 문구는 `font-size/body/md`, `line-height/body/md`, `font-family/base`를 사용한다.

원본 스타일 참조(발행 최신본에서 다시 확인; ID만 믿고 하드코딩하지 않음):

- Medium 14/20: `S:f5f81baf6718bb904b4793a0ecf70ff694044489,15632:416`
- Bold 14/20: `S:fd29c6c3e60f91d214e519fc9a48bdb7bca2741a,15632:415`
- 숫자 SemiBold 17/24: `S:8b7acf18fb401cac008995792d7e76e36b2a9a5a,18494:103`

#### 6. 조건부 노출 시 재사용 규칙

**관찰 사실:** 현재 Container 3 아래는 숨김 노드가 없으며, 총 건수·상단 버튼·상단 필드·하단 텍스트 버튼·하단 일괄 변경 영역이 모두 표시되어 있다. 사용자 설명에 따라 이 요소들은 향후 화면에서 조건부로 표시될 수 있다. 실제 노출 조건, 권한, 선택 건수와의 연결은 아직 제공되지 않았다.

**향후 제작에 적용할 구성 원칙(원본에서 다른 상태까지 검증한 것은 아님):**

| 가변 영역 | 구성 처리 |
|---|---|
| 상단 개별 BoxButton | 필요한 버튼만 표시하고 나머지는 레이아웃에서 제외한다. 남은 버튼 사이 gap 8 유지 |
| 상단 버튼 전부 | 빈 BoxButton Group을 숨기거나 제거하여 빈 그룹의 gap을 남기지 않는다 |
| 상단 선택 필드 | 필드만 비노출 가능. 버튼 그룹이 남으면 오른쪽 Hug를 유지 |
| 상단 오른쪽 도구 전부 | 빈 오른쪽 래퍼도 제외. Amount가 전체 폭을 채우고 행 높이는 내용에 맞게 감소 |
| 총 건수만 비노출 | 오른쪽 도구의 오른쪽 정렬을 명시적으로 보장한다. Fill 역할까지 없어지면 기존 MIN 정렬만으로는 도구가 왼쪽으로 이동하므로 재배치 필요 |
| 하단 개별 TextButton | 필요한 버튼만 표시하고 나머지는 레이아웃에서 제외. gap 16 유지 |
| 하단 일괄 변경 | Text / Contents 전체를 하나의 의미 단위로 노출·비노출하는 것을 기본으로 하되, 기획안에서 세부 요소별 조건을 주면 그에 따름 |
| 하단 오른쪽만 비노출 | 왼쪽 TextButton Group은 왼쪽 정렬 유지. 행 높이는 남은 콘텐츠에 맞게 Hug |
| 하단 왼쪽만 비노출 | 오른쪽 영역의 오른쪽 정렬을 명시적으로 보장. SPACE_BETWEEN에 자식 하나만 남겼을 때 자동으로 우측 정렬될 것이라 가정하지 않음 |
| 하단 양쪽 모두 비노출 | 전체 하단 도구 행도 제외하여 표 아래 gap 16이 빈 행 때문에 남지 않도록 함 |

- 비노출을 opacity=0으로 처리해 빈 공간을 유지하지 않는다. 화면에서 제외되는 요소는 `visible=false` 또는 해당 생성 분기에서 생략하고, 빈 래퍼도 함께 처리한다.
- 부모는 Hug, 콘텐츠는 적절한 Fill/Hug로 구성하며 현재 실측 높이 40/656/736 등을 통째로 고정하지 않는다.
- `0건`, 조회 결과 없음, 선택 항목 없음일 때의 노출·비활성 정책은 미정이다. 권한이나 데이터 조건을 임의로 만들지 말고 원본 기획안을 따른다.
- 향후 실제 조건이 제공되면 이 절에 확정 정책을 추가한다.

#### 7. 신규 생성 시 명명 적용

- 원본 Container 순서는 `Container 5 → Container 2 → Container 3 → Container 4`이다. 원본을 정리할 때 부모·순서·역할을 임의로 바꾸지 않는다. 신규 화면은 최신 규칙에 맞게 위에서부터 Container 1…로 명명한다.
- 원본에는 `Amount / Contents`가 상하위에 중복된다. 이 중첩 명칭 자체를 재사용 기준으로 삼지 않는다. 총 건수+도구의 **상단 행**은 `Amount / Contents`, 이를 표까지 감싸는 래퍼는 `Container [N]` 등 실제 역할에 맞게 구성하여 동일 조합 명칭의 중첩을 피한다.
- `BoxButton Group`, `TextButton Group`은 이름만 Group으로 바꾸는 것이 아니라 실제 가로 Auto Layout이다. 자식 버튼은 `BoxButton 1`처럼 순번을 붙이지 않는다.
- `Text / Contents`의 일반 본문 래퍼는 신규 화면에서 최신 규칙의 `Text > Content`를 따른다. 원본 내부 텍스트 이름 `Title`은 복제 의무가 아니다.
- 실제 디자인 시스템 인스턴스의 원형 이름과 고유 내부 계층은 유지한다.
- 이 참조 화면의 BODY는 **세로 Auto Layout**이다. 기본 디자인 규칙의 가로 BODY와 차이가 있으므로, 같은 시각적 세로 목록 구성을 만들더라도 최신 BODY 규칙을 따르고 내부 Container에서 세로 흐름을 구성한다. 차이를 숨기거나 원본 속성을 무조건 전역 규칙으로 승격하지 않는다.

#### 8. 컴포넌트 재연결 참조

화면 노드 ID는 삭제 후 사용할 수 없다. 아래는 당시 실제 인스턴스가 참조한 main component key다. 컴포넌트/라이브러리까지 삭제되면 key도 복원을 보장하지 않으므로 최신 KBDS 라이브러리에서 이름·variant를 확인한다. 슬롯 및 아이콘 오버라이드는 별도로 적용해야 한다.

| 컴포넌트 | 원본 variant | component key |
|---|---|---|
| Title / Page | align=left | `366007b354df25708d9dce4a7788c2b44e30dba3` |
| Infobox / FullWidth | 단일 컴포넌트 | `5fb7ce75dbc07c0aeca6e8cd5bfb876c0d0f7892` |
| Tab | variant=1depth, extendable=true | `53915edb5ada4215a859be5fca8d36a7e113c881` |
| ButtonGroup | count=multi, size=large | `f6fbbaad278bc5dc3e0568efdc16711894a01e47` |
| BoxButton | variant=secondary, size=small | `b20b82eee273f930c668788109e73de668023c03` |
| TextButton | variant=primary, size=small | `95687195c8b0873f0e13393cf059964ecfde2604` |
| InputField | hover/focused/disabled/entered/error=false | `6a180f941f7bc12168489ec44f9203d0f3a4e7cc` |

BoxButton/TextButton의 hover/disabled/pressed는 모두 false인 기본 상태였다. CTA는 중앙 320×56, 슬롯 gap 12, 각 버튼 154×56 실측이며 문구는 삭제/수정이다. CTA의 좌측 tertiary·우측 primary 사용은 기본 디자인 규칙에 따른다.


### P02. 테이블 안 비밀번호·OTP·보안 입력 + 확인 버튼

#### 출처와 적용 범위

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-24159
- 화면 `Case_비밀번호발급/변경` / `88:24078`, 본문 `88:24083`, 지정 셀 `Table / Cell` / `88:24159`.
- **비밀번호, OTP 및 보안 관련 입력에서 개별 확인 버튼이 필요하면 이 패턴을 사용한다.** 확인은 해당 입력 바로 오른쪽에 둔다. 확인 버튼이 없는 입력까지 일괄 추가하지 않는다.
- 이 절은 UI 구성 기록이며 보안 정책·OTP 실패 횟수 등 업무 규칙을 새로 정하지 않는다. 문구와 검증 조건은 해당 원본 기획안에 따른다.

#### 셀 내부 구조 및 규격

```text
Table / Cell (실제 인스턴스)
└─ Slot-Content                      V / Hug W·H / gap 4
   └─ Input / Button                 H / Hug W·H / gap 8
      ├─ InputField                  400×40 / Fixed W·Hug H
      │  └─ Item / Input
      │     └─ Item / FilledStyle     variant=basic
      │        ├─ text / Label       비밀번호 입력
      │        └─ Item / Affix        variant=icon
      │           └─ line-device-mouse  20×20
      └─ BoxButton                   secondary / small / 확인
```

| 요소/관계 | 원본 실측·정렬 | 토큰/적용 |
|---|---|---|
| Table / Cell | 1020×65, 가로 Fill·세로 Hug, H, 세로 CENTER | 실제 Table / Cell 인스턴스 유지 |
| 셀 padding | 상하 12 / 좌우 16 | `spacing/lg` / `spacing/xl` 바인딩 확인 |
| Slot-Content | 458×40, V, 주축 CENTER·교차축 MIN, padding 0 | gap 4 = `spacing/xs` |
| Input / Button | 458×40, H, 주축 MIN·교차축 MIN, padding 0 | gap 8 = `spacing/md` |
| InputField | 400×40, 폭 고정·높이 Hug | 예시 폭이며 기획상 입력 폭이 다르면 규격에 맞게 조정 |
| 확인 BoxButton | 50×40 실측, Hug W·H, 중앙 정렬 | `variant=secondary, size=small` |
| 필드 / 버튼 높이 | 각 40 | 같은 행에서 높이를 맞춤 |
| 필드 placeholder·확인 라벨 | KBFG Text Bold 14 / line-height 20 | 숫자 입력값과 안내 라벨을 구별 |
| 보안 입력 affix | line-device-mouse, 20×20 | 실제 아이콘/하위 인스턴스 사용, 도형으로 재제작하지 않음 |

- 셀 왼쪽의 Table / Header는 폭 340, 세로 Fill로 입력 셀 높이 65에 맞춰진다. 테이블 전체 폭은 1360이다. 65는 테두리가 포함된 원본 행 실측이며 내용 변화 시 고정하지 않는다.
- `Input / Button`은 원본 사용자 정의 프레임 이름이다. 신규 생성 시 두 컴포넌트 대표 명칭을 반영하여 `InputField / BoxButton`으로 명명하고 실제 가로 Auto Layout으로 묶는다. 인스턴스 내부 고유 명칭은 유지한다.
- 현재 비밀번호에는 확인 버튼이 있고, 변경 후 비밀번호/재확인 필드는 비활성으로 보인다. 이 상태를 모든 보안 입력에 고정하지 않으며, 확인 전후 활성화 조건은 기획안에 따른다.
- 원본 InputField는 기본 상태 hover/focused/disabled/entered/error=false이며, 기본 입력 안에 basic FilledStyle과 보안 affix가 결합되어 있다. 상위 InputField key만 가져와 놓고 보안 affix 구성을 생략하지 않는다.

#### OTP 및 표 하단 안내 결합

```text
Title / Table                       V / gap 20
├─ Title / Headline
└─ Table / TextList Group            V / gap 16
   ├─ Table Grid
   │  ├─ Table / Header             일회용 비밀번호(OTP)
   │  └─ Table / Cell
   │     └─ Slot-Content
   │        └─ InputField / BoxButton  H / gap 8
   └─ TextList Group                V / gap 4
      ├─ TextList / Unordered
      └─ TextList / Unordered
```

- 원본 OTP 셀 `88:24209`에도 동일한 458×40 입력·확인 조합이 있다. placeholder는 `숫자 6자리 입력`, 확인 버튼은 우측에 배치된다.
- 제목 ↔ 표: 20 (`spacing/2xl`), 표 ↔ 하단 설명 묶음: 16 (`spacing/xl`), 설명 항목 상호: **4 (`spacing/xs`)**.
- 원본 설명 래퍼 이름 `textlists`는 신규 생성 시 `TextList Group`으로 정리한다.
- OTP 하단의 두 TextList는 `variant=bullet, size=14, depth=2`, 왼쪽 padding 24, 항목 높이 20 실측이다. 들여쓰기 depth는 기획 위계에 맞게 선택한다.
- 표 섹션 상호 간격은 BODY 기준 48 (`spacing/7xl`), Title / Headline은 KBFG Text Bold 20/28이다.
- `Table Grid`의 itemSpacing 속성 10을 셀 사이 가로·세로 간격으로 일반화하지 않는다. 실제 셀은 테이블 경계를 공유한다.

#### 재연결용 component key

| 컴포넌트 | 원본 variant | key |
|---|---|---|
| Table / Cell | variant=last, onlyNumber=false | `1b5a0ae0fefd157325271672a78224db2575f047` |
| Table / Header | variant=default, onlyNumber=false | `ba105a8f29acb712e5c5aa6a3cb2015de330f392` |
| InputField | 기본 상태 | `6a180f941f7bc12168489ec44f9203d0f3a4e7cc` |
| Item / Input | variant=default, 기본 상태 | `1a21da059bc9d4f0221961b447fec3e41c87a5f9` |
| Item / FilledStyle | variant=basic, 기본 상태 | `2e141cbc64f8475eac9ee37813adcb05d2b4fe32` |
| Item / Affix | variant=icon | `90158ead1d86ecab993ccf6679ce8a99b885d955` |
| line-device-mouse | 아이콘 | `d21898e990a7cf0e303ee14aae6919465f54bf4a` |
| BoxButton | secondary/small | `b20b82eee273f930c668788109e73de668023c03` |
| TextList / Unordered | bullet/14/depth=2 | `5a5dbb8e2363c9870344034ad126740094189999` |
| Title / Headline | align=left | `bf50f457ca5583c356608499f2a479e58248073a` |

### P03. 서비스 약관 동의 화면의 기본 본문 구성

#### 출처와 적용 범위

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-24300
- 화면 `Case_등록` / `88:24300`, 표시 제목 `전자금융거래제한계좌 등록`, 본문 `88:24305`.
- **서비스 약관/유의사항 확인과 동의가 필요한 화면의 기본 본문 구성으로 사용한다.** 문구와 단계 수는 기획안으로 교체한다.
- 헤더·푸터는 기록 범위에서 제외했다. 본문의 구조·컴포넌트·서체를 조회하고 본문 스크린샷으로 대조했다. Figma 원본은 수정하지 않았다.

#### 기본 구조: 신규 화면 명명 기준

```text
## BODY
├─ Container 1                         제목 / 단계 영역
│  ├─ Title / Page
│  └─ StepIndicator / Horizontal
├─ Container 2                         V / gap 16
│  ├─ Text Box                         약관·유의사항 안내
│  │  └─ Text / TextList Group          V / gap 16
│  │     ├─ Text Group                 V / gap 12
│  │     │  ├─ Text > Content           핵심 안내
│  │     │  └─ Text > Content           보조 안내
│  │     └─ TextList Group              V / gap 4 (사용자 확정)
│  │        └─ TextList / Unordered × N
│  └─ Item / Consent                   variant=1d
│     ├─ Prefix / Item / Prefix        check-large
│     └─ Label                        동의 문구
└─ Container 3                         CTA 중앙 배치
   └─ ButtonGroup
      └─ Slot-Button
         └─ BoxButton                 primary / large
```

이 구조는 역할과 최신 명명 규칙을 적용한 재사용 구조다. 원본 이름 `Text + Text List Box`, `Text + List Group`, `List Group`, `Frame 2147246237`은 신규 화면에서 각각 `Text Box`, `Text / TextList Group`, `TextList Group`, `Container 3`로 정리한다. 일반 본문이 두 개이므로 `Text Group`으로 구분하며 일반 Text를 TextList로 분류하지 않는다.

#### 간격 및 크기

| 영역/관계 | 원본 확인값 | 신규 생성 적용 |
|---|---|---|
| BODY | 1440×730, V, Hug H, padding 48 40 | 상하 `spacing/7xl`=48 / 좌우 `spacing/6xl`=40 |
| 본문 콘텐츠 폭 | 1360 | BODY 좌우 padding을 제외한 폭 |
| 제목 영역 ↔ 안내·동의 영역 | 48 | `spacing/7xl` |
| 안내·동의 영역 ↔ 하단 CTA | 48 | `spacing/7xl` |
| 제목 영역 | H, SPACE_BETWEEN/CENTER, 1360×36 | Title / Page + StepIndicator / Horizontal |
| Title / Page | Fill W·Hug H, 높이 36 | KBFG Text Bold 26/36 |
| StepIndicator / Horizontal | Hug W·Hug H, 높이 32 | 우측 배치, 현재 단계 1 서비스동의 / 총 4단계 예시 |
| 안내 박스 ↔ Item / Consent | 16 | `spacing/xl` 바인딩 확인 |
| 안내 박스 padding | 사방 32 | `spacing/5xl` 바인딩 확인 |
| 안내 박스 내부 Text / TextList Group | V, gap 16, Fill W·Hug H | `spacing/xl` |
| 핵심 안내 ↔ 보조 안내 | 12 | `spacing/lg` 값 적용 (원본 직접 바인딩 없음) |
| 일반 본문 묶음 ↔ 목록 묶음 | 16 | `spacing/xl` |
| 복수 TextList 항목 간격 | 원본 8 | **사용자 최신 지시로 4 / `spacing/xs` 적용** |
| Item / Consent | 1360×48, H, padding 상하 12/좌우 0 | 가로 Fill·세로 Hug |
| Consent의 Prefix ↔ Label | 8 | `spacing/md` |
| Consent 체크 Prefix | 24×24 | Item / Prefix `variant=check-large` |
| Consent Label | Fill W·Hug H, 24 높이 | KBFG Text Bold 16/24 |
| 하단 CTA | 가운데 154×56 실측, Hug W·Hug H | BoxButton `primary/large` 1개 |

- 제목 영역의 itemSpacing 속성은 48이지만 실제 원본은 Title Fill + StepIndicator Hug 및 SPACE_BETWEEN 구성이다. 실측 Title 폭 1136.8과 Step 폭 223.2가 전체 1360을 채우므로 두 요소 사이에 별도 48 고정 여백이 보이지 않는다. 원본 수치만으로 필수 gap 48을 추가하지 않는다.
- 원본 TextList는 9개이며 각 20 높이, 원본 목록 전체 높이 244(20×9+8×8)다. 최신 gap 4 적용 시 같은 한 줄 9개 목록의 높이는 212(20×9+4×8)로 줄어든다. 텍스트 줄바꿈·테두리를 고려하여 상위 높이는 Hug로 재계산하고 원본 382/446/730 높이를 고정하지 않는다.
- 목록 항목 인스턴스는 `variant=bullet, size=14, depth=1`, KBFG Text Light 14/20, 왼쪽 padding 12다. 인스턴스 내부 마커↔본문 gap 4와 **항목끼리의 세로 gap 4**를 별개 속성으로 관리한다.
- Item / Consent는 안내 박스 내부가 아닌 그 아래 형제 요소다. 체크 동의 영역과 최하단 진행 CTA를 분리한다.
- 원본 CTA 래퍼 gap 10은 자식 하나여서 실제 간격에 영향을 주지 않는다. 버튼 문구 `버튼명`은 자리표시자이므로 화면 기획에 맞는 문구로 교체한다.
- 원본 ButtonGroup의 variant 속성은 `count=multi, size=large`지만 슬롯에는 primary BoxButton 한 개만 있다. 슬롯의 실제 버튼 개수와 variant 이름을 혼동하여 버튼을 두 개로 늘리지 않는다. 신규 생성 시 라이브러리에서 단일 버튼을 지원하는 구성을 확인하되 실제 화면의 단일 CTA 패턴을 유지한다.

#### 안내 박스 스타일과 필수 규칙의 우선순위

- 원본 안내 박스는 Auto Layout FRAME이며 Card / Surface 인스턴스가 아니다. 역할은 설명·안내를 전달하는 **Text Box**다.
- 원본 radius는 12 (`radius/md`), outline은 1px / `border/neutral/secondary-muted`, `strokesIncludedInLayout=true`다. padding 속성 32 외에 테두리 1px가 레이아웃에 포함되어 자식 위치가 33이고 내부 폭은 1294로 관찰된다.
- 원본 fill은 `surface/neutral/tertiary-muted`에 바인딩되어 있으나 **paint.visible=false**라서 배경은 실제로 표시되지 않는다. 변수 연결만 보고 회색 배경을 켜지 않는다.
- 신규 Text Box는 기존 필수 Text Box 규칙을 따른다: padding 32, gap 16, radius 14 (`radius/lg`), 아웃라인형은 `surface/neutral/quaternary-muted` + `stroke/md` + `border/neutral/secondary-muted`. 원본 radius 12나 비노출 fill을 새로운 전역 기본값으로 승격하지 않는다.
- 원본 박스의 gap 20은 직접 자식이 하나라 시각적 자식 간격을 만들지 않는다. 실제 일반 본문↔목록 관계는 내부 래퍼의 gap 16이다.
- 원본 BODY는 세로다. 기존 기본 BODY 가로 규칙과의 차이는 P01과 동일하며 신규 생성은 최신 필수 BODY 규칙을 따르면서 내부 Container에서 세로 흐름을 구성한다.

#### 텍스트 위계와 재사용 시 상태

- 핵심 안내: KBFG Text Medium 16/24, `text/neutral/primary`, 원본 내용은 비대면 업무 제한 안내.
- 보조 안내: KBFG Text Medium 14/20, `text/neutral/secondary`, 원본 내용은 제한 예외 항목 소개.
- 목록: KBFG Text Light 14/20, 실제 TextList / Unordered 인스턴스 유지.
- 동의 문구: KBFG Text Bold 16/24, `text/neutral/primary`. 원본 문구는 `유의사항을 확인하고 계좌 등록에 동의하겠습니다.`
- 단계 숫자: Pretendard 16/24, 현재 단계 SemiBold / 후속 단계 Light. 단계명은 KBFG Text Bold 14/20.
- CTA 라벨: KBFG Text Bold 18/25. 원본 primary 버튼은 disabled=false다.
- 동의 여부에 따른 CTA 활성화, 전문 열람 필요 여부, 필수·선택 항목 구분은 이 정적 화면에서 확정할 수 없다. 새 업무 조건을 만들지 말고 기획안을 따른다. 이 원본에 없는 전체 동의/개별 약관 아코디언·팝업 등을 기본 필수 요소로 추가하지 않는다.

#### 재연결용 component key

| 컴포넌트 | 원본 variant | key |
|---|---|---|
| Title / Page | align=left | `366007b354df25708d9dce4a7788c2b44e30dba3` |
| StepIndicator / Horizontal | 단일 컴포넌트 | `d621c953803a7eaa545720572e195d3758d84e99` |
| TextList / Unordered | bullet/14/depth=1 | `5e484496e22e7e84c91c23bddfe11d1b4a13f35b` |
| Item / Consent | variant=1d | `ebac2930b3bb7662d3b37ef88d01213c7785aa81` |
| Item / Prefix | variant=check-large | `9f1afa887c4bc676a1c8707957306f752f0ee949` |
| ButtonGroup | count=multi, size=large（원본 슬롯 1개） | `f6fbbaad278bc5dc3e0568efdc16711894a01e47` |
| BoxButton | primary/large, 기본 상태 | `d206f834d8d80e5bd6ab306b8033f3c0e5214bc5` |

참조 화면이 삭제되면 화면 노드 ID는 재사용할 수 없다. component key는 당시 연결 기록이며 라이브러리 최신 이름·variant·토큰을 확인한 뒤 사용한다. Text Box와 사용자 정의 Auto Layout 래퍼는 실제 컴포넌트 인스턴스로 오인하지 않는다.
