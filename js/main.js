/*============================ Элементы ============================*/
const arrayImg = document.querySelectorAll('.img-box');
const makeColor = document.querySelector('.makeColor')
const inputColor = document.querySelector('.inputColor')

/*============================ Функция которая взаимодействует с блоками, checkbox ============================*/
arrayImg.forEach(el => {
    el.addEventListener('click', () => {
        const chbox = document.createElement('input')
        chbox.type = "checkbox"
        chbox.className = "checkbox"
        chbox.checked = true
        el.append(chbox)
        el.addEventListener('dblclick', () => {
            if (el.getElementsByClassName('checkbox')[0]) {
                if (el.getElementsByClassName('checkbox')[0]) {
                    el.style.background = '#fff'
                    el.getElementsByClassName('checkbox')[0].remove()
                }
            }
        })
    })
})


/*============================ Функция которая меняет цвет блоков ============================*/
makeColor.addEventListener('click', () => {
    arrayImg.forEach(box => {
        if (box.getElementsByClassName('checkbox')[0]) {
            box.style.background = inputColor.value
        }
    })
})
