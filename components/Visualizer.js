import React, { useRef,useState,useEffect} from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from 'react-h5-audio-player'
import Lottie from 'react-lottie-segments';
import * as animationData from '../lib/lottieFiles/playButton.json'
import useInView from 'react-cool-inview'
import Image from 'next/image'

const ATW = {
    albumArt: '/daftHW.jpeg',
    name: 'Around The World',
    artist: 'Daft Punk',
    album: 'Homework'
}
const piano = {
    albumArt: '/songart.jpg',
    name: 'Song For Denise',
    artist: 'Piano Fantasia',
    album: 'Song For Denise - Single'
}

export default function Visualizer(props) {
    const musicTracks = ['Around_The_World.mp3','Sample_Track.mp3']
    const {observe,inView} = useInView({
        onEnter: ({unobserve}) => unobserve()
      })
    const [playing,setPlaying] = useState(null)
    const [trackInfo, setTrackInfo] = useState(ATW)
    const [track, setTrack] = useState('Around_The_World.mp3')
    const [preview, setPreview] = useState(null)
    const ampValue = useRef(null)

    function styleVisualizer(amplitudes){

        ampValue.current = amplitudes;
        let soundBar = props.frequencyBandArray.map((id) =>
          document.getElementById(id))

          for (let i=0; i<props.frequencyBandArray.length; i++){
            let id = props.frequencyBandArray[i]
            let heightValue = Math.min(ampValue.current[id]*.8,240)
            soundBar[id].style.height = `${heightValue}px`
            soundBar[id].style.backgroundColor = styleBand(ampValue.current[id])
        }
    }
    function styleBand(currentAmp){
        switch (track){
            case('Around_The_World.mp3'):
                return `rgb(${currentAmp},0,130)`
            case('Sample_Track.mp3'):
                return `rgb(252,${currentAmp}, 17)`
            default:
                return `rgb(${currentAmp},0,130)`
        }
    }
    function runSpectrum(){
        props.getFrequency(styleVisualizer)
        requestAnimationFrame(runSpectrum)
    }
    function format(song){
        return (song.slice(0,song.length-4))
    }
    function toggle(){
        preview ?? setPreview(false);
        playing ?? setPlaying(true);
        props.buildContext()
        requestAnimationFrame(runSpectrum)
    }
    useEffect(() => {
       track === musicTracks[0] ? setTrackInfo(ATW) : setTrackInfo(piano)
    }, [track])
    function toggleTrack(event) {
        setTrack(event.target.value)
        playing === null ? setPlaying(true) : toggle()
    }
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    const sequence = {
        segments: [120, 230],
        forceFlag: true
      }
    return (
        <div className = "row mt-2 mb-4" ref = {observe}>
            {inView &&
            <div className = "col-lg-6 col-md-12 d-flex justify-content-center mb-5" >
                <div className = 'bigContainer z-depth-2 lazyLoadUp'>
                    {preview === null && 
                        <div className = 'previewText'>
                             <Lottie 
                             isClickToPauseDisabled={true}
                             options={defaultOptions}
                             height ={200}
                             width = {200}
                             playSegments = {sequence}/>
                        </div>}
                    {preview === false && 
                    <div className = 'visualizerAlbum'>
                        <Image height = {75} width = {75} src = {trackInfo.albumArt} className = 'visualArt'></Image>
                        <div className = "visualizerTrackInfo">
                            <strong>{trackInfo.name} - {trackInfo.artist}</strong>
                            <p>{trackInfo.album}</p>
                        </div>
                    </div>
                    }
                    <div className = 'visualizerContainer'>
                        {props.frequencyBandArray.map((id,ind) => 
                        <div
                            className='frequencyBands'
                            id={id}
                            key={id}
                        />
                        
                        )
                        
                        }
                    </div>
                    <AudioPlayer
                    src = {track}
                    ref = {props.player}
                    onPlay = {toggle}
                    onPause = {toggle}
                    className = "audioPlayerContainer"
                    >
                    </AudioPlayer>
                </div>
            </div>
        }
        <div className = "col-lg-6 col-md-12 mb-4 ">
            <div className = "container">
                <h3 className="h3 text-center"> Music Visualizer</h3>
                <hr className = "w-75"></hr>
                <p>Check out my music visualizer that I developed using Mozilla's Web Audio API. This is a project that
                combines my passion for music and software engineering into one cohesive project. It is one of the projects that I am most proud
                 of and I believe it highlights my skills and capabilities as a software engineer. 
                </p>
                <p>It works by mapping the frequency of
                a song at a given playtime to a series of dom elements in real time. My visualizer supports full play and pause functionality 
                as well as multiple track select. Try it out by simplying pressing play or by selecting one of the featured tracks.
                </p>

                <label className = 'd-block w-100'>Select a Track
                    <select value = {track} onChange = {(e) => toggleTrack(e)} className = "trackSelect">
                        {musicTracks.map((song,idx) =>
                                <option key = {idx} value = {song}>{format(song)}</option>
                        )}

                    </select>
                </label>
            </div>
        </div>

        </div>
    )
}