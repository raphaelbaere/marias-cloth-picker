const closetTitleContainer = document.querySelector('#closet-title-container');
const clotheItemContainer = document.querySelector('#clothe-items-container')
const buttonNames = ['Casual', 'Formal', 'Confortable', 'Baggy', 'Cute', 'Fancy', 'All', 'Remove All'];
const aside = document.querySelector('#button-aside');
const closetItems = document.querySelectorAll('.style-items')

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

function loadStyle(styleName) {
    if (localStorage.getItem(styleName)) {
    const styleObj = JSON.parse(localStorage.getItem(styleName));
    for (let index = 0; index < styleObj.length; index += 1) {
        const closetElement = createClosetElement(styleObj[index]);
        clotheItemContainer.appendChild(closetElement);
        }
    } else {
        removeClothes();
        const p = document.createElement('p');
        p.innerHTML = "You don't have clothes of this style in your closet yet. Go add some!";
        p.id = 'closet-title';
        clotheItemContainer.appendChild(p);
        const button = document.createElement('a');
        button.id = 'closet-button2';
        button.href = "../salvarRoupa/salvarRoupa.html";
        button.innerHTML = "Let's add some";
        clotheItemContainer.appendChild(button);
    }
}

function removeClothes () {
clotheItemContainer.innerHTML = '';
}

function loadButtons() {
    for (let index = 0; index < buttonNames.length; index += 1) {
        const createButton = document.createElement('button');
        createButton.innerHTML = buttonNames[index];
        createButton.classList.add('closetButtons');
        createButton.addEventListener('click', (event) => {
            switch (event.target.innerHTML) {
                case 'Casual':
                    removeClothes();
                    loadStyle('Casual');
                break;   
                case 'Formal':
                    removeClothes();
                    loadStyle('Formal');
                break;   
                case 'Baggy':
                    removeClothes();
                    loadStyle('Baggy');
                break;         
                case 'Confortable':
                    removeClothes();
                    loadStyle('Confortable');
                break;
                case 'Cute':
                    removeClothes();
                    loadStyle('Cute');
                break;             
                case 'Fancy':
                    removeClothes();
                    loadStyle('Fancy');
                break;                
                case 'All':
                    removeClothes();
                    loadStyle('Closet');
                break;
                case 'Remove All':
                    removeClothes();
                    localStorage.clear();       
            }

        })
        aside.appendChild(createButton);

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
        button.href = "../salvarRoupa/salvarRoupa.html";
        button.innerHTML = "Let's add some";
        closetTitleContainer.appendChild(button);
    } else {
        loadButtons();
        loadClothes();
    }
}
window.onload = onload();