var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.arc(150,75,30,0,2*Math.PI);
ctx.stroke();
//gctx.fill();

ctx.beginPath();
ctx.moveTo(121,65);
ctx.lineTo(130,15);
ctx.lineTo(140,46);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(179,65);
ctx.lineTo(170,15);
ctx.lineTo(160,46);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 80);
ctx.lineTo(138, 88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 92);
ctx.lineTo(138, 88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(216, 97);
ctx.lineTo(168, 89);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(216, 80);
ctx.lineTo(168, 88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(216, 92);
ctx.lineTo(168, 88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 97);
ctx.lineTo(138, 89);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(148,88);
ctx.quadraticCurveTo(152,100,156,88);
ctx.stroke();

function ParamEllipse(context, x, y, a, b)
{
   //max是等于1除以长轴值a和b中的较大者
   //i每次循环增加1/max，表示度数的增加
   //这样可以使得每次循环所绘制的路径（弧线）接近1像素
   var step = (a > b) ? 1 / a : 1 / b;
   context.beginPath();
   context.moveTo(x + a, y); //从椭圆的左端点开始绘制
   for (var i = 0; i < 2 * Math.PI; i += step)
   {
      //参数方程为x = a * cos(i), y = b * sin(i)，
      //参数为i，表示度数（弧度）
      context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
   }
   context.closePath();
   context.stroke();
};

ParamEllipse(ctx,135, 70, 5, 4);
ParamEllipse(ctx,165, 70, 5, 4);


//yuan
ctx.beginPath();
ctx.arc(135,70,1,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(165,70,1,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(168,98);
ctx.bezierCurveTo(168,120,270,120,270,98);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270,98);
ctx.bezierCurveTo(276,98,276,68,270,68);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270,68);
ctx.bezierCurveTo(270,36,179,36,179,68);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(274,80)
ctx.quadraticCurveTo(285,75,300,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210,135);
ctx.lineTo(202, 114);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(194,136);
ctx.lineTo(198, 114);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(260,135);
ctx.lineTo(250, 110);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(239,135);
ctx.lineTo(246, 110);
ctx.stroke();


