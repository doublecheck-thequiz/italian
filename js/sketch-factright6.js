function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q7.html?q6=' + check6, '_self');
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

var check6 = url.searchParams.get("q6");
console.log(check6);
