let drawing = document.getElementById("drawing_grid");

if (drawing.getContext) {
    let context = drawing.getContext("2d");

    // 绘制表格
    context.lineWidth = 0.5;
    context.strokeStyle = "#ddd";
    context.strokeRect(0, 0, 480, 360);
    context.beginPath();          
    for (let i = 0.5; i < drawing.width; i += 60) {
        context.moveTo(i, 0);
        context.lineTo(i, drawing.height);
    }
    for (let y = 0.5; y < drawing.height; y += 60) {
        context.moveTo(0, y);
        context.lineTo(drawing.width, y);
    }

    context.lineWidth = 0.5;
    context.stroke();

    // 绘制矩形  容器
    context.strokeStyle = "#ea6227";
    context.lineWidth = 2;
    context.strokeRect(0, 0, 480, 360);
    context.fillStyle = "#ea6227";
    context.fillRect(0, 0, 50, 24);

    context.font = "13px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText("容器", 25, 12);


    // 绘制行和列
    context.fillStyle = "#b9ebcc";
    context.fillRect(1, 60, drawing.width -2, 60);
    context.fillRect(360, 1, 60, drawing.height -2);
    context.fillStyle = "black";
    context.fillText("行", drawing.width / 2, 90);
    context.fillText("列", 390, drawing.height / 2 - 30);

    // 绘制部分网格
    context.beginPath();  
    context.moveTo(120 + 0.5, 0);
    context.lineTo(120, drawing.height);
    context.moveTo( 0.5, 180);
    context.lineTo(drawing.width, 180);
    context.lineWidth = 0.5;
    context.strokeStyle = "#342ead";
    context.stroke();
    context.fillStyle = "#342ead";
    context.fillRect(120, 180, 60, 24);
    context.fillStyle = "white";
    context.fillText("网格线", 150, 192);
    
    

    // 绘制单元格
    context.fillStyle = "#f2a51a";
    context.fillRect(240, 240, 60, 60);
    context.fillStyle = "white";
    context.fillText("单元格", 270, 270);






}

