/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { Recources } from '../components/Recources';
import { About } from '../components/About';

export default function Home() {
  return (
    <div>
      <About />
      <br />
      <Projects />
      <br />
      <Technologies />
      <br />
      <Recources />
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




const Testing = () => {
  return (
    <div>

    </div>
  )
}