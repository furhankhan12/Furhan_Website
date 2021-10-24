import Chart from 'react-google-charts'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
const states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  "North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]

function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}
export default function Geochart() {
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 2)
    console.log(currentDate)
    console.log(yesterday.toISOString());
    const [covid, setCovid] = useState(null)
    useEffect (() => {
        if (covid === null){
            apiCall()
        }
    }, [covid])

    async function apiCall(){
        const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/us_only?min_date=${yesterday.toISOString()}&max_date=${currentDate.toISOString()}`
        await axios.get(url).then(resp => {
            const result = resp.data
            const parsed = result.reduce((map,obj) => {
                map[obj.state] = get(map,obj.state,0) + obj.confirmed;
                return map;
            },{})

            const arrOfResults = Object.entries(parsed).filter(item => states.includes(item[0]))
            arrOfResults.splice(0,0,["State","Confirmed Cases"])
            setCovid(arrOfResults);
        } ).catch(error => {console.log(error)})
    }
    return (
        <div className = "min-vh-50 pt-5">
        <div className = "d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
            <h1>Covid GeoChart </h1>
            <hr className = "w-50"></hr>
            <h2>Total Positive Covid Cases (Updated Daily)</h2>
            {covid ? 
            <Chart
            width={'80vw'}
            height={'100vh'}
            chartType="GeoChart"
            data={covid}
            options = {{
                backgroundColor: '#717E8E',
                region: 'US',
                displayMode : 'regions',
                resolution : 'provinces',
                colorAxis : {colors : ['#DCDCDC','red']},
            }}
            mapsApiKey="AIzaSyBwIZfC5nenr8wwGRcYUt8oOVC0MGSsSqk"
            rootProps={{ 'data-testid': '1' }}
            /> : 
            <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          }
        </div>
        </div>
    )
}
