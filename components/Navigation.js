
import Link from 'next/link'

const Navigation = () => {
    return (
        <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
      <div className="container">
        <Link href = "/">
        <a className="navbar-brand" >
          <strong>Furhan Khan</strong>
        </a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href = "/">
              <a className="nav-link" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href = "/movies">
              <a className="nav-link">Project Demo 1</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://hooshome.herokuapp.com/">Project Demo 2</a>
            </li>
            <li className="nav-item">
              <Link href = "/other">
              <a className="nav-link">Other Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href = "/pokedex">
              <a className="nav-link">Pokedex</a>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <Link href = "https://www.linkedin.com/in/furhan-khan12/">
              <a className="nav-link">
                <i className="fab fa-linkedin"></i>
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://github.com/furhankhan12">
              <a className="nav-link border border-light rounded">
                <i className="fab fa-github mr-2"></i> Furhan's GitHub
              </a>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
        </>
    
)
}
export default Navigation