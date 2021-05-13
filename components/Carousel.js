import Clock from '../components/Clock'

const Carousel = () => {
    const clockStyle = {
        opacity : '.4',
        'fontSize' : '1.5em',
    }
    return (
        <div id="carousel-example-1z" className ="carousel slide carousel-fade" data-ride="carousel">

        <ol className ="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" className ="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>
        <div className ="carousel-inner" role="listbox">
        
          <div className ="carousel-item active">
            <div className ="view">
        
              <video className ="video-intro" autoPlay loop muted>
                <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4"></source>
              </video>
        
              <div className ="mask rgba-black-light d-flex justify-content-center align-items-center">
        
                <div className ="text-center white-text mx-5">
                  <h1 className ="mb-1">
                    <strong>Furhan Khan</strong>
                  </h1>
                   <p>
                  <strong style = {clockStyle}><Clock></Clock></strong>
                  </p>
                  <p className ="mb-4 d-none d-md-block">
                    <strong>A Software Developer Based Out of Northern Virginia</strong>
                  </p>
        
                  <a target="_blank" href="/Furhan_Khan_Resume.pdf" className ="btn btn-outline-white btn-lg"> Download My Resume
                    <i className ="fas fa-download ml-2"></i>
                  </a>
                </div>
        
              </div>
        
            </div>
          </div>
        
          <div className ="carousel-item">
            <div className ="view">
        
              <video className ="video-intro" autoPlay loop muted>
                <source src="https://mdbootstrap.com/img/video/city.mp4" type="video/mp4"></source>
              </video>
        
              <div className ="mask rgba-black-light d-flex justify-content-center align-items-center">
        
                <div className ="text-center white-text mx-5">
                  <h1 className ="mb-1">
                    <strong>Furhan Khan</strong>
                  </h1>
                  <p><strong style = {clockStyle}><Clock></Clock></strong></p>
        
                  <p className ="mb-4 d-none d-md-block">
                    <strong>"If You Set Your Goals Ridiculously High and It's a Failure, You Will Fail Above Everyone Else's Success." - James Cameron</strong>
                  </p>
        
                  <a target="_blank" href="/Furhan_Khan_Resume.pdf" className ="btn btn-outline-white btn-lg">Download My Resume
                    <i className ="fas fa-download ml-2"></i>
                  </a>
                </div>
        
              </div>
        
            </div>
          </div>
        
          <div className ="carousel-item">
            <div className ="view">
              <video className ="video-intro" autoPlay loop muted>
                <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4"></source>
              </video>
        
              <div className ="mask rgba-black-light d-flex justify-content-center align-items-center">
        
                <div className ="text-center white-text mx-5">
                  <h1 className ="mb-1">
                    <strong>Furhan Khan</strong>
                  </h1>
                  <p><strong style = {clockStyle}><Clock></Clock></strong></p>
        
                  <p className ="mb-4 d-none d-md-block">
                    <strong>Alumni of The University of Virginia</strong>
                  </p>
        
                  <a target="_blank" href="/Furhan_Khan_Resume.pdf" className ="btn btn-outline-white btn-lg">Download My Resume
                    <i className ="fas fa-download ml-2"></i>
                  </a>
                </div>
        
              </div>
        
            </div>
          </div>
        
        </div>
        
        <a className ="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
          <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className ="sr-only">Previous</span>
        </a>
        <a className ="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span className ="carousel-control-next-icon" aria-hidden="true"></span>
          <span className ="sr-only">Next</span>
        </a>
        </div>
    )
}

export default Carousel