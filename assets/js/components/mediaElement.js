import { createLikeButton } from "./likeButton.js";
import { mediaBaseUrl } from "../config/config.js";
import { openMediaModal } from "./modals.js";

const createMediaElement = (media, name) => {
    const figure = document.createElement('figure');
    figure.setAttribute('data-date', media.date);
    figure.setAttribute('data-likes', media.likes);
    figure.setAttribute('data-title', media.title);
    figure.style.cursor = "pointer";
    
    if(media.image) {
        figure.setAttribute('data-media', media.image);
    } else {
        figure.setAttribute('data-media', media.video);
    }

    const div = document.createElement('div');
    div.classList.add('frame');
    figure.appendChild(div);

    if (isMediaVideo(media)) {
        div.appendChild(createVideoElement(media, name));
    } else {
        div.appendChild(createImgElement(media, name));
    }
    const captionBox = document.createElement('div');
    captionBox.classList.add('captionBox');
    captionBox.appendChild(createFigCaption(media))
    captionBox.appendChild(createLikeBox(media));

    

    figure.appendChild(captionBox);

    figure.addEventListener('click', () => {
        openMediaModal(div.firstElementChild.cloneNode(true));
    })

    return figure;
}

const createVideoElement = (media, name) => {
    const video = document.createElement('video');
    video.controls = true;
    video.id = "media" + media.id;
    const source = document.createElement('source');
    source.setAttribute('src', mediaBaseUrl + "/" + name + "/" + media.video);
    video.classList.add('media');
    video.appendChild(source);
    return video
}

const createImgElement = (media, name) => {
    const img = document.createElement('img');
    img.id = "media" + media.id;
    img.classList.add('media');
    img.setAttribute('src', mediaBaseUrl + "/" + name + "/" + media.image);

    return img;
};

const createFigCaption = (media) => {
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = media.title;

    return figcaption;
};

const createLikeBox = (media) => {
    const likeBox = document.createElement('div');
        likeBox.classList.add('likeBox');

        const likeCounter = document.createElement('p');
        likeCounter.id = 'likeCounter' + media.id;
        likeCounter.innerText = media.likes;

        

        likeBox.appendChild(likeCounter);
        likeBox.appendChild(createLikeButton(media.id));
        
        return likeBox
};

const isMediaVideo = (obj) => {
    return Object.hasOwn(obj, 'video');
};

export { createMediaElement }