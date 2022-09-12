const estilos = [{
    style: 'Casual',
    tShirt: ['White shirt', '"images/whitetshirt.png"'],
    pants: ['Common jeans', '"images/jeanscommum.png"'],
    shoes: ['Red All-Star', '"images/redallstar.png"'],
    acessory: ['Saphire Earrings', '"images/saphireearrings.png"'],
    mood: ['Happy', "images/smile.png"],
    ring: ['Commitment Ring', "images/rings.png"]
},
{
    style: 'Fancy',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings' 
},
{
    style: 'Confortable',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings'
},
{
    style: 'Cute',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings'
},
{
    style: 'Baggy',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings'
},
{
    style: 'Formal',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings'
}]

    const button = document.getElementById('cloth-picker-button');
    const section = document.getElementById('cloth-picker-chose')
    const p = document.getElementById('style-chosen')
    const divsFather = document.getElementById('style-items-container');
    const divs = divsFather.children;

    button.addEventListener('click', () => {
        const estiloEscolhido = estilos[Math.floor(Math.random() * estilos.length)]
        p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido.style + '</strong>';
        for (let index = 0; index < divs.length; index += 1) {
            divs[index].classList.add('style-items')
        }
        divs[0].innerHTML =
        '<p>' + estiloEscolhido.tShirt[0] + '</p>' +
        '<img src=' + estiloEscolhido.tShirt[1] + '>'
        divs[1].innerHTML =
        '<p>' + estiloEscolhido.pants[0] + '</p>' +
        '<img src=' + estiloEscolhido.pants[1] + '>'
        divs[2].innerHTML =
        '<p>' + estiloEscolhido.shoes[0] + '</p>' +
        '<img src=' + estiloEscolhido.shoes[1] + '>'
        divs[3].innerHTML =
        '<p>' + estiloEscolhido.acessory[0] + '</p>' +
        '<img src=' + estiloEscolhido.acessory[1] + '>'
        divs[4].innerHTML =
        '<p>' + estiloEscolhido.mood[0] + '</p>' +
        '<img src=' + estiloEscolhido.mood[1] + '>'
        divs[5].innerHTML =
        '<p>' + estiloEscolhido.ring[0] + '</p>' +
        '<img src=' + estiloEscolhido.ring[1] + '>'
        })