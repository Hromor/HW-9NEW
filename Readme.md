### Инструкция по установке и запуску проекта

<br/>

1. Создать удалённый репозиторий
2. Склонировать репозиторий на локальный диск
3. Инициализируем проект: `npm init`
4. Устанавливаем пакет npm: `npm install - -save-dev jest`
5. В файле package.json в свойстве "test" прописываем "jest"
6. Создаём файл .gitignore, в котором прописываем `**/node_modules`, чтобы папка не попала на удалённые репозиторий
7. В файле, который содержит проверяемую функцию, прописать `module.exports = имя функции`
8. Создать файл для проверок, в котором прописать `const example = require("./hw-9-2")`, где "example" - название функции, а "./hw-9-2" - адрес файла из шага №6
9. Создать проверки, используя формат:

```sh
describe('Name of test suite', () => {
it('Name of test', () => {
expect(function(arguments)).toEqual(expected); });
})
//
describe — метод Jest, который содержит в себе тест или наборы тестов,
принимает на вход два аргумента: название набора тестов и callbackфункцию
//
it/test — метод, содержащий в себе отдельный тест, принимает на вход два
аргумента: название теста и callback-функцию
```

10. Проверки запускаем командой `npm run test`
