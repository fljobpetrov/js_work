"use strict";

let money = +prompt('Бюджет в месяц');
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD'));

let appData = {
    money: money,
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false   
};

for (let i = 0; i < 2; i++) {
    let expenseItem = prompt('Введите обязательную статью расходов в этом месяце'),
        sum         = prompt("Во сколько обойдется?"); 
             
    if ( (typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(sum)) != null
        && expenseItem != '' && sum != '' && expenseItem.length < 50 && sum.length < 10 ) {
        appData.expenses[expenseItem] = sum;
    } else {    //  Если пользователь не верно ввел данные по статье, то просим ввсести заново
        i--;
        alert("Введены некорректные данные!")
        continue;    
    }
}

appData.moneyPerDay = Math.trunc(appData.money / 30);

if (appData.moneyPerDay <= 100) {
    console.log("minimum");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("midle");
} else if (appData.moneyPerDay > 2000) {
    console.log("max");
} else {
    console.log("hz");
}

console.log(appData.money);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.moneyPerDay);