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
        article.addEventListener('click', goToPhotographersPage );
        article.setAttribute('tabindex', "-1");

            const div = document.createElement('div');
            div.classList.add('imgBox')
        
                const img = document.createElement( 'img' );
                img.setAttribute("tabindex", "-1");
                img.setAttribute("src", imagePath + photographers[i].portrait);
                img.setAttribute("alt", "Portrait de" + photographers[i].name);
            
            div.appendChild(img);

        article.appendChild(div);

            const figCaption = document.createElement('figcaption');

                const h2 = document.createElement( 'h2' );
                h2.setAttribute("tabindex", "-1");
                h2.textContent = photographers[i].name;

                const p1 = document.createElement('p');
                p1.classList.add("userLocation");
                p1.innerText = `${photographers[i].city}, ${photographers[i].country}`;               

                const p2 = document.createElement('p');
                p2.classList.add("userTagline");
                p2.innerText = photographers[i].tagline;

                const p3 = document.createElement('p');
                p3.classList.add("userPrice");
                p3.innerText = `${photographers[i].price}/jour`;

            figCaption.appendChild(h2);
            figCaption.appendChild(p1);
            figCaption.appendChild(p2);
            figCaption.appendChild(p3);

            
        
        article.appendChild(figCaption);
        
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
    