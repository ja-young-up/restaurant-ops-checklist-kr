const STORAGE_KEY = "restaurant-checklist-state-v1";

const sources = [
  {
    id: "src-place-stats",
    title: "네이버 스마트플레이스 사업주 고객센터 - 플레이스 통계 안내",
    note:
      "플레이스 유입 수, 성별·연령, 시간·요일, 유입 채널·검색 키워드를 볼 수 있다는 점을 근거로 신규 유입과 전환 점검 항목을 재구성했습니다.",
    url: "https://help.naver.com/service/30026/contents/20527?osType=PC",
  },
  {
    id: "src-place-report",
    title: "네이버 스마트플레이스 사업주 고객센터 - 플레이스 리포트 안내",
    note:
      "사업주가 정기적으로 확인할 수 있는 플레이스 리포트 기능을 바탕으로 주간 점검 루틴 항목을 만들었습니다.",
    url: "https://help.naver.com/service/30026/contents/20524?lang=ko",
  },
  {
    id: "src-review-rules",
    title: "네이버 스마트플레이스 사업주 고객센터 - 방문자 리뷰 노출 기준 안내",
    note:
      "방문 인증 리뷰와 비정상 리뷰 기준을 참고해 리뷰 운영을 어뷰징이 아닌 정상 전환 구조로 관리하도록 체크리스트를 구성했습니다.",
    url: "https://help.naver.com/service/30026/contents/20499?osType=COMMONOS",
  },
  {
    id: "src-review-stats",
    title: "네이버 스마트플레이스 사업주 고객센터 - 리뷰 통계 안내",
    note:
      "주제별 리뷰 수, 내용 분석, 성별·연령 비율을 확인할 수 있다는 점을 바탕으로 재방문·리뷰 관리 항목을 설계했습니다.",
    url: "https://help.naver.com/service/30026/contents/20530?osType=PC",
  },
  {
    id: "src-order-build",
    title: "네이버 예약주문 사업자 고객센터 - 예약/주문 제작 방법",
    note:
      "네이버 주문에서 메뉴, 옵션, 상품 구성과 운영 설정을 관리할 수 있다는 점을 근거로 포장·매장 주문 전환 항목을 만들었습니다.",
    url: "https://help.naver.com/service/11712/contents/12706?lang=ko",
  },
  {
    id: "src-order-menu",
    title: "네이버 예약주문 사업자 고객센터 - 예약·주문자 메뉴 안내",
    note:
      "예약자·주문자 조회와 관리 기능을 활용할 수 있다는 점을 바탕으로 단골 고객 관리 항목을 구성했습니다.",
    url: "https://help.naver.com/service/11712/contents/18646?lang=ko",
  },
  {
    id: "src-customer-menu",
    title: "네이버 예약주문 사업자 고객센터 - 고객 메뉴 안내",
    note:
      "고객 이력 관리와 블랙리스트 등 고객 관리 메뉴를 참고해 재방문 고객 분류와 응대 기준 항목을 정리했습니다.",
    url: "https://help.naver.com/service/11712/contents/7825?lang=ko",
  },
  {
    id: "src-order-user",
    title: "네이버 예약주문 이용자 고객센터 - 이용자의 주문하는 방법(포장/매장)",
    note:
      "네이버 주문 검색에서 재주문, 메뉴 카테고리, 프로모션 문구가 어떻게 노출되는지 설명한 내용을 바탕으로 메뉴명·대표상품 설계 항목을 재구성했습니다.",
    url: "https://help.naver.com/service/11713/contents/13970?osType=COMMONOS",
  },
  {
    id: "src-market-delivery",
    title: "소상공인시장진흥공단 상권정보 - 배달지수",
    note:
      "지역·업종별 배달 매출 성장 추세를 참고할 수 있다는 점을 근거로 배달 비중 판단과 배달 운영 재점검 항목을 넣었습니다.",
    url: "https://sg.sbiz.or.kr/godo/stat/baemin.sg",
  },
  {
    id: "src-market-sns",
    title: "소상공인시장진흥공단 상권정보 - SNS분석",
    note:
      "언급량, 감성 분석, 이슈어를 통해 실제 고객 반응을 볼 수 있다는 점을 근거로 리뷰·콘텐츠 개선 항목을 만들었습니다.",
    url: "https://sg.sbiz.or.kr/godo/sns/index.sg",
  },
  {
    id: "src-market-upso",
    title: "소상공인시장진흥공단 상권정보 - 업소현황",
    note:
      "행정동별 업종 업소 수와 변화 추이를 볼 수 있다는 점을 바탕으로 경쟁 강도와 입지 재판단 체크 항목을 구성했습니다.",
    url: "https://sg.sbiz.or.kr/godo/stat/upso.sg",
  },
  {
    id: "src-market-area",
    title: "소상공인시장진흥공단 상권정보 - 지역현황",
    note:
      "인구 수, 세대 수, 업소 수 등 지역 지표를 볼 수 있다는 점을 근거로 핵심 고객층·영업시간 점검 항목을 만들었습니다.",
    url: "https://sg.sbiz.or.kr/godo/stat/area.sg",
  },
  {
    id: "src-kostat-delivery",
    title: "통계청 - 외식가격과 배달가격 관련 설명자료",
    note:
      "매장가격과 배달가격을 분리해 볼 필요가 있다는 점을 참고해 채널별 가격·마진 관리 항목을 구성했습니다.",
    url: "https://www.kostat.go.kr/board.es?act=view&bid=11536&keyField=T&keyWord=&list_no=431247&mid=a10304010000&nPage=1&ref_bid=11534%2C11535%2C11536%2C11537%2C11538%2C11539%2C11545%2C11540%2C11541%2C11542%2C11543%2C11544%2C11546&tag=",
  },
  {
    id: "src-sns-package",
    title: "기업마당 - SNS 활용패키지",
    note:
      "소상공인의 SNS 타깃 광고와 분석 보고서 지원 내용을 참고해 광고 성과 측정과 채널 운영 점검 항목을 넣었습니다.",
    url: "https://www.bizinfo.go.kr/see/seeh/selectSmesPblancView.do?pblancId=PBLN_000000000104190",
  },
  {
    id: "src-brand-package",
    title: "기업마당 - 브랜드 역량 강화",
    note:
      "브랜드 자산 정비, AI 콘텐츠, 데이터 마케팅 지원 내용을 참고해 브랜딩·콘텐츠 기본기 항목을 구성했습니다.",
    url: "https://www.bizinfo.go.kr/see/seeh/selectSmesPblancView.do?pblancId=PBLN_000000000104213",
  },
];

