let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  var risulFin = parseInt(check12, 10);
  $( "#parag" ).text( "Result: " + risulFin +  "/12" );

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

var check12 = url.searchParams.get("q12")

console.log(check12);
