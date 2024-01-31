// Массивы
// let grades = [5, 4, 3, 5, 4, 4, 3, 5, 4, 3, 5, 4, 4, 3, 5,];
// let extractedGrade = grades[4];
// console.log(extractedGrade);
// let answers = [true, false, true, true];
// console.log(answers[1]);

// Обьекты
// let person1 = { name: "Anna", surname: "Smirnova", birthYear: 1990 };
// let person2 = { name: "Ivan", surname: "Petrov", birthYear: 1985 };
// console.log(person1.name);
// console.log(person2.birthYear);
// let persons = [
//   { name: "Anna", surname: "Smirnova", birthYear: 1990 },
//   { name: "Ivan", surname: "Petrov", birthYear: 1985 },
// ];
// console.log( persons[0].surname );
// console.log( persons[1].name );

// let shopingLists = [
//     ["молоко", "хлеб", "яйца"],
//     ["сок", "мороженое"],
//     ["корм для кота", "шампунь"]
// ];
// console.log( shopingLists[1][1] ); // "мороженое" !!!!!!без ЗАПЯТОЙ!!!!!!!
// let list = shopingLists[2];
// let product = list[1];
// console.log(product);

// if, else

// document.write('Start', '<br>');
// if (balance >= productPrice) {
//     document.write('Product purchased');
// } else {
//     document.write('Not enough money');
// }
// document.write('<br>', 'End');
// reverse situation
// const productPrice1String = window.prompt("Price for 1 item").trim();
// const productPrice2String = window.prompt("Price for 2 item").trim();
// const productPrice3String = window.prompt("Price for 3 item").trim();
// const productPrice1 = window.Number(productPrice1String);
// const productPrice2 = window.Number(productPrice2String);
// const productPrice3 = window.Number(productPrice3String);
// let balance = 110;
// document.write("Start", "<br>");
// if (window.isNaN(productPrice1)) {
//   document.write("You input incorrect number");
// } else {
//     if (balance < productPrice1) {
//     document.write("Not enough money");
//   } else {
//     document.write("Product1 purchased");
//     balance = balance - productPrice1;
//   }
//     if (balance < productPrice2) {
//     document.write("Not enough money");
//   } else {
//     document.write("Product2 purchased");
//     balance = balance - productPrice2;
//   }
//     if (balance < productPrice3) {
//     document.write("Not enough money");
//   } else {
//     document.write("Product3 purchased");
//     balance = balance - productPrice3;
//   }
// }
// document.write("<br>", "Money in the card:", balance);
// document.write("<br>", "End");

// Cycles
/*
// исходные данные
const repeatCount = 3;
// for (init; condition; increment) // если cond = true, то выполняем целевое действие!!!!!Потом выполняем increment
for (let index = 1; index <= repeatCount; index++ ) {
  // целевое действие
  document.write("a");
};
// Расписывваем цикл полностью
// инициализация стартового значения
let index = 1
// проверка
if (index <= repeatCount) {
  // целевое действие
  document.write("a");
}
// инкрементируем индекс (счётчик)
index = 2;
// проверка
if (index <= repeatCount) {
  // целевое действие
  document.write("a");
}
// инкрементируем индекс (счётчик)
index = 3;
// проверка
if (index <= repeatCount) {
  // целевое действие
  document.write("a");
}
// инкрементируем индекс (счётчик)
index = 4;

if (index <= repeatCount) {
  document.write("a");
}

index = 5;
if (index <= repeatCount) {
  document.write("a");
}

index = 6;
if (index <= repeatCount) {
  document.write("a");
}

index = 7;
if (index <= repeatCount) {
  document.write("a");
}
*/
// let grades = [5, 4, 3, 5, 4, 4, 3, 5, 4, 3, 5, 4, 4, 3, 5];
// // document.write(grades[0], "<br>");
// // document.write(grades[1], "<br>");
// // document.write(grades[2], "<br>");
// // document.write(grades[3], "<br>");
// // document.write(grades[4], "<br>");
// for (let i = 0; i < grades.length; i++) {
//   document.write(grades[i], "<br>");
// }

// let books = [
//   "Война и Мир",
//   "Мастер и Маргарита",
//   "Преступление и Наказание",
//   "Шагреневая кожа",
// ];
// for (let i = 0; i < books.length; i++) {
//   document.write(books[i], "<br>");
// }
// let students = [
//   { name: "Anna", surname: "Smirnova", birthYear: 1990 },
//   { name: "Ivan", surname: "Petrov", birthYear: 1985 },
// ];
// for (let i = 0; i < students.length; i++) {
//   document.write(students[i].surname, "<br>");
// }

