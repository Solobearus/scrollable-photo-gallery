
import {
    EXAMPLE_ACTION,
} from './actions'

const initialState = {
    change : null
};

function firstReducer(state = initialState, action) {

    switch (action.type) {
        case EXAMPLE_ACTION:
            const newChange = state.change;
            console.log(`Reducer: some change was made to state.change`);
            return {...state, change : newChange};

        default:
            return state
    }
}

export default firstReducer