import React from "react";

function Home(){
    let img = 'https://cdn.discordapp.com/attachments/267020819505479680/1238608213541392454/Group_200.png?ex=66428a4a&is=664138ca&hm=557ce00df5c06ab5812a950217aac8662b2ccbd5951455dee1be56d110d8a66f&';
    return <section id = "home">
        <div className="jumbotron">
            <img src = {img} className="img-fluid" alt = 'banner image'></img>
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