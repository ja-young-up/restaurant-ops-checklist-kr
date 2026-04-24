const STORAGE_KEY = "restaurant-checklist-state-v1";

const sources = [
  {
    id: "src-opening-report",
    title: "찾기쉬운 생활법령정보 - 음식점 영업신고",
    note:
      "일반음식점·휴게음식점·제과점 등은 영업 종류별·영업소별 신고 대상이라는 점을 기준으로 오픈 준비 항목을 구성했습니다.",
    url: "https://m.easylaw.go.kr/MOB/CsmInfoRetrieve.laf?csmSeq=839&ccfNo=5&cciNo=1&cnpClsNo=1",
  },
  {
    id: "src-health",
    title: "찾기쉬운 생활법령정보 - 건강진단",
    note:
      "영업 시작 전 건강진단, 직접 종사자 대상, 미수검자 종사 금지, 연 1회 점검 기준을 반영했습니다.",
    url: "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=4&cciNo=1&cnpClsNo=1&csmSeq=839&popMenu=ov",
  },
  {
    id: "src-hygiene-edu",
    title: "찾기쉬운 생활법령정보 - 식품위생교육",
    note:
      "식품접객업 신규 6시간 교육과 매년 위생교육 의무를 바탕으로 위생 카테고리를 설계했습니다.",
      url: "https://m.easylaw.go.kr/MOB/CsmInfoRetrieve.laf?csmSeq=839&ccfNo=4&cciNo=1&cnpClsNo=2",
  },
  {
    id: "src-food-poisoning",
    title: "식품안전나라 - 음식점 식중독 예방",
    note:
      "위생모, 위생복, 전처리·조리·세척 앞치마 구분, 장신구 금지, 조리실 전용 작업화 등 종업원·주방 위생 항목의 근거입니다.",
    url: "https://www.foodsafetykorea.go.kr/portalmobile/content/detail.do?bbs_no=bbs427&ntctxt_no=1069310",
  },
  {
    id: "src-grade",
    title: "식품안전나라 - 음식점 위생등급제 지정절차",
    note:
      "위생등급제 신청 대상, 수수료 없음, 기본·일반·공통분야 평가구조를 기준으로 개선 항목을 추가했습니다.",
    url: "https://www.foodsafetykorea.go.kr/portal/board/boardDetail.do?bbs_no=newbbs12&menu_grp=MENU_NEW02&menu_no=3397",
  },
  {
    id: "src-labor",
    title: "고용노동부 - 근로계약서 작성방법",
    note:
      "임금, 근로시간, 휴일, 연차, 유급휴가 명시와 미교부 시 제재 내용을 기준으로 노무 체크리스트를 정리했습니다.",
    url: "https://www.moel.go.kr/mainpop2.do",
  },
  {
    id: "src-cash-receipt",
    title: "국세청 - 현금영수증 발급·수취시 혜택",
    note:
      "현금영수증 발행 시 세액공제와 누락 방지 관점에서 일일 정산 항목을 설계했습니다.",
    url: "https://j.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7794&mi=2469",
  },
  {
    id: "src-business-card",
    title: "국세청 - 사업용 신용카드 개요",
    note:
      "사업용 카드 등록, 매입내역 조회, 매입세액 공제 확인 흐름을 세무·증빙 항목에 반영했습니다.",
    url: "https://j.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7799&mi=2475",
  },
  {
    id: "src-vat",
    title: "국세청 - 부가가치세 안내",
    note:
      "일반과세자·간이과세자 신고주기, 신고기한을 월간·반기 점검 항목으로 반영했습니다.",
    url: "https://in.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7804&mi=2483",
  },
  {
    id: "src-origin",
    title: "국립농산물품질관리원 - 음식점 원산지 표시 안내",
    note:
      "모든 메뉴판·게시판 표시, 표시판 크기, 글자 크기 기준을 원산지·표시 항목에 반영했습니다.",
    url: "https://www.naqs.go.kr/hp/contents/contentsTab.do?menuId=MN30559",
  },
  {
    id: "src-market-delivery",
    title: "소상공인시장진흥공단 상권정보 - 배달지수",
    note:
      "배달 매출 성장 추세를 참고 정보로 확인할 수 있다는 점을 바탕으로 상권·배달 분석 항목을 구성했습니다.",
    url: "https://sg.sbiz.or.kr/godo/stat/baemin.sg",
  },
  {
    id: "src-market-sns",
    title: "소상공인시장진흥공단 상권정보 - SNS분석",
    note:
      "언급량, 감성분석, 이슈어 랭킹을 활용한 리뷰·브랜드 모니터링 항목의 근거입니다.",
    url: "https://sg.sbiz.or.kr/godo/sns/index.sg",
  },
  {
    id: "src-sns-package",
    title: "기업마당 - SNS 활용패키지",
    note:
      "SNS 타겟 광고, 분석 보고서 지원을 근거로 마케팅 카테고리에 광고 성과 추적 항목을 포함했습니다.",
    url: "https://www.bizinfo.go.kr/see/seeh/selectSmesPblancView.do?pblancId=PBLN_000000000104190",
  },
  {
    id: "src-brand-package",
    title: "기업마당 - 브랜드 역량 강화",
    note:
      "AI 콘텐츠, 데이터 마케팅, 온라인 판로 진출 지원을 바탕으로 브랜드 자산 정비 항목을 넣었습니다.",
    url: "https://www.bizinfo.go.kr/see/seeh/selectSmesPblancView.do?pblancId=PBLN_000000000104213",
  },
  {
    id: "src-biz-registration",
    title: "찾기쉬운 생활법령정보 - 사업자등록 신청",
    note:
      "사업 개시일부터 20일 이내 사업자등록 신청, 임차 시 확정일자 점검 기준을 오픈 준비 항목에 반영했습니다.",
    url: "https://m.easylaw.go.kr/MOB/CsmInfoRetrieve.laf?ccfNo=6&cciNo=1&cnpClsNo=2&csmSeq=839",
  },
];

