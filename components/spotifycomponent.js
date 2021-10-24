import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import ScaleText from 'react-scale-text'
import useInView from 'react-cool-inview'
const spotify = () => {
    const {observe,inView} = useInView({
        onEnter: ({unobserve}) => unobserve()
    })
    const {data,error} = useSWR('/api/mytoptracks',fetcher)

    return(
    <section className = "container">
    <h2 className = "my-2 h3 text-center"> Check Out Some Tracks I've Been Jamming To</h2>
    <p className = "text-center" ref = {observe}>Updated Daily via Spotify API</p>
    { inView &&
    <div className = "trackcontainer">

    { (!!data || error) ?    data.tracks.map((track,idx) =>
        <div className="track lazyLoadUp" key = {idx}>
            <img className="track-img-top h-50" src={track.art} alt="Card image cap"></img>
            <div className = "trackbody text-center mt-1 w-100 pl-2 pr-2">
                <div style = {{height : "60px" , width : "100%"}}>
                <ScaleText minFontSize = {21} maxFontSize = {25}>
                <p className = "trackTitle1"> {track.title}</p>
                </ScaleText>
                </div>
                <div className = "container" style = {{height : "85px" , width : "100%"}}>
                <ScaleText minFontSize = {5} maxFontSize = {17}>
                <p className="trackTitle">{track.artist} - {track.album} </p>
                </ScaleText>
                </div>
            </div>
            <div className = "iconContainer">
                <a className = "spoticon" href={track.songUrl} ><i className="fab fa-spotify"></i></a>
            </div>
        </div>
    ):
        <div className = "container text-center" >       
            <div className="spinner-border text-success" role="status">
        <   span className="visually-hidden"></span>
        </div></div> 
    }
    </div>
    }
    <br></br>
    <br></br>
    </section>
    )
}

export default spotify