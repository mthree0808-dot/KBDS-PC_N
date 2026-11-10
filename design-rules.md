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
- **Title / Section 원본 스펙**: `Title/xl∙18∙Bold`를 사용합니다. P08의 데이터 없음·있음 참조에 잘못 적용된 Title / Section 스펙은 무시합니다. 이전 참조의 제목 높이나 서체 관찰값보다 이 사용자 확정 스펙을 우선합니다.

---


### 2.1 복수 TextList / Unordered의 그룹 간격 (2026-11-10 사용자 확정)

- 복수 `TextList / Unordered`는 실제 세로 Auto Layout의 `TextList Group`으로 묶고 **gap: 4px (`spacing/xs`)**를 적용한다.
- 이 규칙은 안내 박스·약관 안내·테이블 하단 설명 등 복수 TextList 묶음에 공통 적용하며, 참조 화면의 항목 간격이 8 또는 12여도 4를 우선한다.
- **테이블과 하단 TextList Group 사이 간격 16px (`spacing/xl`)은 유지한다.** 항목 간격 4와 묶음 바깥 간격 16을 혼동하지 않는다. 일반 Text Group이나 다른 컴포넌트 내부 고유 gap에 일괄 적용하지 않는다.

## 3. 화면 레이아웃 및 영역 규격

- **팝업 너비:** 일반 Popup은 1200px을 기본으로 사용하며, 자동 로그아웃 안내처럼 짧은 안내형은 400px 소형 구성을 사용할 수 있습니다. 실제 Popup 인스턴스와 Header/Body/Footer 슬롯을 유지하고, 내부 간격·medium CTA 규격은 6장 P07을 따릅니다.


- **집중형 입력 프로세스의 우측 단계 패널:** 해당 UI를 사용하는 화면에서는 `StepIndicator / Vertical` 패널을 `## BODY` 내부의 오른쪽 열에 둡니다. 참조 3열 구성은 LNB 316px / 본문 664px / 단계 패널 316px, 열 간격 32px (`spacing/5xl`), BODY padding 상하 48px·좌우 40px입니다. 상세 구조와 상태는 6장 P04를 따릅니다.


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
4. 컴포넌트 조합 및 패턴별 세부 규칙Tab(1depth) 우측 버튼 조합: Slot > tabs 안에 Tab과 BoxButton을 배치할 수 있습니다. Tab(1depth)과 [Tab(2depth) / SummaryBox] 묶음 사이 gap은 20px, Tab(2depth)과 SummaryBox 사이 gap은 24px입니다. 상세는 6장 P09를 따릅니다.4.1 상단 타이틀 및 인포박스 간격## HEADER 다음: Title / Page 배치Title / Page + Infobox / FullWidth 조합:Title / Page와 Infobox / FullWidth 사이 간격: 48pxInfobox / FullWidth와 그 다음 하단 콘텐츠 사이 간격: 48pxPagination / Basic 배치: 상단 콘텐츠와의 간격 16px4.2 Table 컴포넌트 규칙Title / Section + Table 조합: 제목과 Table 사이 gap은 20px (spacing/2xl)입니다. 데이터 없음은 Feedback small과 바깥 래퍼 상하 padding 32px, Feedback 아이콘·문구 간격 16px를 적용하며 상세 상태 구성은 6장 P08을 따릅니다.Table 제작 기본: Table이라는 Auto Layout 프레임을 생성하고 Grid로 설정합니다. 열별로 고정 폭과 Fill을 조합하며 실제 Grid의 row/column gap을 사용합니다. 트랙 HUG/FLEX와 자식 셀 FIXED/FILL을 구별하고, 상세 실측과 제작 기준은 6장 P06을 따릅니다.반응형 높이 맞춤 (Fill):Table / Header 또는 Table / Cell이 수평으로 배치될 때, 한쪽 셀의 콘텐츠 증가로 높이가 커지면 상대적으로 작은 쪽의 높이 값을 fill로 설정합니다.Title / Headline + Table 조합:Title / Headline과 Table 사이 간격: gap: 20px동일한 [Title / Headline + Table] 그룹이 하단에 반복될 경우 그룹 간 간격: 48px테이블 하단 설명 텍스트 (TextList / Unordered):테이블 하단에 단일 또는 복수의 TextList / Unordered가 조합될 경우 간격: gap: 16px이때 사용되는 TextList / Unordered의 폰트 사이즈: size: 144.3 콘텐츠 박스 3종 (Card / Surface, Data Block, Text Box) 분류 및 제작 기준구분Card / SurfaceData BlockText Box주된 목적정보와 사용자 동작의 결합사실 데이터 조회·대조설명·안내·주의·상태 전달사용 예시계좌·상품 선택, 상세 이동, 이체이름, 전화번호, 계좌정보, 금액유의사항, 상담센터 안내, 상태 설명사용자 동작박스 전체 또는 내부 요소에 동작 있음박스 자체에는 동작 없음정보 전달이 주목적 (동작 없음)제작 방식실제 디자인 시스템 컴포넌트 인스턴스Auto Layout 프레임으로 직접 구성Auto Layout 프레임으로 직접 구성주요 콘텐츠원형 Slot·Card 하위 컴포넌트Title, DataListTitle, Text, TextList, Divider1) Card / Surface최신 디자인 시스템의 실제 Card / Surface 인스턴스를 유지하며 절대 Detach하지 않습니다.기본 내부 패딩: 32px (사방). 단, 6장 P11의 Body/Footer 분리형 조회 카드는 Card / Surface 자체 padding을 0으로 설정하고 Slot 내부 Body에 위32·좌우32·아래16, Footer에 상하16·좌우20을 적용합니다. 바깥 기본 padding 32와 중복하지 않습니다.제목/설명 구성: 제목은 Card / Body / Group-A, 설명·목록은 Card / Body / Group-C의 해당 variant 사용간격: Groups 간격 16px, 설명 목록용 Group 내부 간격 12px라디오 선택형 Card:Card / Header / Affix — variant=radio (24×24px) 사용Body: 가로 Auto Layout, 가로 Fill, 세로 Hug, gap: 12pxGroups: 가로 Fill카드당 Affix는 1개만 노출하며 카드와 라디오의 선택/비활성 상태를 일치시킵니다.2) Data Block사실 데이터 조회 목적의 Auto Layout 프레임입니다.PlaintextData Block
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


### P04. 집중형 입력 프로세스의 BODY 우측 세로 진행 단계 패널

#### 출처와 확정 적용 원칙

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 원본: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-24576
- 화면 `Case_가입_집중형` / `88:24429`, BODY `88:24434`, 지정 UI `Container 3` / `88:24576`.
- **해당 UI를 사용하는 특정 입력 프로세스에서는 `StepIndicator / Vertical` 진행 단계 패널을 BODY 내부의 오른쪽 열에 배치한다.** 헤더의 가로 단계 표시와 구별한다.
- 패널은 BODY의 자식으로 본문과 가로 Auto Layout에 참여한다. 원본은 `layoutPositioning=AUTO`이며 절대 좌표로 띄운 오버레이가 아니다. 스크롤 고정/sticky 여부는 확인되지 않았으므로 이 기록만으로 고정 동작을 추가하지 않는다.
- BODY·패널 구조·서체를 Plugin API로 확인하고 BODY 스크린샷과 대조했다. Figma 원본은 수정하지 않았다.

#### BODY 3열 구조와 우측 배치

```text
## BODY                              H / gap 32 / padding 48 40
├─ Container 1                       LNB / 폭 316
├─ Container 2                       본문 / 폭 664 / V / gap 48
└─ Container 3                       우측 단계 패널 / 폭 316 / Hug H
   └─ StepIndicator Group            V / gap 20
      ├─ StepIndicator / Vertical     완료: 사업자 정보 확인
      ├─ StepIndicator / Vertical     완료: 가입범위 선택
      ├─ StepIndicator / Vertical     진행 중: 고객정보 확인
      │  └─ StepIndicatorVertical
      │     ├─ Item / Vertical        depth=1, state=inProgress
      │     └─ verticalList
      │        ├─ lineContainer       세로 연결선
      │        └─ Slot-Step           V / gap 0
      │           ├─ Item / Vertical  depth=2, state=completed
      │           └─ Item / Vertical  depth=2, state=inProgress
      ├─ StepIndicator / Vertical     미시작: 뱅킹가입정보 입력
      └─ StepIndicator / Vertical     미시작: 가입완료
```

