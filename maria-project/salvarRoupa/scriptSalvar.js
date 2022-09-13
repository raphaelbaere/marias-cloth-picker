const form = document.querySelector('form');
const clothesStyle = form.querySelector('#clothes-style');
const clothesType = form.querySelector('#clothes-type');
const clothesName = form.querySelector('#clothes-name');
const clothesUrl = form.querySelector('#clothes-url');
const submitButton = form.querySelector('#submit-button');


function submitNewClothes(event) {
    event.preventDefault();

    const closet = JSON.parse(localStorage.getItem('Closet')) || [];
    const casual = JSON.parse(localStorage.getItem('Casual')) || [];
    const formal = JSON.parse(localStorage.getItem('Formal')) || [];
    const baggy = JSON.parse(localStorage.getItem('Baggy')) || [];
    const confortable = JSON.parse(localStorage.getItem('Confortable')) || [];
    const cute = JSON.parse(localStorage.getItem('Cute')) || [];
    const fancy = JSON.parse(localStorage.getItem('Fancy')) || [];

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

    localStorage.setItem('Closet', JSON.stringify(closet));
}

submitButton.addEventListener('click', submitNewClothes)