window.onload = function() {
    draw_1();
    draw_2();
    draw_3();
    draw_4();
    draw_5();
}

function draw_1() {
    var context = document.getElementById('drawing_1').getContext('2d');
  
    context.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
    context.save();                  // 保存默认状态
  
    context.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
    context.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
  
    context.save();                  // 保存当前状态
    context.fillStyle = '#FFF'       // 再次改变颜色配置
    context.globalAlpha = 0.5;
    context.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
  
    context.restore();               // 重新加载之前的颜色状态
    context.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
  
    context.restore();               // 加载默认颜色配置
    context.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形
  }

  function draw_2() {
    var context = document.getElementById('drawing_2').getContext('2d');
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            context.save();
            context.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            context.translate(10 + j * 50, 10 + i * 50);
            context.fillRect(0, 0, 25, 25);
            context.restore();
        }
    }
}

function draw_3() {
    var context = document.getElementById('drawing_3').getContext('2d');
    context.translate(75,75);
  
    for (var i=1;i<6;i++){ // Loop through rings (from inside to out)
        context.save();
        context.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
  
        for (var j=0;j<i*6;j++){ // draw individual dots
            context.rotate(Math.PI*2/(i*6));
            context.beginPath();
            context.arc(0,i*12.5,5,0,Math.PI*2,true);
            context.fill();
        }
  
        context.restore();
    }
}
function draw_4() {
    var context = document.getElementById('drawing_4').getContext('2d');
  
    // draw a simple rectangle, but scale it.
    context.save();
    context.scale(10, 3);
    context.fillRect(1, 10, 10, 10);
    context.restore();
    context.fillRect(1, 10, 10, 10);
  
    // mirror horizontally
    context.scale(-1, 1);
    context.font = '48px serif';
    context.fillText('MDN', -135, 120);
}
function draw_5() {
    var context = document.getElementById('drawing_5').getContext('2d');
  
    var sin = Math.sin(Math.PI/6);
    var cos = Math.cos(Math.PI/6);
    context.translate(100, 100);
    var c = 0;
    for (var i=0; i <= 12; i++) {
      c = Math.floor(255 / 12 * i);
      context.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
      context.fillRect(0, 0, 100, 10);
      context.transform(cos, sin, -sin, cos, 0, 0);
    }
  
    context.setTransform(-1, 0, 0, 1, 100, 100);
    context.fillStyle = "rgba(255, 128, 255, 0.5)";
    context.fillRect(0, 50, 100, 100);
  }