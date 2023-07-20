

let listObj = {
    CODENAME: "클래식",
    GUNAME: "마포구",
    TITLE: "[M클래식 축제] 마포공연예술관광페스티벌 [타케자와 유토 피아노 리사이틀]",
    DATE: "2023-12-07~2023-12-07",
    PLACE: "마포아트센터 아트홀 맥",
    ORG_NAME: "마포문화재단",
    USE_TRGT: "8세 이상",
    USE_FEE: "R석 50,000원 / S석 30,000 / A석 20,000원",
    PLAYER: "타케자와 유토 ",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK: "https://www.mfac.or.kr/performance/whole_view.jsp?sc_b_category=17&sc_b_code=BOARD_1207683401&pk_seq=2219&page=1",
    MAIN_IMG: "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=4e759ec91d6043e68bd3dfef68ce0bae&thumb=Y",
    RGSTDATE: "2023-07-06",
    TICKET: "기관",
    STRTDATE: "2023-12-07 00:00:00.0",
    END_DATE: "2023-12-07 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.5499060881738",
    LAT: "126.945533810385",
    IS_FREE: "무료",
    HMPG_ADDR: "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=142296&menuNo=200008"
}

let datalist = [];
let dataFilterlist = [];
let hashString = window.location.hash.replace('#','');  

$(window).ready( async function(){ 
    datalist = await getEventDat();

    console.log(hashString)
    if (window.location.search === "?detail") { // detail 페이지
                
        if ($('#eventItemWrap')) {
             // 스크롤 이벤트 삭제 및 css 
            window.removeEventListener('scroll', eventScroll);
            $('#eventItemWrap').css('display','none');
        }
        $('#eventDetailWrap').css('display','block');

        eventDetailDatavind(hashString, datalist);

    } else { // 리스트 페이지

        // 필터 option 태그 추가
        // 클래식,콘서트,축제,전시/미술, 영화, 뮤지컬/오페라, 무용, 독주/독창회, 기타, 국악, 교육/체험
        let codename = ['전체', '클래식','콘서트',"축제","전시/미술", "영화", "뮤지컬/오페라", "무용", "독주/독창회", "기타", "국악", "교육/체험"];
        let price = ['전체', '유료','무료'];
        createEventFilter(codename, price);


        // 필터 리스트 생성 분기
        if (hashString === '') { // 처음 페이지 접근 했을 때 
            eventItem(datalist);
        } 

        // css init
        if ($('#eventDetailWrap')) {
            $('#eventDetailWrap').css('display','none')
        }
       
        // 스크롤 이벤트 생성 
        window.addEventListener('scroll', eventScroll);
        
        var observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
              console.log(mutation);
            });
        });
    }
}); 

const eventScroll = () => {

    if (window.innerHeight + window.scrollY + window.innerHeight/9 >= document.body.scrollHeight) {

        if (hashString === '' || hashString === '전체') {
            eventItemAdd(datalist);
        } else {
            eventItemAdd(dataFilterlist);
        }
    }
}


const eventListSelctChange = (e) => {

    console.log(e.value)
    console.log(datalist.filter((value) => value.CODENAME === e.value ));
    window.location.href = '../event.html#' +JSON.stringify(e.value);

}
