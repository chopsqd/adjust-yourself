export default {
   title: "DOM",
   text: `
        Сегодня мы погрузимся в увлекательный мир DOM и узнаем, как он используется в JavaScript для взаимодействия с HTML-документами.
        ##### Что такое DOM?
        DOM (Document Object Model) - это стандартизированное представление веб-страницы в виде иерархической структуры объектов. Каждый элемент HTML-документа, такой как теги **\`<div>\`**, **\`<p>\`**, **\`<span>\`**, представлен в DOM в виде объекта, который можно программно манипулировать с помощью JavaScript.
        ##### Иерархическая структура DOM
        DOM представляет собой древовидную структуру, где каждый узел представляет собой часть HTML-документа. Корневым узлом является объект **\`document\`**, который представляет весь HTML-документ. Все остальные узлы являются потомками этого корневого узла.
        ##### Основные методы работы с DOM
        JavaScript позволяет изменять содержимое и структуру веб-страницы, добавлять новые элементы, изменять атрибуты и обрабатывать события. Вот некоторые из основных методов работы с DOM:
        1. **Получение элементов**: JavaScript предоставляет различные методы для получения ссылок на элементы веб-страницы, такие как **\`getElementById()\`**, **\`getElementsByClassName()\`**, **\`getElementsByTagName()\`**, **\`querySelector()\`**, **\`querySelectorAll()\`**.
        2. **Изменение содержимого**: С помощью JavaScript можно изменять текстовое содержимое элементов, а также их атрибуты и стили.
        3. **Добавление и удаление элементов**: Можно создавать новые HTML-элементы и добавлять их в документ, а также удалять существующие элементы.
        4. **Обработка событий**: JavaScript позволяет назначать обработчики событий на различные элементы, такие как клики мыши, нажатия клавиш и другие события.
        ##### Пример использования DOM
        \`\`\`html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Пример DOM</title>
        </head>
        <body>
            <div id="container">
                <p>Hello, World!</p>
                <button id="btn">Click me!</button>
            </div>
        
            <script>
                // Получаем ссылку на элемент с id="container"
                const container = document.getElementById('container');
        
                // Изменяем текстовое содержимое элемента <p>
                container.getElementsByTagName('p')[0].textContent = 'Привет, мир!';
        
                // Добавляем обработчик события на кнопку
                const btn = document.getElementById('btn');
                btn.addEventListener('click', function() {
                    alert('Вы нажали кнопку!');
                });
            </script>
        </body>
        </html>
        \`\`\`
        ##### Заключение
        DOM играет важную роль в веб-разработке, позволяя программно взаимодействовать с HTML-документами. Понимание его структуры и основных методов работы с ним является ключевым для создания интерактивных и динамичных веб-приложений с использованием JavaScript.
    `,
   test: [
      {
         question: "Каково значение аббревиатуры DOM?",
         options: [
            {
               answer: "Document Orientation Model",
               isCorrect: false
            },
            {
               answer: "Document Object Model",
               isCorrect: true
            },
            {
               answer: "Data Object Model",
               isCorrect: false
            },
            {
               answer: "Dynamic Object Management",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой из следующих методов JavaScript используется для получения ссылки на элементы веб-страницы по их идентификатору?",
         options: [
            {
               answer: "getElementById()",
               isCorrect: true
            },
            {
               answer: "getElementsByClassName()",
               isCorrect: false
            },
            {
               answer: "getElementsByTagName()",
               isCorrect: false
            },
            {
               answer: "querySelectorAll()",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какие действия можно выполнять с помощью JavaScript в отношении содержимого веб-страницы с использованием DOM?",
         options: [
            {
               answer: "Только чтение содержимого элементов",
               isCorrect: false
            },
            {
               answer: "Только изменение текстового содержимого элементов",
               isCorrect: false
            },
            {
               answer: "Изменение текстового содержимого элементов, атрибутов и стилей, добавление и удаление элементов",
               isCorrect: true
            },
            {
               answer: "Только добавление новых элементов",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой метод JavaScript используется для добавления обработчика событий на элемент?",
         options: [
            {
               answer: "addEventListener()",
               isCorrect: true
            },
            {
               answer: "setEventHandler()",
               isCorrect: false
            },
            {
               answer: "attachEvent()",
               isCorrect: false
            },
            {
               answer: "bindEvent()",
               isCorrect: false
            }
         ]
      },
      {
         question: "Какой элемент является корневым узлом DOM?",
         options: [
            {
               answer: "<body>",
               isCorrect: false
            },
            {
               answer: "<html>",
               isCorrect: true
            },
            {
               answer: "<head>",
               isCorrect: false
            },
            {
               answer: "<document>",
               isCorrect: false
            }
         ]
      }
   ]
}
