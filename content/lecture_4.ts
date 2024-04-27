export default {
   title: "Функции",
   text: `
Функции - это одна из ключевых концепций в JavaScript, которые позволяют повторно использовать код, структурировать программу и делать её более модульной. Давайте рассмотрим основные аспекты функций в JavaScript.
### Что такое функции?
Функция в JavaScript - это блок кода, который можно вызвать при необходимости, чтобы выполнить определенную задачу. Функции позволяют уменьшить дублирование кода, улучшить его читаемость и облегчить его поддержку.
### Объявление функций
В JavaScript существует несколько способов объявления функций:
- **Функциональные выражения**:
\`\`\`jsx
let greet = function() {
   console.log("Привет, мир!");
};
\`\`\`
- **Функции-объявления**:
\`\`\`jsx
function greet() {
   console.log("Привет, мир!");
}
\`\`\`
- **Стрелочные функции** (введены в ES6):
\`\`\`jsx
let greet = () => {
   console.log("Привет, мир!");
};
\`\`\`
### Параметры функций
Параметры - это значения, которые функция принимает при вызове. Они передаются в функцию в качестве аргументов.
\`\`\`jsx
function greet(name) {
   console.log("Привет, " + name + "!");
}

greet("Вова"); // Выведет: Привет, Вова!
\`\`\`
### Возвращаемые значения
Функции в JavaScript могут возвращать значения при завершении своего выполнения с помощью ключевого слова **\`return\`**.
\`\`\`jsx
function multiply(a, b) {
   return a * b;
}

let result = multiply(5, 3);
console.log(result); // Выведет: 15
\`\`\`
### Замыкания
Замыкание - это функция, которая запоминает окружение, в котором она была создана, и имеет доступ к переменным этого окружения, даже после того, как оно вышло из области видимости.
\`\`\`jsx
function outerFunction() {
   let outerVariable = "Внешняя переменная";

   function innerFunction() {
       console.log(outerVariable);
   }

   return innerFunction;
}

let innerFunc = outerFunction();
innerFunc(); // Выведет: Внешняя переменная
\`\`\`
### Контекст вызова функции
В JavaScript функции имеют свой контекст вызова, который определяется тем, как они были вызваны. Для методов объекта контекстом является сам объект.
\`\`\`jsx
let person = {
   name: "John",
   greet: function() {
       console.log("Привет, " + this.name + "!");
   }
};

person.greet(); // Выведет: Привет, John!
\`\`\`
### Заключение
Функции играют важную роль в JavaScript, обеспечивая возможность структурировать код, повторно использовать его и делать программу более модульной. Понимание основ функций поможет вам стать более эффективным JavaScript разработчиком.
    `,
   test: [
      {
         question: "Какие из следующих способов можно использовать для объявления функций в JavaScript?",
         options: [
            {
               answer: "Function declarations, arrow functions, object literals",
               isCorrect: false
            },
            {
               answer: "Function expressions, arrow functions, conditional statements",
               isCorrect: false
            },
            {
               answer: "Function declarations, function expressions, arrow functions",
               isCorrect: true
            },
            {
               answer: "Variable declarations, object literals, conditional statements",
               isCorrect: false
            }
         ]
      },
      {
         question: "Что такое параметры функции в JavaScript?",
         options: [
            {
               answer: "Это имена функций",
               isCorrect: false
            },
            {
               answer: "Это значения, которые функция принимает при вызове",
               isCorrect: true
            },
            {
               answer: "Это возвращаемые значения функции",
               isCorrect: false
            },
            {
               answer: "Это переменные, которые доступны только внутри функции",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой из следующих способов является замыканием в JavaScript?",
         options: [
            {
               answer: "Вложенные функции",
               isCorrect: true
            },
            {
               answer: "Стрелочные функции",
               isCorrect: false
            },
            {
               answer: "Объявление объектов",
               isCorrect: false
            },
            {
               answer: "Применение операторов сравнения",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какие функции могут возвращать значения в JavaScript?",
         options: [
            {
               answer: "Только функции-объявления",
               isCorrect: false
            },
            {
               answer: "Только функции-выражения",
               isCorrect: false
            },
            {
               answer: "Только стрелочные функции",
               isCorrect: false
            },
            {
               answer: "Все вышеперечисленные",
               isCorrect: true
            }
         ]
      },
      {
         question: "Как определяется контекст вызова функции в JavaScript?",
         options: [
            {
               answer: "По наличию ключевого слова 'this' в функции",
               isCorrect: true
            },
            {
               answer: "По имени функции",
               isCorrect: false
            },
            {
               answer: "По типу возвращаемого значения",
               isCorrect: false
            },
            {
               answer: "По названию файла, в котором находится функция",
               isCorrect: false
            }
         ]
      }
   ]
}
