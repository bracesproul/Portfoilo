import styles from '/styles/Home.module.css';
import Link from 'next/link';
export const Contact = () => {
    return (
        <div>
            <p className={styles.textBody}><Link href="/">Home</Link></p>
            <h3 className={styles.contentTitle}>Contact</h3>
            <div className={styles.contactContainer}>
                <p>Email: braceasproul@gmail.com</p>
                <p>LinkedIn: </p>
            </div>
        </div>
    )
}