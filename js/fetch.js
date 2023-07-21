const getEventDat = async () => {

    let rtnList = [];
    await $.ajax({
        url: "http://openapi.seoul.go.kr:8088/464d6d69706b6f6e3131326e45756656/json/culturalEventInfo/1/100", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        method: "GET",   // HTTP 요청 메소드(GET, POST 등)
        dataType: "json" // 서버에서 보내줄 데이터의 타입
    })
    // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .done(function(json) {
        if (json.culturalEventInfo.row.length) {
            
            let row = json.culturalEventInfo.row;

            for (let i=0; i<row.length; i++) {

                if (row[i].MAIN_IMG && row[i].TITLE && row[i].IS_FREE) {
                    row[i].idx= i;
                    rtnList.push(row[i]);
                }
            }
          return rtnList;
        }
    })
    // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
    .fail(function(xhr, status, errorThrown) {
    
    })
    return rtnList;

}