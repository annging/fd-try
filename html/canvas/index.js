window.onload = function() {
    // 基础示例
    draw_1();

    // 绘制矩形
    draw_2();

    // 绘制路径
    draw_3();
    draw_3_1();
    draw_3_2();

    // Path2D示例
    draw_4();

    // 使用颜色和样式
    draw_5();
    
        
}

function draw_1() {
    let drawing_1 = document.getElementById("drawing_1"); // 获取DOM对象
    if (drawing_1.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_1.getContext("2d"); // 用来获得渲染上下文和它的绘画功能
        context.fillStyle = 'green';
        context.fillRect(10, 10, 150, 100);

        context.fillStyle = "rgb(200,0,0)";
        context.fillRect (170, 10, 55, 50);

        context.fillStyle = "rgba(0, 0, 200, 0.5)";
        context.fillRect (190, 30, 55, 50);
    } else {
        // canvas-unsupported code here
    }
}

function draw_2() {
    let drawing_2 = document.getElementById("drawing_2"); // 获取DOM对象
    if (drawing_2.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_2.getContext("2d"); // 用来获得渲染上下文和它的绘画功能
        
        context.fillRect(10, 10, 100, 100); // 在(10, 10) 绘制一个 长100px 宽100px的正方形
        context.clearRect(30, 30, 60, 60); // 在(30, 30) 清除一个 60 * 60 的正方形
        context.strokeRect(35+0.5, 35+0.5, 50, 50); // 在(35.5, 35.5)绘制一个 50 * 50的正方形
    } else {
        // canvas-unsupported code here
    }
}

function draw_3() {
    let drawing_3 = document.getElementById("drawing_3"); // 获取DOM对象
    if (drawing_3.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_3.getContext("2d"); // 用来获得渲染上下文和它的绘画功能

        // 绘制三角形
        context.beginPath();
        context.moveTo(75, 60); // 每次beginPath(), 最好总是自己控制笔触位置
        context.lineTo(100, 75);
        context.lineTo(100, 25);
        context.fill(); // 当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。

        // 绘制描边三角形
        context.beginPath();
        context.moveTo(25, 25);
        context.lineTo(95, 25);
        context.lineTo(25, 95);
        context.closePath();
        context.stroke();

        // 绘制笑脸   可以移除moveTo 查看连接的线条
        context.beginPath();
        context.arc(200, 60, 50, 0, Math.PI * 2, true); // 绘制一个圆 中心(200, 60) 半径50 弧度0-360   逆时针
        context.moveTo(235, 60);
        context.arc(200, 60, 35, 0, Math.PI, false); // 逆时针以(200, 60)为中心 从 100，60开始逆时针绘制一个半圆
        context.moveTo(190, 50);
        context.arc(185, 50, 5, 0, Math.PI * 2, true);  // 左眼
        context.moveTo(220, 50);
        context.arc(215, 50, 5, 0, Math.PI * 2, true);  // 右眼
        context.stroke();

        // 绘制圆弧
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                context.beginPath();
                var x = 325 + j * 50; // x 坐标值
                var y = 25 + i * 50; // y 坐标值
                var radius = 20; // 圆弧半径
                var startAngle = 0; // 开始点
                var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
                var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针
      
                context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      
                if (i>1){
                    context.fill();
                } else {
                    context.stroke();
                }
            }
        }

        
    } else {
        // canvas-unsupported code here
    }
}

