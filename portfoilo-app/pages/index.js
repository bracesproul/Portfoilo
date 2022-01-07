/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Welcome to my portfoilo</h1>
      <Projects />
      <hr />
      <Technologies />
      <hr />
      <Recources />
    </div>
  )
}

const Projects = () => {

  return (
    <div>
      <h3>Projects</h3>
      <span>
        <h4>Survey Site</h4>
        <p>This web application is similar to Google Forms with the ability to create fully dynamic forms and accept responses.
          The application is built with React.JS and Next.JS.
          The database used is Firebase Firestore
          Authentication is handled by Firebase Auth.
        </p>
        <a style={styles.link} href="https://survey-site-iota.vercel.app/" target="_blank"><p>Click here to view the app</p></a> 
        <a href="https://github.com/bracesproul/survey-site" target="_blank"><p>Click here to view the source code on GitHub</p></a>
      </span>
      <hr />
      <span>
        <h4>COVID-19 Data</h4>
        <p>This web app displays data on COVID-19 infections, deaths and more from 40+ country's around the world. 
          Infections and deaths are updated hourly and more indepth statistics updated daily.
          The data is pulled from an API provided from <a href="https://apify.com" target="_blank">Apify</a>.
          The app is built with React.JS and Next.JS.
          The databse used is MongoDB
          Serverside reads and writes to the database is handled by an Express.JS server and Node.JS.
          Anylytics is handled by Google Analytics.
        </p>
        <a><p>Website not yet active</p></a>
        <a href="https://github.com/bracesproul/covid-19-data" target="_blank"><p>Click here to view the source code on GitHub</p></a>
      </span>
    </div>
  )
}

const Technologies = () => {
  return (
    <div>
      <h3>Technologies</h3>
      <label for="proficent"><h4>Proficient</h4></label>
      <span name="proficent">
      <p>JavaScript</p>
      <p>React.JS (Hooks)</p>
      <p>Next.JS</p>
      <p>Node.JS</p>
      <p>Firebase</p>
      <p>Command Line</p>
      <p>VSCode</p>
      </span>

      <label for="haveExperience"><h4>Have Experience in</h4></label>
      <span name="haveExperience">
        <p>HTML</p>
        <p>CSS</p>
        <p>REST APIs</p>
        <p>MongoDB</p>
        <p>Express.JS</p>
        <p>React.JS (Classes)</p>
      </span>

      <label for="interested"><h4>Interested in</h4></label>
      <span name="interested">
        <p>Go</p>
        <p>Rust</p>
        <p>C</p>
        <p>C++</p>
        <p>SQL</p>
      </span>
    </div>
  )
}

const RecentWork = () => {
  return (
    <div>
      <h3>Recent Work</h3>
      <span>
        <h4>Company Name</h4>
        <h5>Job Description</h5>
        <p>What I learned</p>
        <a><p>Link to work/company website</p></a>
      </span>
    </div>
  )
}

const Recources = () => {
  return (
    <div>
      <h3>Recources</h3>
      <a href="https://github.com/bracesproul" target="_blank"><h5>My GitHub</h5></a>
      <a href="https://twitter.com/bracesproul" target="_blank"><h5>My Twitter</h5></a>
      <a href="https://www.linkedin.com/in/bracesproul/" target="_blank"><h5>My LinkedIn</h5></a>
    </div>
  )
}