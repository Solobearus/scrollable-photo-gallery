
import {
    LOAD_PHOTOS,
    OPEN_MODAL,
    CLOSE_MODAL,
    NEXT_PHOTO,
    PREV_PHOTO,
} from './actions'

const initialState = {
    photos: [],
    page: 1,
    currentImg: null,
    ShowModal: false,
};

function mainReducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_PHOTOS:
            let updatedPhotos = [...state.photos];
            updatedPhotos.push(...action.payload);
            return { ...state, photos: updatedPhotos, page: ++state.page };

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