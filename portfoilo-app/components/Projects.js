import styles from '../styles/Home.module.css';

export const Projects = () => {

    return (
      <div className={styles.projectBox}>
        <h2 className={styles.contentTitle}>Projects</h2>

        <br />
        <div className={styles.individualProject}>
          <h4 className={styles.contentTitle}>COVID-19 Data</h4>
          <p className={styles.textBody}>This web app displays data on COVID-19 from over 200 countries worldwide.</p>
          <span>
          <p className={styles.textBody}>Click <a className={styles.linkV} href="https://covidstatistics.co/" target="_blank" rel="noreferrer">here</a> to access the site</p>
          <p className={styles.textBody}>Click <a className={styles.linkV} href="https://github.com/bracesproul/Covid-Statistics/" target="_blank" rel="noreferrer">here</a> to view the source code on GitHub</p>
          <p className={styles.textBody}>Click <a className={styles.linkV} href="https://api.covidstatistics.co/" target="_blank" rel="noreferrer">here</a> to view the API</p>
          </span>
        </div>
      </div>
    )
  }

  /*
        <div className={styles.individualProject}>
          <h4 className={styles.contentTitle}>Survey Site</h4>
          <p className={styles.textBody}>This web application is similar to Google Forms with the ability to create fully dynamic forms and accept responses.
          </p>
          <span>
          <p className={styles.textBody}>Click <a className={styles.linkV} href="https://survey-site.vercel.app/" target="_blank">here</a> to view the app</p>
          <p className={styles.textBody}>Click <a className={styles.linkV} href="https://github.com/bracesproul/Survey-Site/tree/main/react-learning/survey-site" target="_blank">here</a> to view the source code on GitHub</p>
          </span>
        </div>
  */