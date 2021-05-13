import React from 'react'

export const test = () => {
    return (
        <div className="container">

        <div className="row mb-6">
          <div className="col-md-3 ml-auto">
            <h2>Enormous collection of elements</h2>
          </div>
          <div className="col-md-5 mr-auto">
          <div className = "skiller">
            <img src  = "/carbon1.png" className = " container z-depth-2"></img>
            <h1 className = "skilltext text-center">Faraz Likes Men</h1>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3">
                <i className="far fa-id-badge"></i>
              </div>
              <div className="media-body">
                <h3>Responsive</h3>
                <p className=" text-left">
                  With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3 bg-warning">
                <i className="far fa-hand-scissors"></i>
              </div>
              <div className="media-body">
                <h3 >Customizable</h3>
                <p className=" text-left">
                  You don't need to be an expert to customize Robust. Our code is very readable and well documented.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3 bg-danger">
                <i className="far fa-comments"></i>
              </div>
              <div className="media-body">
                <h3 >Quick support</h3>
                <p className=" text-left">
                  Robust is supported by specialists who provide quick and effective support. Usually an email reply takes &lt;24h.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3 bg-success">
                <i className="far fa-clone"></i>
              </div>
              <div className="media-body">
                <h3 >Cross browser</h3>
                <p className=" text-left">
                  Robust works perfectly with: Chrome, Firefox, Safari, Opera and IE 10+. We're working hard to support them.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3 bg-purple">
                <i className="far fa-gem"></i>
              </div>
              <div className="media-body">
                <h3 >Clean code</h3>
                <p className=" text-left">
                  We strictly followed Bootstrap's guidelines to make your integration as easy as possible. All code is handwritten.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media">
              <div className="icon mr-3">
                <i className="far fa-arrow-alt-circle-down"></i>
              </div>
              <div className="media-body">
                <h3 >Free updates</h3>
                <p className=" text-left">
                  From time to time you'll receive an update containing new components, improvements and bugfixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default test