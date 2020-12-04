$('#first').on('click', () =>{
    $('#first').text('Yeah, you clicked me!')
})

$('#second').on('click', () =>{
    $('#first').text('No, not the other one, me!')
})

$('.third').on('click', () => {
    $('#first').css('background-color','pink')
    $('#second').css('background-color','pink')
    $('.third').css('background-color','grey')
})
