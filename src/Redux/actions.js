
import * as asyncAction from './asyncActions'

// config
 
const key = "dad52b05158f7066db96c26b647a4831";

// action types

export const LOAD_PHOTOS = 'LOAD_PHOTOS'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const NEXT_PHOTO = 'NEXT_PHOTO'
export const PREV_PHOTO = 'PREV_PHOTO'

// action creators

export function fetchPhotos(payload) {
    console.log("payload",payload);
    
    return dispatch => {
        asyncAction.fetchPhotosAsync(key, payload.page, payload.tags, dispatch)
    }
};

export function load_photos(payload) {
    return { type: LOAD_PHOTOS, payload }
};

export function open_modal(payload) {
    return { type: OPEN_MODAL , payload }
};

export function close_modal() {
    return { type: CLOSE_MODAL }
};

export function next_photo() {
    return { type: NEXT_PHOTO }
};

export function prev_photo() {
    return { type: PREV_PHOTO }
};
