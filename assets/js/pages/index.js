import { getData } from '../tools/getData.js';
import { domElements } from '../dom/domElements.js';

//create cards for every photographer and appends in the photographerSection
//in the DOM

const goToPhotographersPage = (e) => {
    let urlString = "./pages/photographer.html";
    let idStringParam = "id="
    let nameStringParam = "name="
    window.location.href = urlString + "?" + "id=" + e.currentTarget.getAttribute('data-userId') + "&" + "name=" + e.currentTarget.getAttribute('data-userName');
}

const createUserCards = (photographers) => {
    let photographerCards = [];
    let imagePath = 'assets/images/Photographers ID Photos/';
    for(let i = 0; i < photographers.length; i++) {
        
        const article = document.createElement( 'article' );
        article.classList.add('userCard');
        article.setAttribute('tabindex', "-1")
        article.id = photographers[i].id        

            const contentBox = document.createElement('div');
            contentBox.classList.add('contentBox');

                const imgBox = document.createElement('div');
                imgBox.classList.add('imgBox')
            
                    const img = document.createElement( 'img' );
                    img.setAttribute("tabindex", "0");
                    img.setAttribute("src", imagePath + photographers[i].portrait);
                    img.setAttribute("alt", photographers[i].name);
                    img.setAttribute('data-userId', photographers[i].id);
                    img.setAttribute('data-userName', photographers[i].name);
                    img.setAttribute("aria-role", "link");
                    img.addEventListener('click', goToPhotographersPage );
                
                imgBox.appendChild(img);
            
            contentBox.appendChild(imgBox);

        

                const figCaption = document.createElement('figcaption');

                    const h2 = document.createElement( 'h2' );
                    h2.setAttribute("tabindex", "-1");
                    h2.textContent = photographers[i].name;
                    h2.setAttribute('data-userId', photographers[i].id);
                    h2.setAttribute('data-userName', photographers[i].name);
                    h2.setAttribute("aria-role", "link");
                    h2.addEventListener('click', goToPhotographersPage );

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

            
        
            contentBox.appendChild(figCaption);
        
        article.appendChild(contentBox);
        
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
    