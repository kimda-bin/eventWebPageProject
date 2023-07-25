const loginOnchange = (e) => {
    e.classList.remove('error-input');
}

const loginOnclick = () => {

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let loginId = document.getElementById('loginId');

    if (loginId.value === '' || emailPattern.test(loginId.value) === false) {

        loginId.className += ' error-input';
        return alert('email를 확인해주세요.')
    }

    let loginPw = document.getElementById('loginPw');

    if (loginPw.value === '') {

        loginPw.className += ' error-input';
        return alert('비밀번호를 확인해주세요.')
    }


    alert('로그인이 완료되었습니다.');
    window.location.href = "/";
}


const joinOnchange = (e) => {
    e.classList.remove('error-input');
}


const joinOnclick = () => {

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let bornPattern = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
    let phonePattern = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;

    let email = document.getElementById('joinEmail');

    if (email.value === "" || emailPattern.test(email.value) === false) {
        email.className += 'error-input';
        return alert('email을 확인해주세요');
    }

    let password1 = document.getElementById('joinPassword1');
    let password2 = document.getElementById('joinPassword2');
    if (password1.value === "") {
        password1.className += 'error-input';
        return alert('password을 확인해주세요');
    }
    if (password1.value != password2.value) {
        password2.className += 'error-input';
        return alert('password가 동일한지 확인해주세요');
    }

    let name = document.getElementById('joinName');
    if (name.value === "") {
        name.className += 'error-input';
        return alert('이름을 확인해주세요');
    }
    let born = document.getElementById('joinBorn');
    if (born.value === "" || bornPattern.test(born.value) === false) {

        born.className += ' error-input';
        return alert('생년월일을 확인해주세요');
    }

    let phone = document.getElementById('joiPhone');
    if (phone.value === "" || phonePattern.test(phone.value) === false) {
        phone.className += 'error-input';
        return alert('핸드폰 번호를 확인해주세요');
    }
    alert('회원가입이 완료되었습니다.');
    window.location.href = "/login.html";
}