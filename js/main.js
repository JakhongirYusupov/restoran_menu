const form = document.querySelector('#form');
const menu = document.querySelector('#menu');
const inputNomi = document.querySelector('#nomi');
const inputNarxi = document.querySelector('#narxi');
const inputRasmi = document.querySelector('#rasmi');
const inputOshpazi = document.querySelector('#oshpazi');
const inputRestorani = document.querySelector('#restorani');
const delbtn = document.querySelectorAll('.removebtn')
const endbtn = document.querySelectorAll('.endbtn')

function inputTest(inputNomi, inputNarxi, inputRasmi, inputOshpazi, inputRestorani) {
    const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if (inputNomi.length >= 50) return alert('String uzunligi 50 tadan oshmasin!')
    if (inputNarxi.length > 5 || !/[0-9]/.test(inputNarxi)) return alert('Narxi maximal 5 xonali son bo\'lsin')
    if (!httpRegex.test(inputRasmi)) return alert('Link xato!')
    if (inputOshpazi.length >= 50) return alert('Ism juda uzun 50 tadan oshmasin!')
    if (inputRestorani.length >= 50) return alert('Nomi juda uzun 50 tadan oshmasin!')

    return true
}

const createElements = (...arr) => arr.map((el) => document.createElement(el))


form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (inputTest(inputNomi.value, inputNarxi.value, inputRasmi.value, inputOshpazi.value, inputRestorani.value) !== true) return

    let [div1, div2, img, ul, li1, span1, li2, strong, li3, span3, li4, span4] = createElements('div', 'div', 'img', 'ul', 'li', 'span', 'li', 'strong', 'li', 'span', 'li', 'span');
    div1.className = 'menu_item'
    div2.className = 'menu_item_img'
    img.setAttribute('src', inputRasmi.value)

    div2.appendChild(img)
    div1.appendChild(div2)

    ul.className = 'menu_item_main'

    li1.className = 'menu_item_main_desc'
    span1.innerText = inputNomi.value
    li1.innerText = 'Taom nomi: '
    li1.appendChild(span1)
    ul.appendChild(li1)

    li2.className = 'menu_item_main_desc'
    strong.innerText = inputNarxi.value
    li2.innerText = 'Taom narxi: $'
    li2.appendChild(strong)
    ul.appendChild(li2)

    li3.className = 'menu_item_main_desc'
    span3.innerText = inputOshpazi.value
    li3.innerText = 'Taom oshpazi: '
    li3.appendChild(span3)
    ul.appendChild(li3)

    li4.className = 'menu_item_main_desc'
    span4.innerText = inputRestorani.value
    li4.innerText = 'Taom restorani: '
    li4.appendChild(span4)
    ul.appendChild(li4)

    div1.appendChild(ul)

    let [divbtn, btn1, btn2, btn3] = createElements('div', 'button', 'button', 'button');
    divbtn.className = 'menu_item_btns'
    btn1.className = 'menu_item_btn removebtn'
    btn1.setAttribute('type', 'submit')
    btn1.innerText = 'Taomni o’chirish'
    btn2.className = 'menu_item_btn'
    btn2.disabled = true
    btn2.innerText = getData()
    btn3.className = 'menu_item_btn endbtn'
    btn3.innerText = 'Taom tugadi'
    divbtn.appendChild(btn1)
    divbtn.appendChild(btn2)
    divbtn.appendChild(btn3)

    remove_end_btns([btn1], [btn3])

    div1.appendChild(divbtn)
    menu.prepend(div1)
    remove_end_btns()

    inputNomi.value = ''
    inputNarxi.value = ''
    inputRasmi.value = ''
    inputOshpazi.value = ''
    inputRestorani.value = ''

})


function remove_end_btns(delbtn, endbtn) {
    try {
        delbtn.forEach(element => {
            element.addEventListener('click', (event) => {
                element.parentNode.parentNode.remove()
            })
        });

        endbtn.forEach(element => {
            element.addEventListener('click', (event) => {
                element.parentNode.parentNode.classList.toggle('active-bg')
            })
        });
    } catch (error) {

    }
}
remove_end_btns(delbtn, endbtn)


function getData() {
    const data = new Date()
    return data.toLocaleDateString()
}