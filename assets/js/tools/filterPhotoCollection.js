import { photographerPageNodes } from "../dom/domElements.js";

let arrayOfMediaCards = [];

const filterPhotoCollection = (choice) => {

    const parent = photographerPageNodes.photoCollection;
    const children = parent.children;
    const filter = setFilteringAttribute(choice);

    let isSortingDone = false;
    
    do {
        isSortingDone = bubbleSort(parent, children, filter);
        if(isSortingDone) {
            arrayOfMediaCards = parent.children;
        }
    } while(isSortingDone == false) 

}

const bubbleSort = (parent, children, filter) => {
    let isFilteringDone = true;

    switch(filter) {
        case "data-likes":

            for (let i = 0; i < children.length - 1; i++) {

                if(parseInt(children[i + 1].getAttribute(filter)) < parseInt(children[i].getAttribute(filter))) {

                    parent.insertBefore(children[i + 1], children[i]);
                    isFilteringDone = false;
                }
            }

            break;

        case "data-date":

            for (let i = 0; i < children.length - 1; i++) {

                if(new Date(children[i + 1].getAttribute(filter)) < new Date(children[i].getAttribute(filter))) {

                    parent.insertBefore(children[i + 1], children[i]);
                    isFilteringDone = false;
                }
            }

            break;

        case "data-title":

            for (let i = 0; i < children.length - 1; i++) {

                if(children[i + 1].getAttribute(filter) < children[i].getAttribute(filter)) {

                    parent.insertBefore(children[i + 1], children[i]);
                    isFilteringDone = false;
                }
            }

            break;
    }

    

    return isFilteringDone;
    
}

const setFilteringAttribute = (filter) => {

    console.log(filter);
    switch(filter) {

        case "filterBox-1": return "data-date";

        case "filterBox-2": return "data-likes";

        case "filterBox-3": return "data-title";
    }
}


export { filterPhotoCollection, arrayOfMediaCards }