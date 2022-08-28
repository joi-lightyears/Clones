var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var namee = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=418aa43b97f56b9178147c11c05b8b78')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var descValue = data['weather'][0]['description']
        namee.innerHTML = nameValue
        temp.innerHTML = tempValue
        desc.innerHTML = descValue
        // console.log(data)
    })
})