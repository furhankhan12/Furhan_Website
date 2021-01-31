const Carousel = () => {
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
                <source src="https://mdbootstrap.com/img/video/city.mp4" type="video/mp4"></source>
              </video>
        
              <div className ="mask rgba-black-light d-flex justify-content-center align-items-center">
        
                <div className ="text-center white-text mx-5 wow fadeIn">
                  <h1 className ="mb-4">
                    <strong> Damn, bitch you code like this</strong>
                  </h1>
        
                  <p>
                    <strong>Oh how did u know that I'm clinically insane</strong>
                  </p>
        
                  <p className ="mb-4 d-none d-md-block">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                      written versions
                      available. Create your own, stunning website.</strong>
                  </p>
        
                  <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className ="btn btn-outline-white btn-lg"> Link to my cock and balls
                    <i className ="fas fa-graduation-cap ml-2"></i>
                  </a>
                </div>
        
              </div>
        
            </div>
          </div>
        
          <div className ="carousel-item">
            <div className ="view">
        
              <video className ="video-intro" autoPlay loop muted>
                <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4"></source>
              </video>
        
              <div className ="mask rgba-black-light d-flex justify-content-center align-items-center">
        
                <div className ="text-center white-text mx-5 wow fadeIn">
                  <h1 className ="mb-4">
                    <strong>Poggers</strong>
                  </h1>
        
                  <p>
                    <strong>Best & free guide of responsive web design</strong>
                  </p>
        
                  <p className ="mb-4 d-none d-md-block">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                      written versions
                      available. Create your own, stunning website.</strong>
                  </p>
        
                  <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className ="btn btn-outline-white btn-lg">Link To My Cock and Balls
                    <i className ="fas fa-graduation-cap ml-2"></i>
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
        
                <div className ="text-center white-text mx-5 wow fadeIn">
                  <h1 className ="mb-4">
                    <strong>Draiiiiiiin Gannggggg</strong>
                  </h1>
        
                  <p>
                    <strong>Website by: Furhan Khan</strong>
                  </p>
        
                  <p className ="mb-4 d-none d-md-block">
                    <strong>BIG TEXT</strong>
                  </p>
        
                  <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className ="btn btn-outline-white btn-lg">Link To My Cock and Balls
                    <i className ="fas fa-graduation-cap ml-2"></i>
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