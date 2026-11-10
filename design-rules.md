Figma 디자인 시스템 기반 화면 구축 및 레이어 명명 규칙 가이드본 문서는 피그마(Figma)에서 디자인 시스템(DS) 변수 및 컴포넌트를 활용하여 화면을 생성하거나 레이어를 구조화할 때 준수해야 하는 표준 가이드라인입니다.1. 개요 및 디자인 시스템 환경디자인 시스템 경로: MO 디자인 라이브러리 v0.97 배포준비절대 원칙:오로지 디자인 시스템에 정의된 변수(Variables) 및 스타일 토큰으로만 작업합니다.색상(Color), 서체(Typography), 간격(Spacing), 모서리 곡률(Corner Radius), 패딩(Padding), 테두리(Border) 등의 모든 수치는 하드코딩된 값(Hex, 임의 px)을 금지하며 정의된 토큰을 바인딩합니다.2. 서체(Typography) 적용 규칙대상적용 폰트 패밀리비고한글 및 일반 UI 텍스트KBFG Text레이블, 본문, 타이틀, 버튼 텍스트 등 전반적인 UI숫자 전용 표현Pretendard금액, 계좌번호, 날짜, 시간, 카운터, 통계 수치 등3. 화면 레이아웃 및 영역 규격3.1. 화면 기본 영역 및 상하 배치 간격기본 영역 계층: 최상위 프레임 아래 ## HEADER -> ## BODY -> ## FOOTER 구조를 기본으로 유지합니다.Header / Page Title 관계: ## HEADER 다음에 Title / Page 컴포넌트가 위치합니다.Infobox / FullWidth 배치 간격:Title / Page 바로 다음에 Infobox / FullWidth가 위치할 때의 상하 간격(Gap): 48pxInfobox / FullWidth와 그 다음 하단 콘텐츠 사이의 상하 간격(Gap): 48pxPagination 간격: Pagination / Basic과 바로 위 상단 콘텐츠 사이의 상하 간격(Gap): 16px3.2. ## BODY 프레임 Auto Layout 속성 규격속성 (Property)설정 값 (Value)비고Width1440px (Fixed)기본 데스크톱/화면 기준 고정 너비HeightHug (Hug contents)내부 콘텐츠 높이에 맞춰 유동적 조절Layout FlowHorizontal가로 방향 Auto Layout (수평 흐름)Padding상하 48px, 좌우 40pxpadding: 48px 40pxGap48px 또는 32px섹션 및 주요 컬럼 간격 토큰 준수 (LNB 배치 시 32px)3.3. LNB 및 본문 컬럼 구조 (Container 분할)LNB(좌측 네비게이션)가 있는 화면의 경우 ## BODY 내에서 다음과 같이 Container를 분할하고 수치를 설정합니다.## BODY Auto Layout: flow: Horizontal, gap: 32pxLNB 영역:레이어명: Container 1너비(Width): 316px (Fixed)우측 본문 콘텐츠 영역:레이어명: Container 2너비(Width): 664px (Fixed)## BODY (Horizontal Flow, gap: 32px)
├─ Container 1 (width: 316px, LNB 영역)
└─ Container 2 (width: 664px, 메인 콘텐츠 영역)
4. 컴포넌트 조합 및 패턴별 세부 규칙4.1. Table 컴포넌트 높이 대응 규칙Table / Header나 Table / Cell이 수평(Horizontal)으로 나란히 배치될 때, 텍스트 줄바꿈 등으로 한쪽의 높이 값이 커지면 상대적으로 작은 쪽의 높이 값을 fill (Fill container)로 설정하여 전체 행의 높이를 균일하게 맞춥니다.4.2. Title / Headline + Table + 부연 설명 조합 규칙Title과 Table 간격: Title / Headline과 Table(테이블 컴포넌트로 조합된 형태) 결합 시 gap: 20px 적용.하단 부연 설명 텍스트 간격:테이블 하단에 단일 TextList / Unordered 혹은 복수의 TextList / Unordered가 부연 설명으로 조합될 때 gap: 16px 적용.이때 TextList / Unordered의 폰트 사이즈는 size: 14로 지정.섹션 그룹 반복 간격: 이 조합 그룹(Title / Headline + Table + 부연 설명)이 아래에 다시 반복될 때의 간격은 gap: 48px 적용.Title / Headline
   │ (gap: 20px)
