// Задача 1. Создайте функцию, которая возвращает ваше имя. Имя вводится с input
// function getInputName (){
    
//     return(pow.value);
// }
// getInputName ();

button.onclick = function() {
    const pow = document.getElementById('userName').value;
    document.getElementById('str').innerHTML="Ваше имя: " + pow;
    return false;
};

// Задача 2 и 3. Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.

 
function getComparison (a, b) {
    if ( a > b ) {
        return a;
    } else if( a == b ) {
            return a || b ;
        }
}
getComparison (9, 7); 

/* Задача 4. Создайте функцию, которая возвращает случайное число в указанном
диапазоне. Диапазон указывает пользователь с помощью двух переменных, которые
передаются функции в качестве параметров. */
// function getRandom(c, d) {
//     c = Math.ceil(c);
//     d = Math.floor(d);
//     return Math.floor(Math.random() * (d - c)) + min;;
//   }
// getRandom (1, 20);
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  getRandom (1, 20);