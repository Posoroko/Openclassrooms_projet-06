import { photographerPageNodes } from '../dom/domElements.js';

const getTotalLikes = (medias) => {
    let counter = 0;
    

    for(let i = 0; i < medias.length; i++) {
        counter = counter + medias[i].likes;
    }
    return counter;
}

const setLikesAndDailyRates = (rate, medias) => {
    photographerPageNodes.totalLikes.innerText = getTotalLikes(medias);
    photographerPageNodes.dailyRate.innerText = rate + "€/jour";
}

export { setLikesAndDailyRates }