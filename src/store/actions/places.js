import { ADD_PLACE , DELETE_PLACE } from './actionTypes';

//action 타입에 따라 state에 넘겨 받거나 서버에서 가져온 값을 저장함
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
}

export const deletePlace = () => {
    return {
        type:DELETE_PLACE
    };
}