- 위 Container 2와 StepIndicator Group은 **신규 생성 명명 예시**다. 원본 본문 이름은 `Container 4`, 반복 단계 래퍼는 `stepIndicatorVertical inner`다. 신규 화면은 역할과 순서에 맞게 Container 1/2/3으로 명명하고, 반복 단계는 실제 세로 Auto Layout의 `StepIndicator Group`으로 묶는다. 기존 원본 정리 시 부모·순서·역할을 임의로 바꾸지 않는다.
- `StepIndicatorVertical`, `verticalList`, `Slot-Step` 등 실제 인스턴스 내부 고유 계층은 유지한다. 원본 외부 패널은 사용자 정의 FRAME이며 Card / Surface 인스턴스로 확인된 것이 아니다.

| 영역/관계 | 원본 실측·속성 | 토큰/적용 |
|---|---|---|
| BODY | 1440×828, H, Fixed W·Hug H | 모든 열 위쪽 정렬: primary MIN / counter MIN |
| BODY padding | 상하 48 / 좌우 40 | `spacing/7xl` / `spacing/6xl` |
| 열 사이 간격 | LNB↔본문 32, 본문↔우측 패널 32 | `spacing/5xl` 바인딩 확인 |
| LNB | 폭 316, BODY 상대 x=40 / y=48 | 원본 Hug W·H, 현 콘텐츠 폭 316 |
| 본문 | 폭 664, x=388 / y=48 | Fixed W·Hug H, 내부 V gap 48 (`spacing/7xl`) |
| 우측 패널 | 폭 316, x=1084 / y=48 | Fixed W·Hug H, 본문 시작과 윗선 정렬 |
| 패널 오른쪽 끝 | x=1400 | BODY 오른쪽 가장자리에서 40 안쪽 |
| 패널 내부 padding | 사방 20 | `spacing/2xl` |
| 패널 내부 콘텐츠 폭 | 276 = 316−20−20 | 원본 내부 래퍼 Fixed W·Hug H; 각 단계는 Fill W·Hug H |
| 최상위 단계 상호 간격 | 20 | 내부 세로 래퍼 gap, `spacing/2xl` |
| 일반 최상위 단계 | 276×32 | Item / Vertical depth=1의 행 높이 32 |
| 하위 단계를 펼친 현재 단계 | 276×154 | 32 + gap 4 + 하위 영역 118 |
| 현재 예시의 전체 내부 높이 | 362 | 32+32+154+32+32 + 20×4 |
| 현재 패널 전체 높이 | 402 | 내부 높이 362 + 상하 padding 40, 고정하지 않고 Hug |

전체 가로 관계는 `40 + 316 + 32 + 664 + 32 + 316 + 40 = 1440`이다. 현재 좌표를 하드코딩하는 대신 BODY의 가로 Auto Layout과 열 폭·토큰 간격으로 우측 정렬을 재현한다. 원본 패널 외부 프레임은 H/gap 20이나 직접 자식이 하나이므로 **여러 단계의 세로 간격을 결정하는 것은 내부 V 래퍼의 gap 20**이다.

#### 패널 표면과 그림자

- 외부 패널 radius: 20 / `radius/2xl`.
- Fill: `surface/neutral/quaternary-muted`, 실제 visible=true이며 원본에서는 흰색으로 표시된다.
- `strokes: []`: 실제 외곽 테두리는 없다. stroke/md 바인딩이나 strokeWeight=1 속성이 남아 있어도 테두리를 추가하지 않는다. `strokesIncludedInLayout=false`다.
- DROP_SHADOW: x=0, y=4, blur=6, spread=0. 색상은 `opacity/gray/950/gray950-a10`에 바인딩되어 있고 alpha 0.1이다.
- 원본 effect style ID: `S:c23a7e54401721798477ca6b26b4a6b471b2147f,14749:403`. 최신 라이브러리의 해당 스타일을 확인해 재사용하고 임의 그림자를 만들지 않는다.

#### 단계 상태와 하위 구조

- 각 최상위 항목은 실제 `StepIndicator / Vertical` 인스턴스다. 하나의 인스턴스에 전체 5단계를 억지로 넣지 않고 원본처럼 단계별 인스턴스를 반복한다.
- 최상위 내부 구조: `StepIndicator / Vertical > StepIndicatorVertical > Item / Vertical`, 필요 시 `verticalList`를 추가로 표시한다. 최상위 Item과 하위 목록 사이 gap은 **4 / spacing/xs**다.
- 원본 상태: 1 사업자 정보 확인=completed, 2 가입범위 선택=completed, 3 고객정보 확인=inProgress, 4 뱅킹가입정보 입력=notStarted, 5 가입완료=notStarted. 순서·문구·상태·단계 수는 해당 기획에 맞게 바꾼다.
- 완료 단계는 체크 표시와 단계명 우측 chevron, 진행 단계는 현재 번호와 단계명 강조, 미시작 단계는 번호와 약한 텍스트로 표시된다. 원본 인스턴스의 상태 variant로 표현하며 개별 색상만 바꿔 상태를 흉내 내지 않는다.
- 최상위 Item의 내부 `step`은 H/gap 8 (`spacing/md`)로 상태 표시와 문구를 결합한다. hStack padding은 completed 상하 6/좌 4/우 8, inProgress·notStarted 상하 6/좌우 4 실측이다. 내부 인스턴스 규격을 유지한다.
- 현재 단계의 `verticalList`: H, padding 좌 16 (`spacing/xl`) / 우 12 (`spacing/lg`), 폭 276, 세로 Hug.
- `lineContainer`: 폭 2, 높이 118, 내부 absolute 연결선이다. **컴포넌트 내부 연결선의 absolute와 BODY 패널의 일반 Auto Layout 배치를 혼동하지 않는다.** 원본 연결선 토큰은 `icon/neutral/tertiary-muted`다.
- `Slot-Step`: 폭 248, V/gap 0, Fill W·Hug H. 하위 Item / Vertical 2개가 59 높이씩 맞닿아 세로선을 이어간다. 하위 항목 사이에 최상위 gap 20을 적용하지 않는다.
- 하위 Item / Vertical: depth=2, H, gap 12 (`spacing/lg`), Fill W·Hug H. 연결선 영역 폭 2 + gap 12 + hStack 폭 234 = 248.
- 하위 hStack padding: 상하 8 / 좌 12 / 우 16. 내부 텍스트 묶음은 V/gap 6. 제목 20 + gap 6 + 보조 설명 17 + 상하 padding 16 = 원본 하위 행 높이 59다.
- 하위 단계 문구 `Step`과 `국민 000000-00-000000`은 예시다. 실제 업무 문구로 교체하며 줄바꿈·하위 단계 수 변경 시 패널 높이를 Hug로 재계산한다.
- 하위 목록이 필요하지 않은 단계는 목록을 노출하지 않는다. 원본의 1/2/4/5 단계에는 하위 목록이 표시되지 않는다. 실제 표시 조건은 기획안에 따르며 빈 래퍼·빈 간격을 남기지 않는다.

#### 서체

| 요소 | 원본 폰트 | 크기/행높이 |
|---|---|---|
| 최상위 완료·현재 단계명 | KBFG Text Bold | 16/24 |
| 최상위 미시작 단계명 | KBFG Text Medium | 16/24 |
| 현재 단계 번호 | Pretendard SemiBold | 16/24 |
| 미시작 단계 번호 | Pretendard Light | 16/24 |
| 하위 완료 제목 / 설명 | KBFG Text Medium / Light | 14/20, 12/17 |
| 하위 현재 제목 / 설명 | KBFG Text Bold / Medium | 14/20, 12/17 |

