import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";

export const fetchSmurf = () => {
return (dispatch) => {
dispatch({type: FETCH_SMURF_START })
axios
.get(
    "http://localhost:3333/smurfs"
    ).then((res) => {
        console.log('this is from the .get axios call..res.data', res.data);
        dispatch({type: FETCH_SMURF_START, payload: res.data})
    });
  };
};
//possibly axios.post