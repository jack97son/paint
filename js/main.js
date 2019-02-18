var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
let cw = canvas.width = 1000;
let ch = canvas.height = 700;
var color = 'black';
var size = 5;

function pencil() {
  size = 5;
  color = 'black';
}

function eraser() {
  size = 20;
  color = 'white';
}

function oMousePosScaleCSS(canvas, evt) {
  let ClientRect = canvas.getBoundingClientRect(), 
      scaleX = canvas.width / ClientRect.width,
      scaleY = canvas.height / ClientRect.height; 
      return {
        x: (evt.clientX - ClientRect.left) * scaleX, 
        y: (evt.clientY - ClientRect.top) * scaleY 
      }
}

let last = {}

canvas.addEventListener("mousedown", (e)=>{

  m = oMousePosScaleCSS(canvas, e);

  last.x = m.x;
  last.y = m.y;
  
});

canvas.addEventListener("mouseup", (e)=>{
  last={}
});

canvas.addEventListener("mousemove", (e)=>{
  if(last.x){
    m = oMousePosScaleCSS(canvas, e)

    ctx.strokeStyle = color;
    ctx.moveTo(last.x,last.y);
    ctx.lineTo(m.x,m.y);
    ctx.stroke();
    
    last.x = m.x;
    last.y = m.y;
    
  }
  
});

function createRectangle() {

  let x1 = document.getElementById('cx-rectangle1').value;
  let y1 = document.getElementById('cy-rectangle1').value;
  let x2 = document.getElementById('cx-rectangle2').value;
  let y2 = document.getElementById('cy-rectangle2').value;

  x2 = x2 - x1;
  y2 = y2 - y1;

  ctx.fillStyle = color;
  ctx.strokeRect(x1, y1, x2, y2);
}

function createLine() {
  let x1 = document.getElementById('cx-line1').value;
  let y1 = document.getElementById('cy-line1').value;
  let x2 = document.getElementById('cx-line2').value;
  let y2 = document.getElementById('cy-line2').value;

  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function colorPick() {
  color = document.getElementById("colorPick").value;
}








/*// Start painting with paint bucket tool starting from pixel specified by startX and startY
    paintAt = function (startX, startY) {

      var pixelPos = (startY * canvasWidth + startX) * 4,
        r = colorLayerData.data[pixelPos],
        g = colorLayerData.data[pixelPos + 1],
        b = colorLayerData.data[pixelPos + 2],
        a = colorLayerData.data[pixelPos + 3];

      if (r === curColor.r && g === curColor.g && b === curColor.b) {
        // Return because trying to fill with the same color
        return;
      }

      if (matchOutlineColor(r, g, b, a)) {
        // Return because clicked outline
        return;
      }

      floodFill(startX, startY, r, g, b);

      redraw();
    },

    // Add mouse event listeners to the canvas
    createMouseEvents = function () {

      $('#canvas').mousedown(function (e) {
        // Mouse down location
        var mouseX = e.pageX - this.offsetLeft,
          mouseY = e.pageY - this.offsetTop;

        if (mouseX < drawingAreaX) { // Left of the drawing area
          if (mouseX > swatchStartX) {
            if (mouseY > swatchStartY && mouseY < swatchStartY + swatchImageHeight) {
              curColor = colorPurple;
              redraw();
            } else if (mouseY > swatchStartY + swatchImageHeight && mouseY < swatchStartY + swatchImageHeight * 2) {
              curColor = colorGreen;
              redraw();
            } else if (mouseY > swatchStartY + swatchImageHeight * 2 && mouseY < swatchStartY + swatchImageHeight * 3) {
              curColor = colorYellow;
              redraw();
            } else if (mouseY > swatchStartY + swatchImageHeight * 3 && mouseY < swatchStartY + swatchImageHeight * 4) {
              curColor = colorBrown;
              redraw();
            }
          }
        } else if ((mouseY > drawingAreaY && mouseY < drawingAreaY + drawingAreaHeight) && (mouseX <= drawingAreaX + drawingAreaWidth)) {
          // Mouse click location on drawing area
          paintAt(mouseX, mouseY);
        }
      });
    },*/