import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const ADD_SMURFS = "ADD_SMURFS";

export const fetchSmurf = () => {
return (dispatch) => {
dispatch({type: FETCH_SMURF_START })
axios
.get(
    "http://localhost:3333/smurfs"
    ).then((res) => {
        console.log('this is from the .get axios call..res.data', res);
        dispatch({type: FETCH_SMURF_START, payload: res.data})
    });
  };
};

export const addSmurfs = smurf => (dispatch) => {
    dispatch({ type: "ADD_SMURFS" })
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
        console.log(res)
    })
    return {
        type: ADD_SMURFS,
        payload: smurf
    }
}
