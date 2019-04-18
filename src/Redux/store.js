import { createStore , combineReducers , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import firstReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(
    combineReducers({
        firstReducer
    }),
    {},
    composeWithDevTools(applyMiddleware( logger, thunk))
)