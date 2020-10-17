var raindrops = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  if(frameCount % 1 === 0){
    var raindrop = new Drop(random(0, windowWidth), -100, 5, 50);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(7);
    raindrops[i].display();
  }
}