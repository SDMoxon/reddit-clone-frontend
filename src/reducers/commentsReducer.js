import * as types from '../types';
import {normaliseData} from '../../utils';
export const initialState = {
    comments: {},
    loading: false,
    error: null,
};

export function commentsReducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState);

    if (action.type === types.FETCH_COMMENTS_REQUEST) {
        newState.loading = true;
    }
    else if (action.type === types.FETCH_COMMENTS_SUCCESS) {
        newState.comments = normaliseData(action.payload);
        newState.loading = false;
    }
    else if (action.type === types.FETCH_COMMENTS_FAILURE) {
        newState.error = action.payload;
        newState.loading = false;
    }
    else {
        return prevState;
    }
    return newState;
}