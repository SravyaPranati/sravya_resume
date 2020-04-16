import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';
import Data from '../data/data.json';
import Summary from './Summary.js';
import Skill from './Skill'

class Content extends Component{
  render(){

    return(
      <div className="col-md-8">
      <div className="card bg-light border-primary mb-3" style={{padding:'1%'}}>
      <Summary/>

      <section>
      <h5>Education</h5>
      <p> B-Tech (Computer Science and Engineering),Vasireddy Venkatadri Institute of Technology - 2020 </p>
      </section>
      <section>
          <h5>Certifications</h5>
          <ul>
              <li>
                            Certified by IIT Madras through NPTEL on
                            <ul>
                            <li>Programming, Data Structures, and Algorithms using Python</li>
                            <li>R software</li>
                            <li>Problem-Solving through programming in C & JAVA</li>
                            <li>Database Management Systems</li>
                            <li>Machine Learning</li>
                            </ul>	

              </li>
              <li>Certified as Android Developer in Nanodegree by Udacity</li>
              <li>Certified as Full Stack Developer by Udemy</li>
              <li>Pursued Android Development Phase- I & II by APSSDC</li>
          </ul>
      </section>
      <section>
          <h5>ACHIEVEMENTS</h5>
          <ul>
                 <li>Hold professional membership in ACM Chapter of VVIT and acting as Team Lead</li>
                <li>Took part in Smart India Hackathon 2019 by AICTE,India</li>
                <li>Organised SPARDHA-2019(ACM ANNUAL TECHNICAL FEST) in VVIT</li>
                <li>Organised CAMPUS INNOVATION CHALLENGE 2019 in collaboration with APSSDC,AP</li>
          </ul>
      </section>
      <section>
          <h5>Projects</h5>
          <ul>
              <li>VVIT BALOTSAV– Mobile Application
                  <ul>
                      <li>
                      Vvit Balotsav is celebrated every year in the month of  November . This  is International Event. It helps you to register for the events in the application.
                      </li>
                  </ul>
              </li>
              <li>PEPDS – Mobile Application
                  <ul>
                      <li>
                      PEPDS gives the complete details about the student to his parents ,faculty and student in any engineering college
                     </li>
                  </ul>
              </li>
              <li>ENTERTAINMENT ZONE  – Mobile Application
                  <ul>
                      <li>
                      Entertainment Zone gives the complete details about the television shows which are popular and top_rated and they can add them to their favorites.
                      </li>
                  </ul>
              </li>
              <li>BAKE YOUR CAKE –  Mobile Application
                  <ul>
                      <li>
                      Bake Your Cake gives the complete details about the complete steps how to bake your own cake
                      </li>
                  </ul>
              </li>
              <li>KITCHEN READY –  Mobile Application
                  <ul>
                      <li>
                      Kitchen Ready used to book the time and date to enhance the kitchen cleaning.                      </li>
                  </ul>
              </li>
              
          </ul>
      </section>
      <Skill/>
      </div>
      </div>
    )
  }
}

export default Content;
