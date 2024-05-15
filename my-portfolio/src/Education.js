import React from "react";

function Education(){
    const educations = [
        {
          name: "Illinois State University",
          location: "Bloomington-Normal, Illinois",
          logo: "/isulogo.png",
          desc: "I attended Illinois State University from 2019 to 2023. There I learned valuable programming " +
              "concepts like Object Oriented Design and database design. It served to build a valuable and strong " +
              "foundation for my computer science career."
        },
        {
            name: "Aurora University",
            location: "Aurora, Illinois",
            logo: "/auroralogo.png",
            desc: "I transferred to Aurora University in 2023 to finish my degree. My favorite courses taught me " +
                "about web application development using node.js and react, and I learned a lot about agile SDLC during" +
                " my capstone project."
        }
    ]
    return (
        <section id = "education">
            {educations.map((education, index) => (
                <div key={index} className="container-md">
                    <h2>{education.name}</h2>
                    <h3> {education.location}</h3>
                    <img className={"projectImg"} src={education.logo} alt={education.name} />
                    <div className="card"><p className="card-body">{education.desc}</p></div>
                </div>
            ))}
        </section>

    );
}
export default Education