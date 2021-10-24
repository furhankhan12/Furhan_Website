import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Weather = () => {
    const api = {
        key : `&appid=f4f9383eef9528bc3c297b858a4a07b0`,
        url : `https://api.openweathermap.org/data/2.5/weather?q=`,
    }
    const [city,setCity] = useState('New York')
    const[weather,setWeather] = useState(null)
    useEffect(() => {
        apiCall(city)
    }, [])

    async function apiCall(cityName){
        setCity(cityName)
        const loc = `${api.url}${cityName}&units=imperial${api.key}`
        await axios.get(loc)
        .then(resp => {
          const result = resp.data
          const forecast = [result.name,result.main.temp,result.weather[0].icon,
          result.weather[0].main,result.main.humidity,result.wind.speed]
        setWeather(forecast)
    }).catch(error => {
            setWeather(null)
            console.log(error)});
    };

    const handleChange = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        apiCall(city)

    }
    return (
        <section className="mt-5 mb-5">
    
        <div className="row">

            <div className="col-md-6 mb-2">
            <h3 className="h3 mb-3 text-center"> Featured Project</h3>
            <hr className = "w-75"></hr>
            <div className = "text-center">
            <strong>Open Weather API Demo</strong>
            </div>
            <p className = "text-center"><br></br>This is a demo of an application I created using OpenWeather's free API. </p>
            <p className = "text-center">It display's the current weather of any city in OpenWeater's database. 
                In the future I plan to expand on this project to automatically generate the current weather based on the user's location and also introduce more extensive error handling
            </p>
            <div className = "text-center" id="icon"><img className = "wicon" src='openweather_logo.jpg' ></img> <br></br> <br></br></div>
            <p className = "container text-center">
                <strong>Try it out! Just enter the name of any city</strong>
            </p>
            <br></br>
            <div className = "text-center">
            <div className="form-outline">
            <form onSubmit = {handleSubmit}>
            <input type="text" id="form1" className="form-control"  onChange = {handleChange} value = {city}/>
            <label className="form-label" htmlFor="form1">Search Any City</label>
            </form>
            </div>
            </div>
            </div>
<div className="col-md-6 mb-1">

{ !!weather ?
(
<div className = "container flex-center">
<div className="card">

<h6>{weather[0]}</h6>
<div className = "stuff">{weather[3]}<span>Wind: {weather[5]} mph <span className="dot">•</span> Humidity {weather[4]}%</span></div>
<h5>{Math.round(weather[1])}°</h5>
<div className="weather">
<div className = "text-right postion-relative top-5" id="icon"><img id="wicon" src={`https://openweathermap.org/img/wn/${weather[2]}@4x.png`} alt="Weather icon"></img></div>
</div>
</div>


</div>
) :   (
<div className = "weatherSpinner d-flex justify-content-center align-items-center" >       
<div className="spinner-border text-primary" role="status">
 <span className="visually-hidden"></span>
</div></div>)}
</div>    
</div>
</section>


    )
}

export default Weather