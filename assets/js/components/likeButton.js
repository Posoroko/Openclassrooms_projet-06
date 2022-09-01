import { photographerPageNodes } from "../dom/domElements.js";

const createLikeButton = (id) => {
    const heart = document.createElement('p');
    heart.setAttribute('tabindex', "0");
    heart.classList.add('heart', "icon", "heartEmpty");
    heart.setAttribute('name', id);

    heart.innerText = "favorite";

    heart.addEventListener('click', toggleLikeButton)

    return heart;
}

const toggleLikeButton = (e) => {
    const heart = e.currentTarget;
    const counter = document.getElementById('likeCounter' + heart.getAttribute('name'));

    if(heart.classList.contains('heartEmpty')) {
        heart.classList.replace('heartEmpty', 'heartFull');
        counter.innerText = parseInt(counter.innerText) + 1;
        photographerPageNodes.totalLikes.innerText = parseInt(photographerPageNodes.totalLikes.innerText) + 1;
        return
        
    } else {
        heart.classList.replace('heartFull', 'heartEmpty');
        counter.innerText = parseInt(counter.innerText) - 1;
        photographerPageNodes.totalLikes.innerText = parseInt(photographerPageNodes.totalLikes.innerText) - 1;
    }

}

export { toggleLikeButton, createLikeButton }