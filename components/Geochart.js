import Chart from 'react-google-charts'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
export default function Geochart() {
    const [covid, setCovid] = useState(null)
    useEffect (() => {
        if (covid === null){
            apiCall()
        }
    }, [covid])

    async function apiCall(){
        const url = "https://api.covidtracking.com/v1/states/current.json"
        await axios.get(url).then(resp => {
            const result = resp.data
            const arr = result.map(item => [`US-${item.state}`, item.positive])
            arr.splice(0,0,["State","Positive Cases"])
            setCovid(arr)
        } ).catch(error => {console.log(error)})
    }
    return (
        <div className = "min-vh-100 pt-5">
        <div className = "d-flex flex-column ustify-content-center align-items-center pt-5 pb-5">
            <h1>Total Positive Covid Cases</h1>
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
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
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
