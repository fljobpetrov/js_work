"use strict";

let money = prompt('Бюджет в месяц');
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD'));

let expenseItem1 = prompt('Введите обязательную статью расходов в этом месяце');
let sum1 = prompt("Во сколько обойдется?");

let expenseItem2 = prompt('Введите обязательную статью расходов в этом месяце');
let sum2 = prompt("Во сколько обойдется?");

let expenses = {
    [expenseItem1]: sum1,
    [expenseItem2]: sum2,
};

let optionalExpenses = {};

let income = [];

let appData = {
    money: money,
    timeData: time, 
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: false   
};

console.log(appData.money);
console.log(appData.timeData);
console.log(appData.expenses);

alert(Math.trunc(appData.money / 30));