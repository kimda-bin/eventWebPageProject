

$('#eventContainer').prepend(`<h2 class="event-list-title">행사 리스트</h2>`);
const eventItem = (datalist) => {

    // let eventItemWrap = $('#eventItemWrap');
    const priceColor = (IS_FREE) => {
        // orange : 무료, gray : 유료
        let color = [ '#eee' ,'orange'];

        if (IS_FREE === "유료") {
            return 'background-color :' + color[0]
        } else {
            return 'background-color:' + color[1]
        }   
    }

    for ( let i=0; i < 12; i++){

        $('#eventItemWrap').append(`
          
            <div class="item">
                <a href="./event.html?detail#${i}">
                    <div class="thumb" style="background-image:url(${datalist[i].MAIN_IMG})">
                        <span class="tip-text" style="${priceColor(datalist[i].IS_FREE)}">${datalist[i].IS_FREE}</span>
                    </div>  
                    <div class="infor-element">
                        <div class="infor-element-inner">
                            <span class="title">
                                ${datalist[i].TITLE}
                            </span>
                            <span class="small-text">
                                ${datalist[i].DATE}
                            </span>
                            <span class="small-text">
                                ${datalist[i].PLACE}
                            </span>
                        </div>
                            
                    </div>
                </a>
            </div>
        `);
    }
}


const createEventFilter = (codename,price) => {

    // 클래식,콘서트,축제,전시/미술, 영화, 뮤지컬/오페라, 무용, 독주/독창회, 기타, 국악, 교육/체험
    codename.forEach((value) => {

        $('#eventListCodenameSelect').append(`
            <option onclick="alert('하이')">${value}</option>
        `)
    })

    // 전체, 무료, 유료
    price.forEach((value) => {
        $('#eventListPiceSelect').append(`
            <option onclick="window.loaction.href=./event.html#${value}">${value}</option>
        `)
    })
}


const eventItemAdd = (datalist) => {

    const length = $('#eventItemWrap').children().length - 1;
    if (length === datalist.length) return;
    if (length <= 0) return;
    eventItem(datalist.slice(length, length + 12));
}


['전체', '클래식','콘서트',"축제","전시/미술", "영화", "뮤지컬/오페라", "무용", "독주/독창회", "기타", "국악", "교육/체험"];
let price = ['전체', '유료','무료']

const eventFilterList = (kind, filter) => {


    console.log(kind, filter);

   

}