const checklistData = [
  {
    id: "traffic",
    eyebrow: "Traffic",
    title: "신규 유입 만들기",
    description:
      "우리 가게를 아직 모르는 사람을 더 많이 데려오는 영역입니다. 상권 데이터, 검색 유입, 채널 노출을 같이 봐야 합니다.",
    groups: [
      {
        title: "상권 재점검",
        description: "감이 아니라 동네 데이터로 유입 전략을 다시 봅니다.",
        items: [
          {
            title: "내 상권의 배달 수요와 경쟁 강도를 월 1회 다시 본다",
            details: [
              "배달지수로 업종 성장 흐름이 살아 있는지 먼저 확인한다.",
              "업소현황으로 같은 카테고리 점포 수가 빠르게 늘고 있는지 본다.",
              "경쟁이 과열된 동네라면 신메뉴보다 차별 포지션을 먼저 정한다.",
            ],
            refs: ["src-market-delivery", "src-market-upso"],
          },
          {
            title: "우리 가게 핵심 고객층을 연령·시간대 기준으로 정의했다",
            details: [
              "지역현황과 플레이스 통계의 연령·시간대 데이터를 같이 본다.",
              "점심 직장인형, 저녁 가족형, 야식 배달형 중 무엇이 중심인지 정한다.",
              "핵심 고객층이 바뀌면 운영시간·대표사진·대표메뉴도 같이 바꾼다.",
            ],
            refs: ["src-market-area", "src-place-stats"],
          },
        ],
      },
      {
        title: "검색 노출 기본기",
        description: "검색에서 클릭되기 전 단계의 기본기를 정리합니다.",
        items: [
          {
            title: "플레이스 유입 키워드를 보고 소개문구와 메뉴명을 손봤다",
            details: [
              "사람들이 실제로 들어오는 검색어와 내가 강조하는 문구가 맞는지 본다.",
              "검색어가 지역+메뉴 중심이면 소개문구도 그 구조로 맞춘다.",
              "애매한 메뉴명보다 고객이 검색하는 표현으로 바꾼다.",
            ],
            refs: ["src-place-stats"],
          },
          {
            title: "대표 사진과 첫 화면이 '무엇을 파는 곳인지' 3초 안에 보이게 했다",
            details: [
              "가게 사진보다 대표 메뉴 사진이 먼저 경쟁력이 있는지 점검한다.",
              "첫 5장의 사진이 메뉴, 분위기, 가격대, 좌석감, 포장 가능 여부를 설명하도록 구성한다.",
              "채널마다 사진 톤과 순서가 달라 브랜드 인식이 흔들리지 않게 맞춘다.",
            ],
            refs: ["src-brand-package", "src-place-stats"],
          },
          {
            title: "외부 채널보다 먼저 플레이스 기본정보 최신화를 습관화했다",
            details: [
              "영업시간, 브레이크타임, 휴무, 주차, 포장 가능 여부를 우선 최신화한다.",
              "정보 변경 뒤 인스타그램과 배달앱을 같은 날 맞춰 수정한다.",
              "전화 문의가 자주 들어오는 항목은 소개문구와 사진 캡션에 선반영한다.",
            ],
            refs: ["src-place-report", "src-brand-package"],
          },
        ],
      },
    ],
  },
  {
    id: "conversion",
    eyebrow: "Conversion",
    title: "플레이스·주문 전환 올리기",
    description:
      "유입이 있어도 클릭만 하고 지나가면 매출이 안 납니다. 메뉴 정보, 주문 구조, 첫 인상이 실제 주문으로 이어지게 만드는 구간입니다.",
    groups: [
      {
        title: "플레이스 전환",
        description: "가게 정보를 보는 사람이 실제 행동하게 만드는 체크입니다.",
        items: [
          {
            title: "플레이스에서 사람들이 가장 많이 보는 시간대에 맞춰 정보와 콘텐츠를 올린다",
            details: [
              "시간별 조회 수가 높은 시간대에 공지, 사진, 소식 발행을 맞춘다.",
              "점심형 업장은 오전, 저녁형 업장은 오후에 당일 메시지를 노출한다.",
              "조회가 높은데 방문 전환이 약하면 첫 화면 문구를 다시 테스트한다.",
            ],
            refs: ["src-place-stats", "src-place-report"],
          },
          {
            title: "주문 전 망설이게 하는 정보 공백을 없앴다",
            details: [
              "가격, 1인 주문 가능 여부, 포장 대기시간, 주차, 좌석 정보를 명확히 넣는다.",
              "대표 메뉴는 사진, 양, 매운맛, 추천 조합까지 같이 적는다.",
              "고객이 전화로 묻는 질문이 많을수록 페이지 설명이 부족한 신호로 본다.",
            ],
            refs: ["src-order-build", "src-place-stats"],
          },
        ],
      },
      {
        title: "주문 구조 설계",
        description: "메뉴를 잘 파는 순서와 선택 구조를 만듭니다.",
        items: [
          {
            title: "대표 메뉴 3개를 정하고 그 메뉴에 주문이 몰리게 설계했다",
            details: [
              "선택이 너무 많아지면 전환이 떨어지므로 대표 메뉴를 앞에 둔다.",
              "주문 화면 첫 구간에는 입문 메뉴, 가장 잘 팔리는 메뉴, 이익률 좋은 메뉴를 배치한다.",
              "메뉴명이 생소하면 고객이 아는 설명형 이름을 병기한다.",
            ],
            refs: ["src-order-build", "src-order-user"],
          },
          {
            title: "옵션과 추가 선택지가 복잡해서 주문 이탈이 나지 않게 정리했다",
            details: [
              "필수 옵션은 최소화하고, 자주 선택하는 옵션만 남긴다.",
              "사이드 추가는 1~2단계 안에서 끝나도록 만든다.",
              "직원이 설명해주지 않아도 주문이 가능한 구조인지 직접 고객처럼 테스트한다.",
            ],
            refs: ["src-order-build", "src-order-user"],
          },
          {
            title: "포장·매장·배달 채널별로 같은 메뉴라도 표현과 구성을 다르게 봤다",
            details: [
              "포장은 이동 편의, 매장은 경험, 배달은 도착 후 만족도 기준으로 메뉴 구성을 나눈다.",
              "배달에서 불리한 메뉴는 과감히 주력에서 빼거나 조리법을 수정한다.",
              "채널별 판매 순위가 다르면 대표 메뉴 노출 순서도 다르게 운영한다.",
            ],
            refs: ["src-order-user", "src-kostat-delivery"],
          },
        ],
      },
    ],
  },
  {
    id: "ticket",
    eyebrow: "Average Ticket",
    title: "객단가 올리기",
    description:
      "손님 수를 당장 크게 늘리기 어렵다면 객단가를 올리는 게 더 빠를 때가 많습니다. 추가 구성과 가격 설계를 같이 다룹니다.",
    groups: [
      {
        title: "메뉴 구성",
        description: "고객이 자연스럽게 한 단계 더 담게 만듭니다.",
        items: [
          {
            title: "대표 메뉴 옆에 가장 잘 붙는 사이드·음료를 세트처럼 제안한다",
            details: [
              "추가 주문이 많이 붙는 조합을 기준으로 세트 문구를 만든다.",
              "묶음 할인보다 선택 피로를 줄이는 제안 문구가 더 잘 먹히는지 비교한다.",
              "고객이 많이 묻는 조합은 기본 추천으로 끌어올린다.",
            ],
            refs: ["src-order-build", "src-order-user"],
          },
          {
            title: "이익률이 좋은 메뉴가 눈에 띄는 위치에 배치되어 있다",
            details: [
              "판매량은 많은데 남는 게 적은 메뉴와, 판매량은 적지만 마진이 좋은 메뉴를 구분한다.",
              "메뉴판 중앙 또는 첫 화면 상단에 밀고 싶은 메뉴를 둔다.",
              "사진, 이름, 설명 길이까지 포함해 어떤 메뉴를 팔고 싶은지 드러나게 만든다.",
            ],
            refs: ["src-brand-package", "src-order-user"],
          },
        ],
      },
      {
        title: "가격 전략",
        description: "가격을 단순 인상하는 대신 납득 가능한 구조를 만듭니다.",
        items: [
          {
            title: "채널별 가격과 수수료를 따로 보고 실제 남는 금액 기준으로 본다",
            details: [
              "매장, 포장, 배달의 최종 마진이 각각 얼마인지 표로 정리한다.",
              "배달 가격은 포장·매장과 같게 둘지, 채널별 구조를 둘지 숫자로 판단한다.",
              "수수료와 배달비를 반영해도 남지 않는 메뉴는 구조를 바꾼다.",
            ],
            refs: ["src-kostat-delivery", "src-market-delivery"],
          },
          {
            title: "가격 인상 전후에 고객 반응을 볼 메뉴와 지표를 정해둔다",
            details: [
              "전체 메뉴를 올리기보다 원가 압박이 큰 품목부터 우선 테스트한다.",
              "가격을 올릴 때는 구성, 양, 설명 문구, 사진 보완까지 같이 움직인다.",
              "판매량 하락보다 객단가 상승이 더 크면 유지하고, 아니면 빠르게 수정한다.",
            ],
            refs: ["src-kostat-delivery", "src-place-report"],
          },
        ],
      },
    ],
  },
  {
    id: "repeat",
    eyebrow: "Repeat",
    title: "재방문·리뷰 관리",
    description:
      "외식업은 첫 방문보다 두 번째 방문이 중요합니다. 리뷰를 단순 평판 관리가 아니라 재구매 데이터로 봐야 합니다.",
    groups: [
      {
        title: "리뷰 운영",
        description: "리뷰 수 자체보다 어떤 내용이 반복되는지를 봅니다.",
        items: [
          {
            title: "리뷰를 주제별로 묶어 우리 가게의 강점과 약점을 파악한다",
            details: [
              "맛, 양, 친절, 대기, 분위기, 배달 상태 중 어떤 키워드가 반복되는지 본다.",
              "칭찬이 몰리는 포인트는 첫 화면 문구와 대표사진에 반영한다.",
              "불만 키워드는 사과 답글보다 운영 수정이 먼저 필요한 항목으로 분류한다.",
            ],
            refs: ["src-review-stats", "src-market-sns"],
          },
          {
            title: "리뷰 요청을 어색하지 않은 운영 흐름으로 만들었다",
            details: [
              "결제 직후, 포장 수령 직후, 만족도가 높을 순간에 자연스럽게 안내한다.",
              "어뷰징으로 보일 수 있는 과한 보상보다 경험이 좋을 때 리뷰가 나오게 설계한다.",
              "정상 방문 인증 리뷰가 쌓이는 구조를 만들고 비정상 방법은 피한다.",
            ],
            refs: ["src-review-rules", "src-order-menu"],
          },
          {
            title: "리뷰 답글은 감정 대응이 아니라 다음 손님을 위한 설명으로 작성한다",
            details: [
              "칭찬 리뷰에는 강점을 강화하는 메시지를 남긴다.",
              "불만 리뷰에는 사실 확인, 사과, 수정사항을 짧고 분명하게 적는다.",
              "같은 불만이 3번 이상 반복되면 답글이 아니라 운영 방식부터 바꾼다.",
            ],
            refs: ["src-review-rules", "src-market-sns"],
          },
        ],
      },
      {
        title: "단골 관리",
        description: "재방문을 만드는 사람을 따로 보고 관리합니다.",
        items: [
          {
            title: "재주문 고객이 많은 메뉴와 첫 주문 메뉴를 구분해 본다",
            details: [
              "처음 끌어오는 메뉴와 다시 오게 하는 메뉴가 같은지 확인한다.",
              "첫 주문 메뉴가 강하지만 재주문이 약하면 만족도 개선 포인트를 찾는다.",
              "재주문이 강한 메뉴는 대표 메뉴와 세트 제안에 더 많이 노출한다.",
            ],
            refs: ["src-order-user", "src-order-menu"],
          },
          {
            title: "단골 고객 응대 기준을 만들어 일관된 경험을 준다",
            details: [
              "자주 오는 고객에게 어떤 정보를 기억하고 어떤 서비스를 표준화할지 정한다.",
              "응대 품질이 사람마다 달라지지 않게 간단한 기준 문장을 만든다.",
              "문제 고객은 별도 관리하고, 좋은 고객은 알아보는 구조를 만든다.",
            ],
            refs: ["src-customer-menu", "src-order-menu"],
          },
        ],
      },
    ],
  },
  {
    id: "delivery",
    eyebrow: "Delivery",
    title: "배달·포장 수익성",
    description:
      "배달 매출이 늘어도 실제로는 덜 남는 경우가 많습니다. 채널 수익성, 메뉴 적합성, 운영 속도를 따로 봐야 합니다.",
    groups: [
      {
        title: "채널 수익 계산",
        description: "매출보다 남는 돈 중심으로 운영합니다.",
        items: [
          {
            title: "배달 채널별 순수익을 메뉴 단위로 계산해봤다",
            details: [
              "판매가, 수수료, 포장비, 배달 관련 비용까지 빼고 남는 금액을 본다.",
              "같은 매출이라도 어떤 채널이 더 남는지 숫자로 정리한다.",
              "순수익이 낮은 채널은 광고를 줄이거나 메뉴 구성을 바꾼다.",
            ],
            refs: ["src-kostat-delivery", "src-market-delivery"],
          },
          {
            title: "포장 채널을 배달 대체 수단으로 적극 운영한다",
            details: [
              "포장은 수익성이 더 높을 수 있으므로 유도 문구를 따로 만든다.",
              "포장 고객에게는 대기 시간, 픽업 동선, 보관 상태를 더 신경 쓴다.",
              "배달 고객 일부가 포장으로 전환될 수 있는지 프로모션 없이도 테스트한다.",
            ],
            refs: ["src-order-user", "src-order-build"],
          },
        ],
      },
      {
        title: "배달 전용 운영 품질",
        description: "배달에 맞지 않는 메뉴와 프로세스를 정리합니다.",
        items: [
          {
            title: "배달에서 맛과 비주얼이 무너지는 메뉴를 골라냈다",
            details: [
              "10분, 20분, 30분 뒤 상태를 직접 먹어보고 메뉴를 재평가한다.",
              "눅눅해지는 메뉴, 분리되는 소스, 새는 국물은 포장 구조를 바꾼다.",
              "개선이 안 되면 대표 메뉴에서 내리거나 배달 전용 버전으로 바꾼다.",
            ],
            refs: ["src-market-delivery", "src-order-user"],
          },
          {
            title: "피크타임 품절과 배달 지연이 반복되지 않게 기준을 세웠다",
            details: [
              "자주 품절되는 메뉴는 발주, 전처리량, 판매시간대를 같이 본다.",
              "지연이 반복되는 시간대는 메뉴 수를 줄이거나 조리 동선을 나눈다.",
              "주문을 더 받는 것보다 늦지 않게 보내는 편이 재주문에 유리한지 확인한다.",
            ],
            refs: ["src-order-build", "src-place-report"],
          },
          {
            title: "배달 설명 문구와 프로모션 문구가 실제 장점만 말하게 정리됐다",
            details: [
              "할인만 강조하기보다 대표 메뉴, 양, 속도, 포장 강점을 분명히 적는다.",
              "주문 검색에서 보이는 짧은 문구에 무엇을 넣을지 테스트한다.",
              "반복되는 칭찬 포인트를 프로모션 문구로 옮긴다.",
            ],
            refs: ["src-order-user", "src-market-sns"],
          },
        ],
      },
    ],
  },
  {
    id: "ops",
    eyebrow: "Ops",
    title: "피크타임 운영 효율",
    description:
      "바쁜 시간에 흔들리면 매출이 새고 리뷰가 나빠집니다. 속도, 동선, 역할 분리가 효율의 핵심입니다.",
    groups: [
      {
        title: "현장 동선",
        description: "사람을 더 뽑기 전에 동선을 먼저 봅니다.",
        items: [
          {
            title: "주문이 몰릴 때 가장 막히는 한 지점을 찾았다",
            details: [
              "접수, 조리, 플레이팅, 포장, 전달 중 어디서 대기가 생기는지 본다.",
              "병목 지점 하나만 풀어도 체감 속도가 크게 달라지는지 확인한다.",
              "피크타임에는 잘 안 팔리는 복잡한 메뉴를 잠시 뒤로 미루는 것도 검토한다.",
            ],
            refs: ["src-place-report", "src-market-sns"],
          },
          {
            title: "직원별 역할이 겹치지 않도록 피크타임 역할표를 만들었다",
            details: [
              "누가 접수, 누가 조리, 누가 포장, 누가 응대를 맡는지 고정한다.",
              "사장 한 명이 모든 예외를 처리하는 구조면 병목이 생기는지 본다.",
              "신입도 따라할 수 있게 피크타임 우선순위를 문장으로 남긴다.",
            ],
            refs: ["src-order-menu", "src-customer-menu"],
          },
        ],
      },
      {
        title: "표준화",
        description: "컨디션이 아닌 시스템으로 품질을 맞춥니다.",
        items: [
          {
            title: "자주 실수하는 메뉴는 레시피보다 '실수 포인트'를 적어뒀다",
            details: [
              "양, 소스, 토핑 누락, 포장 오류처럼 실제 실수 지점을 기록한다.",
              "잘하는 직원의 감각을 초 단위·숟가락 수 단위로 최대한 언어화한다.",
              "메뉴별 체크포인트를 만들면 신입 적응 시간이 줄어드는지 본다.",
            ],
            refs: ["src-place-report"],
          },
          {
            title: "오픈·마감 루틴이 다음 영업의 속도까지 고려하게 정리됐다",
            details: [
              "다음날 피크타임 준비가 쉬워지도록 전처리, 소분, 청소 순서를 짠다.",
              "마감이 늦어지는 이유가 청소가 아니라 정리 미흡인지 확인한다.",
              "오픈 직전 허둥대는 작업을 전날로 넘길 수 있는지 본다.",
            ],
            refs: ["src-place-report", "src-order-build"],
          },
          {
            title: "대기 시간 안내와 고객 응대 문구를 미리 정해놨다",
            details: [
              "늦어질 때마다 직원이 제각각 설명하면 불만이 커지는지 본다.",
              "대기 예상 시간, 포장 완료 알림, 품절 안내 문구를 통일한다.",
              "응대가 빨라지면 실제 대기 시간보다 체감 불편이 줄어드는지 확인한다.",
            ],
            refs: ["src-customer-menu", "src-order-menu"],
          },
        ],
      },
    ],
  },
  {
    id: "profit",
    eyebrow: "Profit",
    title: "원가·인건비·주간 관리",
    description:
      "매출이 올라가도 남는 돈이 줄 수 있습니다. 결국은 원가, 인건비, 광고비, 시간 사용을 같이 관리해야 합니다.",
    groups: [
      {
        title: "원가 관리",
        description: "잘 팔리는 것과 잘 남는 것을 분리해서 봅니다.",
        items: [
          {
            title: "메뉴별 판매량과 메뉴별 마진을 따로 관리한다",
            details: [
              "판매량 상위 메뉴와 이익 상위 메뉴를 구분해서 본다.",
              "잘 팔리지만 안 남는 메뉴는 가격, 구성, 원재료를 조정한다.",
              "잘 남지만 안 팔리는 메뉴는 노출과 설명 방식부터 바꿔본다.",
            ],
            refs: ["src-place-report", "src-brand-package"],
          },
          {
            title: "폐기와 할인, 서비스 제공이 얼마나 이익을 깎는지 기록한다",
            details: [
              "로스의 원인을 발주, 유통기한, 조리 실수, 과다 서비스로 나눠 적는다.",
              "관성적으로 넣는 서비스가 실제 재방문으로 이어지는지 본다.",
              "주간 회고 때 가장 비싼 실수 한 가지를 줄이는 데 집중한다.",
            ],
            refs: ["src-place-report"],
          },
        ],
      },
      {
        title: "주간 의사결정",
        description: "매주 숫자를 보고 바로 액션으로 연결합니다.",
        items: [
          {
            title: "매주 한 번은 유입, 주문, 리뷰, 원가를 한 화면처럼 같이 본다",
            details: [
              "플레이스 통계, 리뷰 통계, 판매 데이터, 원가표를 같은 시간에 점검한다.",
              "유입은 늘었는데 주문이 약한지, 주문은 늘었는데 리뷰가 나빠졌는지 연결해서 본다.",
              "숫자를 본 뒤 다음 주 실험 1개만 정하고 끝낸다.",
            ],
            refs: ["src-place-stats", "src-review-stats", "src-place-report"],
          },
          {
            title: "광고와 프로모션은 집행보다 회수 여부를 먼저 본다",
            details: [
              "광고 전후에 저장, 전화, 주문, 재방문 변화가 있었는지 기록한다.",
              "광고비가 객단가나 재주문보다 빨리 새는 구조면 바로 줄인다.",
              "할인 프로모션이 끝난 뒤 매출이 유지되는지까지 봐야 진짜 효과로 판단한다.",
            ],
            refs: ["src-sns-package", "src-brand-package", "src-place-stats"],
          },
          {
            title: "지원사업과 도구는 '있는지'보다 '지금 우리 단계에 맞는지'로 고른다",
            details: [
              "브랜딩, SNS, 데이터 마케팅 지원이 필요한 시점인지 먼저 판단한다.",
              "인력 부족 단계라면 화려한 마케팅보다 운영 표준화가 우선인지 점검한다.",
              "한 번에 다 하지 말고 당장 매출 레버가 큰 한 가지에만 자원을 쓴다.",
            ],
            refs: ["src-sns-package", "src-brand-package"],
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
          refLink.textContent = source.title.replace(/^[^-]+ - /u, "");
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
  const percent =
    flatItems.length === 0 ? 0 : Math.round((checkedCount / flatItems.length) * 100);
  progressPercent.textContent = `${percent}%`;

  checklistData.forEach((category) => {
    const categoryCheckedCount = flatItems.filter((item) => {
      const itemId = item.dataset.itemId || "";
      return (
        itemId.startsWith(`${category.id}-`) &&
        item.querySelector('input[type="checkbox"]').checked
      );
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
