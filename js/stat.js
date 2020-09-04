window.renderStatistics =  function (ctx, names, times) {
   let x = 100;
   let y = 10;
   let verticalNamePosition = y + 250;
   let verticalTimePosition = y + 220;
   let highTime = Math.max.apply(null, times);
   const heightCoefficient = Math.round(highTime / 150);
   //Перемещаю себя в начало массива
   let index;
   for (let i = 0; i < names.length; i++) {
      if (names[i] === "Вы"){
         index = i;
      }
   }
   names.splice(0, 0, names.splice(index, 1)[0]);
   times.splice(0, 0, times.splice(index, 1)[0]);
   //Определение прозрачности
   function opacity(){
      let value = Math.random();
      return  value === 0 ? 0.1 : value;
   }
   //Отписовка тени
   ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
   ctx.fillRect(x + 10, y + 10, 420, 270);

   //Отрисовка холста
   ctx.fillStyle = 'white';
   ctx.fillRect(x, y, 420, 270);

   //Гистограммы
   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   ctx.fillRect(x + 40, y + 240 - times[0] / heightCoefficient, 40, times[0] / heightCoefficient);
   ctx.fillStyle = 'rgba(0, 0, 255, ' +  opacity() + ')';
   ctx.fillRect(x + 130, y + 240 - times[1] / heightCoefficient, 40, times[1] / heightCoefficient);
   ctx.fillStyle = 'rgba(0, 0, 255, ' +  opacity() + ')';
   ctx.fillRect(x + 220, y + 240 - times[2] / heightCoefficient, 40, times[2] / heightCoefficient);
   ctx.fillStyle = 'rgba(0, 0, 255, ' +  opacity() + ')';
   ctx.fillRect(x + 310, y + 240 - times[3] / heightCoefficient, 40, times[3] / heightCoefficient);

   //Massage
   ctx.font = '16px "PT Mono"';
   ctx.textBaseline = 'hanging';
   ctx.fillStyle = 'black';

   ctx.fillText('Ура вы победили!', x + 60, y + 10);
   ctx.fillText('Список результатов:', x + 50 , y + 30);

   //Вывод имён игроков
   ctx.fillText(names[0], x + 40, verticalNamePosition);
   ctx.fillText(names[1], x + 130, verticalNamePosition);
   ctx.fillText(names[2], x + 220, verticalNamePosition);
   ctx.fillText(names[3], x + 310, verticalNamePosition);

//   Вывод временных результатов
   ctx.fillText(Math.round(times[0]), x + 40, verticalTimePosition - times[0] / heightCoefficient);
   ctx.fillText(Math.round(times[1]), x + 130, verticalTimePosition - times[1] / heightCoefficient);
   ctx.fillText(Math.round(times[2]), x + 220, verticalTimePosition - times[2] / heightCoefficient);
   ctx.fillText(Math.round(times[3]), x + 310, verticalTimePosition - times[3] / heightCoefficient);
};

