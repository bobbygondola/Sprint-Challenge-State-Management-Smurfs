import React, { useState} from 'react'
import {connect } from 'react-redux'
import { addSmurfs } from '../store/actions/actions'
import axios from 'axios'

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({
        name:'',
        age:'',
        height:'',
    })
    const onChange = (e) => 
    setSmurf({
        ...smurf,
        [e.target.name]: e.target.value
    })

    const onSubmit  = e => {
        e.preventDefault();
        props.addSmurfs(smurf);
        setSmurf({
            name: '',
            age: '',
            height: ''
        });
    }

    return (
        <div className="formDiv">
            <form onSubmit={onSubmit} className="form">
                <h2>Add a Smurf!</h2>
                <input type="text" name="name" placeholder="Smurfy Name" value={smurf.name} onChange={onChange} />
                <input type="number" name="age" placeholder="Smurfy Age" value={smurf.age} onChange={onChange} />
                <input type="text" name="height" placeholder="Smurfy Height" value={smurf.height} onChange={onChange}/>
                <button type = 'submit'>Submit</button>
                <button>SHOW ME MY SMURFS</button>
            </form>
            
        </div>
    )
    
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurfs})(SmurfForm);