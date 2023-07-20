

const eventDetailDatavind = (index, datalist) => {

    /**
     * 1. 메인 정보
        대표 이미지,
        공연/행사명,
        장소, 
        날짜/시간,
        이용대상,
        이용요금, 유무료,
        기관명,
        홈페이지 주소
    */
    createEventDetailInfo(datalist[index]);

    /**
        2.  SUB 정보
        자치구, 출연자정보,    
        신청일, 시민/기관, 
        시작일,종료일, (공연 시간)
        프로그램 소개. 기타 내용
    */

    createEventDetailSubinfo(datalist[index]);
    /**
     * 3.위치
     * 경도,위도,
     */
    createEventDetailLocation(datalist[index]);

}


const createEventDetailInfo = (DATA) => {

    let typeTitle = ["장소", "기간", "시간", '대상', '요금', "문의"];
    let typeContent = [];
    
    typeContent.push(DATA.PLACE); // 장소
    typeContent.push(DATA.DATE); // 기간
    typeContent.push(DATA.PLACE); // 시간
    typeContent.push(DATA.USE_TRGT); // 대상
    typeContent.push(DATA.USE_FEE); // 요금
    typeContent.push(DATA.ORG_NAME); // 문의
    

    const typeLiCreate = () => {

        let liHtml = '';

        for (let i=0; i<typeTitle.length; i++) {

            liHtml += `
                <li>
                    <span class="type-title">${typeTitle[i]}</span>
                    <span class="type-content">${typeContent[i]}</span>
                </li>
            `
        }
        return liHtml;
    }

    $('#eventDetailWrap').append(`

        <h2>${DATA.CODENAME}(${DATA.THEMECODE})</h2>
        <div id="eventDtailInfo" class="info-box">
            <div class="img-box">
                <img src="${DATA.MAIN_IMG}" alt="${DATA.TITLE}">
            </div>
            <div class="txt-box">
             
                <h2 class="event-title">${DATA.TITLE}</h2>
                <ul class="type-box">
                    ${typeLiCreate()}
                </ul>
                <div class="detail-btn">
                    <a href="${DATA.HMPG_ADDR}" target="_blank">홈페이지 바로가기</a>
                </div>
        </div>
    `);

}




const createEventDetailSubinfo = (DATA) => {

    
    const startEndDate = (STRTDATE, END_DATE) => {

        return `${STRTDATE.slice(0, 10)} ~ ${END_DATE.slice(0, 10)}`
    }

    $('#eventDetailWrap').append(`

        <div id="eventDetailSubInfo" class="sub-info-box">
            <h3>세부 정보</h3>

            <h6>자치구</h6>
            <p>${DATA.GUNAME}<p>

            <h6>출연자 정보</h6>
            <p>${DATA.PLAYER}<p>

            <h6>시작일/종료일(공연시간)</h6>
            <p> ${startEndDate(DATA.STRTDATE, DATA.END_DATE)}()<p>

            <h6>프로그램 소개</h6>
            <p>${DATA.PROGRAM} <br/> ${DATA.ETC_DESC}<p>
        </div>
    `)
}


const createEventDetailLocation = (DATA) => {

    $('#eventDetailWrap').append(`
        <div class="event-detail-location">
            <h3>위치안내</h3>
            <div class="location-box"></div>
        </div>
    `)
}