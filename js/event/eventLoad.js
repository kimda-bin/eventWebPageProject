
let datalist = [];
var dataFilterlist = [];
var dataFilterlistPirce = [];
let hashString = window.location.hash.replace('#','');  

$(window).ready( async function(){ 
    datalist = await getEventDat();
    if (window.location.search === "?detail") { // detail 페이지
                
        if ($('#eventItemWrap')) {
             // 스크롤 이벤트 삭제 및 css 
            window.removeEventListener('scroll', eventScroll);
            $('#eventItemWrap').css('display','none');

            if ($('#eventListFillter')) {
                $('#eventListFillter').remove();
            }
            if ($('#eventContainer > h2')) {
                $('#eventContainer > h2').remove();
            }
        }

        $('#eventDetailWrap').css('display','block');

        eventDetailDatavind(hashString, datalist);

    } else { // 리스트 페이지

        // 필터 option 태그 추가
        // 클래식,콘서트,축제,전시/미술, 영화, 뮤지컬/오페라, 무용, 독주/독창회, 기타, 국악, 교육/체험
        let codename = ['전체', '클래식','콘서트',"축제","전시/미술", "영화", "뮤지컬/오페라", "무용", "독주/독창회", "기타", "국악", "교육/체험"];
        let price = ['전체', '유료','무료'];
        createEventFilter(codename, price);

        // 행사 리스트 h2
        $('#eventContainer').prepend(`<h2 class="event-list-title">행사 리스트</h2>`);

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
        
    }
}); 

const eventScroll = () => {

    if (window.innerHeight + window.scrollY + window.innerHeight/9 >= document.body.scrollHeight) {

        if (dataFilterlist.length === 0) {
            eventItemAdd(datalist);
        } else {

            if (dataFilterlistPirce.length === 0) {

                eventItemAdd(dataFilterlist);
            } else {
                eventItemAdd(dataFilterlistPirce);
            }
         
        }
    }
}


const eventListSelctChange = (e) => {

    console.log(e.value)
    console.log(datalist.filter((value) => value.CODENAME === e.value ));
    window.location.href = '../event.html#' +JSON.stringify(e.value);

}
