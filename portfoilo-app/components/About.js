import styles from '/styles/Home.module.css';

export const About = () => {
    return (
        <>
        <h1 className={styles.contentTitle}>About me</h1>
        <div className={styles.aboutContainer}>
            <p className={styles.aboutText}>Hey!</p>
            <p className={styles.aboutText}>I'm a 17 year old software engineer from the Bay Area passionate about building web applications and learning new skills. Right now I'm very interested in Solidity and smart contracts. I have some experience building web application (mostly in Next.js/React) and I'm looking to expand my knowledge and learn new technologies.</p>
            <p className={styles.aboutText}>I'm currently enrolled at Berkeley High School, completing my senior year. After graduating I plan on taking a gap year to further my knowledge and skills. If you're interested in collaborating for hiring me please feel free to <a className={styles.linkV} href="/contact">reach out</a>.</p>
            <p className={styles.aboutText}>Please feel free to check out my projects below, the source code and all information relating to them.</p>
            <p className={styles.aboutText}>If you would like to contact me please click <a className={styles.linkV} href="/contact">here</a>.</p>
        </div>
        </>
    )
}