function draw_3_1() {
    let drawing_3_1 = document.getElementById("drawing_3_1"); // 获取DOM对象
    if (drawing_3_1.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_3_1.getContext("2d"); // 用来获得渲染上下文和它的绘画功能

        // 二次贝塞尔曲线
        context.beginPath();
        context.moveTo(75, 25);
        context.quadraticCurveTo(25, 25, 25, 62.5);
        context.quadraticCurveTo(25, 100, 50, 100);
        context.quadraticCurveTo(50, 120, 30, 125);
        context.quadraticCurveTo(60, 120, 65, 100);
        context.quadraticCurveTo(125, 100, 125, 62.5);
        context.quadraticCurveTo(125, 25, 75, 25);
        context.stroke();

        //三次贝塞尔曲线
        context.beginPath();
        context.moveTo(205, 40);
        context.bezierCurveTo(205, 37, 200, 25, 180, 25);
        context.bezierCurveTo(150, 25, 150, 62.5, 150, 62.5);
        context.bezierCurveTo(150, 80, 170, 102, 205, 120);
        context.bezierCurveTo(240, 102, 260, 80, 260, 62.5);
        context.bezierCurveTo(260, 62.5, 260, 25, 230, 25);
        context.bezierCurveTo(215, 25, 205, 37, 205, 40);
        context.fill();
        
    } else {
        // canvas-unsupported code here
    }
}

function draw_3_2() {
    let drawing_3_2 = document.getElementById("drawing_3_2"); // 获取DOM对象
    if (drawing_3_2.getContext) { // 检查浏览器是否支持
        // drawing code here
        let ctx = drawing_3_2.getContext("2d"); // 用来获得渲染上下文和它的绘画功能
        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

       
        for(var i = 0; i < 8; i++){
        ctx.fillRect(51 + i * 16, 35, 4, 4);
        }
 
        for(i = 0; i < 6; i++){
        ctx.fillRect(115, 51 + i * 16, 4, 4);
        }

        for(i = 0; i < 8; i++){
        ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();
        

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function draw_4() {
    let drawing_4 = document.getElementById("drawing_4"); // 获取DOM对象
    if (drawing_4.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_4.getContext("2d"); // 用来获得渲染上下文和它的绘画功能
        
        // path2D示例
        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        context.stroke(rectangle);
        context.fill(circle);


        // 使用SVG data
        let p = new Path2D('M150 10 h 80 v 80 h -80 Z');
        context.fill(p);

        // 使用addPath()
        var p1 = new Path2D();
        p1.rect(0,100,100,100);

        var p2 = new Path2D();
        p2.rect(0,100,100,100);

        var m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(); // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElementNS
        m.a = 1; m.b = 0;
        m.c = 0; m.d = 1;
        m.e = 300; m.f = 0;

        p1.addPath(p2, m);
        context.fill(p1);

    } else {
        // canvas-unsupported code here
    }
}

function draw_5() {
    let drawing_5 = document.getElementById("drawing_5"); // 获取DOM对象
    if (drawing_5.getContext) { // 检查浏览器是否支持
        // drawing code here
        let context = drawing_5.getContext("2d");

        // 用颜色填充矩形
        for (var i=0;i<6;i++){
            for (var j=0;j<6;j++){
                context.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                               Math.floor(255-42.5*j) + ',0)';
                context.fillRect(j*25,i*25,25,25);
            }
        }

        // 用颜色描边原型
        for (var i=0;i<6;i++){
            for (var j=0;j<6;j++){
                context.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                               Math.floor(255-42.5*j) + ')';
                context.beginPath();
                context.arc(160+12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
                context.stroke();
            }
        }


        // 透明度
        // 画背景
        context.fillStyle = '#FD0';
        context.fillRect(320,0,75,75);
        context.fillStyle = '#6C0';
        context.fillRect(395,0,75,75);
        context.fillStyle = '#09F';
        context.fillRect(320,75,75,75);
        context.fillStyle = '#F30';
        context.fillRect(395,75,75,75);
        context.fillStyle = '#FFF';

        // 设置透明度值
        context.globalAlpha = 0.2;

        // 画半透明圆
        for (var i=0;i<7;i++){
            context.beginPath();
            context.arc(395,75,10+10*i,0,Math.PI*2,true);
            context.fill();
        }
    } else {

    }

}

function roundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.quadraticCurveTo(x, y + height, x + radius, y + height);
    context.lineTo(x + width - radius, y + height);
    context.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    context.lineTo(x + width, y + radius);
    context.quadraticCurveTo(x + width, y, x + width - radius, y);
    context.lineTo(x + radius, y);
    context.quadraticCurveTo(x, y, x, y + radius);
    context.stroke();
}