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
    draw_6();
    draw_6_2();

    // 使用虚线
    // draw_7();

    // 渐变
    draw_8();
    draw_8_2();

    // pattern
    draw_9();

    // 阴影
    draw_10();

    // 填充规则
    draw_11();

    // 绘制文本
    draw_12();

    // 使用图像
    draw_13();

    let reRenderMiterLimit = document.getElementById("reRenderMiterLimit");
    reRenderMiterLimit.addEventListener('click', event => {
        draw_6_2();
    })
    
        
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

function draw_6() {
    let drawing_6 =  document.getElementById("drawing_6");
    if (drawing_6.getContext) {
        let context = drawing_6.getContext("2d");

        // 不清楚的线
        for (let i =0; i < 10; i++) {
            context.lineWidth = 1 + i;
            context.beginPath();
            
            context.moveTo(5 + i * 14, 5);
            context.lineTo(5 + i * 14, 140);
            
            context.stroke();
        }
        
        // 比较清楚的线
        for (let i =0; i < 10; i++) {
            context.lineWidth = 1 + i;
            context.beginPath();
            if ( i % 2 === 0) { // 奇数行 lineWidth 1+i 是奇数
                context.moveTo(155 + 0.5 + i * 14, 5);
                context.lineTo(155 + 0.5 + i * 14, 140);
            } else {
                context.moveTo(155 + i * 14, 5);
                context.lineTo(155 + i * 14, 140);
            }
            context.stroke();
        }

        // lineCap
        let lineCap = ['butt', 'round', 'square'];

        context.strokeStyle = "#09f";
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(10, 160);
        context.lineTo(40, 160);
        context.moveTo(10, 290);
        context.lineTo(40, 290);
        context.stroke();

        context.strokeStyle = "black";
        for (let i = 0; i < lineCap.length; i++) {
            context.lineWidth = 15;
            context.lineCap = lineCap[i];
            context.beginPath();
            context.moveTo(25 + i * 50, 160);
            context.lineTo(25 + i * 50, 290);
            context.stroke();
        }


        // lineJoin
        let lineJoin = ['round', 'bevel', 'miter'];
        context.width = 10;
        for (let i = 0; i< lineJoin.length; i++) {
            context.lineJoin = lineJoin[i];
            context.beginPath();
            context.moveTo(150, 165 + i * 40);
            context.lineTo(190, 205 + i* 40);
            context.lineTo(230, 165 + i * 40);
            context.lineTo(270, 205 + i * 40);
            context.lineTo(310, 165 + i * 40);
            context.stroke();
        }


    } else {

    }
}

function draw_6_2() {
    let drawing_6_2 =  document.getElementById("drawing_6_2");
    if (drawing_6_2.getContext) {
        let context = drawing_6_2.getContext("2d");

        context.clearRect(0, 0, 400, 150);

        // 绘制参考线
        context.strokeStyle = '#09f';
        context.lineWidth   = 2;
        context.strokeRect(-5, 50, 410, 50);

        // 设置线条样式
        context.strokeStyle = '#808080';
        context.lineWidth = 10;

        // 检查输入
        if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
            context.miterLimit = parseFloat(document.getElementById('miterLimit').value);
        } else {
            alert('Value must be a positive number');
        }

        // 绘制线条
        context.beginPath();
        context.moveTo(0, 100);
        for (i = 0; i < 32 ; i++) {
            var dy = i % 2 == 0 ? 25 : -25;
            context.lineTo(Math.pow(i, 1.5) * 2, 75 + dy); // Math.pow 返回 i的1.5次幂
        }
        context.stroke();
        // 对比线条
        context.strokeStyle = 'red';
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(0, 100);
        for (i = 0; i < 32 ; i++) {
            var dy = i % 2 == 0 ? 25 : -25;
            context.lineTo(Math.pow(i, 1.5) * 2, 75 + dy); // Math.pow 返回 i的1.5次幂
        }
        
        context.stroke();
        return false;
    }
}

let offset_7 = 0;
let drawing_7 =  document.getElementById("drawing_7");
let context_7 = drawing_7.getContext("2d");


function draw_7_1() {
    context_7.clearRect(0, 0, drawing_7.width, drawing_7.height);

    context_7.setLineDash([14, 5]);
    context_7.lineDashOffset = -offset_7;
    context_7.strokeRect(10,10, 100, 100);
}

function march_7() {
    offset_7++;
    if (offset_7 > 16) {
        offset_7 = 0;
    }
    draw_7_1();
    setTimeout(march_7, 200)
}

march_7();

let offset_7_2 = 0;
let drawing_7_2 =  document.getElementById("drawing_7_2");
let context_7_2 = drawing_7_2.getContext("2d");


function draw_7_2() {
    context_7_2.clearRect(0, 0, drawing_7_2.width, drawing_7_2.height);

    context_7_2.setLineDash([14, 5]);
    context_7_2.lineDashOffset = -offset_7_2;
    context_7_2.strokeRect(10,10, 100, 100);
}

function march_7_2() {
    offset_7_2++;
    if (offset_7_2 > 13) {
        offset_7_2 = 0;
    }
    draw_7_2();
    setTimeout(march_7_2, 1000)
}

march_7_2();


