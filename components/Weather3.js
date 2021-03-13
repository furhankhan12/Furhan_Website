import React from 'react'

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

const Weather = ({handleChange,currentCity,handleSubmit,icon,cityName, description,temp, windSpeed, humidity, loading}) => {

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
        <section className="mt-5 mb-5 wow fadeIn">
    
        <div className="row">

        <div className="col-md-6 mb-4">

<h3 className="h3 mb-3"> Featured Project</h3>
<strong>Open Weather API Demo</strong>
<div className = "text-center" id="icon"><br></br><img className = "wicon" src='openweather_logo.jpg' ></img></div>
<p><br></br>This is a demo of an application I created using OpenWeather's free API. </p>
<p>It display's the current weather of any city in OpenWeater's database. 
    In the future I plan to expand on this project to automatically generate the current weather based on the user's location and also introduce more extensive error handling
</p>
<p className = "container text-center">
    <strong>Try it out! Just enter the name of any city</strong>
</p>
<br></br>
<div className = "text-center">
<div className="form-outline">
<form onSubmit = {handleSubmit}>
  <input type="text" id="form1" className="form-control"  onChange = {handleChange} value = {currentCity}/>
  <label className="form-label" htmlFor="form1">Search Any City</label>
</form>
</div>
</div>
</div>
<div className="col-md-6 mb-1">

{!loading ? (<div className = "d-flex justify-content-md-center align-self-center" >       
 <div className="spinner-border text-success" role="status">
  <span className="visually-hidden"></span>
</div></div>) : (
<div className = "container">
<div className="card">

<h6>{cityName}</h6>
<div className = "stuff">{description}<span>Wind: {windSpeed} mph <span className="dot">•</span> Humidity {humidity}%</span></div>
<h5>{Math.round(temp)}°</h5>
<div className="weather">
<div className = "text-right postion-relative top-5" id="icon"><img id="wicon" src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather icon"></img></div>
</div>
</div>


</div>
)}
</div>    
</div>
</section>

    );
    }

export default Weather

