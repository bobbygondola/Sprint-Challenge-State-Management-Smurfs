import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from "../store/actions/actions"
import Card from "../components/Card"

const Home = props => {
  useEffect(() => {
    props.fetchSmurf();
  }, []);
  
  return (
      <div>
        {props.smurfs && props.smurfs.map(smurf => {
            return (
            <Card smurf={smurf} key={smurf.id}/>
            )
        })}
      </div>
  )
};

const mapStateToProps = (state) => {
    console.log('mSTP state log', state)
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchSmurf })(Home)