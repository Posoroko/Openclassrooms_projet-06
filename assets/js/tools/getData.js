import { dataUrl } from '../config/config.js';

//getData takes one argument: a string representing the type of data to querry

const getData = async (dataType) => {
    let docs = null;

    await fetch(dataUrl)
    .then(res => {
        return res.json()
    })
    .then(data => {
        docs = data[dataType];
    });
    
    return docs;
    
}


const getPhotographerById = async (id) => {
    const photographers = await getData('photographers');
    return photographers.find(obj => obj.id == id);
}

const getMediaByUserId = async (id) => {

    const data = await getData('media')
    let docs = [];

    for(let i = 0; i < data.length; i++) {

        if(data[i].photographerId == parseInt(id)) {

            docs.push(data[i]);
        }
    }

    return docs
}
 

export  { getData, getPhotographerById, getMediaByUserId }










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