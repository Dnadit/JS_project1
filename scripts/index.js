//전역변수 선언
let n ;

//주사위 번호 선택
const showDice = () => {
    n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
    show("none", "block", "none", "none", "block");
}

//주사위 번호 결과 확인
const checkDice = () => {
    const radios = document.querySelectorAll("input[type=radio]");
    show("block", "none", "block", "block", "none");
    div1.innerHTML = `<img src="./imges/${n}.png">`;

    //사용자가 선택한 숫자
    let usern ;
    for(let r of radios) {
        if(r.checked) {
            usern = r.value ;
            break;            
        }
    }
    if(n == usern) {
        div3.innerHTML = `<img src="./imges/o.png">`;
    } else {
        div3.innerHTML = `<img src="./imges/x.png">`;
    }
    document.querySelector("form").reset();
    console.log(n, usern);
}

//요소 보이기 함수
const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;    
}

//DOM 로드가 된 후
document.addEventListener("DOMContentLoaded", () => {
    show("none", "none", "none", "block", "none");
})