Table (조합 형태)
   │ (gap: 16px)
TextList / Unordered (size: 14) 또는 TextList Group
   │
   │ (반복 시 그룹 간 gap: 48px)
   ↓
Title / Headline ...
4.3. 콘텐츠 박스 3종 (Card / Surface, Data Block, Text Box) 분류 및 제작 원칙외형보다 콘텐츠의 목적과 사용자 동작 유무로 명확히 구분하며, 내부 패딩(Padding)은 모두 32px을 일괄 적용합니다.구분Card / SurfaceData BlockText Box주된 목적정보와 사용자 동작의 결합사실 데이터 조회·대조설명·안내·주의·상태 전달사용 예계좌·상품 선택, 상세 이동, 이체이름, 전화번호, 계좌정보, 금액유의사항, 상담센터 안내, 상태 설명사용자 동작박스 전체 또는 내부 요소에 동작 있음박스 자체에는 동작 없음정보 전달이 주목적 (동작 없음)제작 방식실제 DS 컴포넌트 인스턴스Auto Layout 프레임으로 직접 구성Auto Layout 프레임으로 직접 구성주요 콘텐츠원형 Slot·Card 하위 컴포넌트Title, DataListTitle, Text, TextList, Divider내부 패딩사방 32px사방 32px사방 32px1) Card / Surface 상세 규칙선택·이동·이체 등 실제 동작이 결합된 박스에 사용합니다.최신 디자인 시스템의 실제 Card / Surface 인스턴스를 사용합니다.내부 패딩은 32px을 적용합니다.라운드·배경·테두리는 해당 원형과 공개 variant를 따릅니다.콘텐츠는 원형의 Slot과 하위 컴포넌트로 구성합니다.제목은 Card / Body / Group-A, 설명·목록은 Card / Body / Group-C의 해당 variant를 사용합니다.대표 조합은 Groups 간격 16px, 설명 목록용 Group 내부 간격 12px입니다.Header·Footer·버튼은 기획에서 필요한 경우에만 사용합니다.인스턴스를 detach하거나 일반 프레임으로 카드 외형을 흉내 내지 않습니다.라디오 선택형 규칙:실제 Card / Header / Affix — variant=radio를 사용합니다.Body는 가로 Auto Layout, 가로 Fill, 세로 Hug, gap: 12px.Groups는 가로 Fill, Affix는 24×24px.카드당 Affix는 하나만 노출하고 카드와 라디오의 선택·비활성 상태를 일치시킵니다.2) Data Block 상세 규칙박스 자체의 동작 없이 사실 데이터를 보여줄 때 사용합니다.구조 트리:Data Block
├─ Title — 필요한 경우
└─ DataList Group — gap: 12px
   ├─ DataList
   └─ DataList
기본 스펙 및 토큰 매핑:Layout: Vertical Auto LayoutResizing: 가로 Fill, 세로 Hug내부 간격 (Gap): 16px (spacing/xl)Padding: 사방 32pxRadius: 20px (radius/2xl)Fill: surface/neutral/quaternary-mutedBorder: stroke/md + border/neutral/secondary-muted외형: 항상 아웃라인형세부 원칙:DataList 기본값은 layout=split, size=14, hasDivider=false입니다.복수 DataList는 DataList Group으로 묶고 gap: 12px을 적용합니다.라벨·값 쌍이 하나라면 Group 없이 DataList를 직접 배치합니다.회색 배경·무테형으로 임의 변경하지 않습니다.Card / Surface를 사용하거나 detach해서 만들지 않습니다.3) Text Box 상세 규칙설명·이용 안내·주의·상태 전달이 주목적인 박스에 사용합니다.구조 트리:Text Box
├─ Title / Section — 필요한 경우
└─ TextList Group
   ├─ TextList / Unordered
   └─ TextList / Unordered
