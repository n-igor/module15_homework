const btn = document.querySelector('.btnChat'),
    inputChat = document.querySelector('.inputChat'),
    textChat = document.querySelector('.textChat'),
    geo = document.querySelector('.geo'),
    url = 'wss://echo.websocket.org/'
    let link = ''


function writeToChat(message) {
    const div = document.createElement('div')
    div.classList.add('req')
    div.innerHTML = `<span class="right">${message}</span>`
    textChat.append(div)
    
    
}

function getToChat(message) {
    const div = document.createElement('div')
    div.classList.add('res')
    div.innerHTML = `<span class="left">${message}</span>`
    textChat.append(div)
}


btn.addEventListener('click', () => {
    writeToChat(inputChat.value)
    socket = new WebSocket(url);
    socket.addEventListener('open', function (event) {
        socket.send(inputChat.value);
    });
  
    socket.addEventListener('message', function (event) {
        getToChat(event.data)
    });
    
})

geo.addEventListener('click', () => {

    if (!navigator.geolocation) {
        alert('Информация о местоположении недоступна')
    } else {
        navigator.geolocation.getCurrentPosition(position => {
            link = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
        }, () => {
            alert('Местоположение не определено')
        })
    }  

    socket = new WebSocket(url);
    socket.addEventListener('open', function (event) {
        socket.send(link);
    });
  
    socket.addEventListener('message', function (event) {
        writeToChat(`<a href="${event.data}" target="_blank">Гео-локация</a>`)
    });
})