원본 하위 설명은 한글과 숫자를 포함한 하나의 KBFG Text 문자열이다. 신규 화면의 숫자 전용 표현은 기존 Pretendard 규칙을 따른다.

#### 재연결용 component key

| 컴포넌트 | variant | key |
|---|---|---|
| StepIndicator / Vertical | 단일 컴포넌트 | `6d64a53e165cf7f9d92e29637bba2a700ef84253` |
| Item / Vertical | completed / depth=1 / hover=false | `a987f53a4b28ffad5c754c7007263c2464f91c25` |
| Item / Vertical | inProgress / depth=1 / hover=false | `2232dc849bc42a252539f67b545d887f61a3b523` |
| Item / Vertical | notStarted / depth=1 / hover=false | `50fca46a7172d923a82d0dba23c767a5313e7501` |
| Item / Vertical | completed / depth=2 / hover=false | `a45c78a3d618cfadbef50a7a27e509f0af3f3169` |
| Item / Vertical | inProgress / depth=2 / hover=false | `372b1d67bb72ac32649528121eab56461e3819e3` |

화면 삭제 후에도 이 구조·variant·폭·토큰 기록을 기준으로 재구성한다. component key는 당시 연결 기록이며 최신 발행 라이브러리에서 확인한다. 인스턴스를 Detach하지 않는다.


### P05. 완료 화면의 BODY 구성과 간격

#### 출처와 범위

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 사용자 링크: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-24680
- 링크 노드는 해당 완료 화면의 HEADER다. 부모 `Case_완료` / `88:24679`에서 실제 BODY `88:24684`를 찾아 **BODY 안 구성과 간격만** 기록했다. 헤더·푸터와 완료 이후 업무 동작은 기록 범위에서 제외한다.
- Figma 원본은 수정하지 않았다.

#### 구조

```text
## BODY                           V / gap 48 / padding 48 40
├─ Container 1                    V / 가로 Fill·세로 Hug / padding 20 0
│  └─ Feedback                    large / 내부 V gap 20 / 중앙 정렬
│     ├─ Item / Feedback
│     │  └─ status-circleCheck     64×64
│     └─ Title+error_text
│        └─ title                 완료 메시지
├─ Container 2                    V / gap 20 / 가로 Fill·세로 Hug
│  ├─ Title / Headline
│  └─ Table                       GRID / 요약 결과 2행
├─ Container 3                    V / gap 20 / 가로 Fill·세로 Hug
│  ├─ Title / Section
│  └─ Table                       GRID / 상세 결과 3행
└─ Container 4                    V / 가로 Fill·세로 Hug / 중앙 정렬
   └─ ButtonGroup                 count=multi, size=large
      └─ Slot-Button              H / gap 12
         ├─ BoxButton
         └─ BoxButton
```

원본 두 표의 프레임 이름은 `Table Grid`다. 위 구조에서는 사용자 확정 테이블 제작 규칙에 따라 신규 프레임 이름을 `Table`로 표기했다. 인스턴스 내부 `Title+error_text` 등 고유 계층은 유지한다.

| 요소/관계 | 실측 | 토큰·배치 |
|---|---:|---|
| BODY | 폭 1440 / 높이 771 | 폭 Fixed·높이 Hug, 원본 V, primary MIN / counter MIN |
| BODY padding | 상하 48 / 좌우 40 | `spacing/7xl` / `spacing/6xl` |
| 콘텐츠 폭 | 1360 | BODY 내부 전체 폭 |
| 각 Container 사이 | 48 | `spacing/7xl` |
| Container 1 padding | 상하 20 / 좌우 0 | `spacing/2xl`, Feedback 중앙 정렬 |
| Feedback | 1360×112 | Fill W·Hug H |
| Feedback 아이콘 ↔ 메시지 | 20 | `spacing/2xl` |
| Feedback 아이콘 | 64×64 | 실제 status-circleCheck 인스턴스 |
| 완료 메시지 | 높이 28 | 원본 문구 `자동이체 등록이 완료되었어요` |
| 제목 ↔ 각 표 | 20 | `spacing/2xl` |
| 첫 제목 / 첫 표 | 28 / 91 높이 | Container 2 전체 139 |
| 둘째 제목 / 둘째 표 | 28 / 136 높이 | Container 3 전체 184 |
| 결과 표의 제목 열 | 폭 240 고정 | Table / Header |
| 결과 표의 값 열 | 남은 폭 1120 Fill | Table / Cell |
| CTA | 320×56 / 중앙 | 각 버튼 154×56, 슬롯 gap 12 |

- BODY 상대 y는 Container 1=48, Container 2=248, Container 3=435, Container 4=667이다. 각 높이는 152/139/184/56이며 상하 padding과 Container gap이 반영된 결과다. 재사용 시 이 좌표·전체 높이를 고정하지 않고 Auto Layout과 Hug로 계산한다.
- Container 1은 `20 + Feedback 112 + 20 = 152`, Feedback은 `아이콘 64 + gap 20 + 메시지 28 = 112`다.
- Feedback 내부 `Title+error_text`의 gap 8, Container 1/4의 gap 10은 원본 속성이다. 현재 직접 자식이 하나라 추가 시각 간격을 만들지 않으므로 새 공통 간격으로 적용하지 않는다.
- 결과 표는 두 열 Grid다. 첫 표 2행, 둘째 표 3행, 실제 row/column gap 모두 0. 행 콘텐츠 높이는 45, 표 상단선 1이 포함되어 전체가 91/136으로 관찰된다. 셀 padding은 상하 12 (`spacing/lg`)·좌우 16 (`spacing/xl`)다.
- 원본 결과 표 트랙은 `[HUG, FLEX]`이며 Header의 고정 폭 240이 첫 열을 결정하고 값 셀이 남는 폭을 채운다. 표 설정은 P06 방식으로 적용한다.
- 본문 예시 제목 `타이틀입니다`, 버튼 `버튼명`은 기획 문구로 교체한다. 화면에서 확인한 두 결과 영역과 두 버튼을 모든 완료 업무의 필수 개수로 고정하지 않는다.
- Feedback 원본 variant 표기는 `varient=large`이며 component key는 `d421043c19670294d67d1a724db0c2d35a5feb14`다. 기존 4.7의 Container 1 상하 padding 20 규칙과 동일하다.
- BODY 세로 흐름은 이 원본의 관찰값이다. 신규 화면의 최상위 BODY는 기존 필수 레이아웃 규칙을 따르며 필요하면 내부 세로 Container에 이 순서를 구성한다.

### P06. Table Auto Layout의 Grid 및 고정 폭·Fill 열 구성

#### 확정 제작 원칙

- **표는 `Table`이라는 Auto Layout 프레임을 만든 뒤 레이아웃을 Grid로 설정하고, 열 역할에 따라 고정 폭과 Fill을 조합한다.** 가로·세로 프레임을 반복하거나 셀의 x/y만 지정해 표 모양을 흉내 내지 않는다.
- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-23672
- 실제 노드 `88:23672`는 이름 `Table`, type `FRAME`, `layoutMode=GRID`다. 가이드용 Layout Grid 오버레이 또는 별도의 네이티브 TABLE 노드를 뜻하지 않는다.
- 표 바깥에 설명/도구를 결합하는 세로 래퍼와 **실제 Grid Table**을 구별한다. 표 하단 도구/안내는 Grid 셀로 끼워 넣지 않고 바깥 Auto Layout에서 간격을 적용한다.

#### 참조 표의 실제 설정

| 항목 | 값 |
|---|---|
| Table 프레임 크기 | 1360×540 실측 |
| Table 가로/세로 sizing | Fill / Hug |
| 내부 padding | 0 |
| Grid 열 / 행 | 8열 / 11행 (Header 1행 + 데이터 10행) |
| 실제 Grid column gap / row gap | 0 / 0 |
| 원본 열 트랙 | HUG, HUG, FLEX, FLEX, FLEX, FLEX, FLEX, FLEX |
| 원본 행 트랙 | 모두 HUG |
| gridItemsPositioning | ROW_AUTO_FLOW |
| gridAutoTracks | NONE |
| 자식 | Table / Header 8개 + Table / Cell 80개 = 88개 |
| 행·열 span | 모두 1 |
| 셀 높이 | 모든 행 49 실측 |
| 표 상단선 | 1, 표 하단 외부선 속성 0 |

