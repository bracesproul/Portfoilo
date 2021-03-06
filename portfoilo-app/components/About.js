import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const About = () => {
    return (
        <>
        <h1 className={styles.contentTitle}>About me</h1>
        <div className={styles.aboutContainer}>
            <p className={styles.aboutText}>Hey!</p>
            <p className={styles.aboutText}>I&apos;m a 17 year old software engineer from the Bay Area passionate about building web applications and learning new skills. Right now I&apos;m very interested in Solidity and smart contracts. I have some experience building web application (mostly in Next.js/React) and I&apos;m looking to expand my knowledge and learn new technologies.</p>
            <p className={styles.aboutText}>I&apos;m currently enrolled at Berkeley High School, completing my senior year. After graduating I plan on taking a gap year to further my knowledge and skills. If you&apos;re interested in collaborating for hiring me please feel free to <Link className={styles.linkV} href="/contact">reach out</Link>.</p>
            <p className={styles.aboutText}>Please feel free to check out my projects below, the source code and all information relating to them.</p>
            <p className={styles.aboutText}>If you would like to contact me please click <Link className={styles.linkV} href="/contact">here</Link>.</p>
        </div>
        </>
    )
}