//1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
alert('Реалізація обрахунку числа в 2-му степені.')
let num = prompt('Введіть число');
let res = num**2;
alert(`Квадрат числа ${num} = ${res}`);

//2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
alert('Реалізація середнього арифметичного.')
let num1 = prompt('Введіть перше число');
let num2 = prompt('Введіть друге число');
alert(`Середнє арифметичне числа ${num1} та ${num2} дорівнює: ${((+num1) + (+num2))/2}`);

//3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
alert('Реалізація розрахунку площі круга.')
let a = prompt('Введіть довжину сторони квадрата');
alert(`Площа квадрата дорівнює: ${(+a)**2}`);

//4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371
//миль. Это значение укажите в коде как константу.
alert('Реалізація конвертора із кілометрів в милі.')
const convertMilKm = 0.621371;
let milya = prompt('Введіть кількість миль');
let km = + milya * (1/convertMilKm);
alert(`${milya} миль дорівнює: ${km.toFixed(2)} км`);

//5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
alert('Реалізація калькулятора.')
let b = prompt('Введіть перше число');
let c = prompt('Введіть друге число');
alert(`${b} + ${c} = ${(+b) + (+c)}
${b} - ${c} = ${(+b) - (+c)}
${b} * ${c} = ${(+b) * (+c)}
${b} / ${c} = ${((+b) / (+c)).toFixed(2)}`);

//6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
alert('Реалізація формули "a * x + b = 0".')
let d = prompt('Введіть значення "a"');
let e = prompt('Введіть значення "b"');
alert(`Значення "x" дорівнює: ${(-(+d)/(+e)).toFixed(2)}`)

//7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
alert('Реалізація підрахунку годин та хвилин до кінця доби.')
let god = prompt('Введіть поточну годину');
let hv = prompt('Введіть поточні хвилини');
alert(`До кінця доби залишилось: ${23-(+god)} год. ${60-(+hv)} хв.`);

//8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
alert('Реалізація виводу другої цифри 3-ох значного числа.')
let n = prompt('Введіть 3-ох значне число');
alert(`В числі ${n} друга цифра : ${Math.floor((+n)/10)%10} `);

//9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234). 
alert('Реалізація перемістити останню цифру на початок.')
let chislo = prompt('Введіть 5-ти значне число');
let result=0;
result=chislo%10;
chislo = Math.floor(chislo/10);
let reschis = String(result)  + String(chislo) ;
alert(`Число ${chislo} з переміщеною останьою цифрою на початок: ${reschis}`);

//10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
alert('Реалізація обрахунку заробітної плати працівника.')
let prodazh = prompt('Зарплата працівника складає $250 + 10% від продаж. Введіть загальну суму продажів.');
let zp = 250 + (+prodazh)*0.1;
alert(`Зарплата з урахуванням продажів становить: ${zp.toFixed(2)}`);
 
    

