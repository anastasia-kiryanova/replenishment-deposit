'use strict';

function calculateDepositIncome(amount, periodInMonths) {
    let percent;
    if (periodInMonths < 6) {
        percent = 2;
    } else if (periodInMonths >= 6 && periodInMonths < 9) {
        percent = 2.2;
    } else if (periodInMonths >= 9 && periodInMonths < 12) {
        percent = 2.3;
    } else if (periodInMonths >= 12 && periodInMonths < 18) {
        percent = 2.6;
    } else if (periodInMonths >= 18) {
        percent = 2.7;
    }
    const totalAmount = Number((amount * Math.pow(1+((percent/100)/12), periodInMonths)).toFixed());
    const profit = totalAmount - amount;

    return {
        percent,
        totalAmount,
        profit,
    };
}

function handleSubmit(evt) {
    evt.preventDefault();

    amountErrorEl.textContent = '';
    periodErrorEl.textContent = '';
    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';

    const depositAmount = Number(amountInputEl.value);
    if (Number.isNaN(depositAmount)) {
        amountErrorEl.textContent = `Неверное значение. Введите число, например: 15000`;
        return;
    }
    if (depositAmount < 15000) {
        amountErrorEl.textContent = `Неверное значение. Минимальная сумма: 15000 ₽`;
        return;
    }
    if (depositAmount > 50000000) {
        amountErrorEl.textContent = `Неверное значение. Максимальная сумма: 50000000 ₽`;
        return;
    }

    const period = Number(periodInputEl.value);
    if (Number.isNaN(period)) {
        periodErrorEl.textContent = `Неверное значение. Введите число месяцев, например: 3`;
        return;
    }
    if (period < 3) {
        periodErrorEl.textContent = `Неверное значение. Минимальный период: 3 месяца`;
        return;
    }
    if (period > 18) {
        periodErrorEl.textContent = `Неверное значение. Максимальный период: 18 месяцев`;
        return;
    }

    const result = calculateDepositIncome(depositAmount, period);
    totalEl.textContent = `${result.totalAmount}`;
    profitEl.textContent = `${result.profit}`;
    percentEl.textContent = `${result.percent}`;
}

const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit);

const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');

const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');

const amountErrorEl = document.getElementById('amount-error');
const periodErrorEl = document.getElementById('period-error');