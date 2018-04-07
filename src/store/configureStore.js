import {createStore, combineReducers, compose} from 'redux';

import placesReducer from './reducers/places'

//생성한 리듀서 통합
const rootReducer = combineReducers({
    places: placesReducer
});

const composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    //합쳐진 reducer를 이용하여 스토어 생성
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;
