const form = document.querySelector('form');
const clothesStyle = form.querySelector('#clothes-style');
const clothesType = form.querySelector('#clothes-type');
const clothesName = form.querySelector('#clothes-name');
const clothesUrl = form.querySelector('#clothes-url');
const submitButton = form.querySelector('#submit-button');


function submitNewClothes(event) {
    event.preventDefault();
    if (clothesStyle.value !== '' && clothesType.value !== '' && clothesUrl.value !== '' && clothesName !== '') {

    const closet = JSON.parse(localStorage.getItem('Closet')) || [];
    const casual = JSON.parse(localStorage.getItem('Casual')) || [];
    const formal = JSON.parse(localStorage.getItem('Formal')) || [];
    const baggy = JSON.parse(localStorage.getItem('Baggy')) || [];
    const confortable = JSON.parse(localStorage.getItem('Confortable')) || [];
    const cute = JSON.parse(localStorage.getItem('Cute')) || [];
    const fancy = JSON.parse(localStorage.getItem('Fancy')) || [];

    const casualTShirt = JSON.parse(localStorage.getItem('CasualTShirt')) || [];
    const formalTShirt = JSON.parse(localStorage.getItem('FormalTShirt')) || [];
    const baggyTShirt = JSON.parse(localStorage.getItem('BaggyTShirt')) || [];
    const confortableTShirt = JSON.parse(localStorage.getItem('ConfortableTShirt')) || [];
    const cuteTShirt = JSON.parse(localStorage.getItem('CuteTShirt')) || [];
    const fancyTShirt = JSON.parse(localStorage.getItem('FancyTShirt')) || [];

    const casualShirt = JSON.parse(localStorage.getItem('CasualShirt')) || [];
    const formalShirt = JSON.parse(localStorage.getItem('FormalShirt')) || [];
    const baggyShirt = JSON.parse(localStorage.getItem('BaggyShirt')) || [];
    const confortableShirt = JSON.parse(localStorage.getItem('ConfortableShirt')) || [];
    const cuteShirt = JSON.parse(localStorage.getItem('CuteShirt')) || [];
    const fancyShirt = JSON.parse(localStorage.getItem('FancyShirt')) || [];

    const casualShoes = JSON.parse(localStorage.getItem('CasualShoes')) || [];
    const formalShoes = JSON.parse(localStorage.getItem('FormalShoes')) || [];
    const baggyShoes = JSON.parse(localStorage.getItem('BaggyShoes')) || [];
    const confortableShoes = JSON.parse(localStorage.getItem('ConfortableShoes')) || [];
    const cuteShoes = JSON.parse(localStorage.getItem('CuteShoes')) || [];
    const fancyShoes = JSON.parse(localStorage.getItem('FancyShoes')) || [];

    const casualAcessories = JSON.parse(localStorage.getItem('CasualAcessories')) || [];
    const formalAcessories = JSON.parse(localStorage.getItem('FormalAcessories')) || [];
    const baggyAcessories = JSON.parse(localStorage.getItem('BaggyAcessories')) || [];
    const confortableAcessories = JSON.parse(localStorage.getItem('ConfortableAcessories')) || [];
    const cuteAcessories = JSON.parse(localStorage.getItem('CuteAcessories')) || [];
    const fancyAcessories = JSON.parse(localStorage.getItem('FancyAcessories')) || [];

    const newClothes = {
        clothesStyle: clothesStyle.value,
        clothesType: clothesType.value,
        clothesName: clothesName.value,
        clothesUrl: clothesUrl.value,
    }

    closet.push(newClothes);

    switch (newClothes.clothesStyle) {
        case 'casual':
            casual.push(newClothes);
            localStorage.setItem('Casual', JSON.stringify(casual));
        break;
        case 'formal':
            formal.push(newClothes);
            localStorage.setItem('Formal', JSON.stringify(formal));
        break;
        case 'baggy':
            baggy.push(newClothes);
            localStorage.setItem('Baggy', JSON.stringify(baggy));
        break;
        case 'confortable':
            confortable.push(newClothes);
            localStorage.setItem('Confortable', JSON.stringify(confortable));
        break;
        case 'cute':
            cute.push(newClothes);
            localStorage.setItem('Cute', JSON.stringify(cute));
        break;
        case 'fancy':
            fancy.push(newClothes);
            localStorage.setItem('Fancy', JSON.stringify(fancy));
    }

    if (newClothes.clothesStyle === 'casual' && newClothes.clothesType === 'tShirt') {
        casualTShirt.push(newClothes)
        localStorage.setItem('CasualTShirt', JSON.stringify(casualTShirt));
    } else if (newClothes.clothesStyle === 'formal' && newClothes.clothesType === 'tShirt') {
        formalTShirt.push(newClothes)
        localStorage.setItem('FormalTShirt', JSON.stringify(formalTShirt));
    } else if (newClothes.clothesStyle === 'baggy' && newClothes.clothesType === 'tShirt') {
        baggyTShirt.push(newClothes)
        localStorage.setItem('BaggyTShirt', JSON.stringify(baggyTShirt));
    } else if (newClothes.clothesStyle === 'cute' && newClothes.clothesType === 'tShirt') {
        cuteTShirt.push(newClothes)
        localStorage.setItem('CuteTShirt', JSON.stringify(cuteTShirt));
    } else if (newClothes.clothesStyle === 'confortable' && newClothes.clothesType === 'tShirt') {
        confortableTShirt.push(newClothes)
        localStorage.setItem('ConfortableTShirt', JSON.stringify(confortableTShirt));
    } else if (newClothes.clothesStyle === 'fancy' && newClothes.clothesType === 'tShirt') {
        fancyTShirt.push(newClothes)
        localStorage.setItem('FancyTShirt', JSON.stringify(fancyTShirt));
    } else if (newClothes.clothesStyle === 'casual' && newClothes.clothesType === 'shirt') {
        casualShirt.push(newClothes)
        localStorage.setItem('CasualShirt', JSON.stringify(casualShirt));
    } else if (newClothes.clothesStyle === 'formal' && newClothes.clothesType === 'shirt') {
        formalShirt.push(newClothes)
        localStorage.setItem('FormalShirt', JSON.stringify(formalShirt));
    } else if (newClothes.clothesStyle === 'baggy' && newClothes.clothesType === 'shirt') {
        baggyShirt.push(newClothes)
        localStorage.setItem('BaggyShirt', JSON.stringify(baggyShirt));
    } else if (newClothes.clothesStyle === 'cute' && newClothes.clothesType === 'shirt') {
        cuteShirt.push(newClothes)
        localStorage.setItem('CuteShirt', JSON.stringify(cuteShirt));
    } else if (newClothes.clothesStyle === 'confortable' && newClothes.clothesType === 'shirt') {
        confortableShirt.push(newClothes)
        localStorage.setItem('ConfortableShirt', JSON.stringify(confortableShirt));
    } else if (newClothes.clothesStyle === 'fancy' && newClothes.clothesType === 'shirt') {
        fancyShirt.push(newClothes)
        localStorage.setItem('FancyShirt', JSON.stringify(fancyShirt));
    } else if (newClothes.clothesStyle === 'casual' && newClothes.clothesType === 'shoes') {
        casualShoes.push(newClothes)
        localStorage.setItem('CasualShoes', JSON.stringify(casualShoes));
    } else if (newClothes.clothesStyle === 'formal' && newClothes.clothesType === 'shoes') {
        formalShoes.push(newClothes)
        localStorage.setItem('FormalShoes', JSON.stringify(formalShoes));
    } else if (newClothes.clothesStyle === 'baggy' && newClothes.clothesType === 'shoes') {
        baggyShoes.push(newClothes)
        localStorage.setItem('BaggyShoes', JSON.stringify(baggyShoes));
    } else if (newClothes.clothesStyle === 'cute' && newClothes.clothesType === 'shoes') {
        cuteShoes.push(newClothes)
        localStorage.setItem('CuteShoes', JSON.stringify(cuteShoes));
    } else if (newClothes.clothesStyle === 'confortable' && newClothes.clothesType === 'shoes') {
        confortableShoes.push(newClothes)
        localStorage.setItem('ConfortableShoes', JSON.stringify(confortableShoes));
    } else if (newClothes.clothesStyle === 'fancy' && newClothes.clothesType === 'shoes') {
        fancyShoes.push(newClothes)
        localStorage.setItem('FancyShoes', JSON.stringify(fancyShoes));
    } else if (newClothes.clothesStyle === 'casual' && newClothes.clothesType === 'acessory') {
        casualAcessories.push(newClothes)
        localStorage.setItem('CasualAcessories', JSON.stringify(casualAcessories));
    } else if (newClothes.clothesStyle === 'formal' && newClothes.clothesType === 'acessory') {
        formalAcessories.push(newClothes)
        localStorage.setItem('FormalAcessories', JSON.stringify(formalAcessories));
    } else if (newClothes.clothesStyle === 'baggy' && newClothes.clothesType === 'acessory') {
        baggyAcessories.push(newClothes)
        localStorage.setItem('BaggyAcessories', JSON.stringify(baggyAcessories));
    } else if (newClothes.clothesStyle === 'cute' && newClothes.clothesType === 'acessory') {
        cuteAcessories.push(newClothes)
        localStorage.setItem('CuteAcessories', JSON.stringify(cuteAcessories));
    } else if (newClothes.clothesStyle === 'confortable' && newClothes.clothesType === 'acessory') {
        confortableAcessories.push(newClothes)
        localStorage.setItem('ConfortableAcessories', JSON.stringify(confortableAcessories));
    } else if (newClothes.clothesStyle === 'fancy' && newClothes.clothesType === 'acessory') {
        fancyAcessories.push(newClothes)
        localStorage.setItem('FancyAcessories', JSON.stringify(fancyAcessories));
    }


    localStorage.setItem('Closet', JSON.stringify(closet));
    clothesStyle.value = ''
    clothesType.value = ''
    clothesUrl.value = ''
    clothesName.value = ''
    alert('Your clothes have been saved in your closet!')
} else {
    alert('Your clothes info are not correct! Please insert the infos!')
}
}

submitButton.addEventListener('click', submitNewClothes)