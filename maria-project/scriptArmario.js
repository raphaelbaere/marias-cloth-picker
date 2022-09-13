const closetTitleContainer = document.querySelector('#closet-title-container');
const clotheItemContainer = document.querySelector('#clothe-items-container')

function createClosetElement(closetObj) {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const div = document.createElement('div');
    h2.innerHTML = closetObj.clothesType;
    p.innerHTML = closetObj.clothesName;
    img.src = closetObj.clothesUrl;
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(img);
    div.classList.add('style-items');
    return div;
}

function loadClothes() {
    const closet = JSON.parse(localStorage.getItem('Closet'));
    for (let index = 0; index < closet.length; index += 1) {
        const closetElement = createClosetElement(closet[index]);
        clotheItemContainer.appendChild(closetElement);
}
}

function onload() {
    if (!localStorage.getItem('Closet')) {
        const p = document.createElement('p');
        p.innerHTML = "You don't have any clothes in your closet yet. Go add some!";
        p.id = 'closet-title';
        closetTitleContainer.appendChild(p);
        const button = document.createElement('a');
        button.id = 'closet-button';
        button.href = "/maria-project/salvarRoupa.html";
        button.innerHTML = "Let's add some";
        closetTitleContainer.appendChild(button);
    } else {
        loadClothes()
    }
}
window.onload = onload();