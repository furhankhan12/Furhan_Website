
import React from 'react'
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timer = setInterval(() => this.setState({date : new Date()}))
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    } 
    render(){
    return(
        <strong id="clock"> { days[this.state.date.getDay()] + " " +  this.state.date.toLocaleTimeString()}</strong>
    )
    }
}