| 열 | 역할 | 폭 정책 | 원본 셀 속성 |
|---|---|---|---|
| 1 | 체크박스 | 80 고정 영역 | Header FIXED 80, 데이터 Cell은 FILL |
| 2 | 기관명 | 120 고정 영역 | Header 및 데이터 Cell 모두 FIXED 120 |
| 3 | 그룹명 | Fill | Header/Cell FILL |
| 4 | 금융기관명 | Fill | Header/Cell FILL |
| 5 | 계좌번호 | Fill | Header/Cell FILL |
| 6 | 출금등록/해제 | Fill | Header/Cell FILL |
| 7 | 휴대폰 번호 | Fill | Header/Cell FILL |
| 8 | 작성한 내용 노출 | Fill | Header/Cell FILL |

- 남는 폭은 `1360 − 80 − 120 = 1160`이고 동일 가중치 FLEX 6개 열이 약 `193.333`씩 나눈다. **이 실측 소수 폭을 개별 셀의 고정 폭으로 하드코딩하지 않는다.** Table 폭이 달라지면 Fill 열이 함께 변한다.
- 원본 첫 두 트랙의 type은 FIXED가 아니라 **HUG**다. 고정 폭 Header/Cell이 열의 기준 폭 80/120을 결정하고 해당 열의 Fill 자식은 그 기준을 채운다. 트랙의 `HUG/FLEX`와 셀의 `FIXED/FILL`은 서로 다른 속성이므로 구별한다.
- 고정 폭은 해당 업무의 열 역할에 따라 정한다. 80/120은 이 참조 목록의 기준이며 다른 표의 모든 열에 복사하지 않는다. 완료 상세 표 P05의 240 + Fill 구성도 같은 원리다.
- 해당 열 안 Header와 모든 Cell의 실제 폭이 동일하도록 구성한다. 한 행만 별도 프레임으로 만들어 열 정렬이 달라지지 않게 한다.
- 높이는 행 콘텐츠에 맞게 Hug로 결정하고 같은 행의 나머지 Header/Cell은 세로 Fill로 맞춘다. 원본은 첫 체크박스 Header만 세로 HUG, 나머지 Header/Cell은 세로 FILL이다.
- 현재 전체 높이 540은 `49×11 + 상단선 1`이다. 데이터 행 개수·줄바꿈·입력 UI에 따라 높이를 다시 계산하며 540 또는 행 높이 49를 전역 고정값으로 쓰지 않는다.
- 위에서부터 행 순서대로 셀을 넣고 동일한 열 순서를 유지한다. 원본 ROW_AUTO_FLOW는 자식 순서로 행·열을 결정한다. 병합이 필요한 표는 기획에 따라 span을 설정하되 이 참조에는 병합이 없다.
- `itemSpacing`에 남은 값을 Grid row/column gap으로 해석하지 않는다. Grid에서는 `gridRowGap`과 `gridColumnGap`을 확인한다.
- Table / Header와 Table / Cell은 실제 KBDS 인스턴스를 유지하고 Detach하지 않는다. 테두리·Fill·padding·숫자 전용 variant 등은 라이브러리 규격을 따른다. 숫자 전용 데이터는 기존 Pretendard 규칙을 따른다.

#### 검수 기준

- 실제 Table 프레임이 Grid인지, 고정 열 폭과 Fill 분배가 맞는지, 모든 행의 세로 열 경계가 일치하는지 확인한다.
- row/column gap 0으로 셀 경계가 맞닿고, 내용 증가 시 같은 행 높이가 맞는지 확인한다.
- Table 전체는 부모의 콘텐츠 폭을 채우고 세로는 Hug인지 확인한다. 상단선 두께가 포함된 높이를 콘텐츠 높이와 혼동하지 않는다.


### P07. 팝업 기본 너비 1200 및 소형 안내 팝업 400

#### 적용 원칙과 출처

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 일반 팝업 예시: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25060
  - 바깥 예시 화면 `Case_계좌그룹 관리_nodata` / `88:25060`는 1440×850.
  - 실제 Popup 인스턴스 `88:25119`는 **1200×557**, 표시 제목은 `계좌순서 변경`이다. 바깥 화면 프레임 폭을 팝업 폭으로 오인하지 않는다.
- 소형 안내 예시: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25139
  - 실제 Popup 인스턴스 `88:25139`는 **400×320**, 표시 제목은 `자동 로그아웃 예정`이다.
- **일반적인 팝업은 너비 1200을 기본으로 사용한다. 짧은 안내·시간 알림 등은 이 예시처럼 400 소형 구성을 사용할 수 있다.** 모든 팝업을 무조건 1200으로 늘리거나, 모든 안내를 무조건 400으로 축소하지 않고 화면 목적과 기획에 맞게 선택한다.
- 두 예시는 같은 실제 `Popup` 컴포넌트 인스턴스이며 참조 variant는 `type=layer, vatiant=default`다. 현재 연결된 main component의 자체 폭은 400으로 조회되었고 첫 인스턴스가 1200으로 확장되어 있다. **사용자가 정한 일반 제작 기본값 1200**과 **현재 main component의 원본 폭 400**을 구별한다.
- 컴포넌트·본문 구조·간격·서체를 확인하고 각 팝업 스크린샷과 대조했다. 원본은 수정하지 않았다.

#### 공통 구조와 규격

```text
Popup (실제 인스턴스 / V / gap 0 / 하단 padding 24)
├─ Item / Header                   논리 영역 Header
│  ├─ Title                        Fill W
│  │  └─ 팝업 타이틀
│  └─ Container
│     └─ IconButton                닫기 / 24×24
├─ Slot                            논리 영역 Body / 본문 슬롯
│  └─ Container 또는 Container 1…N
└─ Item / Footer                   논리 영역 Footer
   └─ ButtonGroup                  count=multi, size=medium
      └─ Slot-Button               H / gap 8
         ├─ BoxButton              tertiary / medium
         └─ BoxButton              primary / medium
```

- Header/Body/Footer는 Popup 내부의 대소문자 구분 영역 명명 기준이다. 실제 컴포넌트 내부 고유 이름 `Item / Header`, `Slot`, `Item / Footer`와 슬롯 구조는 유지하고, 정리를 위해 Detach하거나 임의로 바꾸지 않는다.
- Popup은 Fixed W, V, primary MIN / counter CENTER, 바깥 gap 0, padding 상/좌/우 0·하 24이다.
- Popup radius: **24 / `radius/3xl`**, Fill: `background/neutral/elevated`. 그림자 색상은 `opacity/gray/950/gray950-a10` 바인딩을 사용한다. 실제 컴포넌트 표면·효과를 재사용한다.

| 영역/관계 | 공통 규격 | 토큰/주의 |
|---|---|---|
| Header | 높이 64, H, Fill W·Hug H | primary MAX / counter CENTER |
| Header padding | 상하 16 / 좌우 24 | `spacing/xl` / `spacing/3xl` |
| Header 제목 ↔ 닫기 래퍼 | gap 16 | `spacing/xl` |
| 제목 래퍼 | Fill W·Hug H, 높이 32, 상하 padding 4 | `spacing/xs` |
| 팝업 제목 | KBFG Text Bold 16/24 | `text/neutral/primary` |
| 닫기 IconButton | 24×24 | primary, size=24 / 내부 line-xMark |
| Body Slot padding | 위 12 / 좌우 24 / 아래 24 | `spacing/lg` / `spacing/3xl` |
| Footer | 높이 48, H, 가로 Fill·높이 Hug, 중앙 정렬 | 좌우 padding 24 / 상하 0 |
| Footer ButtonGroup | 280×48 실측, Hug W·H | `count=multi, size=medium` |
| Footer 버튼 | 각 136×48 실측 | 좌 tertiary / 우 primary, 모두 medium |
| Footer 버튼 사이 | 8 | **`spacing/md`**, 일반 화면 large CTA의 gap 12와 구별 |
| Popup 최하단 여백 | 24 | Footer 내부 padding이 아닌 Popup 자신의 bottom padding |

