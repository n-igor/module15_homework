const btn = document.querySelector('.btn1'),
    text = document.querySelector('.textInfo')
let geo = '';

const error = () => {
    text.innerHTML = 'Информация о местоположении недоступна'
}

const success = (position) => {
    geo = `широта: ${position.coords.latitude}, долгота: ${position.coords.longitude}`
    text.innerHTML = `Ширина экрана пользователя ${window.screen.width}px, высота экрана ${window.screen.height}px, <br> Местоположение: ${geo}`
}

btn.addEventListener('click', () => {

if (!navigator.geolocation) {
    text.innerHTML = 'Информация о местоположении недоступна'
} else {
    navigator.geolocation.getCurrentPosition(success, error) 
}  
})