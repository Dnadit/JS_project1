const showDice = () => {
    const n = Math.floor(Math.random() * 6) + 1;
    const s1 = document.querySelector("#s1") ;   
    s1.innerHTML = `<img src="./imges/${n}.png">`        
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
    show("none", "block", "none", "block", "block");
})

const checkDice = () => {
    const s3 = document.querySelector("#s3");
    const chooseDice = document.getElementsByName("num");
    console.log(chooseDice);
    chooseDice.foreach((node)=>{
        if(node.checked) {
            s3.innerHTML = `<img src="./imges/o.png">`;
        } else {
            s3.innerHTML = `<img src="./imges/x.png">`;
        }
    })   
}