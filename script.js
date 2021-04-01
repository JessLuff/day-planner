var today = moment();
$("#currentDay").text(today.format('dddd, Do [of] MMMM YYYY'));

var slot9 = $('#slot9');
var text9 = $('#todo9');
text9.attr('value', localStorage.getItem('todo9'));
if (today.format('h')<9){
    text9.attr('class', "bg-success text-white");
} else if (today.format('h')==9){
    text9.attr('class', "bg-danger text-white");
} else {
    text9.attr('class', "bg-secondary text-white");
}

function button9(event) {
    event.preventDefault();
    var todo9 = $('input[name="todo9"]').val();
    localStorage.setItem('todo9', todo9);
}

slot9.on('submit', button9);