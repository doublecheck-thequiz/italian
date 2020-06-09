function preload() {}

function setup() {}

function draw() {
  $('#NEXTW').click(function() {
    window.open('./q/q9.html?q8=' + check8, '_self');
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

var check8 = url.searchParams.get("q8");
console.log(check8);
