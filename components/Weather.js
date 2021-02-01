import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import styles from '../styles/weather.module.css'
const api = {
    key : '&appid=61815b2f14b7f18f39a7df9bc96575a8',
    url : "https://api.openweathermap.org/data/2.5/weather?q=",
}


/*
<table>
    <tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
    </tr>
    <tr>
        <td>17°</td>
        <td>22°</td>
        <td>19°</td>
        <td>23°</td>
        <td>19°</td>
    </tr>
</table>
*/

/*
const [query,setQuery] = useState('');
const search = async(e) => {
    if (e.key =='Enter') {
        const resp = await forecast(query)
        setWearther(resp);
        setQuery('');
    }
}
*/

const Weather = ({handleChange,currentCity,handleSubmit,icon,cityName, description,temp, windSpeed, humidity}) => {

  //  const [query, setQuery] = useState('');
//    const [weather,setWeather] = useState({});


    /*
    const forecast = target => {
        if (target.key === "Enter") {
           await fetch('${api.url}${query}&units=metric${api.key}.json')
            .then(res => res.json())
            .then(result =>{
                setWeather(result).json();
                setQuery('').json();
                console.log(result)
            });
        }
    }
    */

    return (
        <section className="mt-5 wow fadeIn">
    
        <div className="row">

        <div className="col-md-6 mb-4">

<h3 className="h3 mb-3"> Blah Blah Blah</h3>
<p>This template is created with Material Design for Bootstrap (
  <strong>MDB</strong> ) framework.</p>
<p>Read details below to learn more about MDB.
</p>
<p>
  <strong>400+</strong> material UI elements,
  <strong>answer</strong>,
  <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
  <strong>{cityName} {description}, Temp: {temp} </strong>
  <div className = "text-center" id="icon"><img id="wicon" src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather icon"></img></div>
</p>

<div className="form-outline">
<form onSubmit = {handleSubmit}>
  <input type="text" id="form1" className="form-control"  onChange = {handleChange} value = {currentCity}/>
  <label className="form-label" htmlFor="form1">Search Any City</label>
</form>
</div>
</div>
<div className="col-md-6 mb-1">

    
<div className = "container" style = {styles.styles}>
<div className="card">

<h6>{cityName}</h6>
<h7>{description}<span>Wind: {windSpeed} mph <span className="dot">•</span> Humidity {humidity}%</span></h7>
<h5>{Math.round(temp)}°</h5>
<div className="weather">
<div className = "text-right postion-relative top-5" id="icon"><img id="wicon" src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather icon"></img></div>
</div>
</div>



</div>
</div>    
</div>
</section>

    );
    }

export default Weather

