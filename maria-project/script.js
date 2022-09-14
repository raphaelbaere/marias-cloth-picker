const button = document.getElementById('cloth-picker-button');
const section = document.getElementById('cloth-picker-chose')
const p = document.getElementById('style-chosen')
const divsFather = document.getElementById('style-items-container');
const divs = divsFather.children;
const estilos = JSON.parse(localStorage.getItem('Closet')) || [];
const tiposDeEstilos = ['casual', 'formal', 'confortable', 'baggy', 'cute', 'fancy', 'all'];

function escolheEstilo() {
    const escolhido = tiposDeEstilos[Math.floor(Math.random() * tiposDeEstilos.length)]
    return escolhido;
}

function escolheRoupa(typeObj) {
    const escolhido = typeObj[Math.floor(Math.random() * typeObj.length)]
    return escolhido;
}

function caseCasual() {
    if(localStorage.getItem('Casual')) {
        const casual = JSON.parse(localStorage.getItem('Casual'));
        return casual[Math.floor(Math.random() * casual.length)]
}
}


if (localStorage.getItem('Casual')) {
    estilos.push(JSON.parse(localStorage.getItem('Casual')));
}

if (localStorage.getItem('Formal')) {
    estilos.push(JSON.parse(localStorage.getItem('Formal')));
}

if (localStorage.getItem('Baggy')) {
    estilos.push(JSON.parse(localStorage.getItem('Baggy')));
}

if (localStorage.getItem('Cute')) {
    estilos.push(JSON.parse(localStorage.getItem('Cute')));
}

if (localStorage.getItem('Confortable')) {
    estilos.push(JSON.parse(localStorage.getItem('Confortable')));
}

