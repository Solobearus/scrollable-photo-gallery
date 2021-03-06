import * as actions from './actions'

export const fetchPhotosAsync = (key, page, tags, dispatch) => {

    const per_page = '30';
            console.log("tags:",tags);

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=${per_page}&page=${page}&api_key=${key}&tags=${tags}&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then((result) => {
            console.log("result:",result);
            dispatch(actions.load_photos({tags, page, photos: result.photos.photo}));
        })
        .catch((err) => {
            console.log("err:",err);
        })
};