기본 스펙 및 토큰 매핑:Layout: Vertical Auto Layout내부 간격 (Gap): 16px (spacing/xl)Padding: 사방 32pxRadius: 14px (radius/lg)구성: 기획에 따라 Title, Text, TextList, Divider 조합스타일 variant 선택 기준:아웃라인형: Fill surface/neutral/quaternary-muted, Border stroke/md + border/neutral/secondary-muted (독립 영역의 경계가 필요할 때)회색 배경·무테형: Fill surface/neutral/tertiary-muted, Border 없음 (strokes: []) (보조 안내를 구분하거나 테두리 반복·중첩을 줄일 때)세부 원칙:일반 본문은 Text > Content 구조를 사용합니다.기획에 없는 제목·불릿·구분선을 임의로 추가하지 않습니다.Data Block의 DataList 구조를 일괄 적용하지 않습니다.기존 Infobox 용도에 해당하면 해당 컴포넌트와 전용 규칙을 우선합니다.배경·테두리를 바꾸어도 레이어 이름은 Text Box로 유지합니다.4.4. 분류와 반복 배치 시 공통 기준분류 판정:사실 데이터에 상태 Label·Badge가 붙어 있어도 동작이 없다면 Data Block입니다.전화번호·이메일이 포함되어도 안내 문맥이 주목적이면 Text Box입니다.Data Block 바깥의 형제 Button Area에 수정 버튼이 있어도 박스 자체가 동작하지 않으면 Data Block을 유지합니다.전용 SelectButton, GridButton, List, Infobox 패턴은 해당 전용 규칙을 우선합니다.고객정보조회처럼 Table 사용이 별도로 확정된 화면은 Table 기준을 우선합니다.반복 배치 및 열거 간격:반복 박스는 실제 Auto Layout의 Card Group, Data Block Group, Text Box Group으로 묶습니다.Card / Surface, Data Block, Text Box가 열거(반복 배치)될 때의 기본 간격은 모두 gap: 12px을 적용합니다.반복 자식에 숫자 순번(1, 2)을 붙이지 않으며, 콘텐츠 박스를 배치용 Container로 임의 이름 변경하지 않습니다.4.5. 버튼 영역 (Button Area) 및 CTA 패턴1) 최하단 CTA (Call To Action) 영역 패턴화면 최하단 CTA 버튼 영역은 독립된 Container [숫자]로 감쌉니다.사용 컴포넌트: ButtonGroup기본 설정(Variant/Property):count: multisize: largeslot-button 내부에 BoxButton 2개 배치버튼 구성 및 역할 배치:좌측 버튼: variant=tertiary (부정/취소/이전 목적)우측 버튼: variant=primary (긍정/확인/다음 목적)두 버튼 사이 간격 (Gap): 12pxContainer [숫자]
└─ ButtonGroup (count: multi, size: large)
   └─ slot-button (gap: 12px)
      ├─ BoxButton (variant: tertiary - 부정/취소)
      └─ BoxButton (variant: primary - 긍정/확인)
2) 본문 중간 콘텐츠 + 버튼 조합 패턴최하단 CTA 외에, 본문 중간에서 특정 콘텐츠 그룹과 버튼이 조합될 때 적용합니다.사용 컴포넌트 및 속성: BoxButton (variant: secondary, size: medium)간격 규격: 해당 콘텐츠 그룹과 이 버튼 사이의 상하 간격은 gap: 24px로 설정합니다.레이어 명명: 12.6 및 12.9 규칙에 따라 [콘텐츠 그룹 명칭] / Button Area로 명명합니다.[콘텐츠 그룹] / Button Area (gap: 24px)
├─ [콘텐츠 그룹] (예: Card Group, InputField Group 등)
└─ Button Area
   └─ BoxButton (variant: secondary, size: medium)