- 팝업 본문에 일반 페이지 BODY의 1440 폭·48/40 padding·Container gap 48을 그대로 적용하지 않는다. Popup의 Body 슬롯 규격을 따른다.
- 슬롯 내부 Container 개수는 해당 슬롯만 기준으로 명명한다. 원본 소형 예시는 단일 래퍼가 `Container 1`이지만 신규 생성 시 단일 Container 명명 규칙을 따른다.
- 원본 스크린샷은 그림자까지 포함해 1232/432 폭으로 반환될 수 있다. 실제 Popup 노드 폭은 1200/400이며 이미지 바깥 그림자 폭을 화면 width로 사용하지 않는다.

#### A. 너비 1200: 목록 관리·빈 결과 팝업

```text
Popup                             1200 / Fixed W·Hug H
├─ Item / Header                   계좌순서 변경
├─ Slot                            V / gap 32 / Fill W·Hug H
│  ├─ Container 1
│  │  └─ Infobox / FullWidth
│  └─ Container 2                  V / gap 20
│     ├─ InputField / BoxButton Group  H / 양끝·아래 정렬
│     │  ├─ InputField             거래처
│     │  └─ BoxButton Group        H / gap 8
│     │     ├─ BoxButton           맨위로
│     │     ├─ BoxButton           위로
│     │     ├─ BoxButton           아래로
│     │     └─ BoxButton           맨아래로
│     └─ Table / Contents          V / gap 0
│        ├─ Table                  GRID / Header
│        ├─ Feedback               바깥 래퍼 / padding 32 0
│        │  └─ Feedback            small / 등록된 계좌가 없습니다
│        └─ Divider / Horizontal   secondary / 1px
└─ Item / Footer
```

- 위 `InputField / BoxButton Group`, `BoxButton Group`, `Table / Contents`, Grid `Table`은 신규 생성의 역할별 명명 예시다. 원본은 각각 `Select / Button`, `Frame 2147246240`, 외부 `Table`, 내부 `Table Grid`다. 미정리 이름을 그대로 복제하지 않는다.
- 실제 본문 폭은 `1200−24−24=1152`다. Slot은 높이 421, padding 12/24/24/24, 자식 Container 사이 gap **32 (`spacing/5xl`)**.
- Container 1 높이 90, Container 2 높이 263. Slot 높이는 `12+90+32+263+24=421`이다.
- Infobox는 실제 인스턴스다. 원본 padding 상하 20/좌우 24, 내부 gap 12, radius 12. 복수 TextList가 들어가는 반복 묶음의 항목 간격은 사용자 최신 공통 규칙 **TextList Group gap 4**를 따른다. Infobox 원형의 다른 내부 간격과 혼동하지 않는다.
- 도구 행 ↔ 표 영역은 **20 / spacing/2xl**. 도구 행 자체는 H, primary SPACE_BETWEEN / counter MAX, 폭 Fill·높이 Hug 40이다. itemSpacing 속성 20을 양쪽 그룹 사이의 실제 고정 여백으로 해석하지 않는다.
- 좌측 InputField는 152×40, 선택형 표시 문구 `거래처`. 우측 버튼 그룹은 337×40, Hug W·H, 내부 gap 8. 버튼은 모두 secondary/small이며 현재 폭은 78/66/78/91이다.
- 표 Header는 6열: 선택 80, 순위 80, 나머지 금융기관명·계좌번호·계좌명·휴대폰 번호는 각 248 Fill 실측. 일반 Grid 제작 규칙 P06을 적용한다.
- Header 부분 전체 높이 50 = 행 49 + 상단선 1. 데이터가 없는 경우 그 아래 small Feedback 영역을 배치한다.
- Feedback 바깥 래퍼는 상하 padding **32 / spacing/5xl**, 내부 Feedback은 높이 88·gap **16 / spacing/xl**. Feedback 영역 높이는 `32+88+32=152`다.
- 이어지는 Divider는 secondary/thickness=1px, 높이 1. 외부 표 영역 높이는 `50+152+1=203`이다.
- 전체 원본 높이는 `Header 64 + Body 421 + Footer 48 + Popup 하단 24 = 557`이다. 본문 내용·줄바꿈·데이터 유무에 따라 높이를 Hug로 계산하고 557을 전역 고정하지 않는다.
- Footer의 `버튼명`은 예시이므로 기획 문구로 교체한다. 빈 결과와 데이터 존재 시 본문 분기는 원본 기획에 따르고, 위 빈 결과를 모든 팝업의 기본 내용으로 추가하지 않는다.

#### B. 너비 400: 자동 로그아웃 안내

```text
Popup                             400×320 / Fixed W·H
├─ Item / Header                   자동 로그아웃 예정
├─ Slot                            Fill W·H / 양축 CENTER / gap 0
│  └─ Container                    중앙 안내 묶음 / Hug W·H
│     └─ Text / Contents           V / gap 12 / 중앙 정렬
│        ├─ Text                   자동 로그아웃 남은시간
│        ├─ Count                  0:23
│        └─ Text                   자동 로그아웃·로그인 연장 안내
└─ Item / Footer
   └─ ButtonGroup                  medium / gap 8
      ├─ BoxButton                 tertiary / 지금 로그아웃
      └─ BoxButton                 primary / 로그인 연장
```

- 본문 원본 `inner` 래퍼는 역할에 맞게 명명한다. 실제 Count와 컴포넌트 고유 내부 계층은 유지한다.
- 원본 Popup은 **400×320 Fixed W·H**, Body Slot은 **400×184 Fill W·H**이며 primary/counter 모두 CENTER다. 1200 목록형의 Body Hug와 구별한다.
- Slot padding은 공통값 12/24/24/24이므로 가용 내부 폭은 352, 높이는 148이다. 실제 안내 묶음은 337×120 Hug이고 가운데 배치되어 Slot 상대 x=31.5/y=26으로 관찰된다. 이 위치를 절대좌표로 복제하지 않고 Slot의 CENTER와 Fill/Hug로 재현한다.
- 내부 안내 묶음은 V/gap **12 (`spacing/lg`)**. 제목 28 + gap 12 + Count 28 + gap 12 + 안내 40 = 높이 120.
- 안내 제목: KBFG Text Bold **20/28**, `text/neutral/secondary`.
- Count: Pretendard SemiBold **20/28**, `text/accent/blue`, 예시값 `0:23`. 시간을 일반 한글 폰트로 합치지 않는다.
- 설명: KBFG Text Light **14/20**, `text/neutral/tertiary`, 가운데 정렬이며 원본은 두 줄이다. 가용 폭·문구 변경으로 줄 수가 달라지면 잘림 없이 배치하고 임의로 설명을 축약하지 않는다.
- 전체 높이는 `64+184+48+24=320`이다. 320은 이 예시의 고정 높이이며 모든 400 안내 팝업의 필수 높이로 일반화하지 않는다.
- 카운트다운 시작 시간, 자동 로그아웃 시점, 로그인 연장의 동작은 이 정적 참조로 결정하지 않고 기획안을 따른다.

#### 재연결용 component key

| 컴포넌트 | 원본 variant | key |
|---|---|---|
| Popup | type=layer, vatiant=default | `58f575d37a8d4d83a30238c8f75b152d4e42db93` |
| Item / Header | variant=default | `2cbf7cb8b3527095493ddec2903fcfe47ac00798` |
| Item / Footer | variant=buttonGroup | `e20c54e3621cf093f53c6a565a37c5811b583839` |
| IconButton | primary/24, 기본 상태 | `d0596490379106ea5d1492de1100c24be4be398a` |
| ButtonGroup | multi/medium | `8923faa9126db7ef087595a2d123151588618ff6` |
| BoxButton | tertiary/medium | `a03fad70eb160b79085f5496a27bc25f9685054b` |
| BoxButton | primary/medium | `c4ab4c1ce45fb8f3c1975cf3a624c6f05b561767` |
| Feedback | varient=small | `5043fce90aa14ec77b4a1ca9816dc0b3f746d0ea` |
| Divider / Horizontal | secondary/thickness=1px | `b154a5e09047df6dcbf02775b74e664260c48b01` |

