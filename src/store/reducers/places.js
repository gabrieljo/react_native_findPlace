import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

//모든 state와 action을 파라메터로 가져옴
//state = initalState, state가 null일때 초기화 시킴
//return 은 항상 새데이터만
const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_PLACE:
           return {
                ...state, //이전데이터 데이터 변경없으면 그냥 이렇게 보내면됨
                places: state.places.concat({
                            key: Math.random(), 
                            name: action.placeName, //places.js 액션에서 넘겨주는 이름을 대입
                            image: {
                                uri:"https://www.flickr.com/photos/jays_wildlife/4444772918/in/photolist-8jnKX9-4k5R4W-8jjFPX-8ZtG6S-7LLC8Q-dCRSun-e43YR9-5KJynp-pDwyga-4XHKpZ-ehkM6y-iWSdpW-pNjSZk-oU1U2L-kvBmez-7spnmN-WJzCsu-WJzC1N-24n7Jnp-8jjHrz-X2Rbv6-23CMdo6-25yyQG9-RTi8Lx-SmBkwP-pbpDEm-39wJwG-aK4kMP-RSgMnY-8jjHhH-Rapoij-RLWkqc-qizyNU-UbPmEs-vTw3e-UUBXck-F9fSqy-RLWk7r-7DZ33G-x9D2iX-xrxzx-iX63Ai-e9pRGc-SAxX4J-WK2wN1-VMRzi5-TatMLJ-k5VhfP-4cZuqa-2W15DX"
                            }
                        })
           };
        case DELETE_PLACE:
            return{
                ...state,
                    places: state.places.filter( place => {
                        return place.key !== state.selectedPlace.key;
                    })
            };
        default:
            return state;
    }
}

export default reducer;