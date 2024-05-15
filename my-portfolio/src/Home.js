import React from "react";

function Home(){
    let img = 'https://imgur.com/7aGklTE';
    return <section id = "home">
        <div className="jumbotron">
            <img src = '/banner.PNG' className="img-fluid" alt = 'banner'></img>
        </div>
        <div className="container-md">
            <div className="card m-3">
                <p className="card-body"> Welcome to my portfolio! Use the links above to navigate, and feel free to contact me below!</p>
            </div>

            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Connect with me!</h5>
                        <p className="card-text">
                        Click the buttons below to see learn more.
                        </p>
                    <a
                        href="https://www.linkedin.com/in/bensester"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit LinkedIn
                    </a>
                    <a
                        href="https://github.com/bsester"
                        className="btn btn-primary m-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Github
                    </a>
                </div>
            </div>
        </div>
    </section>
}
export default Home