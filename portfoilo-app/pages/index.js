/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className={styles.header}>Welcome to my Portfoilo</h1>
      <Projects />
      <br />
      <Technologies />
      <br />
      <Recources />
    </div>
  )
}

const Projects = () => {

  return (
    <div className={styles.projectBox}>
      <h2 className={styles.contentTitle}>Projects</h2>
      <div className={styles.individualProject}>
        <h4 className={styles.contentTitle}>Survey Site</h4>
        <p className={styles.textBody}>This web application is similar to Google Forms with the ability to create fully dynamic forms and accept responses.
          The application is built with React.JS and Next.JS.
          The database used is Firebase Firestore
          Authentication is handled by Firebase Auth.
        </p>
        <span className={styles.linkV}>
        <a href="https://survey-site-iota.vercel.app/" target="_blank"><p>Click here to view the app</p></a> 
        <a href="https://github.com/bracesproul/Survey-Site/tree/main/react-learning/survey-site" target="_blank"><p>Click here to view the source code on GitHub</p></a>
        </span>
      </div>
      <br />
      <div className={styles.individualProject}>
        <h4 className={styles.contentTitle}>COVID-19 Data</h4>
        <p className={styles.textBody}>This web app displays data on COVID-19 infections, deaths and more from 40+ country's around the world. 
          Infections and deaths are updated hourly and more indepth statistics updated daily.
          The data is pulled from an API provided from <a href="https://apify.com" target="_blank">Apify</a>.
          The app is built with React.JS and Next.JS.
          The databse used is MongoDB
          Serverside reads and writes to the database is handled by an Express.JS server and Node.JS.
          Anylytics is handled by Google Analytics.
        </p>
        <span className={styles.linkV}>
        <a><p>Website not yet active</p></a>
        <a href="https://github.com/bracesproul/covid-19-data" target="_blank"><p>Click here to view the source code on GitHub</p></a>
        </span>
      </div>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className={styles.technologiesBox}>
      <h2 className={styles.contentTitle}>Technologies</h2>

      <div className={styles.flexContainer}>

        <div>
          <label for="proficent"><h3 className={styles.contentTitle}>Proficient</h3></label>
          <span name="proficent" className={styles.individualTechs}>
          <p>JavaScript</p>
          <p>React.JS (Hooks)</p>
          <p>Next.JS</p>
          <p>Node.JS</p>
          <p>Firebase</p>
          <p>Command Line</p>
          <p>VSCode</p>
          </span>
          <br />
        </div>

        <div>
          <label for="haveExperience"><h3 className={styles.contentTitle}>Have Experience in</h3></label>
          <span name="haveExperience" className={styles.individualTechs}>
            <p>HTML</p>
            <p>CSS</p>
            <p>REST APIs</p>
            <p>MongoDB</p>
            <p>Express.JS</p>
            <p>React.JS (Classes)</p>
          </span>
          <br />
        </div>

        <div>
          <label for="interested"><h3 className={styles.contentTitle}>Interested in</h3></label>
          <span name="interested" className={styles.individualTechs}>
            <p>Go</p>
            <p>Rust</p>
            <p>C</p>
            <p>C++</p>
            <p>SQL</p>
          </span>
        </div>

      </div>

    </div>
  )
}

const RecentWork = () => {
  return (
    <div>
      <h3 className={styles.contentTitle}>Recent Work</h3>
      <span>
        <h4 className={styles.contentTitle}>Company Name</h4>
        <h5 className={styles.contentTitle}>Job Description</h5>
        <p>What I learned</p>
        <a><p>Link to work/company website</p></a>
      </span>
    </div>
  )
}

const Recources = () => {
  return (
    <div>
      <h3 className={styles.contentTitle}>Recources</h3>
      <span className={styles.linkV}>
      <div className={styles.recourcesContainer}>
      <a href="https://github.com/bracesproul" target="_blank"><h5 style={{ textAlign: "center"}}>My GitHub</h5></a>
      <a href="https://twitter.com/bracesproul" target="_blank"><h5 style={{ textAlign: "center"}}>My Twitter</h5></a>
      <a href="https://www.linkedin.com/in/brace-sproul-16a185195/" target="_blank"><h5 style={{ textAlign: "center"}}>My LinkedIn</h5></a>
      </div>
      </span>
    </div>
  )
}


const Testing = () => {
  return (
    <div>

    </div>
  )
}