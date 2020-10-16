// Открытие/закрытие окна настройки персонажа
let setupOpen = document.querySelector('.setup-open');
let setup = document.querySelector('.setup');
let setupClose = document.querySelector('.setup-close');
let input =document.getElementById('username');

setupOpen.onclick = openSetup;// Открытие окна по клику на иконку пользователя
setupClose.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){closeSetup()}
});
setupClose.onclick = closeSetup;// Закрытие окна по клику на крестик
setupOpen.addEventListener('keyup', popupKeyPress);// Обработчик нажатия клавиш
console.log(input.onfocus);
//Функция открытия окна настроек
function openSetup(){
    setup.classList.remove('hidden');
}
// Функция закрытия окна настроек
function closeSetup(){
    setup.classList.add('hidden');
}
// Функция открытия-закрытия окна по нажатию клавиш
function popupKeyPress(e) {
    if (setup.classList.value.indexOf('hidden') !== -1){
        if (e.key === 'Enter'){
            openSetup();
        }
    } else {
        if (e.key === 'Escape') {
            closeSetup();
        }
    }
    return false;
}

// Вторая задача
let wizards = [firstWizard = {}, secondWizard = {}, thirdWizard = {}, fourthWizard = {}];
let firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let colorsForCoat = [
    'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
];
let colorsForEyes = ['black', 'red', 'blue', 'yellow', 'green'];
//Передаём случайное свойство и удаляем его их массива
let index = 0;
function randomChoose(storage, key = true){
    if (key){
        index = Math.floor(Math.random() * storage.length);
    }

    return storage.splice(index, 1)[0];
}
//Добавляем свойства каждому волшебнику
for (let i = 0; i < wizards.length; i++){
    wizards[i].name = randomChoose(firstNames) + ' ' + randomChoose(lastNames,false);
    wizards[i].coatColor = randomChoose(colorsForCoat);
    wizards[i].eyesColor = randomChoose(colorsForEyes);
}

//Задача 3
//Получаем элемент с классом "setup-similar-item" из шаблона с id - "similar-wizard-template"
let template = document.getElementById('similar-wizard-template')
    .content.querySelector('.setup-similar-item');
//Создам список изменений в HTML код свойств персонажей
let drawWizard = [];
for (let i = 0; i < wizards.length; i++){
    let wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    drawWizard.push(wizardElement);
}

//Задача 4
//Получаем элемент с классом "setup-similar-list"
let similarListElement = document.querySelector('.setup-similar-list');
//И записываем в него изменённый персонажей
for (let i = 0; i < wizards.length; i++){
    similarListElement.appendChild(drawWizard[i]);
}
//Задание 4-3. Меняем цвет пальто на случайный по нажатию
const randomCoatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

let userCoat = document.querySelector('.wizard-coat');
userCoat.setAttribute('style', 'cursor:pointer');
userCoat.onclick = changeCoatColor;

function changeCoatColor(obj) {
    let color = randomCoatColor[Math.floor(Math.random() * randomCoatColor.length)];
    obj.target.setAttribute('style', 'fill:' + color + '; cursor:pointer');
}


//TODO: Продолжить проект и изучить "querySelector"