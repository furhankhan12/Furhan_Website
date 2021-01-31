import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

const defaultCenter = { lat: 38.776590, lng: -77.616270 };

const defaultOptions = { scrollwheel: true };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
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
        <section className="mt-5 wow fadeIn">
    
    
        <div className="row">

        
          <div className="col-md-6 mb-4">

          <RegularMap
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwIZfC5nenr8wwGRcYUt8oOVC0MGSsSqk"
  loadingElement={<div style={ loadingElementStyle } />}
  containerElement={<div style={ containerElementStyle } />}
  mapElement={<div style={ mapElementStyle } />}
/>

    </div>
        

        
          <div className="col-md-6 mb-4">

            <h3 className="h3 mb-3"> Gang Shit</h3>
            <p>This template is created with Material Design for Bootstrap (
              <strong>MDB</strong> ) framework.</p>
            <p>Read details below to learn more about MDB.</p>

            <p>
              <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
            </p>

            <a target="_blank" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" className="btn btn-grey btn-md">Download
              <i className="fas fa-download ml-1"></i>
            </a>
            <a target="_blank" href="https://mdbootstrap.com/docs/jquery/components/" className="btn btn-grey btn-md">Live
              demo
              <i className="far fa-image ml-1"></i>
            </a>

          </div>
        

        </div>


      </section>

    )
}

export default Map