export default {
   title: "Введение в JavaScript",
   text: `
        Добро пожаловать на лекцию «Введение в JavaScript»! Сегодня мы погрузимся в увлекательный мир программирования на языке JavaScript, который является одним из самых популярных и востребованных языков веб-разработки. 
        ##### Что такое JavaScript?
        JavaScript - это мощный язык программирования, который широко используется для создания интерактивных веб-сайтов и веб-приложений. Он был создан в 1995 году Бренданом Эйхом и изначально назывался LiveScript. Позже его переименовали в JavaScript, чтобы связать его с языком Java, который был популярен в то время. Однако, несмотря на схожие названия, JavaScript и Java - это два разных языка.
        ##### Роль JavaScript в веб-разработке
        JavaScript играет ключевую роль в веб-разработке. Он используется для создания динамических элементов на веб-страницах, таких как анимации, интерактивные формы, обработка событий, валидация данных и многое другое. Благодаря JavaScript, веб-страницы становятся более функциональными и пользовательские взаимодействия с ними становятся более плавными и приятными.
        ##### Основные особенности JavaScript
        1. **Легковесность и интерпретируемость**: JavaScript является легковесным и интерпретируемым языком, что означает, что его код выполняется непосредственно в браузере без необходимости компиляции.
        2. **Кросс-платформенность**: JavaScript поддерживается практически всеми современными браузерами, что делает его кросс-платформенным языком.
        3. **Обширная экосистема**: JavaScript имеет огромную экосистему библиотек и фреймворков, таких как React, Angular, Vue.js, которые упрощают разработку веб-приложений.
        4. **Динамическая типизация**: JavaScript использует динамическую типизацию, что позволяет переменным автоматически определять свой тип данных.
        5. **Функциональное и объектно-ориентированное программирование**: JavaScript поддерживает как функциональное, так и объектно-ориентированное программирование, что позволяет разработчикам писать более гибкий и модульный код.
        ##### Заключение
        JavaScript - это язык, который стал неотъемлемой частью веб-разработки. Он обладает множеством возможностей и используется для создания интерактивных и динамичных веб-приложений. В следующих лекциях мы погрузимся глубже в основы JavaScript и начнем изучать его ключевые концепции и возможности
    `,
   test: [
      {
         question: "Что представляет собой JavaScript?",
         options: [
            {
               answer: "Язык разметки веб-страниц",
               isCorrect: false
            },
            {
               answer: "Язык программирования для создания динамических веб-сайтов и приложений",
               isCorrect: true
            },
            {
               answer: "Визуальный редактор для создания графических изображений",
               isCorrect: false
            },
            {
               answer: "Фреймворк для работы с базами данных",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какая роль JavaScript в веб-разработке?",
         options: [
            {
               answer: "Создание статических веб-страниц.",
               isCorrect: false
            },
            {
               answer: "Создание динамических элементов на веб-страницах, таких как анимации и интерактивные формы.",
               isCorrect: true
            },
            {
               answer: "Вывод графических изображений на экран.",
               isCorrect: false
            },
            {
               answer: "Автоматизация процессов веб-хостинга.",
               isCorrect: false
            }
         ]
      },
      {
         question: "Что означает интерпретируемость JavaScript?",
         options: [
            {
               answer: "Необходимость компиляции кода перед выполнением.",
               isCorrect: false
            },
            {
               answer: "Выполнение кода непосредственно в браузере без компиляции.",
               isCorrect: true
            },
            {
               answer: "Возможность создания веб-приложений.",
               isCorrect: false
            },
            {
               answer: "Преобразование кода на JavaScript в код на другом языке программирования.",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какая особенность JavaScript позволяет переменным автоматически определять свой тип данных?",
         options: [
            {
               answer: "Статическая типизация.",
               isCorrect: false
            },
            {
               answer: "Динамическая типизация.",
               isCorrect: true
            },
            {
               answer: "Явная типизация.",
               isCorrect: false
            },
            {
               answer: "Неявная типизация.",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какие типы программирования поддерживает JavaScript?",
         options: [
            {
               answer: "Только процедурное программирование.",
               isCorrect: false
            },
            {
               answer: "Только объектно-ориентированное программирование.",
               isCorrect: false
            },
            {
               answer: "Только функциональное программирование.",
               isCorrect: false
            },
            {
               answer: "Как функциональное, так и объектно-ориентированное программирование.",
               isCorrect: true
            }
         ]
      }
   ]
}
