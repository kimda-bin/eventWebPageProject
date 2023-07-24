

const festivalItem = (datalist) => {

    // let eventItemWrap = $('#eventItemWrap');
    const priceColor = (IS_FREE) => {
        // orange : 무료, gray : 유료
        let color = ['#eee', 'orange'];

        if (IS_FREE === "유료") {
            return 'background-color :' + color[0]
        } else {
            return 'background-color:' + color[1]
        }
    }

    for (let i = 0; i < 12; i++) {

        if (datalist[i] && datalist[i].MAIN_IMG && datalist[i].TITLE && datalist[i].IS_FREE) {
            $('#festivalContainer').append(`
            
                <div class="festival_list">
                    <a href="./event.html?detail#${datalist[i].idx}">
                        <div class="thumb" style="background-image:url(${datalist[i].MAIN_IMG})">
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

    $('.festival_container').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [


            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },


            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}
