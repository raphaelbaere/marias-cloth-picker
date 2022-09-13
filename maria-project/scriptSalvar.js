const form = document.querySelector('form');
const clothesStyle = form.querySelector('#clothes-style');
const clothesType = form.querySelector('#clothes-type');
const clothesName = form.querySelector('#clothes-name');
const clothesUrl = form.querySelector('#clothes-url');
const submitButton = form.querySelector('#submit-button');


function submitNewClothes(event) {
    event.preventDefault();

    const closet = JSON.parse(localStorage.getItem('Closet')) || [];

    const newClothes = {
        clothesStyle: clothesStyle.value,
        clothesType: clothesType.value,
        clothesName: clothesName.value,
        clothesUrl: clothesUrl.value,
    }

    closet.push(newClothes);

    localStorage.setItem('Closet', JSON.stringify(closet));
}

submitButton.addEventListener('click', submitNewClothes)