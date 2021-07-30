'use strict';

function calculateDepositIncome(amount, periodInMonth) {
    let percent;
    if(periodInMonth < 6){
        percent = 2;
    } else if(periodInMonth >= 6 && periodInMonth < 9){
        percent = 2.2;
    } else if(periodInMonth >= 9 && periodInMonth < 12){
        percent = 2.3;
    } else if(periodInMonth >= 12 && periodInMonth < 18){
        percent = 2.6;
    } else if(periodInMonth >= 18){
        percent = 2.7;
    }
    const totalAmount = Number((amount * Math.pow(1+((percent/100)/12), periodInMonth)).toFixed());
    const profit = totalAmount - amount;

    return {
        percent,
        totalAmount,
        profit,
    };
}


