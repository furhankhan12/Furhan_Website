import useInView from 'react-cool-inview'
const CardSection = () => {
    const divStyle2 = {
        height : '30px'
    }
    const logoStyle = {
        height: '54px',
        width: '84px',
    }
    const {observe,inView} = useInView({
      onEnter: ({unobserve}) => unobserve()
    })
    return (
        <section>
    
        <h3 className="h3 text-center mb-5">Overview</h3>
        

        <div className="row wow fadeIn">

        
          <div className="col-lg-6 col-md-12 px-4">

      
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-user-tie fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h10 className="feature-title"><strong>Professional Objective</strong></h10>
                <p className="grey-text">To obtain a position related to computer science focused on software engineering 
and/or product development.
</p>
              </div>
            </div>
        

            <div style= {divStyle2}></div>

        
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-briefcase fa-2x blue-text"></i>
              </div>
              <div className="col-10">
                <h10 className="feature-title"><strong>Relevant Experience</strong></h10>
                <p className="grey-text"> <strong>Research Assistant (UVA): </strong>Helped improve an existing cataloging application in collaboration with the anthropology department to catalog and map artifacts from various research sites. Worked largely on developing the front-end UI using
Html/Bootstrap/JavaScript, PHP and PostgreSQL
                </p>
              </div>
            </div>
          

            <div style= {divStyle2}></div>

      
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
              </div>
              <div className="col-10">
                <h10 className="feature-title"><strong>Alma Mater</strong></h10>
                <p className="grey-text">Graduated from the University of Virginia in December 2020 with a Bachelors in Computer Science and a minor in Economics</p>
              </div>
            </div>
        

          </div>
          

        
          <div className="col-lg-6 col-md-12" ref = {observe}>
          { inView &&
           <div className = "cardHolder lazyLoadUp">
               <h3><strong>Meet Furhan Khan</strong></h3>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    </div>
                <div className="flip-card-back">
                    <br></br>
                    <h1><strong>Furhan Khan</strong></h1>
                    <div className = "img-fluid"><img src = "uvalogo.png" style = {logoStyle}></img></div>
                    <br></br>
                    <br></br>
                    <strong>University of Virginia</strong>
                    <p>Class of 2020</p>
                    <p>B.A. Computer Science</p>
                </div>
                </div>
              </div>
            </div>
            }
          </div>
          

        </div>
  

      </section>
    )
}

export default CardSection