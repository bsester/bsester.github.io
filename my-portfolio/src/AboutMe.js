function AboutMe(){
    return <section id = "aboutme">
        <div className="container-md">
            <div className="card mt-3">
                <div className="card-body">
                    <h3 className="card-title"> About Me </h3>
                    <p className="card-text">
                        My name is Ben Sester, and I am a recent graduate from Aurora University looking for a position where I
                        can continue to learn and grow, both personally and professionally.
                    </p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body m-auto">
                    <h3 className="card-title"> Skills </h3>
                    <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                        <div className="col">
                            <ul className="list-unstyled">
                                <li><span className="fw-bold no-wrap">C/C++</span></li>
                                <li><span className="fw-bold no-wrap">Java</span></li>
                                <li><span className="fw-bold no-wrap">Firebase/Firestore</span></li>
                                <li><span className="fw-bold no-wrap">React js/React Native</span></li>
                                <li><span className="fw-bold no-wrap">Javascript</span></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                                <li><span className="fw-bold no-wrap">Node.js</span></li>
                                <li><span className="fw-bold no-wrap">Agile SDLC</span></li>
                                <li><span className="fw-bold no-wrap">Python</span></li>
                                <li><span className="fw-bold no-wrap">Jetbrains IDE</span></li>
                                <li><span className="fw-bold no-wrap">mySQL</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h3 className="card-title"> Interests </h3>
                    <p className="card-text"> I love learning and creating new things and learning new technologies. Front end development using react with
                    a node.js or firebase backend is a form of app development I have come to really enjoy. Additionally, my favorite programming language is C/C++.
                    I value the granularity and control over memory management that they provide. When I am not programming, I like playing table top games with my friends,
                    or listening to music. </p>
                </div>
            </div>
        </div>
    </section>

}
export default AboutMe