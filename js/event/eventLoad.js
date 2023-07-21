
let datalist = []; // 행사 list 
var dataFilterlist = []; // 행사 분류 filter list
var dataFilterlistPirce = []; // 행사 가격 filter list
let hashString = window.location.hash.replace('#',''); // url window.location.hash 값  

$(window).ready(async function(){ 
    
    datalist = await getEventDat(); // 행사 리스트 data fetch

    if (window.location.search === "?detail") { // detail 페이지 일 때
                
        if ($('#eventItemWrap')) {

             // 스크롤 이벤트, css 삭제 및 clasename 추가
            window.removeEventListener('scroll', eventScroll);
            $('#eventItemWrap').css('display','none');

            if ($('#eventListFillter')) {
                $('#eventListFillter').remove();
            }

            if ($('#eventContainer > h2')) {
                $('#eventContainer > h2').remove();
            }

            $('.event-banner').addClass('detail-banner');
        }

        $('#eventDetailWrap').css('display','block');

        eventDetailDatavind(hashString, datalist); // detail html 생성 및 data 바인딩

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
        $('.event-banner').removeClass('detail-banner');
       
        // 스크롤 이벤트 생성 
        window.addEventListener('scroll', eventScroll);
        
    }
}); 

const eventScroll = () => { // 리스트 무한스크롤

    if (window.innerHeight + window.scrollY + window.innerHeight/9 >= document.body.scrollHeight) {

        if (dataFilterlist.length === 0) { // 분류를 선택 x
          
            if (dataFilterlistPirce.length > 0) {

                eventItemAdd(dataFilterlistPirce);
            } else {
                eventItemAdd(datalist);
            }
        
        } else { // 분류를 선택 o

            if (dataFilterlistPirce.length === 0) {

                eventItemAdd(dataFilterlist);
            } else {
                eventItemAdd(dataFilterlistPirce);
            }
         
        }
    }
}
