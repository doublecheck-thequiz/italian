function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q12.html?q11=' + check11, '_self');
  });

  if(frameCount >= 21000){ //more or less after 3 minutes
    backHome();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function backHome(){
  window.open('../index.html', '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check11 = url.searchParams.get("q11");
console.log(check11);
