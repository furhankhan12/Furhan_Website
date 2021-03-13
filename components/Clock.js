
import React,{useState,useEffect} from 'react'
const Clock = () => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const [date,setDate] = useState(new Date())
    useEffect(() => {
        var time = setInterval(() => tick(),1000)
        return () => {
            clearInterval(time)

        }
    })
    function tick(){
        setDate(new Date())
    }
    return(
        <strong id="clock"> { days[date.getDay()] + " " +  date.toLocaleTimeString()}</strong>
    )
}

export default Clock