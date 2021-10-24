import Particles from 'react-particles-js'
import Clock from '../components/Clock'
import Typed from 'react-typed'

const Carouselv2 = () => {

    const particleParams = {
        "particles": {
            "number": {
                "value": 145,
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
              "value" : ['#a0ba92','#9c8863', '#ba92a0', '#6c639c']
            }
    }}
    return (
        <div className = "carousel nextGen d-flex justify-content-center align-items-center">
            <div className ="text-center">
                <h1 className ="mb-1">
                    <Typed
                    strings={["Furhan Khan"]}
                    typeSpeed={45}
                    className = "mainTitleText"
                />
                </h1>
                <p className = 'biggerText'>
                <Clock></Clock>
                </p>
                <p className ="mb-4 d-none d-md-block text-white">
                    <strong>A Software Engineer Based Out of Northern Virginia</strong>
                </p>

                <a href="/Furhan_Khan_Resume.pdf" className ="addCursor btn btn-outline-white btn-lg"> Download My Resume
                    <i className ="fas fa-download ml-2"></i>
                </a>
            </div>
            <Particles params={particleParams} className = 'particle-style h-100'>
            </Particles>
        </div>
    )
}

export default Carouselv2;