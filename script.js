// Moment takes the current time
var today = moment();
// Current hour of the day in 24 hr time
var hour = today.format('H');

$("#currentDay").text(today.format('dddd, Do [of] MMMM YYYY'));

var slot9 = $('#slot9');
var text9 = $('#todo9');
// Saves event in local storage
text9.attr('value', localStorage.getItem('todo9'));
// Changes colour based on current hour
if (hour<9){
    slot9.attr('class', "bg-success text-white");
    textt9.attr('class', "bg-success text-white");
} else if (hour==9){
    slot9.attr('class', "bg-danger text-white");
    text9.attr('class', "bg-danger text-white");
} else {
    slot9.attr('class', "bg-secondary text-white");
    text9.attr('class', "bg-secondary text-white");
}

// 
function button9(event) {
    event.preventDefault();
    var todo9 = $('input[name="todo9"]').val();
    localStorage.setItem('todo9', todo9);
}

slot9.on('submit', button9);

var slot10 = $('#slot10');
var text10 = $('#todo10');
text10.attr('value', localStorage.getItem('todo10'));
if (hour<10){
    slot10.attr('class', "bg-success text-white");
    text10.attr('class', "bg-success text-white");
} else if (hour==10){
    slot10.attr('class', "bg-danger text-white");
    text10.attr('class', "bg-danger text-white");
} else {
    slot10.attr('class', "bg-secondary text-white");
    text10.attr('class', "bg-secondary text-white");
}

function button10(event) {
    event.preventDefault();
    var todo10 = $('input[name="todo10"]').val();
    localStorage.setItem('todo10', todo10);
}

slot10.on('submit', button10);

var slot11 = $('#slot11');
var text11 = $('#todo11');
text11.attr('value', localStorage.getItem('todo11'));
if (hour<11){
    slot11.attr('class', "bg-success text-white");
    text11.attr('class', "bg-success text-white");
} else if (hour==11){
    slot11.attr('class', "bg-danger text-white");
    text11.attr('class', "bg-danger text-white");
} else {
    slot11.attr('class', "bg-secondary text-white");
    text11.attr('class', "bg-secondary text-white");
}

function button11(event) {
    event.preventDefault();
    var todo11 = $('input[name="todo11"]').val();
    localStorage.setItem('todo11', todo11);
}

slot11.on('submit', button11);

var slot12 = $('#slot12');
var text12 = $('#todo12');
text12.attr('value', localStorage.getItem('todo12'));
if (hour<12){
    slot12.attr('class', "bg-success text-white");
    text12.attr('class', "bg-success text-white");
} else if (hour==12){
    slot12.attr('class', "bg-danger text-white");
    text12.attr('class', "bg-danger text-white");
} else {
    slot12.attr('class', "bg-secondary text-white");
    text12.attr('class', "bg-secondary text-white");
}

function button12(event) {
    event.preventDefault();
    var todo12 = $('input[name="todo12"]').val();
    localStorage.setItem('todo12', todo12);
}

slot12.on('submit', button12);

var slot13 = $('#slot13');
var text13 = $('#todo13');
text13.attr('value', localStorage.getItem('todo13'));
if (hour<13){
    slot13.attr('class', "bg-success text-white");
    text13.attr('class', "bg-success text-white");
} else if (hour==13){
    slot13.attr('class', "bg-danger text-white");
    text13.attr('class', "bg-danger text-white");
} else {
    slot13.attr('class', "bg-secondary text-white");
    text13.attr('class', "bg-secondary text-white");
}

function button13(event) {
    event.preventDefault();
    var todo13 = $('input[name="todo13"]').val();
    localStorage.setItem('todo13', todo13);
}

slot13.on('submit', button13);

var slot14 = $('#slot14');
var text14 = $('#todo14');
text14.attr('value', localStorage.getItem('todo14'));
if (hour<14){
    slot14.attr('class', "bg-success text-white");
    text14.attr('class', "bg-success text-white");
} else if (hour==14){
    slot14.attr('class', "bg-danger text-white");
    text14.attr('class', "bg-danger text-white");
} else {
    slot14.attr('class', "bg-secondary text-white");
    text14.attr('class', "bg-secondary text-white");
}

function button14(event) {
    event.preventDefault();
    var todo14 = $('input[name="todo14"]').val();
    localStorage.setItem('todo14', todo14);
}

slot14.on('submit', button14);

var slot15 = $('#slot15');
var text15 = $('#todo15');
text15.attr('value', localStorage.getItem('todo15'));
if (hour<15){
    slot15.attr('class', "bg-success text-white");
    text15.attr('class', "bg-success text-white");
} else if (hour==15){
    slot15.attr('class', "bg-danger text-white");
    text15.attr('class', "bg-danger text-white");
} else {
    slot15.attr('class', "bg-secondary text-white");
    text15.attr('class', "bg-secondary text-white");
}

function button15(event) {
    event.preventDefault();
    var todo15 = $('input[name="todo15"]').val();
    localStorage.setItem('todo15', todo15);
}

slot15.on('submit', button15);

var slot16 = $('#slot16');
var text16 = $('#todo16');
text16.attr('value', localStorage.getItem('todo16'));
if (hour<16){
    slot16.attr('class', "bg-success text-white");
    text16.attr('class', "bg-success text-white");
} else if (hour==16){
    slot16.attr('class', "bg-danger text-white");
    text16.attr('class', "bg-danger text-white");
} else {
    slot16.attr('class', "bg-secondary text-white");
    text16.attr('class', "bg-secondary text-white");
}

function button16(event) {
    event.preventDefault();
    var todo16 = $('input[name="todo16"]').val();
    localStorage.setItem('todo16', todo16);
}

slot16.on('submit', button16);