if (localStorage.getItem('Fancy')) {
    estilos.push(JSON.parse(localStorage.getItem('Fancy')));
}

    button.addEventListener('click', () => {
        if (localStorage.getItem('Closet')) {
            const estiloEscolhido = escolheEstilo()
            for (let index = 0; index < divs.length; index += 1) {
                divs[index].innerHTML = '';
            }
        switch(estiloEscolhido) {
            case 'casual':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items')
                }
                if (localStorage.getItem('CasualTShirt')) {
                    const casualTShirt = JSON.parse(localStorage.getItem('CasualTShirt'));                   
                    const casualTShirtEscolhida = escolheRoupa(casualTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + casualTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + casualTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + casualTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CasualShirt')) {
                    const casualShirt = JSON.parse(localStorage.getItem('CasualShirt'));
                    const casualShirtEscolhida = escolheRoupa(casualShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + casualShirtEscolhida.clothesType + '</p>' +
                    '<p>' + casualShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + casualShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CasualShoes')) {
                    const casualShoes = JSON.parse(localStorage.getItem('CasualShoes'));
                    const casualShoesEscolhida = escolheRoupa(casualShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + casualShoesEscolhida.clothesType + '</p>' +
                    '<p>' + casualShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + casualShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CasualAcessories')) {
                    const casualAcessories = JSON.parse(localStorage.getItem('CasualAcessories'));
                    const casualAcessoriesEscolhida = escolheRoupa(casualAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + casualAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + casualAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + casualAcessoriesEscolhida.clothesUrl + '>'
                }
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            case 'formal':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items');
                }
                if (localStorage.getItem('FormalTShirt')) {
                    const formalTShirt = JSON.parse(localStorage.getItem('FormalTShirt'));                   
                    const formalTShirtEscolhida = escolheRoupa(formalTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + formalTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + formalTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + formalTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FormalShirt')) {
                    const formalShirt = JSON.parse(localStorage.getItem('FormalShirt'));
                    const formalShirtEscolhida = escolheRoupa(formalShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + formalShirtEscolhida.clothesType + '</p>' +
                    '<p>' + formalShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + formalShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FormalShoes')) {
                    const formalShoes = JSON.parse(localStorage.getItem('FormalShoes'));
                    const formalShoesEscolhida = escolheRoupa(formalShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + formalShoesEscolhida.clothesType + '</p>' +
                    '<p>' + formalShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + formalShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FormalAcessories')) {
                    const formalAcessories = JSON.parse(localStorage.getItem('FormalAcessories'));
                    const formalAcessoriesEscolhida = escolheRoupa(formalAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + formalAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + formalAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + formalAcessoriesEscolhida.clothesUrl + '>'
                }
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            case 'baggy':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items');
                }
                if (localStorage.getItem('BaggyTShirt')) {
                    const baggyTShirt = JSON.parse(localStorage.getItem('BaggyTShirt'));                   
                    const baggyTShirtEscolhida = escolheRoupa(baggyTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + baggyTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + baggyTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + baggyTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('BaggyShirt')) {
                    const baggyShirt = JSON.parse(localStorage.getItem('BaggyShirt'));
                    const baggyShirtEscolhida = escolheRoupa(baggyShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + baggyShirtEscolhida.clothesType + '</p>' +
                    '<p>' + baggyShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + baggyShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('BaggyShoes')) {
                    const baggyShoes = JSON.parse(localStorage.getItem('BaggyShoes'));
                    const baggyShoesEscolhida = escolheRoupa(baggyShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + baggyShoesEscolhida.clothesType + '</p>' +
                    '<p>' + baggyShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + baggyShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('BaggyAcessories')) {
                    const baggyAcessories = JSON.parse(localStorage.getItem('BaggyAcessories'));
                    const baggyAcessoriesEscolhida = escolheRoupa(baggyAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + baggyAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + baggyAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + baggyAcessoriesEscolhida.clothesUrl + '>'
                }
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            case 'cute':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items');
                }
                if (localStorage.getItem('CuteTShirt')) {
                    const cuteTShirt = JSON.parse(localStorage.getItem('CuteTShirt'));                   
                    const cuteTShirtEscolhida = escolheRoupa(cuteTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + cuteTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + cuteTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + cuteTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CuteShirt')) {
                    const cuteShirt = JSON.parse(localStorage.getItem('CuteShirt'));
                    const cuteShirtEscolhida = escolheRoupa(cuteShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + cuteShirtEscolhida.clothesType + '</p>' +
                    '<p>' + cuteShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + cuteShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CuteShoes')) {
                    const cuteShoes = JSON.parse(localStorage.getItem('CuteShoes'));
                    const cuteShoesEscolhida = escolheRoupa(cuteShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + cuteShoesEscolhida.clothesType + '</p>' +
                    '<p>' + cuteShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + cuteShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('CuteAcessories')) {
                    const cuteAcessories = JSON.parse(localStorage.getItem('CuteAcessories'));
                    const cuteAcessoriesEscolhida = escolheRoupa(cuteAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + cuteAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + cuteAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + cuteAcessoriesEscolhida.clothesUrl + '>'
                }
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            case 'fancy':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items');
                }
                if (localStorage.getItem('FancyTShirt')) {
                    const fancyTShirt = JSON.parse(localStorage.getItem('FancyTShirt'));                   
                    const fancyTShirtEscolhida = escolheRoupa(fancyTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + fancyTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + fancyTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + fancyTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FancyShirt')) {
                    const fancyShirt = JSON.parse(localStorage.getItem('FancyShirt'));
                    const fancyShirtEscolhida = escolheRoupa(fancyShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + fancyShirtEscolhida.clothesType + '</p>' +
                    '<p>' + fancyShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + fancyShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FancyShoes')) {
                    const fancyShoes = JSON.parse(localStorage.getItem('FancyShoes'));
                    const fancyShoesEscolhida = escolheRoupa(fancyShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + fancyShoesEscolhida.clothesType + '</p>' +
                    '<p>' + fancyShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + fancyShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('FancyAcessories')) {
                    const fancyAcessories = JSON.parse(localStorage.getItem('FancyAcessories'));
                    const fancyAcessoriesEscolhida = escolheRoupa(fancyAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + fancyAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + fancyAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + fancyAcessoriesEscolhida.clothesUrl + '>'
                }
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            case 'confortable':
                p.innerHTML = 'Your clothes style chosen for today is ' + '<br>' + '<strong>' + estiloEscolhido + '</strong>';
                for (let index = 0; index < divs.length; index += 1) {
                    divs[index].classList.add('style-items');
                }
                if (localStorage.getItem('ConfortableTShirt')) {
                    const confortableTShirt = JSON.parse(localStorage.getItem('ConfortableTShirt'));                   
                    const confortableTShirtEscolhida = escolheRoupa(confortableTShirt);
                    divs[0].innerHTML = ''
                    divs[0].innerHTML =
                    '<p>' + confortableTShirtEscolhida.clothesType + '</p>' +
                    '<p>' + confortableTShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + confortableTShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('ConfortableShirt')) {
                    const confortableShirt = JSON.parse(localStorage.getItem('ConfortableShirt'));
                    const confortableShirtEscolhida = escolheRoupa(confortableShirt);
                    divs[1].innerHTML = ''
                    divs[1].innerHTML =
                    '<p>' + confortableShirtEscolhida.clothesType + '</p>' +
                    '<p>' + confortableShirtEscolhida.clothesName + '</p>' +
                    '<img src=' + confortableShirtEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('ConfortableShoes')) {
                    const confortableShoes = JSON.parse(localStorage.getItem('ConfortableShoes'));
                    const confortableShoesEscolhida = escolheRoupa(confortableShoes);
                    divs[2].innerHTML = ''
                    divs[2].innerHTML =
                    '<p>' + confortableShoesEscolhida.clothesType + '</p>' +
                    '<p>' + confortableShoesEscolhida.clothesName + '</p>' +
                    '<img src=' + confortableShoesEscolhida.clothesUrl + '>'
                }
                if (localStorage.getItem('ConfortableAcessories')) {
                    const confortableAcessories = JSON.parse(localStorage.getItem('ConfortableAcessories'));
                    const confortableAcessoriesEscolhida = escolheRoupa(confortableAcessories);
                    divs[3].innerHTML = ''
                    divs[3].innerHTML =
                    '<p>' + confortableAcessoriesEscolhida.clothesType + '</p>' +
                    '<p>' + confortableAcessoriesEscolhida.clothesName + '</p>' +
                    '<img src=' + confortableAcessoriesEscolhida.clothesUrl + '>'
                }   
                    divs[4].innerHTML = ''
                    divs[4].innerHTML =
                    '<p>' + 'Mood' + '</p>' +
                    '<p>' + 'Happy'+ '</p>' +
                    '<img src=' + 'images/happy.png' + '>'
                    divs[5].innerHTML = ''
                    divs[5].innerHTML =
                    '<p>' + 'Obrigatory' + '</p>' +
                    '<p>' + 'Commitment Ring' + '</p>' +
                    '<img src=' + 'images/rings.png' + '>'
            break;
            }
        }
     }
    )

if (!localStorage.getItem('Closet')) {
    p.innerHTML = "You don't have any clothes in your closet yet. Let's add some!"
}