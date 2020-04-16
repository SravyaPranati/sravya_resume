import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';
import Pic from '../profile.jpg';
import '../App.css';
import Data from '../data/data.json';

class Profile extends Component{
render(){
  var styles={
    boxShadow:'0px 6px 6px -6px #000',
    top:'10px',
    bottom:'50px',
    // border:'1px solid #ddd'
  };
  return(
    <div className="col-md-3">
      <div className="card bg-light border-primary" style={styles}>
      <div className="card-body">
      <img src={Pic} alt="profile"/>
      <h5> {Data.Basics.name} </h5>
      <p> {Data.Basics.role} </p>
      <div style={{fontSize:'14px'}}> <a href="mailto:{Data.Basics.email}"> {Data.Basics.email} </a> </div>
      <a href="tel:{Data.Basics.mobile}"> {Data.Basics.mobile} </a>
      <p style={{fontSize:'14px'}}> {Data.Basics.location} </p>
      
      </div>

      </div>


    </div>
  )
}
}

export default Profile;
