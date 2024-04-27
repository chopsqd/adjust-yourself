export default {
   title: "Условия и циклы",
   text: `
Давайте изучим основные концепции условных выражений и циклов, которые являются важной частью программирования на JavaScript.
### Условные выражения в JavaScript
Условные выражения используются для принятия решений в программе на основе выполнения определенных условий. В JavaScript для этого используется конструкция **\`if...else\`**. Давайте рассмотрим пример:
\`\`\`jsx
let age = 25;

if (age >= 18) {
 console.log("Вы совершеннолетний");
} else {
 console.log("Вы несовершеннолетний");
}
\`\`\`
В этом примере, если значение переменной **\`age\`** больше или равно 18, будет выполнен блок кода после **\`if\`**, иначе будет выполнен блок кода после **\`else\`**.
### Циклы в JavaScript
Циклы используются для повторения выполнения блока кода до тех пор, пока выполняется определенное условие. В JavaScript наиболее часто используются циклы **\`for\`** и **\`while\`**. Рассмотрим примеры:
\`\`\`jsx
// Цикл for
for (let i = 0; i < 5; i++) {
 console.log(i);
}

// Цикл while
let counter = 0;
while (counter < 5) {
 console.log(counter);
 counter++;
}
\`\`\`
В первом примере мы используем цикл **\`for\`**, который выполняет блок кода пять раз, увеличивая переменную **\`i\`** на каждой итерации. Во втором примере используется цикл **\`while\`**, который также выполняет блок кода до тех пор, пока переменная **\`counter\`** меньше пяти.
### Операторы **\`break\`** и **\`continue\`**
В JavaScript также существуют операторы **\`break\`** и **\`continue\`**, которые позволяют управлять выполнением циклов. Оператор **\`break\`** используется для завершения выполнения цикла, а оператор **\`continue\`** используется для перехода к следующей итерации цикла без выполнения оставшейся части текущей итерации.
### Пример использования операторов **\`break\`** и **\`continue\`**
\`\`\`jsx
// Использование оператора break
for (let i = 0; i < 10; i++) {
 if (i === 5) {
   break;
 }
 console.log(i);
}

// Использование оператора continue
for (let i = 0; i < 10; i++) {
 if (i === 5) {
   continue;
 }
 console.log(i);
}
\`\`\`
### Заключение
В этой лекции мы изучили основные концепции условий и циклов в JavaScript. Условные выражения позволяют принимать решения на основе определенных условий, а циклы используются для повторения выполнения блока кода. Понимание этих концепций является важной частью освоения языка JavaScript и поможет вам эффективно решать задачи в вашем приложении.
    `,
   test: [
      {
         question: "Какая конструкция используется для принятия решений на основе определенных условий в JavaScript?",
         options: [
            {
               answer: "switch",
               isCorrect: false
            },
            {
               answer: "if...else",
               isCorrect: true
            },
            {
               answer: "while",
               isCorrect: false
            },
            {
               answer: "for",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой оператор используется для завершения выполнения цикла в JavaScript?",
         options: [
            {
               answer: "return",
               isCorrect: false
            },
            {
               answer: "break",
               isCorrect: true
            },
            {
               answer: "exit",
               isCorrect: false
            },
            {
               answer: "stop",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой цикл используется для повторения выполнения блока кода до тех пор, пока выполняется определенное условие?",
         options: [
            {
               answer: "while",
               isCorrect: true
            },
            {
               answer: "for",
               isCorrect: false
            },
            {
               answer: "do...while",
               isCorrect: false
            },
            {
               answer: "foreach",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой оператор используется для перехода к следующей итерации цикла без выполнения оставшейся части текущей итерации в JavaScript?",
         options: [
            {
               answer: "skip",
               isCorrect: false
            },
            {
               answer: "pass",
               isCorrect: false
            },
            {
               answer: "break",
               isCorrect: false
            },
            {
               answer: "continue",
               isCorrect: true
            }
         ]
      },
      {
         question: "Какой цикл используется для выполнения блока кода определенное количество раз в JavaScript?",
         options: [
            {
               answer: "do...while",
               isCorrect: false
            },
            {
               answer: "for",
               isCorrect: true
            },
            {
               answer: "while",
               isCorrect: false
            },
            {
               answer: "repeat...until",
               isCorrect: false
            }
         ]
      }
   ]
}
