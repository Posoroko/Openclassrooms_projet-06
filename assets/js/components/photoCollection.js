import { photographerPageNodes } from "../dom/domElements.js";
import { filterPhotoCollection } from "../tools/filterPhotoCollection.js";
import { initialImageSorting } from "../config/config.js";

import { createMediaElement } from "./mediaElement.js";

const createPhotoCollection = (media, name) => {
    const collection = photographerPageNodes.photoCollection;
 
    for(let i = 0; i < media.length; i++) {

        collection.appendChild(createMediaElement(media[i], name));

    }
    filterPhotoCollection(initialImageSorting);
};



export { createPhotoCollection }