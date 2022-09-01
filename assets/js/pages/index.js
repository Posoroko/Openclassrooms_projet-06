import { getData } from '../tools/getData.js';
import { domElements } from '../dom/domElements.js';

//create cards for every photographer and appends in the photographerSection
//in the DOM

const goToPhotographersPage = (e) => {
    let urlString = "photographer.html";
    let idStringParam = "id="
    let nameStringParam = "name="
    window.location.href = urlString + "?" + "id=" + e.currentTarget.id + "&" + "name=" + e.currentTarget.getAttribute('name');
}

const createUserCards = (photographers) => {
    let photographerCards = [];
    let imagePath = 'assets/images/Photographers ID Photos/';
    for(let i = 0; i < photographers.length; i++) {
        const article = document.createElement( 'article' );
        article.classList.add('userCard');
        article.setAttribute('tabindex', "0")
        article.setAttribute("aria-label", "Lien pour visiter la page de " + photographers[i].name)
        article.setAttribute("aria-role", "link")
        article.id = photographers[i].id
        article.setAttribute('name', photographers[i].name);
        article.addEventListener('click', goToPhotographersPage )
        const div = document.createElement('div');
        article.setAttribute('tabindex', "-1")
        div.classList.add('imgBox')
        const img = document.createElement( 'img' );
        img.setAttribute("tabindex", "-1")
        img.setAttribute("src", imagePath + photographers[i].portrait)
        img.setAttribute("alt", "Portrait de" + photographers[i].name)
        const h2 = document.createElement( 'h2' );
        h2.setAttribute("tabindex", "-1")
        h2.textContent = photographers[i].name;
        article.appendChild(div)
        div.appendChild(img);
        article.appendChild(h2);
        photographerCards.push(article);
    };
    return photographerCards
};


const initiateHomepage = async () => {

    let photographers = await getData('photographers');

    const cardList = createUserCards(photographers);
    for (let i = 0; i < cardList.length; i++) {
        domElements.photographer_section.appendChild(cardList[i]);
    };
};

    
export { initiateHomepage }
    