원본 속성의 `vatiant`/`varient` 표기는 실제 관찰값이다. 최신 라이브러리 속성명을 확인해서 사용한다. 슬롯에 실제 인스턴스를 조합하며 Popup을 Detach해서 임의 프레임으로 재현하지 않는다.


### P08. Title / Section + Table의 데이터 없음·있음 상태와 간격

#### 출처 및 제목 스펙 예외

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`.
- 데이터 없음: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=99-47875
  - 화면 `Case_금융거래한도계좌 해제_대상없음`, 지정 영역 `Container 3` / `99:47875`.
- 데이터 있음: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25364
  - 화면 `Case_금융거래한도계좌 해제_대상있음`, 지정 영역 `Container 3` / `88:25364`.
- **두 참조의 현재 Title / Section은 잘못 적용되어 있으므로 현재 인스턴스의 서체·크기·높이·부가 설명 구성을 제목 원본 스펙으로 학습하지 않는다.** 원본 스펙은 사용자 확정값 **`Title/xl∙18∙Bold`**다. 신규 생성은 이 원본 스타일을 사용하고 기존 일반 UI 서체 규칙을 따른다.
- 제목의 정확한 행높이·내부 간격은 위 원본 스타일/컴포넌트로 확인하며 현재 화면의 제목 높이를 근거로 추정하지 않는다. 다른 패턴에 적힌 Title / Section의 과거 관찰 높이 역시 이 원본 서체 스펙을 덮어쓰지 않는다.
- 이 절은 제목·Table 조합과 상태별 간격 기록이다. Figma 원본은 수정하지 않았다.

#### 공통 조합

```text
Title / Table                        V / Fill W·Hug H / gap 20
├─ Title / Section                   원본 Title/xl∙18∙Bold 적용
└─ Table 또는 Table / Contents       데이터 유무에 따라 본문 전환
```

- **Title / Section ↔ Table 사이 gap: 20 / `spacing/2xl`.** 데이터가 없을 때와 있을 때 동일하게 유지한다.
- 관련 요소는 실제 세로 Auto Layout으로 묶는다. 원본 `Title + Table`은 신규 생성 시 대표 명칭 기준 `Title / Table`로 정리한다.
- 원본 콘텐츠 폭은 1360이며 가로 Fill·세로 Hug를 기본으로 한다. BODY padding 상하 48/좌우 40, 다른 BODY Container와의 간격 48은 기존 규칙을 유지한다.
- 두 참조에 별도로 남아 있는 숨김 일반 설명 Text는 `visible=false`다. 숨김 요소 때문에 빈 gap을 남기거나 임의로 설명을 표시하지 않는다. 제목 인스턴스 안에 잘못 포함된 설명 역시 필수 콘텐츠로 복제하지 않는다.

#### A. 데이터 없음: small Feedback

```text
Title / Table                        V / gap 20
├─ Title / Section
└─ Table / Contents                  V / gap 0 / padding 0
   ├─ 상단 경계선                    1px
   ├─ Feedback                       Auto Layout 래퍼 / padding 32 0
   │  └─ Feedback                    실제 인스턴스 / small
   │     ├─ Item / Feedback          48×48
   │     └─ 완료·결과 문구 영역        현재 문구 높이 24
   └─ Divider / Horizontal           secondary / 1px
```

| 관계/영역 | 간격·규격 | 토큰/해석 |
|---|---|---|
| 제목 ↔ 빈 결과 Table 영역 | 20 | `spacing/2xl` |
| 빈 결과 래퍼 padding | 상하 32 / 좌우 0 | `spacing/5xl` |
| Feedback 아이콘 ↔ 문구 | 16 | `spacing/xl` |
| Feedback 아이콘 영역 | 48×48 | small 타입의 Item / Feedback |
| 실제 Feedback 높이 | 88 | 아이콘 48 + gap 16 + 문구 24 |
| Feedback 바깥 래퍼 높이 | 152 | padding 32 + Feedback 88 + padding 32 |
| 하단 Divider | 1 | secondary / thickness=1px |
| Table / Contents 자식 gap | 0 | 경계선과 Feedback 영역을 이어 붙임 |

- **데이터가 없는 결과 안내는 Feedback small을 사용한다.** 완료 화면의 large Feedback으로 바꾸지 않는다.
- 원본 Feedback은 `varient=small`, component key `5043fce90aa14ec77b4a1ca9816dc0b3f746d0ea`다. 가로 Fill·세로 Hug, 내부 세로 배치·가로 중앙 정렬이다.
- 원본 안내 문구는 `금융거래한도제한 계좌가 없습니다`. 실제 문구는 해당 기획안에 따른다.
- 원본 상단선은 높이 0의 LINE에 stroke 1이 적용되어 레이아웃 높이를 차지하지 않는다. Feedback 래퍼 152와 하단 Divider 1이 합쳐져 외부 Table 영역 높이는 153이다. 상단선의 보이는 두께와 Auto Layout이 차지하는 높이를 구별한다.
- 이 상태는 상단 경계선 + 빈 결과 Feedback + 하단 Divider이며 **데이터 표의 Header 행을 표시하지 않는다.** P07의 팝업 빈 결과는 Header 행을 유지한 별도 패턴이므로 모든 no-data 화면에 동일하게 강제하지 않는다.
- 원본은 Table 이름의 **세로 Auto Layout 래퍼**이며 데이터 셀이 없는 상태다. P06의 실제 데이터용 Grid Table과 역할을 구별한다. 신규 명명은 `Table / Contents` 등 역할에 맞게 정리하고, 실제 데이터 표는 P06의 Grid 방식으로 구성한다.
- 제목 스펙이 잘못된 원본의 전체 Container 높이와 Table 시작 y는 재사용하지 않는다. 올바른 제목 스타일을 적용한 뒤 간격 20과 Hug로 배치를 다시 계산한다.

#### B. 데이터 있음: Grid Table

```text
Title / Table                        V / gap 20
├─ Title / Section                   원본 Title/xl∙18∙Bold 적용
└─ Table                             GRID / 2열·2행
   ├─ Table / Header                 계좌번호 / 폭 240 고정
   ├─ Table / Cell                   값 / 남은 폭 Fill
   ├─ Table / Header                 상품명 / 폭 240 고정
   └─ Table / Cell                   값 / 남은 폭 Fill