4.6. 단계형 화면 (Step Pattern)진행 단계를 나타내는 화면의 경우, Container [숫자]로 상위 래퍼를 구성합니다.좌측에 Title / Page, 그 우측(수평 배치)에 StepIndicator / Horizontal 컴포넌트를 배치합니다.Container [숫자] (Horizontal Auto Layout)
├─ Title / Page
└─ StepIndicator / Horizontal
4.7. 완료 화면 (Completion/Feedback Pattern)업무 처리 완료를 안내하는 화면 패턴입니다.최상단에 Feedback 컴포넌트를 배치하고 이를 Container 1로 감쌉니다.Container 1의 패딩은 padding: 20px 0 (상하 20px, 좌우 0px)으로 설정합니다.Container 1 (padding: 20px 0)
└─ Feedback
5. 레이어 명명 및 그룹핑 규칙 (12장)최상위 화면 프레임의 이름은 61.9장의 화면ID_화면명 규칙을 따르며, 화면 내부의 사용자 정의 레이어 및 그룹은 아래 역할별 명명 규칙을 적용합니다.12.0. 참조 화면 학습과 생성 시 적용 우선순위규칙 파악: 전달받은 화면에서는 간격·패딩·크기·정렬·서체·색상, 적절한 디자인 시스템 컴포넌트와 변형, UI 조합·시각적 위계·상태별 차이를 파악하고 재현 가능한 규칙으로 정리합니다.미정리 구조 복제 금지: 참조 화면의 ## BODY 내부 레이어 이름과 정리 상태는 학습·복제 기준으로 삼지 않습니다. 미정리된 프레임명, 잘못된 Group 명칭, 불필요한 중간 래퍼, 부정확한 명명·그룹핑을 신규 제작물에 그대로 옮기지 않습니다.신규 생성 기준: 신규 생성은 원본 기획안과 필수 디자인 규칙을 준수하며 실제 UI의 역할·내용 순서·시각적 위계·간격을 반영합니다. 사용자 정의 레이어는 12.1~12.11의 규칙으로 명명하고, 관련 요소는 실제 Auto Layout으로 구성합니다. 현재 자식 구성을 기준으로 이름을 다시 판정합니다.원본 계층 강제 해석 금지: 각 패턴 장에서 원본의 Container 개수·번호·부모·래퍼를 설명한 부분은 신규 화면에 원본의 미정리 계층을 그대로 강제하는 지시로 해석하지 않습니다. 신규 구조는 기획상의 역할 구분과 본 절을 따릅니다.기존 화면 유지 원칙: 기존 화면 자체의 레이어 정리를 수행할 때는 12.3의 Container 개수·부모·순서·역할 분할 임의 변경 금지 규칙을 유지합니다. 정리 요청을 이유로 화면의 UI 구성이나 업무 영역을 임의로 재설계하지 않습니다.컴포넌트 인스턴스 보호: 디자인 시스템 인스턴스의 원형 이름·내부 고유 계층과 연결은 유지합니다. 사용자 정의 래퍼 정리를 위해 인스턴스를 detach하지 않습니다.이 우선순위는 지금까지 전달된 화면과 앞으로 전달될 모든 참조 화면에 적용합니다.12.1. 기본 원칙사용자 정의 레이어·그룹 이름은 역할을 알 수 있는 영문(English)으로 작성합니다.디자인 시스템 컴포넌트의 원형 이름과 내부 고유 계층은 유지합니다.관련 항목은 실제 Auto Layout으로 묶습니다. 이름만 Group으로 변경하지 않습니다.12.2. 화면의 기본 영역일반 화면:[화면ID_화면명]
├─ ## HEADER
├─ ## BODY
└─ ## FOOTER
Popup 컴포넌트: 내부 영역명으로 Header, Body, Footer를 사용합니다.12.3. Container 명명본문 Container가 하나이면 Container로 명명합니다.복수이면 위에서부터 순서대로 Container 1, Container 2, Container 3으로 명명합니다.개별 Slot 안에서도 동일한 기준을 적용합니다.다른 화면이나 다른 Slot의 Container 개수는 합산하지 않습니다.기존 화면 정리 시 Container의 개수·부모·순서·역할 분할을 임의로 변경하지 않습니다.## BODY
├─ Container 1
├─ Container 2
└─ Container 3
12.4. 동일 항목의 반복같은 종류·역할의 항목이 복수로 반복되면 실제 Auto Layout으로 묶고 [명칭] Group으로 명명합니다. 자식 항목은 원래 이름을 유지하며 InputField 1, InputField 2처럼 순번을 붙이지 않습니다.InputField Group
├─ InputField
├─ InputField
└─ InputField
대표 예시:Text GroupTextList GroupInputField GroupDataList GroupCard GroupData Block GroupText Box GroupAccordion GroupRadio GroupCheckbox Group12.5. 단일 항목의 래퍼단일 항목을 배치 목적으로 감싸는 경우 Group을 붙이지 않고 해당 명칭을 그대로 사용합니다.InputField (Auto Layout 래퍼)
└─ InputField (컴포넌트 인스턴스)
12.6. 서로 다른 두 요소의 결합실제 구성 요소의 대표 명칭을 /로 연결합니다.Title / Page, Title / Section 등의 세부 유형은 조합명에서 대표 명칭인 Title로 정리합니다.Group, Button Area처럼 실제 역할을 나타내는 명칭은 보존합니다.자식 구성부모 레이어 이름Title / Page + InputFieldTitle / InputFieldTitle / Section + InputField GroupTitle / InputField GroupTitle / Section + List GroupTitle / List GroupTitle / Element + TextTitle / TextInputField Group + Button AreaInputField Group / Button AreaCard Group + Button AreaCard Group / Button AreaText + TextList GroupText / TextList Group12.7. 여러 종류의 콘텐츠 결합서로 다른 세 덩이 이상을 묶으면 [첫 요소의 대표 명칭] / Contents로 명명합니다.Title / Contents
├─ Title / Page
├─ InputField Group
└─ Accordion
제목과 복합 본문이 결합된 경우에도 Title / Contents를 사용합니다.Title / Contents
├─ Title / Section
└─ Text / TextList Group
복수의 제목·콘텐츠 조합을 아우르는 상위 래퍼도 Title / Contents로 명명합니다. (상위와 하위를 모두 Title / Accordion Group 등으로 중복 명명하지 않음)Title / Contents
├─ Title / Accordion Group
└─ Title / Accordion Group
12.8. Text와 TextList 구분단일 일반 본문:Text
└─ Content
복수 일반 본문:Text Group
├─ Text
│  └─ Content
└─ Text
   └─ Content
복수 TextList:TextList Group
├─ TextList / Unordered
└─ TextList / Unordered
Text와 복수 TextList의 혼합:Title / Contents
├─ Title / Element
└─ Text / TextList Group
   ├─ Text
   │  └─ Content
   └─ TextList Group
      ├─ TextList / Unordered
      └─ TextList / Unordered
일반 Text만 반복되는 그룹을 TextList Group으로 명명하지 않습니다.Text와 TextList가 섞인 본문 전체를 TextList Group으로 명명하지 않습니다.자식 구성이 혼합 본문으로 바뀌면 상위의 기존 Title / TextList Group도 Title / Contents로 변경합니다.12.9. 버튼 영역본문의 독립 버튼 영역은 Button Area로 명명합니다.InputField Group / Button Area
├─ InputField Group
│  ├─ InputField
│  └─ InputField
└─ Button Area
   └─ BoxButton
