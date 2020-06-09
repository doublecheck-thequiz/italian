function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q4.html?q3=' + check3, '_self');
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

var check3 = url.searchParams.get("q3");
console.log(check3);
