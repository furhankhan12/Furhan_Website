import React, { createRef } from 'react'
import Visualizer from './Visualizer'
class FrequencyMap extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playing : null,
            context : false,
            pause : false,
        }
        this.player = createRef()
        this.frequencyBandArray = [...Array(30).keys()]
    }
     buildContext = () => {
        if(this.state === undefined || this.state.playing === null){
            const songAudio = this.player.current.audio.current
            const ctx = new AudioContext()
            const audioElement = ctx.createMediaElementSource(songAudio)
            const analyser = ctx.createAnalyser()
            audioElement.connect(ctx.destination)
            audioElement.connect(analyser)
            this.setState(
                {
                    data : analyser,
                    playing : true,
                    context : ctx,
                    pause : true

                }
            )

        }
        else if (this.state.pause === true){
            this.state.context.suspend().then( () => {
                this.setState({
                    pause : false
                })
            })
        }
        else if (this.state.playing === true) {
            this.state.context.resume().then( () => {
                this.setState({
                    playing : true,
                    pause : true
                })
            })
        }
            
    }


    getFrequency = (callback) => {
        if (this.state.data){
            const buffer = this.state.data.frequencyBinCount;
            const amp = new Uint8Array(buffer)
            this.state.data.getByteFrequencyData(amp)
            callback(amp)
        }
    }
    render(){
        return(
            <Visualizer
                player = {this.player}
                buildContext = {this.buildContext}
                getFrequency = {this.getFrequency}
                frequencyBandArray = {this.frequencyBandArray}
            >
            </Visualizer>
        )
    }
}

export default FrequencyMap