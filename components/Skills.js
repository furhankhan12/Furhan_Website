import Typed from 'react-typed'
import NoSSR from '../components/NoSSR'
import useInView from 'react-cool-inview'
//import Image from 'next/image'
// import Particles from 'react-particles-js'
const Skills =  () => {

    const divStyle = {
        height : '15px'
    }

    const {observe,inView} = useInView({
      onEnter: ({unobserve}) => unobserve()
    })
/*
          <Particles params={{
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 17,
                    "random": true
                },
                "move": {
                    "direction": "bottom",
                    "outMode" : 'out'
                },
                "line_linked": {
                    "enable": false
                },
                "color":{
                  "value" : "#3f51b5"
                }
            }}} className = "skiller img-fluid mb-3"></Particles>
*/
    return (
        <section>
        
        <div className = "container">
        <h2 className="my-5 h3 text-center">Technical Skills</h2>

  
        <div className="row flex-center" ref = {observe}>

          
          <div className="col-xl-4 col-lg-12">
      
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Front-End Development</h9>
                <p className="grey-text"> I have a strong understanding of the fundamentals of HTML/CSS and Javascript
                </p>
                <div style= {divStyle}></div>
              </div>
            </div>
        

        
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Back-End Development</h9>
                <p className="grey-text"> I have experience with back-end development across multiple frameworks and languages
                </p>
                <div style={divStyle}></div>
              </div>
            </div>
          

      
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Object Orented Programming</h9>
                <p className="grey-text">I have a strong understanding of computer science fundamentals such as OOP and Data Structures & Algorithms and experience coding in all 4 major languages</p>
                <div style= {divStyle}></div>
              </div>
            </div>
        

        
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Database Management</h9>
                <p className="grey-text"> I have experience working with both noSQL and SQL database such as SQL, PostgreSQL, and MongoDB </p>
                <div style= {divStyle}></div>
              </div>
            </div>
          
          </div>
          {inView &&
          <div className="col-xl-4 col-lg-6 col-md-8 lazyLoadUp">
            <NoSSR>
            <div className = "container typedComp">
            <img src  = "/carbon5.png" className = "image-fluid mb-4 w-100 z-depth-3 rounded"></img>
              <Typed
                      strings={['FrontEnd_Skills','BackEnd_Skills','Database_Skills', 'andMore']}
                      typeSpeed={30}
                      backSpeed={40}
                      loop
                      className = "skilltext"
              />
            </div>
            </NoSSR>
          </div>
          }
          
          <div className="col-xl-4 col-lg-12">
      
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Software Testing</h9>
                <p className="grey-text"> I have a strong understanding of the software development lifecycle including testing. I have experience with unit and CI testing as well as scripting experience
                </p>
                <div style= {divStyle}></div>
              </div>
            </div>

        

        
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Software Development Tools</h9>
                <p className="grey-text">I have experience working with entreprise software tools such as GitHub, Docker, SharePoint, and Slack</p>
                <div style={divStyle}></div>
              </div>
            </div>
          

      
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Management Experience</h9>
                <p className="grey-text">As a former assistant manager myself, I have experience managing daily business operations and working with external vendors/clients
                </p>
                <div style= {divStyle}></div>
              </div>
            </div>
        

        
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h9 className="feature-title">Language Skills</h9>
                <p className="grey-text"> Can speak English and Urdu fluently and also have a classroom understanding of the Spanish Language</p>
                <div style= {divStyle}></div>
              </div>
            </div>
          
          </div>
        </div>
    
      </div>
      </section>
    )
}

export default Skills