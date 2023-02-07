let range = document.querySelector(".number");
let rangeNum = document.querySelector(".range-num");
let pers = document.querySelector(".pers");
let persent = 0;
let result = document.querySelector(".res_num");
range.oninput = function () {
    rangeNum.style.left = this.value * 15 + "px";
    rangeNum.innerHTML = this.value;
    if (range.value ==0){
        pers.innerHTML = 0 + "%";
        persent = 0;
    }
    else if (range.value <=6) {
        pers.innerHTML = 5 + "%";
        persent = 5;
    }
    else if (range.value <=12){
        pers.innerHTML = 7 + "%";
        persent = 7;
    }
    else{
        pers.innerHTML = 9 + "%";
        persent = 9;
    }
    result.innerHTML = money.value * (1 + persent / 100)
}

document.getElementById('check').onclick = function(){
    let money = document.getElementById('money');
    alert('month: ' + range.value + ',deposit: ' + money.value + ', persent ' + persent + ',money ' + money.value * (1 + persent / 100) )
}