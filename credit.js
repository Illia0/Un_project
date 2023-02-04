let range = document.querySelector(".number");
let rangeNum = document.querySelector(".range-num");
let pers = document.querySelector(".pers");
let persent = 0;
range.oninput = function () {
    rangeNum.style.left = this.value * 15 + "px";
    rangeNum.innerHTML = this.value;
    if (range.value ==0){
        pers.innerHTML = 0 + "%";
        persent = 0;
    }
    else if (range.value <=6) {
        pers.innerHTML = 7 + "%";
        persent = 7;
    }
    else if (range.value <=12){
        pers.innerHTML = 6 + "%";
        persent = 6;
    }
    else{
        pers.innerHTML = 5 + "%";
        persent = 5;
    }
}

document.getElementById('check').onclick = function(){
    let money = document.getElementById('money');
    alert('month: ' + range.value + ',money: ' + money.value + ', persent ' + persent )
}