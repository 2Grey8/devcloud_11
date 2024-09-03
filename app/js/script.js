let line = document.getElementById("line");

let ctx = line.getContext('2d');

   line.height = 2080;

   line.width  = 240;

   ctx.beginPath();

   ctx.moveTo(40, 140);

   ctx.strokeStyle = '#017B65';
   ctx.lineWidth = '2';

   ctx.lineTo(40, 340);
   ctx.lineTo(70, 370);
   ctx.lineTo(40, 400);
   ctx.lineTo(40, 685);
   ctx.lineTo(10, 715);
   ctx.lineTo(40, 745);
   ctx.lineTo(40, 1030);
   ctx.lineTo(70, 1060);
   ctx.lineTo(40, 1090);
   ctx.lineTo(40, 1367);
   ctx.lineTo(10, 1397);
   ctx.lineTo(40, 1427);
   ctx.lineTo(40, 1695);
   ctx.lineTo(70, 1725);
   ctx.lineTo(40, 1755);
   ctx.lineTo(40, 1960);

   ctx.stroke(); // *22
