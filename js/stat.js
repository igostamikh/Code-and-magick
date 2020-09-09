window.renderStatistics =  function (ctx, names, times) {
   let x = 100; //Позиция холста по горизонтали
   let y = 10; //Позиция холста по вертикали
   let verticalNamePosition = y + 250;
   let verticalTimePosition = y + 220;
   const startPosition = x + 40; //Начальная позиция столбца
   const step = 90; //Расстояние между столбцами
   let position;
   //Вычисляем высоту столбца и добавляем в массив
   let height = [];
   let highTime = Math.max.apply(null, times); //Наихудшее время
   const heightCoefficient = Math.round(highTime / 150); //коэфициент высоты колонки гистограммы
   for (let i = 0; i < times.length; i++){
      height.push(times[i] / heightCoefficient);
   }
   //Перемещаю текущего игрока в начало массива
   let index;
   for (let i = 0; i < names.length; i++) {
      if (names[i] === "Вы"){
         index = i;
      }
   }
   names.unshift(names.splice(index, 1)[0]);
   times.unshift(times.splice(index, 1)[0]);
   //Определение прозрачности
   function opacity(){
      let value = Math.random();
      return  value <= 0.1 ? 1 : value;
   }
   //Отписовка тени
   ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
   ctx.fillRect(x + 10, y + 10, 420, 270);

   //Отрисовка холста
   ctx.fillStyle = 'white';
   ctx.fillRect(x, y, 420, 270);

   //Гистограммы
   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   position = startPosition; //Позиция столбца
   for (let i = 0; i < times.length; i++){
      ctx.fillRect(position, y + 240 - height[i], 40, height[i]);
      ctx.fillStyle = `rgba(0, 0, 255, ${opacity()})`;
      position += step;
   }

   //Massages
   ctx.font = '16px "PT Mono"';
   ctx.textBaseline = 'hanging';
   ctx.fillStyle = 'black';

   ctx.fillText('Ура вы победили!', x + 60, y + 10);
   ctx.fillText('Список результатов:', x + 50 , y + 30);


   position = startPosition; //Позиция столбца
   for (let i = 0; i < names.length; i++){
      ctx.fillText(names[i], position, verticalNamePosition);//Вывод имён игроков
      ctx.fillText(Math.round(times[i]).toString(), position, verticalTimePosition - height[i]);//Вывод временных результатов
      position += step;
   }
};

