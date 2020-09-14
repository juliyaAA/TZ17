// Задача 1. Создайте функцию, которая возвращает ваше имя. Имя вводится с input

function getName() {
    return document.getElementById('userName').value;
}
const form = document.getElementById('form');
function getOutput(event) {
    event.preventDefault();
    document.getElementById('str').innerHTML = "Ваше имя: " +  getName();
}
form.addEventListener('submit', getOutput);

// Задача 2 и 3. Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.
// 1й способ 

function getComparison(a, b) {
    return a >= b  ?  a  :  b;
    
}
getComparison(9, 7);


// 2й способ
function getNumber(c, d) {
    return Math.max(c, d);
}
getNumber(10, 7);

/* Задача 4. Создайте функцию, которая возвращает случайное число в указанном
диапазоне. Диапазон указывает пользователь с помощью двух переменных, которые
передаются функции в качестве параметров. */

function getRandom(min, max) {
    let min1 = Math.ceil(min);
    let max2 = Math.floor(max);
    return Math.floor(Math.random() * (max2 - min1 + 1)) + min1;
}
getRandom(1, 20);