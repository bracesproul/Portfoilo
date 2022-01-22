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
        </p>
        <span>
        <p>Click <a className={styles.linkV} href="https://survey-site.vercel.app/" target="_blank">here</a> to view the app</p>
        <p>Click <a className={styles.linkV} href="https://github.com/bracesproul/Survey-Site/tree/main/react-learning/survey-site" target="_blank">here</a> to view the source code on GitHub</p>
        </span>
      </div>
      <br />
      <div className={styles.individualProject}>
        <h4 className={styles.contentTitle}>COVID-19 Data</h4>
        <p className={styles.textBody}>This web app displays data on COVID-19 from over 200 countries worldwide.</p>
        <span>
        <p>Click <a className={styles.linkV} href="https://covid-statistics-fawn.vercel.app/" target="_blank">here</a> to access the site</p>
        <p>Click <a className={styles.linkV} href="https://github.com/bracesproul/Covid-Statistics/" target="_blank">here</a> to view the source code on GitHub</p>
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
          <p>React.js</p>
          <p>Next.js</p>
          <p>Node.js</p>
          <p>Firebase</p>
          <p>REST APIs</p>
          <p>Command Line</p>
          <p>Git</p>
          <p>VSCode</p>
          </span>
          <br />
        </div>

        <div>
          <label for="haveExperience"><h3 className={styles.contentTitle}>Have Experience in</h3></label>
          <span name="haveExperience" className={styles.individualTechs}>
            <p>HTML</p>
            <p>CSS</p>
            <p>MongoDB</p>
            <p>Express.js</p>
            <a>Axios</a>
          </span>
          <br />
        </div>

        <div>
          <label for="interested"><h3 className={styles.contentTitle}>Interested in</h3></label>
          <span name="interested" className={styles.individualTechs}>
            <p>Go</p>
            <p>Rust</p>
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
      <div className={styles.recourcesContainer}>
      <a className={styles.linkV} href="https://github.com/bracesproul" target="_blank"><h5 style={{ textAlign: "center"}}>My GitHub</h5></a>
      <a className={styles.linkV} href="https://twitter.com/bracesproul" target="_blank"><h5 style={{ textAlign: "center"}}>My Twitter</h5></a>
      <a className={styles.linkV} href="https://linkedin.com/in/brace-sproul-16a185195/" target="_blank"><h5 style={{ textAlign: "center"}}>My LinkedIn</h5></a>
      </div>
    </div>
  )
}


const Testing = () => {
  return (
    <div>

    </div>
  )
}