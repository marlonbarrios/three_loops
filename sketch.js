// Create a new canvas to the browser size
let canvas;
let title;



function setup() {
 title = createElement('title', 'Time Form 07: Three Loops');

  
  createElement('title', 'Time Form 07: Three Loops');
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}

// Render loop that draws shapes with p5
function draw() {
  // For consistent sizing regardless of portrait/landscape
  const dim = Math.min(width, height);
  clear();


  stroke(0);
  strokeWeight(dim * 0.0025);

  // # of elements we wish to draw based on time
  let sc = second()
  const count = sc;
  
  let mn = minute()
  const countMin = mn;
  
  let hr = hour()
  const countHour = hr;


  // Margin from edge of screen
  const margin = dim * 0.1;
  const innerWidth = (width - margin);
  const diameter = innerWidth / (count * 5);


  for (let i = 0; i < count; i++) {
    const t = count <= 1 ? 0.5 : i / (count - 1);
    const x = lerp(margin, width - margin, t);
    const y = height * 0.25;
    rectMode(CENTER);
    rect(x, y, diameter * 2, diameter * i);
  }

  const diameterMin = innerWidth / (countMin * 3);
  for (let i = 0; i < countMin; i++) {
    const tMin = countMin <= 1 ? 0.5 : i / (countMin - 1);
    const xMin = lerp(margin, width - margin, tMin);
    const yMin = height * 0.50;
    fill(255);
    ellipse(xMin, yMin, diameterMin + mn);
  }

  const diameterHour = innerWidth / (countHour * 3);
  for (let i = 0; i < countHour; i++) {
    const tHour = countHour <= 1 ? 0.5 : i / (countHour - 1);
    const xHour = lerp(margin, width - margin, tHour);
    const yHour = height * 0.75;
    noFill();
    ellipse(xHour, yHour, diameterHour * 3)
  }
}


function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  
  
