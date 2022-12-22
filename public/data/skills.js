import html from "../images/skills/html.svg"
import css from "../images/skills/css.svg"
import sass from "../images/skills/sass.svg"
import bootstrap from "../images/skills/bootstrap.svg"
import tailwind from "../images/skills/tailwindcss.svg"
import javascript from "../images/skills/javascript.svg"
import react from "../images/skills/react.svg"
import next from "../images/skills/nextjs.svg"
import nodejs from "../images/skills/nodejs.png"
import express from "../images/skills/expressjs.png"
import socket from "../images/skills/socket-io.svg"
import firebase from "../images/skills/firebase.png"
import mongodb from "../images/skills/mongodb.png"

const skillCollection = [
    {
        name: 'HTML5',
        image: html,
        alt : "html",
        percent :'90%',
        type: 'Web'
    },
    {
        name: 'CSS3',
        image: css,
        alt : "css",
        percent :'80%',
        type: 'Web' 
    },
    {
        name: "SASS",
        image: sass,
        alt : "SASS",
        percent :'80%',
        type: 'Framework' 
    },
    {
        name: 'Bootstrap',
        image: bootstrap,
        alt : "bootstrap",
        percent :'85%',
        type: 'Framework' 
    },
    {
        name: 'Tailwind CSS',
        image: tailwind,
        alt : "tailwind",
        percent :'85%',
        type: 'Framework' 
    },
    {
        name: 'JavaScript',
        image: javascript,
        alt : "javascript",
        percent :'75%',
        type: 'Language' 
    },
    {
        name: 'React JS',
        image: react,
        alt : "react",
        percent :'75%',
        type: 'Framework' 
    },
    {
        name: 'Next JS',
        image: next,
        alt : "next",
        percent :'70%',
        type: 'Framework' 
    },
    {
        name: 'Node JS',
        image: nodejs,
        alt : "nodejs",
        percent :'75%',
        type: 'Web' 
    },
    {
        name: 'Express JS',
        image: express,
        alt : "nodejs",
        percent :'80%',
        type: 'Framework' 
    },
    {
        name: 'Socket io',
        image: socket,
        alt : "socket",
        percent :'60%',
        type: 'Web' 
    },
    {
        name: 'Firebase',
        image: firebase,
        alt : "firebase",
        percent :'80%',
        type: 'Database'  
    },
    {
        name: 'MongoDB',
        image: mongodb,
        alt : "mongodb",
        percent :'80%',
        type: 'Database'
    }
]
export default skillCollection;