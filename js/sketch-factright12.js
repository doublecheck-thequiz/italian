function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    if (check12 == 12) {
      window.open('../an-right.html?q12=' + check12, '_self');
    } else if (check12 < 12) {
      window.open('../an-wrong.html?q12=' + check12, '_self');
    }
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

var check12 = url.searchParams.get("q12");
console.log(check12);
