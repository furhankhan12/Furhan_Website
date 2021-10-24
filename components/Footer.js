const Footer = () => {
    return(
    <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <div className="pt-4">
        <a className="btn btn-outline-white" href="/Furhan_Khan_Resume.pdf" target="_blank"
    role="button">Download My Resume
            <i className="fas fa-download ml-2">        </i>
        </a>
        <a className="btn btn-outline-white" href="https://www.linkedin.com/in/furhan-khan12/" target="_blank" role="button"> Add Me On LinkedIn
            <i className="fab fa-linkedin ml-3"></i>
        </a>
        <br></br>
        <br></br>
        </div>
        <div className="footer-copyright py-3"> Contact: <br></br><i className="fas fa-phone mr-1"></i>: (703)-927-0158
        <br></br><i className="fas fa-envelope mr-1"></i>: Fsk2pd@Virginia.edu<br></br>
        <div className = "container">
        <hr></hr>
        <a href="https://github.com/furhankhan12" target="_blank"><i className="fab fa-github"> </i>
        </a>              <a href="https://www.linkedin.com/in/furhan-khan12/" target="_blank">
    <i className="fab fa-linkedin ml-3"></i>
        </a>
        </div> 
        </div>
        
        </footer>
    )
}
export default Footer