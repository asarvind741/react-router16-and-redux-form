import {FETCH_POSTS, FETCH_POST} from '../actions/index';
import _ from 'lodash';

export function fetchPostsReducer(state = {}, action) {
    switch(action.type){
        case FETCH_POST:
        return { ...state, [action.payload.id]: action.payload.data};
        case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
    
}


