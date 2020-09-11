// Задача 1. Создайте функцию, которая возвращает ваше имя. Имя вводится с input

let pow = document.getElementById('userName');
function buttonСlick() {
    document.getElementById('str').innerHTML = "Ваше имя: " + pow.value;
}
buttonСlick();

// Задача 2 и 3. Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.
// 1й способ 

function getComparison(a, b) {
    return a >= b  ?  a  :  b;
    
}
getComparison(9, 7);


// 2й способ
function getEvent(c, d) {
    return Math.max(c, d);
}
getEvent(10, 7);

/* Задача 4. Создайте функцию, которая возвращает случайное число в указанном
диапазоне. Диапазон указывает пользователь с помощью двух переменных, которые
передаются функции в качестве параметров. */

function getRandom(min, max) {
    let min1 = Math.ceil(min);
    let max2 = Math.floor(max);
    return Math.floor(Math.random() * (max2 - min1 + 1)) + min1;
}
getRandom(1, 20);