const checklistData = [
  {
    id: "opening",
    eyebrow: "Open Setup",
    title: "오픈 준비",
    description:
      "영업 개시 전 신고, 등록, 점포 적합성, 서류 준비처럼 시작 단계에서 빠뜨리면 바로 문제가 되는 항목들입니다.",
    groups: [
      {
        title: "신고와 등록",
        description: "개업 전 행정 절차와 기본 문서를 먼저 점검합니다.",
        items: [
          {
            title: "업장 형태에 맞는 영업신고 유형을 확정했다",
            details: [
              "일반음식점, 휴게음식점, 제과점 중 내 업장에 맞는 유형을 구분한다.",
              "주류 취급 여부와 조리 범위를 기준으로 업종 구분을 다시 확인한다.",
              "관할 시·군·구 식품영업 부서 문의처를 확보한다.",
            ],
            refs: ["src-opening-report"],
          },
          {
            title: "사업자등록과 세무 기본 설정 일정을 잡았다",
            details: [
              "사업 개시일 전 또는 개시일부터 20일 이내 사업자등록 일정을 잡는다.",
              "일반과세자·간이과세자 중 어떤 유형이 적합한지 검토한다.",
              "홈택스, 손택스, 사업용 계좌·카드 준비를 동시에 진행한다.",
            ],
            refs: ["src-biz-registration", "src-vat", "src-business-card"],
          },
          {
            title: "임차 점포라면 확정일자·보증금 보호 구조를 확인했다",
            details: [
              "임대차계약서와 사업자등록을 연결해 확정일자까지 같이 챙긴다.",
              "보증금 보호를 위해 계약서 원본과 사본 보관 체계를 만든다.",
            ],
            refs: ["src-biz-registration"],
          },
        ],
      },
      {
        title: "오픈 전 적합성",
        description: "운영 가능 입지와 업장 조건이 실제 영업에 맞는지 확인합니다.",
        items: [
          {
            title: "해당 점포에서 음식점 영업이 가능한지 확인했다",
            details: [
              "용도지역·건축물 용도상 음식점 영업이 가능한지 확인한다.",
              "옥외영업, 테라스, 배달전문, 공유주방 여부가 추가로 제한되는지 본다.",
            ],
            refs: ["src-opening-report"],
          },
          {
            title: "오픈 직전 제출·비치 서류 목록을 따로 정리했다",
            details: [
              "영업신고 관련 서류, 임대차 관련 서류, 교육·건강진단 증빙을 한 폴더에 모은다.",
              "점검 대응용 출력본과 디지털 백업본을 분리해 둔다.",
            ],
            refs: ["src-opening-report", "src-health", "src-hygiene-edu"],
          },
        ],
      },
    ],
  },
  {
    id: "hygiene",
    eyebrow: "Hygiene",
    title: "위생·식품안전",
    description:
      "식중독 예방과 행정점검 대응을 동시에 고려해야 하는 핵심 영역입니다. 교육, 건강진단, 종업원 위생수칙, 주방 운영 루틴을 한 번에 관리합니다.",
    groups: [
      {
        title: "교육과 건강진단",
        description: "영업자와 종사자의 필수 요건을 먼저 확인합니다.",
        items: [
          {
            title: "영업 전 건강진단과 정기 갱신 일정을 관리한다",
            details: [
              "직접 조리·저장·운반·판매에 종사하는 영업자와 종업원의 건강진단 여부를 확인한다.",
              "영업 시작 전에 미리 검진을 받고, 연 1회 갱신일을 캘린더에 등록한다.",
              "미수검자나 위해 우려 질병자가 현장 업무에 투입되지 않도록 체크한다.",
            ],
            refs: ["src-health"],
          },
          {
            title: "신규 식품위생교육과 매년 보수교육을 빠뜨리지 않는다",
            details: [
              "식품접객업 신규 영업자는 6시간 교육 이수 여부를 확인한다.",
              "매년 정기 위생교육 대상과 일정, 이수증 보관 상태를 관리한다.",
              "여러 업장을 운영하면 위생관리 책임자 지정 가능 여부를 검토한다.",
            ],
            refs: ["src-hygiene-edu"],
          },
        ],
      },
      {
        title: "종업원 개인위생",
        description: "현장에서 바로 실천할 수 있는 루틴으로 관리합니다.",
        items: [
          {
            title: "조리 종사자 복장·장신구·작업화 규칙을 운영표준으로 만들었다",
            details: [
              "위생모 착용, 위생복 청결, 전처리·조리·세척 앞치마 구분 사용을 지킨다.",
              "시계, 반지, 귀걸이 등 장신구 금지와 손톱 위생 기준을 명확히 한다.",
              "조리실 전용 작업화와 외부 출입 후 소독 절차를 운영한다.",
            ],
            refs: ["src-food-poisoning"],
          },
          {
            title: "화장실 사용 후 복귀 절차와 손 위생 루틴을 점검한다",
            details: [
              "화장실 전용 신발과 복귀 후 손 소독 절차를 구체적으로 정한다.",
              "오픈 전·피크타임 전·휴게 후 손 씻기 체크를 팀 규칙으로 만든다.",
            ],
            refs: ["src-food-poisoning"],
          },
        ],
      },
      {
        title: "주방·위생 관리 수준",
        description: "행정점검 대비와 실제 안전 운영을 함께 봅니다.",
        items: [
          {
            title: "위생점검표를 일일·주간 단위로 운영한다",
            details: [
              "냉장·냉동 상태, 세척·소독, 식재료 보관, 폐기 기준을 내부 점검표로 만든다.",
              "오픈 전, 마감 전 2회 확인 루틴을 만든다.",
            ],
            refs: ["src-food-poisoning", "src-grade"],
          },
          {
            title: "위생등급제 도전 여부를 검토하고 기준에 맞춰 개선한다",
            details: [
              "일반음식점·휴게음식점·제과점이면 신청 가능 여부를 확인한다.",
              "기본분야는 전부 적합해야 하고, 총점 85점 이상이 필요하다는 점을 감안해 준비한다.",
              "고객 신뢰와 지원사업 연계 가능성도 함께 검토한다.",
            ],
            refs: ["src-grade"],
          },
          {
            title: "메뉴별 원산지 표시 체계를 점검했다",
            details: [
              "모든 메뉴판과 게시판에 원산지를 표시하거나 별도 표시판을 소비자 눈에 띄게 둔다.",
              "음식명과 같은 크기 이상으로 표시되도록 점검한다.",
              "메뉴 변경 시 원산지 문구도 함께 업데이트한다.",
            ],
            refs: ["src-origin"],
          },
        ],
      },
    ],
  },
  {
    id: "labor",
    eyebrow: "People",
    title: "인사·노무",
    description:
      "소규모 외식업에서 가장 자주 흔들리는 영역입니다. 채용 시점부터 스케줄, 급여, 휴게 관리까지 문서화가 중요합니다.",
    groups: [
      {
        title: "채용과 계약",
        description: "구두 합의를 줄이고 기본 문서를 갖춥니다.",
        items: [
          {
            title: "모든 직원과 서면 근로계약서를 작성·교부했다",
            details: [
              "입사일, 업무 내용, 근무 장소를 계약서에 적는다.",
              "임금, 근로시간, 휴일, 연차, 유급휴가를 명시한다.",
              "아르바이트·단시간 근로자도 같은 원칙으로 교부한다.",
            ],
            refs: ["src-labor"],
          },
          {
            title: "업무별 교육 범위와 책임선을 정리했다",
            details: [
              "홀, 주방, 배달 포장, 발주, 마감 책임자를 분리한다.",
              "신입 교육 체크리스트와 인수인계 기준을 문서로 남긴다.",
            ],
            refs: ["src-labor", "src-food-poisoning"],
          },
        ],
      },
      {
        title: "근로시간과 급여 운영",
        description: "분쟁을 줄이기 위해 기록과 기준을 남깁니다.",
        items: [
          {
            title: "근무표와 휴게시간 기준을 미리 공개한다",
            details: [
              "피크타임, 브레이크타임, 마감조 기준을 주간 단위로 공유한다.",
              "4시간 근무 시 30분, 8시간 근무 시 1시간 이상 휴게 기준이 반영되도록 스케줄을 짠다.",
            ],
            refs: ["src-labor"],
          },
          {
            title: "급여 산정에 필요한 출퇴근·연장근로 기록을 남긴다",
            details: [
              "출퇴근 기록 방식과 마감 연장 시간 산정 기준을 정한다.",
              "최저임금, 주휴, 초과근무 정산 누락이 없도록 점검한다.",
            ],
            refs: ["src-labor"],
          },
        ],
      },
    ],
  },
  {
    id: "tax",
    eyebrow: "Tax & Admin",
    title: "세무·정산",
    description:
      "매출 누락과 증빙 누락은 바로 비용으로 이어집니다. 카드, 현금영수증, 부가세, 증빙 보관 체계를 일상 루틴으로 만들어야 합니다.",
    groups: [
      {
        title: "매출 정산",
        description: "현장 정산과 세무 연결을 일치시킵니다.",
        items: [
          {
            title: "현금·카드·배달앱 매출을 일일 마감 기준으로 맞춘다",
            details: [
              "포스, 카드 매출, 배달앱 정산 예정액을 매일 대조한다.",
              "취소·환불·서비스 제공 내역이 실제 정산표와 일치하는지 확인한다.",
            ],
            refs: ["src-cash-receipt", "src-vat"],
          },
          {
            title: "현금영수증 발급 누락을 줄이는 운영 규칙을 만들었다",
            details: [
              "현금 결제 시 발급 요청 여부를 묻는 기본 응대 문구를 둔다.",
              "현금영수증 발급 내역을 정기 확인해 누락 패턴을 찾는다.",
              "세액공제 대상 여부와 혜택도 함께 관리한다.",
            ],
            refs: ["src-cash-receipt"],
          },
        ],
      },
      {
        title: "비용과 증빙",
        description: "매입 증빙을 빠짐없이 남겨야 실제 비용 처리가 가능합니다.",
        items: [
          {
            title: "사업용 신용카드를 등록하고 사용내역을 확인한다",
            details: [
              "대표자 본인 명의 카드를 홈택스 또는 손택스에 등록한다.",
              "월별 사용내역과 매입세액 공제 대상 여부를 확인한다.",
              "개인 사용과 사업 사용을 섞지 않도록 결제 원칙을 나눈다.",
            ],
            refs: ["src-business-card"],
          },
          {
            title: "세금계산서·카드전표·현금영수증 수취 체계를 통일했다",
            details: [
              "식재료, 소모품, 장비 수리, 광고비 등 비용별 증빙 형태를 정한다.",
              "누락되기 쉬운 소액 구매도 사업용 결제수단으로 일원화한다.",
            ],
            refs: ["src-business-card", "src-vat"],
          },
        ],
      },
      {
        title: "신고 일정",
        description: "월간 점검과 반기·연간 일정을 함께 관리합니다.",
        items: [
          {
            title: "부가가치세 신고 주기와 마감일을 캘린더에 등록했다",
            details: [
              "일반과세자는 매년 1월과 7월, 간이과세자는 매년 1월 신고 구조를 확인한다.",
              "배달앱 수수료, 카드 수수료, 매입 누락이 없는지 신고 전 점검한다.",
            ],
            refs: ["src-vat"],
          },
          {
            title: "월별 손익 리뷰를 단순 매출이 아니라 실제 남는 돈 기준으로 본다",
            details: [
              "식재료비, 인건비, 임차료, 플랫폼 수수료, 광고비를 함께 본다.",
              "고정비와 변동비를 나눠 메뉴 가격 조정 근거로 활용한다.",
            ],
            refs: ["src-vat", "src-business-card"],
          },
        ],
      },
    ],
  },
  {
    id: "store",
    eyebrow: "Store & Safety",
    title: "매장·시설·안전",
    description:
      "주방 장비, 청소, 안전사고, 고객 동선, 외부 표시물까지 매장 상태는 매출과 점검 결과를 동시에 좌우합니다.",
    groups: [
      {
        title: "시설 점검",
        description: "고장 전 예방과 마감 점검을 기본으로 둡니다.",
        items: [
          {
            title: "냉장·냉동·조리 장비 점검 루틴을 운영한다",
            details: [
              "온도 이상 여부, 성능 저하, 누수, 소음 등을 주기적으로 확인한다.",
              "이상 발생 시 임시조치와 수리 연락처를 한 문서에 정리한다.",
            ],
            refs: ["src-food-poisoning", "src-grade"],
          },
          {
            title: "주방·홀·창고 청소를 구역별로 나눠 관리한다",
            details: [
              "일일 청소와 주간 대청소 구역을 구분한다.",
              "후드, 환풍기, 배수구, 제빙기처럼 놓치기 쉬운 항목을 별도 표기한다.",
            ],
            refs: ["src-food-poisoning", "src-grade"],
          },
        ],
      },
      {
        title: "고객 안전과 표시",
        description: "고객이 보는 정보와 동선도 운영 품질입니다.",
        items: [
          {
            title: "메뉴판·게시판 정보가 실제 운영과 일치한다",
            details: [
              "가격, 원산지, 품절 여부, 세트 구성, 추가금 정보를 최신 상태로 유지한다.",
              "배달앱과 오프라인 메뉴판 내용이 다르지 않은지 주기적으로 본다.",
            ],
            refs: ["src-origin"],
          },
          {
            title: "매장 내 미끄럼·화상·화재 위험 포인트를 상시 점검한다",
            details: [
              "바닥 물기, 가스·열기구 주변, 전기 멀티탭 과부하, 비상 동선을 확인한다.",
              "직원들에게 사고 발생 시 대응 순서를 공유한다.",
            ],
            refs: ["src-food-poisoning"],
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    eyebrow: "Marketing",
    title: "마케팅·고객관리",
    description:
      "감으로만 운영하지 않고, 상권 데이터와 SNS 반응을 바탕으로 채널별 전략을 세우는 데 초점을 둡니다.",
    groups: [
      {
        title: "상권과 채널 분석",
        description: "출점 이후에도 상권은 계속 다시 봐야 합니다.",
        items: [
          {
            title: "배달지수·상권 데이터를 월별로 확인한다",
            details: [
              "배달 매출 성장 추세와 업종 흐름을 참고해 배달 비중을 조정한다.",
              "매장 방문형인지 배달형인지 지역 특성을 데이터로 다시 본다.",
            ],
            refs: ["src-market-delivery"],
          },
          {
            title: "SNS 언급량과 감성 반응을 정기 모니터링한다",
            details: [
              "브랜드명, 대표 메뉴명, 지역명 키워드를 모니터링한다.",
              "긍정·부정 언급과 반복 이슈를 확인해 메뉴, 서비스, 콘텐츠에 반영한다.",
            ],
            refs: ["src-market-sns"],
          },
        ],
      },
      {
        title: "콘텐츠와 광고 운영",
        description: "채널을 만들기만 하지 말고 성과를 추적합니다.",
        items: [
          {
            title: "브랜드 자산을 통일해 노출한다",
            details: [
              "대표 사진, 로고, 소개 문구, 메뉴 설명, 가격 정보를 채널별로 통일한다.",
              "네이버 플레이스, 인스타그램, 배달앱, 지도 서비스 정보가 서로 다르지 않게 관리한다.",
            ],
            refs: ["src-brand-package"],
          },
          {
            title: "광고를 집행했다면 결과 보고 기준을 정해둔다",
            details: [
              "광고 전후 방문수, 저장수, 전화수, 배달 주문수 변화를 기록한다.",
              "단순 노출보다 실제 주문 전환이나 재방문으로 이어졌는지 본다.",
            ],
            refs: ["src-sns-package", "src-brand-package"],
          },
        ],
      },
      {
        title: "리뷰와 고객 경험",
        description: "고객의 언어를 운영 개선 데이터로 바꿉니다.",
        items: [
          {
            title: "리뷰 응대 기준을 만들어 감정 대응을 줄인다",
            details: [
              "불만 리뷰는 사실 확인, 사과, 개선조치, 재발방지 순서로 대응한다.",
              "반복되는 칭찬 포인트는 대표 강점으로 콘텐츠화한다.",
            ],
            refs: ["src-market-sns"],
          },
          {
            title: "고객이 자주 묻는 정보를 미리 공개한다",
            details: [
              "영업시간, 브레이크타임, 주차, 포장 가능 여부, 라스트오더를 명확히 표기한다.",
              "혼잡 시간과 대기 방식도 안내해 고객 기대치를 맞춘다.",
            ],
            refs: ["src-brand-package", "src-market-sns"],
          },
        ],
      },
    ],
  },
  {
    id: "management",
    eyebrow: "Management",
    title: "경영관리",
    description:
      "운영이 바빠질수록 숫자와 반복 업무를 정리하는 구조가 필요합니다. 월간 점검과 개선 루프를 만드는 카테고리입니다.",
    groups: [
      {
        title: "매출·원가 관리",
        description: "매출 규모보다 구조를 보는 습관을 만듭니다.",
        items: [
          {
            title: "메뉴별 매출과 원가를 따로 본다",
            details: [
              "잘 팔리는 메뉴와 실제 이익이 남는 메뉴가 같은지 구분한다.",
              "원가 상승 품목은 가격 조정, 구성 변경, 대체 식재료 검토를 한다.",
            ],
            refs: ["src-vat", "src-business-card"],
          },
          {
            title: "폐기·로스 원인을 기록한다",
            details: [
              "발주 과다, 조리 실수, 유통기한 경과, 판매 부진 등 원인을 나눠 적는다.",
              "주간 회고 때 가장 큰 로스 요인을 줄이는 액션을 정한다.",
            ],
            refs: ["src-food-poisoning"],
          },
        ],
      },
      {
        title: "운영 루틴",
        description: "사장 혼자 기억하는 구조에서 벗어납니다.",
        items: [
          {
            title: "오픈·마감 체크리스트를 직원과 공유한다",
            details: [
              "현금·포스·위생·장비·청소·재고 점검을 순서대로 고정한다.",
              "누가 확인했는지 기록이 남는 방식으로 운영한다.",
            ],
            refs: ["src-food-poisoning", "src-cash-receipt"],
          },
          {
            title: "지원사업과 제도 활용 여부를 분기마다 점검한다",
            details: [
              "위생 개선, 온라인 판로, 브랜드 강화, SNS 마케팅 관련 지원사업 공고를 확인한다.",
              "지원요건과 제출자료를 평소에 준비해 기회를 놓치지 않는다.",
            ],
            refs: ["src-sns-package", "src-brand-package", "src-grade"],
          },
        ],
      },
    ],
  },
];

const categoryTemplate = document.querySelector("#categoryTemplate");
const subgroupTemplate = document.querySelector("#subgroupTemplate");
const itemTemplate = document.querySelector("#itemTemplate");
const checklistContainer = document.querySelector("#checklistContainer");
const categoryNav = document.querySelector("#categoryNav");
const sourcesContainer = document.querySelector("#sourcesContainer");
const sectionProgressBoard = document.querySelector("#sectionProgressBoard");
const searchInput = document.querySelector("#searchInput");
const onlyUnchecked = document.querySelector("#onlyUnchecked");
const expandAllBtn = document.querySelector("#expandAllBtn");
const collapseAllBtn = document.querySelector("#collapseAllBtn");
const resetBtn = document.querySelector("#resetBtn");
const categoryCount = document.querySelector("#categoryCount");
const itemCount = document.querySelector("#itemCount");
const progressPercent = document.querySelector("#progressPercent");

const flatItems = [];
const categoryStats = new Map();
let state = loadState();

render();
applyFilters();
updateSummary();

searchInput.addEventListener("input", applyFilters);
onlyUnchecked.addEventListener("change", applyFilters);
expandAllBtn.addEventListener("click", () => setAllCategories(true));
collapseAllBtn.addEventListener("click", () => setAllCategories(false));
resetBtn.addEventListener("click", () => {
  state = {};
  persistState();
  document.querySelectorAll('.item input[type="checkbox"]').forEach((input) => {
    input.checked = false;
    input.closest(".item").classList.remove("is-complete");
  });
  onlyUnchecked.checked = false;
  applyFilters();
  updateSummary();
});

function render() {
  categoryCount.textContent = checklistData.length.toString();

  checklistData.forEach((category, categoryIndex) => {
    const categoryNode = categoryTemplate.content.firstElementChild.cloneNode(true);
    const header = categoryNode.querySelector(".category-card__header");
    const eyebrow = categoryNode.querySelector(".category-card__eyebrow");
    const title = categoryNode.querySelector("h3");
    const count = categoryNode.querySelector(".category-card__count");
    const description = categoryNode.querySelector(".category-card__description");
    const status = categoryNode.querySelector(".category-card__status");
    const percent = categoryNode.querySelector(".category-card__percent");
    const fill = categoryNode.querySelector(".category-card__fill");
    const subgroups = categoryNode.querySelector(".subgroups");

    categoryNode.id = category.id;
    eyebrow.textContent = String(categoryIndex + 1).padStart(2, "0");
    title.textContent = category.title;
    description.textContent = category.description;

    const categoryItemCount = category.groups.reduce(
      (sum, group) => sum + group.items.length,
      0
    );
    count.textContent = `${categoryItemCount}개 항목`;

    const progressCard = document.createElement("article");
    progressCard.className = "section-progress__card";
    progressCard.innerHTML = `
      <div class="section-progress__top">
        <div>
          <h3>${category.title}</h3>
          <p>${category.eyebrow}</p>
        </div>
        <span class="section-progress__numbers">0 / ${categoryItemCount}</span>
      </div>
      <div class="section-progress__bar">
        <span class="section-progress__fill"></span>
      </div>
      <div class="section-progress__footer">
        <span class="section-progress__label">아직 시작 전</span>
        <strong class="section-progress__percent">0%</strong>
      </div>
    `;
    sectionProgressBoard.appendChild(progressCard);

    category.groups.forEach((group) => {
      const groupNode = subgroupTemplate.content.firstElementChild.cloneNode(true);
      groupNode.querySelector("h4").textContent = group.title;
      groupNode.querySelector("p").textContent = group.description;
      const list = groupNode.querySelector(".item-list");

      group.items.forEach((item, itemIndex) => {
        const itemId = `${category.id}-${slugify(group.title)}-${itemIndex}`;
        const itemNode = itemTemplate.content.firstElementChild.cloneNode(true);
        const checkbox = itemNode.querySelector('input[type="checkbox"]');
        const itemTitle = itemNode.querySelector(".item__title");
        const details = itemNode.querySelector(".item__details");
        const refs = itemNode.querySelector(".item__refs");

        itemNode.dataset.search = [
          category.title,
          group.title,
          item.title,
          ...item.details,
        ]
          .join(" ")
          .toLowerCase();
        itemNode.dataset.itemId = itemId;

        checkbox.checked = Boolean(state[itemId]);
        itemTitle.textContent = item.title;

        if (checkbox.checked) {
          itemNode.classList.add("is-complete");
        }

        item.details.forEach((detail) => {
          const detailNode = document.createElement("li");
          detailNode.textContent = detail;
          details.appendChild(detailNode);
        });

        item.refs.forEach((sourceId) => {
          const source = sources.find((entry) => entry.id === sourceId);
          if (!source) return;
          const refLink = document.createElement("a");
          refLink.href = source.url;
          refLink.target = "_blank";
          refLink.rel = "noreferrer";
          refLink.textContent = source.title.replace(/^[^-]+ - /, "");
          refs.appendChild(refLink);
        });

        checkbox.addEventListener("change", () => {
          state[itemId] = checkbox.checked;
          if (!checkbox.checked) {
            delete state[itemId];
          }
          itemNode.classList.toggle("is-complete", checkbox.checked);
          persistState();
          applyFilters();
          updateSummary();
        });

        flatItems.push(itemNode);
        list.appendChild(itemNode);
      });

      subgroups.appendChild(groupNode);
    });

    header.addEventListener("click", () => {
      categoryNode.classList.toggle("is-open");
    });

    categoryNode.classList.add("is-open");
    checklistContainer.appendChild(categoryNode);

    categoryStats.set(category.id, {
      total: categoryItemCount,
      status,
      percent,
      fill,
      progressCard,
    });

    const navLink = document.createElement("a");
    navLink.href = `#${category.id}`;
    navLink.innerHTML = `<span>${category.title}</span><span>${categoryItemCount}</span>`;
    categoryNav.appendChild(navLink);
  });

  itemCount.textContent = flatItems.length.toString();

  sources.forEach((source) => {
    const card = document.createElement("article");
    card.className = "source-card";
    card.innerHTML = `
      <h3>${source.title}</h3>
      <p>${source.note}</p>
      <a href="${source.url}" target="_blank" rel="noreferrer">원문 보기</a>
    `;
    sourcesContainer.appendChild(card);
  });
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const uncheckedOnly = onlyUnchecked.checked;

  document.querySelectorAll(".category-card").forEach((categoryCard) => {
    let visibleCount = 0;

    categoryCard.querySelectorAll(".item").forEach((item) => {
      const matchesSearch = !query || item.dataset.search.includes(query);
      const isChecked = item.querySelector('input[type="checkbox"]').checked;
      const matchesChecked = !uncheckedOnly || !isChecked;
      const visible = matchesSearch && matchesChecked;

      item.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });

    categoryCard.classList.toggle("is-filtered-out", visibleCount === 0);
  });
}

function updateSummary() {
  const checkedCount = flatItems.filter((item) =>
    item.querySelector('input[type="checkbox"]').checked
  ).length;
  const percent = flatItems.length === 0 ? 0 : Math.round((checkedCount / flatItems.length) * 100);
  progressPercent.textContent = `${percent}%`;

  checklistData.forEach((category) => {
    const categoryCheckedCount = flatItems.filter((item) => {
      const itemId = item.dataset.itemId || "";
      return itemId.startsWith(`${category.id}-`) &&
        item.querySelector('input[type="checkbox"]').checked;
    }).length;
    updateCategoryProgress(category.id, categoryCheckedCount);
  });
}

function setAllCategories(open) {
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("is-open", open);
  });
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-가-힣]/g, "");
}

function updateCategoryProgress(categoryId, checkedCount) {
  const meta = categoryStats.get(categoryId);
  if (!meta) return;

  const ratio = meta.total === 0 ? 0 : Math.round((checkedCount / meta.total) * 100);
  const statusText =
    checkedCount === 0
      ? "아직 시작 전"
      : checkedCount === meta.total
        ? "모든 항목 완료"
        : `${checkedCount}개 완료`;

  meta.status.textContent = `${checkedCount} / ${meta.total}`;
  meta.percent.textContent = `${ratio}%`;
  meta.fill.style.width = `${ratio}%`;

  const cardNumbers = meta.progressCard.querySelector(".section-progress__numbers");
  const cardLabel = meta.progressCard.querySelector(".section-progress__label");
  const cardPercent = meta.progressCard.querySelector(".section-progress__percent");
  const cardFill = meta.progressCard.querySelector(".section-progress__fill");

  cardNumbers.textContent = `${checkedCount} / ${meta.total}`;
  cardLabel.textContent = statusText;
  cardPercent.textContent = `${ratio}%`;
  cardFill.style.width = `${ratio}%`;
}
