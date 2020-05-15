import { FETCH_SMURF_START, ADD_SMURFS } from '../actions/actions'



export const initialState = {
    smurfs: [],
    isFetching: false
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                smurfs: action.payload
            }
            case ADD_SMURFS: 
            return{
                ...state
            }
            default: return state;
    }
}