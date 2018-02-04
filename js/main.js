
// Mouseovers and mouseleaves when someone hovers over the 6 colored buttons, event.target makes sure only the selected button will be bordered

$('.button').mouseover(function(event) {
    $(event.target).addClass('button-border');
});

$('.button').mouseleave(function(event) {
    $(event.target).removeClass('button-border');
});

var square = $(".square");

// Color shuffler
function shuffle(colors) {
    var m = colors.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = colors[m];
      colors[m] = colors[i];
      colors[i] = t;
    }
    return colors;
}

var colors = [ "#071A52", "#086972", "#E59D28", "#A7FF83", "#F8FF83", "#F86583"];
colors = shuffle(colors);
console.log(colors);

// Fill the 196 squares with one of the six colors
for (var i = 0; i < square.length; i++ ) {
    console.log(square.length);
        $(square[i]).css('background-color', colors[i%colors.length])
    };

// Upon each 'drench', make sure that the number of trials is decreased by 1
$("#color-board").on('click', decreaseTrials)

function decreaseTrials () {
    var startNumber = $("#number").html();
    var endNumber = 0;
    startNumber --
    //for (var number = startNumber; number >= endNumber; number --) {
        if (startNumber >= endNumber ) {
        $("#number").html(startNumber);
        console.log(startNumber);
        } else $('#game-over').removeClass('hidden');
}

// Once the reset-button is clicked, make sure that:

$('#reset-btn').on('click', resetGame)
// 1/2. The number of trials is reset to 30

function resetGame() {
    $("#number").html(30);

// 2/2. The 196 squares are randomly filled with one of six colors

for (var i = 0; i < square.length; i++ ) {
    console.log(square.length);
        //$(square[i]).css('background-color', randomColor[i]);
        shuffle(colors);
        $(square[i]).css('background-color', colors[i%colors.length])
        $("#game-over").addClass('hidden');
    };
};

// Fill the first square once game starts

$('#color2').on('click', fillSquare)
function fillSquare() {
$('.square-1').css('background-color', "#086972");
$('.square-1').addClass('drenched');
}

// Fill the rest of the squares


