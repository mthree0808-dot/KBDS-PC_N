Markdown# Figma Design System & Layer Architecture Guide

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
그룹 명칭 예시:Text GroupTextList GroupInputField GroupDataList Group (기본 gap: 12px)Card Group (기본 gap: 12px)Data Block Group (기본 gap: 12px)Text Box Group (기본 gap: 12px)Accordion GroupRadio GroupCheckbox Group12.5 단일 항목의 래퍼단일 항목을 배치 목적으로 감싸는 경우 Group을 붙이지 않고 해당 컴포넌트 명칭을 그대로 사용합니다.PlaintextInputField (Auto Layout 래퍼)
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
복수 TextList:PlaintextTextList Group
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