```

| 관계/영역 | 간격·규격 | 적용 |
|---|---|---|
| 제목 ↔ Grid Table | 20 | `spacing/2xl` |
| Grid row gap / column gap | 0 / 0 | 셀 경계를 맞닿게 구성 |
| 셀 padding | 상하 12 / 좌우 16 | `spacing/lg` / `spacing/xl` |
| 제목 열 / 값 열 | 240 고정 / 1120 Fill 실측 | 전체 1360에서 남는 폭을 채움 |
| 표 행 높이 | 45 실측 | 같은 행의 Header·Cell 세로 Fill |
| 표 전체 높이 | 91 실측 | 두 행 45×2 + 상단선 1 |

- 원본 `Table Grid`는 실제 GRID이고 열 트랙은 `[HUG, FLEX]`다. 고정 240 Header가 첫 열을 결정하고 데이터 셀이 나머지 폭을 채운다. 신규 프레임 이름은 `Table`로 하고 P06 규칙을 따른다.
- 이 데이터 있음 상태에서는 해당 Grid를 표시하며 데이터 없음용 Feedback을 함께 노출하지 않는다. 콘텐츠 변화에 따라 표·부모 높이를 Hug로 재계산한다.
- 바깥 원본 Container 3의 gap은 24이나 직접 자식이 `Title + Table` 하나뿐이라 현재 시각적 간격을 만들지 않는다. **제목↔표 사이에 24를 적용하지 않고 내부 조합의 20을 적용한다.**
- 원본 제목 래퍼의 gap 16 역시 추가 설명이 숨겨진 현재 상태에서는 별도 간격을 만들지 않는다. 원본의 잘못된 제목 높이 31·전체 조합 높이 142를 올바른 스타일의 기준으로 쓰지 않는다.

#### 재사용 시 핵심

- `Title / Section`의 원본 스타일 `Title/xl∙18∙Bold`를 적용한다.
- 제목·표 조합 gap은 상태와 관계없이 20이다.
- 데이터 없음은 small Feedback, 래퍼 상하 32, 아이콘·문구 gap 16이다.
- 데이터 있음은 실제 Grid Table, 고정·Fill 열, 셀 상하 12/좌우 16이다.
- 현재 두 화면의 제목 인스턴스 스펙을 복제하지 않으며 원본 전체 높이를 고정하지 않는다.


### P09. 1depth 탭 우측 버튼 및 2depth 탭·SummaryBox 조합

- 확인일: 2026-11-10. 파일 `2MavuzZhNpHpqer5fk3ML4`, 페이지 `2:278`, 화면 `Case_조회`.
- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25539
- 지정 노드는 2depth Tab + SummaryBox를 묶은 원본 `Frame 2147246246`이다. 부모 `Tab` / `88:25530`에서 1depth 탭과 오른쪽 버튼까지 함께 확인했다.

```text
Tab / Contents                         V / gap 20 / Fill W·Hug H
├─ Tab                                 1depth, extendable=false
│  └─ Slot
│     └─ tabs                          H / SPACE_BETWEEN / CENTER
│        ├─ Tab                        1depth / 좌측 탭 묶음
│        │  └─ Slot
│        │     └─ Item / Tab × N
│        └─ BoxButton                  우측 보조 액션 / secondary·small
└─ Tab / SummaryBox                    V / gap 24 / Fill W·Hug H
   ├─ Tab                              2depth, extendable=true
   └─ SummaryBox                       실제 인스턴스
```

- **Tab(1depth) ↔ [Tab(2depth) / SummaryBox] 묶음 사이 gap: 20 (`spacing/2xl`).**
- **Tab(2depth) ↔ SummaryBox 사이 gap: 24 (`spacing/3xl`).** 두 gap의 적용 레벨을 바꾸거나 전체를 동일 간격으로 평탄화하지 않는다.
- 우측 버튼은 Tab 컴포넌트를 Detach하거나 바깥에 절대배치하지 않고 **원본 Tab의 Slot 안 `tabs`에 `Tab`과 `BoxButton`을 넣는 조합**을 사용한다. 버튼은 필요한 화면에만 표시한다.
- `tabs`는 가로 Fill·세로 Hug, SPACE_BETWEEN/CENTER이며 itemSpacing 속성은 4다. 실제 양쪽 콘텐츠 사이 빈 폭은 자동 분배되므로 4px 고정 간격으로 해석하지 않는다.
- 원본 전체 1depth Tab은 1360×60, 좌측 안쪽 Tab은 폭 690 고정·높이 60, 오른쪽 BoxButton은 116×40 Hug 실측이다. 버튼은 세로 가운데(y=10)에 놓인다. 이 좌표·690 폭을 모든 화면에 고정하지 않고 기획에 맞는 탭 폭과 Fill/Hug·양끝 정렬로 구성한다.
- 원본 1depth 항목은 각 폭 160·높이 60, 항목 사이 gap 4, 상하 padding 16이다. 예시 문구는 `KB국민은행`/`다른금융`, 우측 버튼은 `다른금융연결`이다.
- 원본 2depth Tab 높이는 40이며 Slot에서 Item / Tab들이 H/gap 8 (`spacing/md`)로 배치된다. Item / Tab은 Hug W·H, padding 상하 6/좌우 12, 내부 gap 2, radius 8이다. 실제 탭 컴포넌트 variant를 유지한다.
- 원본 2depth Tab 40 + gap 24 + SummaryBox 96 = 하위 묶음 160, 1depth Tab 60 + gap 20 + 하위 묶음 160 = 전체 240이다. 내용·줄바꿈이 바뀌면 Hug로 계산한다.
- SummaryBox 원본은 4개 Item / Surface를 H/gap 8로 배치하며 각 폭 334 Fill, 높이 96 실측이다. 각 Surface padding은 상하 20/좌우 32, radius 12, Fill `surface/neutral/tertiary-muted`다. 내부 설명/수치 영역 간격은 8, 높이는 20+8+28=56이다.
- 신규 사용자 정의 조합 이름은 위 예시처럼 역할을 반영한다. 실제 Tab/Slot/Item / Tab 및 SummaryBox 내부 고유 계층은 유지한다.

| 실제 컴포넌트 | variant | component key |
|---|---|---|
| Tab | 1depth, extendable=false | `0d5c704c817e7bdf6c3fca0c7fcfca8d39898e63` |
| Tab | 2depth, extendable=true | `2b1f0b805e6233fcf9436143ddd9b676a8f4c6c1` |
| BoxButton | secondary/small | `b20b82eee273f930c668788109e73de668023c03` |
| SummaryBox | 단일 컴포넌트 | `ac8b7b22c4ce82ef89da0d169d5e1cb4bb62fe19` |
| Item / Surface | variant=solid | `f5a63d3d0715c038047d7617618f3a634029c74c` |

### P10. 목적에 맞게 감싼 단일 InputField의 명명과 배치

- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25528
- 원본 래퍼 `InputField box` / `88:25528` 안에 실제 `InputField` 인스턴스 `88:25529` 하나가 들어 있다.
- **신규 생성 시 래퍼는 `InputField`로 명명한다.** 단일 항목을 특정 배치·표면 목적으로 감싼 구조이므로 `InputField box`나 `InputField Group`으로 부르지 않는다. 기존 단일 항목 래퍼 규칙과 동일하다.

```text
InputField                            사용자 정의 Auto Layout 래퍼
└─ InputField                         실제 컴포넌트 인스턴스
   └─ Item / Input
      └─ Item / FilledStyle
         ├─ text
         └─ Item / Affix
            └─ line-chevron-down
```

- 래퍼: H, Fill W·Hug H, padding 사방 **20 (`spacing/2xl`)**, radius **12 (`radius/md`)**, Fill `surface/neutral/tertiary-muted`.
- 원본 래퍼 폭 1360/높이 80, 실제 필드 폭 **400 고정**/높이 **40 Hug**, 왼쪽 정렬이다. `20+40+20=80`이며 필드의 시작 위치는 padding으로 만든다.
- 원본 래퍼 primary SPACE_BETWEEN / counter MIN, gap 0이다. 자식 하나이므로 빈 반대쪽 요소나 가짜 공간을 만들지 않는다.
- 내부 필드는 선택형이며 예시 문구 `A사업자명`, 우측 chevron 20×20이다. 기본 InputField 인스턴스 key는 `6a180f941f7bc12168489ec44f9203d0f3a4e7cc`; 선택형 하위 구성도 유지한다.
- 주변 원본 `Select` 묶음에서 선행 제목/액션 영역과 이 래퍼 사이 gap은 **20**이다. Select 묶음 전체와 아래 탭 조합 사이 gap은 **24**다. 서로 다른 부모의 간격을 래퍼 padding에 중복 적용하지 않는다.

### P11. Body·Footer 별도 padding을 갖는 Card / Surface

#### 사용자 확정 제작 원칙

- 참조: https://www.figma.com/design/2MavuzZhNpHpqer5fk3ML4?node-id=88-25631
- 현재 원본 `Container` / `88:25631`은 FRAME이나 **재사용·신규 생성에서는 실제 `Card / Surface` 인스턴스로 감싼다.** 이 조회 카드에는 내부 액션과 이동 요소가 있으므로 일반 데이터 박스로 대체하지 않는다.
- **Card / Surface 자체 padding은 사방 0**이다. Slot 안의 **Body와 Footer에 각각 원본의 padding을 적용**하여 흰색 본문과 회색 하단 영역이 카드 경계까지 이어지게 한다.
- 이 패턴은 기존 Card / Surface 기본 padding 32의 **명시적 예외**다. 기본 32를 바깥 카드에 유지한 채 내부 Body/Footer padding을 추가해 여백을 이중으로 만들지 않는다.
- 문서의 아래 Body/Footer는 카드 Slot 내부의 역할별 영역이다. List 컴포넌트 Slot-Middle 안에 있는 원본 `Body`와는 적용 범위가 다르다.

```text
Card Group                            반복 시 V / gap 12
└─ Card / Surface                     실제 인스턴스 / padding 0 / V gap 0
   └─ Slot                            V / gap 0 / padding 0
      ├─ Body                         padding 위32·우32·아래16·좌32
      │  └─ List / Contents           V / gap 8
      │     ├─ List                   계좌 주요 정보 / suffix 포함
      │     └─ Infobox / Button Area  H / 양끝·중앙 정렬
      │        ├─ Infobox / Basic
      │        └─ Button Area         H / gap 16
      │           ├─ BoxButton Group  H / gap 8
      │           │  ├─ BoxButton      이체 / secondary·small
      │           │  └─ BoxButton      조회 / secondary·small
      │           └─ Item / Suffix    reactionButton
      └─ Footer                       padding 위16·우20·아래16·좌20
         ├─ Left                      H / gap 8
         │  ├─ IconButton / Text      링크 아이콘 + 금고명
         │  ├─ Divider / Vertical
         │  └─ Text                   계좌번호
         └─ Right                     H / gap 16
            ├─ Amount / BoxButton Group  H / gap 8
            │  ├─ Amount              금액 + 단위 / gap 4
            │  └─ BoxButton Group     H / gap 4
            │     ├─ BoxButton        채우기 / secondary·xsmall
            │     └─ BoxButton        꺼내기 / secondary·xsmall
            └─ IconButton             더보기 / 24
