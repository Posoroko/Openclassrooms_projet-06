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

            const a = document.createElement( 'a' );
                a.setAttribute("tabindex", "0");
                a.setAttribute('href', "./pages/photographer.html" + "?" + "id=" + photographers[i].id + "&" + "name=" + photographers[i].name);
                a.setAttribute('data-userId', photographers[i].id);
                a.setAttribute('aria-label', photographers[i].name);
                a.setAttribute('data-userName', photographers[i].name);

                const imgBox = document.createElement('div');
                    imgBox.classList.add('imgBox');
                    imgBox.setAttribute("tabindex", "-1");
            
                    const img = document.createElement( 'img' );
                        img.setAttribute("tabindex" , "-1");
                        img.setAttribute("src", imagePath + photographers[i].portrait);
                        img.setAttribute("alt", photographers[i].name);
                
                imgBox.appendChild(img);

                const h2 = document.createElement('h2');
                    h2.textContent = photographers[i].name;
                    h2.classList.add('userName');
            
                a.appendChild(imgBox);
                a.appendChild(h2);

                const figCaption = document.createElement('figcaption');

                    const p1 = document.createElement('p');
                    p1.classList.add("userLocation");
                    p1.innerText = `${photographers[i].city}, ${photographers[i].country}`;    
                    p1.setAttribute("tabindex"  , "0");           

                    const p2 = document.createElement('p');
                    p2.classList.add("userTagline");
                    p2.innerText = photographers[i].tagline;
                    p2.setAttribute("tabindex"  , "0");

                    const p3 = document.createElement('p');
                    p3.classList.add("userPrice");
                    p3.setAttribute('aria-label', `${photographers[i].price} euro par jour`)
                    p3.innerText = `${photographers[i].price}€/jour`;
                    p3.setAttribute("tabindex"  , "0");

                figCaption.appendChild(a);
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
