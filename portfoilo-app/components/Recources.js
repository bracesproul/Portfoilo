import styles from '/styles/Home.module.css';

export const Recources = () => {
    return (
      <div>
        <h3 className={styles.contentTitle}>Recources</h3>
        <div className={styles.recourcesContainer}>
        <p className={styles.textBody}><a className={styles.linkV} href="https://github.com/bracesproul" target="_blank">My GitHub</a></p>
        <p className={styles.textBody}><a className={styles.linkV} href="https://twitter.com/bracesproul" target="_blank">My Twitter</a></p>
        <p className={styles.textBody}><a className={styles.linkV} href="https://linkedin.com/in/brace-sproul-16a185195/" target="_blank">My LinkedIn</a></p>
        </div>
      </div>
    )
  }