import { createLikeButton } from "./likeButton.js";
import { mediaBaseUrl } from "../config/config.js";
import { openLightbox } from "./modals.js"


const createMediaElement = (media, name) => {
    const figure = document.createElement('figure');
    figure.classList.add('mediaCard');
    figure.setAttribute('tabindex', "-1")
    figure.setAttribute('data-date', media.date);
    figure.setAttribute('data-likes', media.likes);
    figure.setAttribute('data-title', media.title);
    figure.setAttribute('data-mediaId', media.id);
    figure.setAttribute('data-mediaTitle', media.title);
    figure.style.cursor = "pointer";

        const mediaContentBox = document.createElement('div');
        mediaContentBox.classList.add('mediaContentBox');

            const frame = document.createElement('div');
            frame.classList.add('frame');
    
    

            if (isMediaVideo(media)) {
                figure.setAttribute('data-media', "video");
                frame.appendChild(createVideoElement(media, name));
                    
                frame.appendChild(videoPlayButton());
            } else {
                figure.setAttribute('data-media', "image");
                frame.appendChild(createImgElement(media, name));
            }
                const captionBox = document.createElement('div');
                captionBox.classList.add('captionBox');
                captionBox.appendChild(createFigCaption(media))
                captionBox.appendChild(createLikeBox(media));

    
        mediaContentBox.appendChild(frame)
        mediaContentBox.appendChild(captionBox);

        mediaContentBox.addEventListener('click', (e) => {
            openLightbox(e.currentTarget.parentElement);
        })

    figure.appendChild(mediaContentBox);
    return figure;
}

const createVideoElement = (media, name) => {
    const video = document.createElement('video');

    video.setAttribute('tabindex', "0");
    video.controls = false;
    video.classList.add("media");
    const source = document.createElement('source');
    source.setAttribute('src', mediaBaseUrl + "/" + name + "/" + media.video);
    video.classList.add('media');
    video.appendChild(source);
    return video
}

const createImgElement = (media, name) => {
    const img = document.createElement('img');
    img.setAttribute('tabindex', "0")
    // img.id = "media" + media.id;
    img.classList.add('media');
    img.setAttribute('src', mediaBaseUrl + "/" + name + "/" + media.image);

    return img;
};

const createFigCaption = (media) => {
    const figcaption = document.createElement('figcaption');
    figcaption.setAttribute('tabindex', "0")
    figcaption.innerText = media.title;

    return figcaption;
};

const createLikeBox = (media) => {
    const likeBox = document.createElement('div');
        likeBox.classList.add('likeBox');
        likeBox.style.pointerEvents = "none";

        const likeCounter = document.createElement('p');
        likeCounter.setAttribute('tabindex', "0")
        likeCounter.id = 'likeCounter' + media.id;
        likeCounter.innerText = media.likes;

        

        likeBox.appendChild(likeCounter);
        likeBox.appendChild(createLikeButton(media.id));
        
        return likeBox
};

const isMediaVideo = (obj) => {
    return Object.hasOwn(obj, 'video');
};

const videoPlayButton = () => {
    const playBtn = document.createElement('span');
    playBtn.classList.add('playBtn');
    playBtn.classList.add("icon");
    playBtn.innerText = "play_circle";

    return playBtn;
}

export { createMediaElement }