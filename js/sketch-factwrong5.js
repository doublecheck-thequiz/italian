function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q6.html?q5=' + check5, '_self');
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

var check5 = url.searchParams.get("q5");
console.log(check5);
