import * as actions from './actions'

export const fetchPhotosAsync = (key, page, search, dispatch) => {

    const galleryid = "66911286-72157647277042064";
    const tags = 'wolf';
    const per_page = '20';
    console.log("page", page);
    // fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=${key}&per_page=${per_page}&page=${page}&format=json&nojsoncallback=1`)
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=${per_page}&page=${page}&api_key=${key}&tags=${tags}&format=json&nojsoncallback=1`)
    // fetch(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${key}&gallery_id=${galleryid}&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then((result) => {
            console.log(result.photos.photo);
            dispatch(actions.load_photos(result.photos.photo));
        })
        .catch((err) => {
            console.log("err:",err);
        })
};
