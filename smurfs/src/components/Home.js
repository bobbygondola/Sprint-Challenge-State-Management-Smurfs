import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from "../store/actions/actions"
import Card from "../components/Card"

const Home = props => {

    console.log('props.data', props.data)
    useEffect(() => {
        props.fetchSmurf();
    }, []);
    
    return (
        <div>
            {props.data.map(smurf => {
                return(
                    <div>
                        <Card smurf={smurf}/>
                    </div>
                )
            })}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    console.log('mSTP state log', {state})
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { fetchSmurf })(Home)