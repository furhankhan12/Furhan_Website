import Head from 'next/head'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBRow,
} from 'mdbreact'
import React,{Component} from 'react'
import Carousel from '../components/Carousel'
import Map from '../components/Map'
import Weather from '../components/Weather'
import axios from 'axios'
const divStyle = {
  height : '15px'
  }

  const divStyle2 = {
  height : '30px'
  }

const api = {
    key : `&appid=f4f9383eef9528bc3c297b858a4a07b0`,
    url : `http://api.openweathermap.org/data/2.5/weather?q=`,
}


export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentCity: "London",
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await this.apiCall(this.state.currentCity)
  }

  async apiCall(cityName){
    this.setState({loading: true});
    const loc = `${api.url}${cityName}&units=imperial${api.key}`
    await axios.get(loc)
    .then(result => {
      const forecast = result.data;
      this.setState({
      cityName: forecast.name,
      temp : forecast.main.temp,
      iconId : forecast.weather[0].icon,
      description : forecast.weather[0].main,
      humidity : forecast.main.humidity,
      windSpeed: forecast.wind.speed,
    })}).catch(error => {this.setState({loading: false})
        console.log(error)});
    };

  handleChange(e){
      e.preventDefault();
      this.setState({
        currentCity : e.target.value
      });
      }
    handleSubmit(e){
      e.preventDefault();
      this.apiCall(this.state.currentCity)
    }

  render(){
  return (
    <>
<Carousel></Carousel>
<main>
        <div className="container">
    
         <Map></Map>
        
        <Weather 
          cityName = {this.state.cityName}
          temp = {this.state.temp}
          icon = {this.state.iconId}
          description = {this.state.description}
          humidity = {this.state.humidity}
          windSpeed = {this.state.windSpeed}
          handleSubmit = {this.handleSubmit}
          handleClick = {this.state.handleClick}
          handleChange = {this.handleChange}
          currentCity = {this.state.currentCity}
          loading = {this.state.loading}

        ></Weather>
          <section>
    
            <h3 className="h3 text-center mb-5">About MDB</h3>
    
    
            <div className="row wow fadeIn">
    
            
              <div className="col-lg-6 col-md-12 px-4">
    
          
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-code fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h10 className="feature-title">Bootstrap 4</h10>
                    <p className="grey-text">Thanks to MDB you can take advantage of all feature of newest Bootstrap 4.</p>
                  </div>
                </div>
            
    
                <div style= {divStyle2}></div>
    
            
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-book fa-2x blue-text"></i>
                  </div>
                  <div className="col-10">
                    <h10 className="feature-title">Detailed documentation</h10>
                    <p className="grey-text">We give you detailed user-friendly documentation at your disposal. It will help
                      you to implement your ideas
                      easily.
                    </p>
                  </div>
                </div>
              
    
                <div style= {divStyle2}></div>
    
          
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
                  </div>
                  <div className="col-10">
                    <h10 className="feature-title">Lots of tutorials</h10>
                    <p className="grey-text">We care about the development of our users. We have prepared numerous tutorials,
                      which allow you to learn
                      how to use MDB as well as other technologies.</p>
                  </div>
                </div>
            
    
              </div>
              
    
            
              <div className="col-lg-6 col-md-12">
    
                <p className="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowFullScreen></iframe>
                </div>
              </div>
              
    
            </div>
      
    
          </section>
    
    
          <section>
    
            <h2 className="my-5 h3 text-center">Not enough?</h2>
    
      
            <div className="row features-small mb-5 mt-3 wow fadeIn">
    
              
              <div className="col-md-4">
          
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">Free for personal and commercial use</h9>
                    <p className="grey-text">Our license is user-friendly. Feel free to use MDB for both private as well as
                      commercial projects.
                    </p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
            
    
            
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">400+ UI elements</h9>
                    <p className="grey-text">An impressive collection of flexible components allows you to develop any project.
                    </p>
                    <div style={divStyle}></div>
                  </div>
                </div>
              
    
          
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">600+ icons</h9>
                    <p className="grey-text">Hundreds of useful, scalable, vector icons at your disposal.</p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
            
    
            
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">Fully responsive</h9>
                    <p className="grey-text">It doesn't matter whether your project will be displayed on desktop, laptop,
                      tablet or mobile phone. MDB
                      looks great on each screen.</p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
              
              </div>
              <div className="col-md-4 flex-center">
                <img src="https://mdbootstrap.com/img/Others/screens.png" alt="MDB Magazine Template displayed on iPhone"
                  className="z-depth-0 img-fluid"></img>
              </div>
              
              <div className="col-md-4 mt-2">
          
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">70+ CSS animations</h9>
                    <p className="grey-text">Neat and easy to use animations, which will increase the interactivity of your
                      project and delight your visitors.
                    </p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
    
            
    
            
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">Plenty of useful templates</h9>
                    <p className="grey-text">Need inspiration? Use one of our predefined templates for free.</p>
                    <div style={divStyle}></div>
                  </div>
                </div>
              
    
          
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">Easy installation</h9>
                    <p className="grey-text">5 minutes, a few clicks and... done. You will be surprised at how easy it is.
                    </p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
            
    
            
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h9 className="feature-title">Easy to use and customize</h9>
                    <p className="grey-text">Using MDB is straightforward and pleasant. Components flexibility allows you deep
                      customization. You will
                      easily adjust each component to suit your needs.</p>
                    <div style= {divStyle}></div>
                  </div>
                </div>
              
              </div>
            </div>
        
    
          </section>
    
    
          <section>
    
            <h2 className="my-5 h3 text-center">...and even more</h2>
    
      
            <div className="row features-small mt-5 wow fadeIn">
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fab fa-firefox fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2 pl-3">
                    <h10 className="feature-title font-bold mb-1">Cross-browser compatibility</h10>
                    <p className="grey-text mt-2">Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers;
                      all browsers love MDB.
                    </p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-level-up-alt fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">Frequent updates</h10>
                    <p className="grey-text mt-2">MDB becomes better every month. We love the project and enhance as much as
                      possible.
                    </p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-comments fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">Active community</h10>
                    <p className="grey-text mt-2">Our society grows day by day. Visit our forum and check how it is to be a
                      part of our family.
                    </p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">jQuery 3.x</h10>
                    <p className="grey-text mt-2">MDB is integrated with newest jQuery. Therefore you can use all the latest
                      features which come along with
                      it.
                    </p>
                  </div>
                </div>
          
              </div>
              
    
            </div>
        
    
        
            <div className="row features-small mt-4 wow fadeIn">
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-cubes fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">Modularity</h10>
                    <p className="grey-text mt-2">Material Design for Bootstrap comes with both, compiled, ready to use
                      libraries including all features as
                      well as modules for CSS (SASS files) and JS.</p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-question fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">Technical support</h10>
                    <p className="grey-text mt-2">We care about reliability. If you have any questions - do not hesitate to
                      contact us.
                    </p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-th fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">Flexbox</h10>
                    <p className="grey-text mt-2">MDB fully supports Flex Box. You can forget about alignment issues.</p>
                  </div>
                </div>
          
              </div>
              
    
            
              <div className="col-xl-3 col-lg-6">
        
                <div className="row">
                  <div className="col-2">
                    <i className="far fa-file-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h10 className="feature-title font-bold mb-1">SASS files</h10>
                    <p className="grey-text mt-2">Arranged and well documented .scss files can't wait until you compile them.</p>
                  </div>
                </div>
          
              </div>
              
    
            </div>
          
    
          </section>
        </div>
      </main>
    </>
  )
}
}

/*export async function getServerSideProps(){
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=gainesville&units=metric&appid=61815b2f14b7f18f39a7df9bc96575a8')
  const data = await res.json()
  return {forecast : {name :  }}
}
*/
