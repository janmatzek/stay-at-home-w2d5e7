$('#first').on('click', () =>{
    $('#first').text('Yeah, you clicked me!')
})

$('#second').on('click', () =>{
    $('#first').text('No, not the other one, me!')
})



$('#third').on('click', () => {
    let colorValue = document.getElementById('color').value
    $('#first').css('background-color',colorValue)
    $('#second').css('background-color',colorValue)
    $('#third').css('background-color',colorValue)
    document.getElementById('third').disabled = true;
})
