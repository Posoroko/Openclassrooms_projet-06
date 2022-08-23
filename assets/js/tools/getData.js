import { dataUrl } from '../config/config.js';

const getData = async (foo) => {
    let docs = null;

    await fetch(dataUrl)
    .then(res => {
        return res.json()
    })
    .then(data => {
        docs = data;
    });
    console.log(docs[foo]);
    
    return docs;
    
}



const getPhotographers = async () => {

    let photographers = null

    await fetch(dataUrl)
    .then(res => {
        return res.json()
    })
    .then(data => {
        photographers = data.photographers
    });

    return photographers
}

const getPhotographerById = async (id) => {
    const photographers = await getPhotographers();
    return photographers.find(obj => obj.id == id);
}

const getImagesByPhotographerId = async (id) => {
    console.log(id);

    let photographers = null
    await fetch(dataUrl)
    .then(res => {
        return res.json()
    })
    .then(data => {
        photographers = data.photographers
    });

    console.log(photographers);
}

const getMediaByUserId = async (id) => {

    const data = await getData()
    let media = [];

    for(let i = 0; i < data.media.length; i++) {

        if(data.media[i].photographerId == parseInt(id)) {

            media.push(data.media[i]);
        }
    }
    return media
}
 

export  { getData, getPhotographers,getPhotographerById, getMediaByUserId }










// async function getOnePhotographer() {
//     // Penser à remplacer par les données récupérées dans le json
//     const photographers = await fetch('../data/photographers.json', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }).then(function (res) {
//       if (res.ok) {
//         return res.json();
//       }
//       return false;
//     });
  
//     const filteredPhotographer = photographers.photographers.find(
//       (photographer) => Number(photographer.id) === Number(photographerId),
//     );
//     return filteredPhotographer;
//   }