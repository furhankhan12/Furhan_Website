import Head from 'next/head'

import React from 'react'
import Carousel from '../components/Carousel'
import Map from '../components/Map'
import Weather from '../components/Weather'
import axios from 'axios'
import CardSection from '../components/CardSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const api = {
    key : `&appid=f4f9383eef9528bc3c297b858a4a07b0`,
    url : `https://api.openweathermap.org/data/2.5/weather?q=`,
}


export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentCity: "New York",
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
      e.preventDefault()
      this.apiCall(this.state.currentCity)
    }

  render(){
  return (
    <>
      <Head>
        <title>Furhan's Movie Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Carousel></Carousel>
<main>
        <div className="container">

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
    <CardSection></CardSection> 
    <Map></Map>   
    <Skills></Skills>
    <Projects></Projects>
    

        </div>
      </main>
    </>
  )
}
}