```

위 조합/그룹 이름은 신규 생성의 역할별 명명 예시다. 원본은 바깥 Container, 안쪽 Container, vStack, hStack, PlusContainer 등의 FRAME 조합이며 Card / Surface로 이미 만들어진 상태는 아니다. **문서 기록을 위해 원본을 수정하지 않았으며**, 원본 Card / Surface component key를 확인한 것처럼 임의의 key를 부여하지 않는다. 생성 시 최신 KBDS의 실제 Card / Surface를 선택하고 고유 슬롯 계층을 유지한다.

#### 영역별 padding·크기·간격

| 영역/관계 | 적용값 | 토큰/원본 관찰 |
|---|---|---|
| Card / Surface 바깥 padding | **0** | 사용자 확정 예외 |
| Slot의 Body ↔ Footer | gap **0** | 두 표면을 밀착 |
| Body padding | 위32 / 우32 / 아래16 / 좌32 | `spacing/5xl` / 아래 `spacing/xl` |
| Body 내부 List ↔ 보조 행 | **8** | `spacing/md` |
| Footer padding | 상하16 / 좌우20 | `spacing/xl` / `spacing/2xl` |
| 카드 반복 간격 | **12** | 원본 List Box Group gap 12 → 신규 Card Group |
| Body 정보 행(List) | 높이 60 실측 | 가로 Fill, List 내부 gap 16 |
| Body 보조 행 | 높이 40 실측 | SPACE_BETWEEN/CENTER |
| Body 보조 행 오른쪽 버튼 영역 | gap **16** | 버튼 그룹 ↔ reaction suffix |
| 이체 ↔ 조회 | gap **8** | 각 버튼 120×40, secondary/small |
| Footer Left 자식 간격 | **8** | 링크·명칭 조합 / 세로 Divider / 계좌번호 |
| 링크 아이콘 ↔ 명칭 | **8** | IconButton 20×20 |
| Footer Right 자식 간격 | **16** | 금액·버튼 묶음 ↔ 더보기 |
| 금액 ↔ xsmall 버튼 그룹 | **8** | `spacing/md` |
| 금액 숫자 ↔ 원 | **4** | `spacing/xs` |
| 채우기 ↔ 꺼내기 | **4** | 각 49×28 실측, secondary/xsmall |
| 더보기 IconButton | 24×24 | secondary/24 |

- Body는 Fill W·Hug H, 원본 안쪽 높이 **156 = 위32 + [List60 + gap8 + 보조행40] + 아래16**이다.
- Footer는 H, SPACE_BETWEEN/CENTER, Fill W·Hug H, 원본 높이 **60 = 상16 + 가장 높은 자식28 + 하16**이다. 좌우 배치의 원본 itemSpacing 값 20은 실제 양쪽 사이 고정 빈 폭이 아니다.
- 원본 바깥 폭 1360, 높이 220이며 테두리 2가 사방 레이아웃에 포함되어 내부 폭은 1356이다. 높이는 `상단선2 + Body156 + Footer60 + 하단선2 = 220`이다. 테두리를 다시 외부 padding 2로 중복 재현하지 않는다.
- 원본 외곽 radius 12 (`radius/md`), border는 `stroke/xl` 2px + `border/neutral/tertiary`다. 실제 Card / Surface의 대응 상태·토큰으로 같은 외관을 맞춘다. 내부 Body의 흰색은 `surface/neutral/quaternary-muted`, Footer의 회색은 `surface/neutral/tertiary-muted`다.
- 원본 Body의 stroke paint는 visible=false, Footer strokes는 빈 배열이다. 남아 있는 strokeWeight 바인딩만 보고 내부 테두리나 분리선을 추가하지 않는다.
- Body 원본의 별도 gap 12는 직접 자식 vStack 하나라 현재 시각 간격을 만들지 않는다. 실제 List와 보조 행 사이 간격은 vStack의 **8**이다.
- Footer의 왼쪽은 계좌 연결/명칭/계좌번호, 오른쪽은 금액/채우기·꺼내기/더보기 조합이다. 숫자 전용 금액·계좌번호는 기존 Pretendard 규칙을 따른다. 문구·금액은 원본 기획으로 교체한다.

#### List 내부 정보 구조

- 실제 List는 `Slot-Middle` + `Slot-Suffix`를 H/gap **16**으로 배치한다. Suffix는 iconButton 타입이며 원본 24×24다.
- Slot-Middle 안 정보 행은 은행 아이콘 영역(24)과 정보 영역을 H/gap **12**로 결합한다.
- 정보 영역은 V/gap **2**로 First/Second 행을 배치한다.
- First 행은 상품명·은행·계좌번호 묶음과 잔액을 양끝 정렬한다. 상품명·Divider·계좌 정보의 내부 간격은 8, 은행명↔계좌번호는 4다.
- Second 행은 수정 가능한 표시명과 최근 거래/잔액 등 보조 데이터를 양끝 정렬한다. 원본 hStack itemSpacing 16과 실제 양끝 빈 폭을 구별한다.
- 이 내부 구조는 List의 실제 인스턴스·슬롯을 재사용하며 Card의 Body를 대신하는 임의 절대좌표 텍스트로 재구성하지 않는다.

| 실제 하위 컴포넌트 | 원본 variant | component key |
|---|---|---|
| List | 단일 컴포넌트 | `efc578a125431c008569ed3affe51759bb11531b` |
| Infobox / Basic | size=medium, status=info | `74e62192ed17356a3e353cc17754cce4d921c383` |
| BoxButton | secondary/small | `b20b82eee273f930c668788109e73de668023c03` |
| BoxButton | secondary/xsmall | `9d292f00e41cb996e999ff0f9f25faa2994eedd6` |
| Item / Suffix | variant=iconButton | `648fdb7c47d14666faa86ece4766fd639f8d4356` |
| Item / Suffix | variant=reactionButton | `850edb79385d21e34f15bb08a927a2e7509eb067` |
| IconButton | secondary/24 | `d9a1a69acb340ca57be86e75cc6f8ab508d3b1c3` |

구조·padding·간격을 유지하되 콘텐츠 변화에는 Hug/Fill로 대응한다. 신규 카드는 실제 Card / Surface 인스턴스이며 Detach를 금지한다.
