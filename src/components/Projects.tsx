import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo App",
        desc: "Build a Todo App Using Next JS & Tailwind CSS.",
        img: "/project-1.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
    {
        id: 1,
        title: "Resume Builder",
        desc: "Build a Resume Builder Using HTML, CSS & TypeScript.",
        img: "/project-5.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Personal Portfolio",
        desc: "Build a Personal Portfolio Website Using Next JS.",
        img: "/project-2.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title: "CLI Calculator",
        desc: "Build a CLI Calculator Using HTML, CSS, & TypeScript.",
        img: "/project-3.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title: "No Guess Game",
        desc: "Build a No Guessing Game Using HTML, CSS & TypeScript.",
        img: "/project-4.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
    {
        id: 5,
        title: "Count Down Timer",
        desc: "Build a Countdown Timer Using HTML, CSS & TypeScript.",
        img: "/project-6.jpg",
        tags: ["React", "Node", "HTML", "CSS", "TypeScript"],
    },
];

const Projects = () => {
    return (
        <div id='projects' className='container pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-8'>
            <Heading title='My Projects' />
            <div className='grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
