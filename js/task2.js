const icon = document.querySelector('.icon'),
    iconBlack = document.querySelector('.icon_black')
    btn = document.querySelector('.btn');


    btn.addEventListener('click', () => {
        iconBlack.classList.toggle('hide')
        icon.classList.toggle('hide')
    })