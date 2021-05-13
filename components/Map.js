import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

import Link from 'next/link'

const defaultCenter = { lat: 38.776590, lng: -77.616270 };

const defaultOptions = { scrollwheel: true };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8.5}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };

const Map = () => {
    return (
        <section className="mt-5">
    
    
        <div className="row flex-center">

        
          <div className="col-lg-6 col-md-10 mb-4">
            <br></br>
            <br></br>
          <RegularMap
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwIZfC5nenr8wwGRcYUt8oOVC0MGSsSqk"
  loadingElement={<div style={ loadingElementStyle } />}
  containerElement={<div style={ containerElementStyle } />}
  mapElement={<div style={ mapElementStyle } />}
/>

    </div>
        

        
          <div className="col-lg-6 col-md-10 mb-4">

            <h3 className="h3 mb-3"> About Me</h3>
            <p>My name is Furhan Khan and I am software developer from Northern Virginia. I recently graduated from the University of Virginia with a degree in computer science and am now looking for a full-time role to utilize my skills to make a real-world impact.</p>
            <p>I am passionate about software development, particularly web-development. I am also a quick and avid learner who is always willing to expand my skill-set and emerse myself in the newest technologies</p>
            <p>
                Outside of VS code I would describe myself as a fun and energetic person who's always striving to be better every day.
            </p>

            <a target="_blank" href= "/Furhan_Khan_Resume.pdf" className="btn btn-grey btn-md">Download
              <i className="fas fa-download ml-1"></i>
            </a>
            <Link href = "/movies">
            <a className="btn btn-grey btn-md">Live Demo
              <i className="far fa-image ml-1"></i>
            </a>
            </Link>

          </div>
        

        </div>


      </section>

    )
}

export default Map