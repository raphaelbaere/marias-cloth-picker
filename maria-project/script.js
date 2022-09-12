const estilos = [{
    style: 'Casual',
    tShirt: ['T-Shirt:', 'White shirt', '"images/whitetshirt.png"'],
    pants: ['Shirt:', 'Common jeans', '"images/jeanscommum.png"'],
    shoes: ['Shoes:', 'Red All-Star', '"images/redallstar.png"'],
    acessory: ['Acessory:', 'Saphire Earrings', '"images/saphireearrings.png"'],
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"]
},
{
    style: 'Fancy',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings',
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"] 
},
{
    style: 'Confortable',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings',
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"]
},
{
    style: 'Cute',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings',
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"]
},
{
    style: 'Baggy',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings',
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"]
},
{
    style: 'Formal',
    tShirt: 'white shirt',
    pants: 'common jeans',
    shoes: 'red all-star',
    acessory: 'duck earrings',
    mood: ['Mood:', 'Happy', "images/smile.png"],
    ring: ['Obrigatory:', 'Commitment Ring', "images/rings.png"]
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
        '<p>' + estiloEscolhido.tShirt[1] + '</p>' +
        '<img src=' + estiloEscolhido.tShirt[2] + '>'
        divs[1].innerHTML =
        '<p>' + estiloEscolhido.pants[0] + '</p>' +
        '<p>' + estiloEscolhido.pants[1] + '</p>' +
        '<img src=' + estiloEscolhido.pants[2] + '>'
        divs[2].innerHTML =
        '<p>' + estiloEscolhido.shoes[0] + '</p>' +
        '<p>' + estiloEscolhido.shoes[1] + '</p>' +
        '<img src=' + estiloEscolhido.shoes[2] + '>'
        divs[3].innerHTML =
        '<p>' + estiloEscolhido.acessory[0] + '</p>' +
        '<p>' + estiloEscolhido.acessory[1] + '</p>' +
        '<img src=' + estiloEscolhido.acessory[2] + '>'
        divs[4].innerHTML =
        '<p>' + estiloEscolhido.mood[0] + '</p>' +
        '<p>' + estiloEscolhido.mood[1] + '</p>' +
        '<img src=' + estiloEscolhido.mood[2] + '>'
        divs[5].innerHTML =
        '<p>' + estiloEscolhido.ring[0] + '</p>' +
        '<p>' + estiloEscolhido.ring[1] + '</p>' +
        '<img src=' + estiloEscolhido.ring[2] + '>'
        })