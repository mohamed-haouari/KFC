import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    products: productReducer
})

const store = createStore(rootReducer)