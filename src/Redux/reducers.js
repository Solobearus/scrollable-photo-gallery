
import {
    LOAD_PHOTOS,
    OPEN_MODAL,
    CLOSE_MODAL,
    NEXT_PHOTO,
    PREV_PHOTO,
} from './actions'

const initialState = {
    searchTag: null,
    photos: [],
    page: 1,
    currentImg: null,
    ShowModal: false,
};

function mainReducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_PHOTOS:

            let updatedPhotos = action.payload.page === 1 ? [] : [...state.photos];
            updatedPhotos.push(...action.payload.photos);
            return {
                ...state,
                searchTag: action.payload.tags,
                photos: updatedPhotos,
                page: ++action.payload.page
            };

        case OPEN_MODAL:
            return {
                ...state,
                currentImg: action.payload,
                ShowModal: true
            };

        case CLOSE_MODAL:
            return { ...state, ShowModal: false };

        case NEXT_PHOTO:
            return { ...state, currentImg: ++state.currentImg };

        case PREV_PHOTO:
            return { ...state, currentImg: --state.currentImg };

        default:
            return state
    }
}

export default mainReducer