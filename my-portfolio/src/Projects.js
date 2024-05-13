import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    const projects = [
        {
            title: 'Project Fringe',
            description: 'I worked with in collaboration with my teammates and Fringe, a company specializing in alternative medicine, ' +
                'to create a companion app for displaying research about their products. The application also supports journaling and allowing ' +
                'users to record and rate which products helped them the most. The app was developed using React Native, Firebase and Firestore. ' +
                'Note that the repository is private. Please contact me to see the code.',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
            githubUrl: 'https://github.com/FringeCapstone/client'
        },
        {
            title: 'Multithreaded Image Processor',
            description: 'We developed a program in c++ to process images using Message Passing Interface (MPI).' +
                ' The multiprocessing implementation was up to 1600% faster than the single-threaded implementation.' +
                ' We studied the speedup and efficiency across different numbers of threads and different image sizes, ' +
                ' on operations such as changing the image to grayscale or sorting the pixels.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
            githubUrl: 'https://github.com/bsester/Multithreaded-Image-Processor'
        },
        {
            title: 'Schedulemaker',
            description: 'My teammates and I created an app to streamline the creation of academic schedules for Illinois State University.' +
                ' My role in the project was the aggregation of course information through a webscraper, and parsing that information.',
            imageUrl: 'https://www.svgrepo.com/show/303388/java-4-logo.svg',
            githubUrl: 'https://github.com/FisherZE/ScheduleMaker'
        },

        // Add more projects as needed
    ];

    return (
        <section id = "projects">
            {projects.map((project, index) => (
                <div key={index} className="container-md">
                    <h2>{project.title}</h2>
                    <img className={"projectImg"} src={project.imageUrl} alt={project.title} />
                    <div className="card"><p className="card-body">{project.description}</p></div>
                    <div className="project-links">
                        <a href={project.githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                </div>
            ))}
        </section>

    );
}
export default Projects