function draw_8() {
    let drawing_8 =  document.getElementById("drawing_8");
    if (drawing_8.getContext) {
        let context = drawing_8.getContext("2d");

        // Create gradients
        var lingrad = context.createLinearGradient(0,0,0,150);
        lingrad.addColorStop(0, '#00ABEB');
        lingrad.addColorStop(0.5, '#fff');
        lingrad.addColorStop(0.5, '#26C000');
        lingrad.addColorStop(1, '#fff');

        var lingrad2 = context.createLinearGradient(0,50,0,95);
        lingrad2.addColorStop(0.5, '#000');
        lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

         // assign gradients to fill and stroke styles
        context.fillStyle = lingrad;
        context.strokeStyle = lingrad2;

        // draw shapes
        context.fillRect(10,10,130,130);
        context.strokeRect(50,50,50,50);
    }
}

function draw_8_2() {
    let drawing_8_2 =  document.getElementById("drawing_8_2");
    if (drawing_8_2.getContext) {
        let context = drawing_8_2.getContext("2d");

        // 创建渐变
        var radgrad = context.createRadialGradient(45,45,10,52,50,30);
        radgrad.addColorStop(0, '#A7D30C');
        radgrad.addColorStop(0.9, '#019F62');
        radgrad.addColorStop(1, 'rgba(1,159,98,0)');

        var radgrad2 = context.createRadialGradient(105,105,20,112,120,50);
        radgrad2.addColorStop(0, '#FF5F98');
        radgrad2.addColorStop(0.75, '#FF0188');
        radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

        var radgrad3 = context.createRadialGradient(95,15,15,102,20,40);
        radgrad3.addColorStop(0, '#00C9FF');
        radgrad3.addColorStop(0.8, '#00B5E2');
        radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

        var radgrad4 = context.createRadialGradient(0,150,50,0,140,90);
        radgrad4.addColorStop(0, '#F4F201');
        radgrad4.addColorStop(0.8, '#E4C700');
        radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

        // 画图形
        context.fillStyle = radgrad4;
        context.fillRect(0,0,150,150);
        context.strokeRect(0,0,150,150);
        context.fillStyle = radgrad3;
        context.fillRect(0,0,150,150);
        context.fillStyle = radgrad2;
        context.fillRect(0,0,150,150);
        context.fillStyle = radgrad;
        context.fillRect(0,0,150,150);
    }
}

function draw_9() {
    let drawing_9 =  document.getElementById("drawing_9");
    if (drawing_9.getContext) {
        let context = drawing_9.getContext("2d");

        var img = new Image();
        img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
        img.onload = function() {

            // 创建图案
            var ptrn = context.createPattern(img, 'repeat');
            context.fillStyle = ptrn;
            context.fillRect(0, 0, 150, 150);

        }
    }
}

function draw_10() {
    let drawing_10 =  document.getElementById("drawing_10");
    if (drawing_10.getContext) {
        let context = drawing_10.getContext("2d");

        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowBlur = 2;
        context.shadowColor = "rgba(0, 0, 0, 0.5)";

        context.font = "20px Times New Roman";
        context.fillStyle = "Black";
        context.fillText("Sample String", 5, 30);
    }
}

function draw_11() {
    let drawing_11 =  document.getElementById("drawing_11");
    if (drawing_11.getContext) {
        let context = drawing_11.getContext("2d");

        context.beginPath();
        context.arc(50, 50, 30, 0, Math.PI*2, true);
        context.arc(50, 50, 15, 0, Math.pi *2, true);
        context.fill();

        context.beginPath();
        context.arc(150, 50, 30, 0, Math.PI*2, true);
        context.arc(150, 50, 15, 0, Math.PI*2, true);
        context.fill("evenodd");
    }
}
function draw_12() {
    let drawing_12 =  document.getElementById("drawing_12");
    if (drawing_12.getContext) {
        let context = drawing_12.getContext("2d");

        context.font="48px serif";
        context.fillText("hello world", 10, 50);
        context.strokeText("Hello world", 10, 100);

        context.textBaseLine = "hanging";
        context.strokeRect(300, 0, 200,100);
        context.strokeText("hello", 300, 100);
        context.textBaseLine = "middle";
        context.strokeText("hello", 300, 100);
    }
}
function draw_13() {
    let drawing_13 =  document.getElementById("drawing_13");
    if (drawing_13.getContext) {
        let context = drawing_13.getContext("2d");

        var img = new Image();
        img.onload = function(){
            context.drawImage(img,0,0);
            context.beginPath();
            context.moveTo(30,96);
            context.lineTo(70,66);
            context.lineTo(103,76);
            context.lineTo(170,15);
            context.stroke();
        }
        img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';

        var img1 = new Image();
        img1.onload = function() {
            for (let i = 0; i < 4; i++) {
                for (let j =0; j < 3; j++) {

                    context.drawImage(img1,200 +j*50, i*38,50,38);
                }
            }
        }
        img1.src="https://mdn.mozillademos.org/files/5397/rhino.jpg";

        // Draw slice
        context.drawImage(document.getElementById('source'),
        33,71,104,124,421,20,87,104);

        // Draw frame
        context.drawImage(document.getElementById('frame'),400,0);
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