import { FETCH_SMURF_START } from '../actions/actions'


export const initialState = {
    data: ''
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                data: action.payload
            }
            default: 
            return state;
    }
}