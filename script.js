var slot9 = $('#slot9');
var text9 = $('#todo9');
text9.attr('placeholder', localStorage.getItem('todo9'));
text9.append(text9);

function handleFormSubmit(event) {
    event.preventDefault();
    var todo9 = $('input[name="todo9"]').val();
    localStorage.setItem('todo9', todo9);
}

slot9.on('submit', handleFormSubmit);

