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

        if (datalist[i] && datalist[i].MAIN_IMG && datalist[i].TITLE && datalist[i].IS_FREE) {
            $('#eventItemWrap').append(`
            
                <div class="item">
                    <a href="./event.html?detail#${datalist[i].idx}">
                        <div class="thumb" style="background-image:url(${ datalist[i].MAIN_IMG})">
                            <span class="tip-text" style="${priceColor(datalist[i].IS_FREE)}">${datalist[i].IS_FREE}</span>
                        </div>  
                        <div class="infor-element">
                            <div class="infor-element-inner">
                                <span class="title">
                                    ${datalist[i].TITLE}
                                </span>
                                <span class="small-text">
                                    ${datalist[i] && datalist[i].DATE}
                                </span>
                                <span class="small-text">
                                    ${datalist[i] && datalist[i].PLACE}
                                </span>
                            </div>
                                
                        </div>
                    </a>
                </div>
        `);

        }
       
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



const eventFilterList = async (kind, filter) => {
    console.log(kind, filter);

    // $('#eventListCodenameSelect');
    // $('#eventListPiceSelect');

    let domChild = $('#eventItemWrap').children();

    $('#eventItemWrap').empty();
    // for (let i=0; i<domChild.length; i++) {
    //     domChild[i].remove();
    // }
    console.log('여기', $('#eventItemWrap').children());
    
    if (kind === '분류') {

        dataFilterlist = await Array(0);
        console.log('dataFilterlist', dataFilterlist.length);
        console.log('dataFilterlist', dataFilterlist);
       if (filter === '전체') {
        console.log(datalist);
            eventItem(datalist);
       } else {

            for (let i=0; i < datalist.length; i++) {
                if (datalist[i].CODENAME === filter) {
                     dataFilterlist.push(datalist[i]);
                } else if (datalist[i].CODENAME.slice(0,2)=== filter) {
                     dataFilterlist.push(datalist[i]);
                }
            }
            console.log(dataFilterlist);
            eventItem(dataFilterlist);
       }

       $('#eventListPiceSelect').val('전체');
    }

    if ( kind === '가격') {

        if (dataFilterlist.length === 0) { // 분류를 선택 x

            for (let i=0; i < datalist.length; i++) {
                if (datalist[i].IS_FREE === filter) {
                    dataFilterlist.push(datalist[i]);
                } 
            }
            console.log('dataFilterlist',dataFilterlist);
            eventItem(dataFilterlist);

        } else {

            dataFilterlistPirce = await Array(0);
            console.log('filter',filter)
            if (filter === '전체') {
                
                eventItem(dataFilterlist);
            } else {

                for (let i=0; i < dataFilterlist.length; i++) {
                    if (dataFilterlist[i].IS_FREE === filter) {
                        dataFilterlistPirce.push(dataFilterlist[i]);
                    } 
                }
                eventItem(dataFilterlistPirce);
            }
        }
    } 
}