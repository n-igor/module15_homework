const btn = document.querySelector('.btn2'),
    text = document.querySelector('.textInfo1')

const error = () => {
    text.innerHTML = 'Информация о местоположении недоступна'
}

const success = (position) => {
    const url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`
    fetch(url)
        .then(response => response.json())
        .then(json => {
            text.innerHTML = `Временная зона: ${json.timezone}<br>
            Местные дата и время: ${json.date_time_txt}`
        })
}

btn.addEventListener('click', () => {

if (!navigator.geolocation) {
    text.innerHTML = 'Информация о местоположении недоступна'
} else {
    navigator.geolocation.getCurrentPosition(success, error) 
}  
})