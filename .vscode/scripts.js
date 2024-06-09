let antesbot  = document.getElementById('besquerd')
let depoisbot = document.getElementById('bdireit')
let conteiner = document.querySelector ('.container')
let items = conteiner.querySelectorAll('.list .item')

let active = 0
let firstPosition = 0 
let lastPosition = items.length -1




antesbot.onclick = () =>
{
  let itemanterior = conteiner.querySelector('.list .item .active')
  itemanterior.classList.remove('active')
}
depoisbot.onclick = () =>
{
    let itemold = conteiner.querySelector('.list .item .active')
    itemold.classList.remove('active')
}

