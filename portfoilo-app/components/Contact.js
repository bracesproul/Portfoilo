import styles from '/styles/Home.module.css';

export const Contact = () => {
    return (
        <div>
            <p className={styles.textBody}><a href="/">Home</a></p>
            <h3 className={styles.contentTitle}>Contact</h3>
            <div className={styles.contactContainer}>
                <p>Email: braceasproul@gmail.com</p>
                <p>LinkedIn: </p>
            </div>
        </div>
    )
}