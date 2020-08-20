// Напиши скрипт который просит
// посетителя ввести число в prompt
// до тех пор, пока посетитель
// не нажмет Cancel и каждый раз
// добавляет введенное значение
// к общей сумме.

// При загрузке страницы пользователю
// предлагается в prompt ввести число.
// Ввод добавляется к значению
// переменной total.

// Операция ввода числа продолжается
// до тех пор, пока пользователь не
// нажмет кнопку Cancel в prompt.

// После того как пользователь
// прекратил ввод нажав кнопку
// Cancel, показать alert со строкой
// 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что
// пользователь ввел именно число,
// а не произвольный набор символов,
// не нужно. Но, если все таки хочешь,
// то в случае некорректного ввода,
// покажи alert с текстом
// 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать
// к общей сумме не нужно, после чего
// снова пользователю предлагается
// ввести число в prompt.

let input;
let total = 0;

do {
    input = prompt('Введите число');
    if (isNaN(input)) {
        console.log(Number(input));
        alert('Введите именно число!');
    } else {
        total += Number(input);
        console.log(input);
        console.log(`Сумма = ${total}`);
    }
} while (input !== null);
alert(`Общая сумма введенных чисел ${total}`);