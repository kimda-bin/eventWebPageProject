const qaOnchange = (e) => {
    e.classList.remove('error-input');
}


const qaOnclick = () => {

    /** javascript 정규식 */
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;


    let qaCompany = document.getElementById('qaCompany');
    if (qaCompany.value === "") {
        qaCompany.className += 'error-input';
        return alert('업체명을 확인해주세요');
    }

    let qaManager = document.getElementById('qaManager');
    if (qaManager.value === "") {
        qaManager.className += 'error-input';
        return alert('담장자명을 확인해주세요');
    }


    let phone = document.getElementById('qaPhone');
    if (phone.value === "" || phonePattern.test(phone.value) === false) {
        phone.className += 'error-input';
        return alert('핸드폰 번호를 확인해주세요');
    }

    let email = document.getElementById('qaEmail');
    if (email.value === "" || emailPattern.test(email.value) === false) {
        email.className += 'error-input';
        return alert('email을 확인해주세요');
    }

    
    let qaContents = document.getElementById('qaContents');
    if (qaContents.value === "") {
        qaContents.className += 'error-input';
        return alert('내용을 확인해주세요');
    }

    alert('문의사항 등록이 완료되었습니다.');
    window.location.reload();
}