// Client ID : fa3efcf5bf404c368a255ec100434fc3
// Client Secret : df5f5a6a75b74e2f8aa34eacca401aa4
// base64 : ZmEzZWZjZjViZjQwNGMzNjhhMjU1ZWMxMDA0MzRmYzM6ZGY1ZjVhNmE3NWI3NGUyZjhhYTM0ZWFjY2E0MDFhYTQ=

import useSWR from 'swr'
import fetcher from '../lib/fetcher'


// code : AQD3omxEzJXN3b1eEfypaAbV8DTPvGIv0NG1wq4LHXPGqSK89_-6kpSQE4Bdk1hnSztajteATZWMVzraU35qopfosZW2sBHMFDDLOeBUGpbIYqN9rd8tW3pzLLFR2rvw6jbGJx6--XrM2mcQUOV2LHfPB0wEnWtc0ECKkI_xJrFBPgBK6qW182YHAV91GUlfwD5G2wBTkHgQEsgX1rbuNnhBOWbB4Q

// https://accounts.spotify.com/authorize?client_id=fa3efcf5bf404c368a255ec100434fc3&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-top-read

// curl -H "Authorization: Basic ZmEzZWZjZjViZjQwNGMzNjhhMjU1ZWMxMDA0MzRmYzM6ZGY1ZjVhNmE3NWI3NGUyZjhhYTM0ZWFjY2E0MDFhYTQ=" -d grant_type=authorization_code -d code=AQD3omxEzJXN3b1eEfypaAbV8DTPvGIv0NG1wq4LHXPGqSK89_-6kpSQE4Bdk1hnSztajteATZWMVzraU35qopfosZW2sBHMFDDLOeBUGpbIYqN9rd8tW3pzLLFR2rvw6jbGJx6--XrM2mcQUOV2LHfPB0wEnWtc0ECKkI_xJrFBPgBK6qW182YHAV91GUlfwD5G2wBTkHgQEsgX1rbuNnhBOWbB4Q -d redirect_uri=http%3A%2F%2Flocalhost:3000%2F https://accounts.spotify.com/api/token


// {"access_token":"BQAHzr8crlLe2LOioq6D4RQmRDbW8gfpaJZDkQUlMvDHS89S4BvLRJKgRMA52bbLcO1BAro5qNgf60wgySGIaorZanyXPPeu4enkNdsGLjZDm1VpZfHjpvaunHaaZrDcNUANSGr9Bf2gHNDwuyRYwiTl9g","token_type":"Bearer","expires_in":3600,"refresh_token":"AQAcRyYwQMAKJJwtltD6KpyzBZwEFiB0sCcG16Ve4RsJHd7OdghPruZ9C806ESLVtiCa2e_Z9S5eEDoLr4e-1gCO5TpY0ocoDiT4T5ClvtuD3v5qLlXxGZgttjjKyn9Bpzk","scope":"user-read-currently-playing user-top-read"}

//     {(!!data || error) ? data.tracks.map((track,i) => <h1 key = {i}>{track.title} {track.album} <img src = {track.art.url}></img></h1>) : <h1>not there</h1>}
const spotify = () => {
    const {data,error} = useSWR('/api/mytoptracks',fetcher)

    return(
    <section className = "container">
    <h2 className = "my-2 h3 text-center"> My Top 10 Tracks</h2>
    <p className = "text-center">Updated Daily</p>
    <div className = "trackcontainer">

    { (!!data || error) ?    data.tracks.map((track,idx) =>
        <div className="track" key = {idx}>
            <img className="track-img-top" src={track.art} alt="Card image cap"></img>
            <div className="track-body">
                <div className = "container text-center mt-2">
                <h4 className="trackTitle">{track.title}</h4>
                <p className="trackTitle">{track.artist} - {track.album} </p>
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
    <br></br>
    <br></br>
    </section>
    )
}

export default spotify