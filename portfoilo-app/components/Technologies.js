import styles from '/styles/Home.module.css';
import { Icon } from '@iconify/react';

export const Technologies = () => {
    return (
      <div className={styles.technologiesBox}>
        <h2 className={styles.contentTitle}>Technologies</h2>
  
        <div className={styles.flexContainer}>
  
          <div>
            <label for="proficent"><h3 className={styles.contentTitle}>Proficient</h3></label>
            <span name="proficent" className={styles.individualTechs}>
                <p className={styles.techList}>JavaScript </p>
                <Icon icon="akar-icons:javascript-fill" inline={true} />
                <br />

                <p className={styles.techList}>React.js </p>
                <Icon icon="akar-icons:react-fill" inline={true} />
                <br />

                <p className={styles.techList}>Next.js </p>
                <Icon icon="logos:nextjs-icon" inline={true} />
                <br />

                <p className={styles.techList}>Node.js </p>
                <Icon icon="fa-brands:node" inline={true} />
                <br />

                <p className={styles.techList}>Firebase </p>
                <Icon icon="bxl:firebase" inline={true} />
                <br />

                <p className={styles.techList}>REST APIs </p>
                <Icon icon="dashicons:rest-api" inline={true} />
                <br />

                <p className={styles.techList}>Command Line </p>
                <Icon icon="clarity:command-line" inline={true} />
                <br />

                <p className={styles.techList}>Git </p>
                <Icon icon="bi:git" inline={true} />
                <br />

                <p className={styles.techList}>VSCode </p>
                <Icon icon="vscode-icons:file-type-vscode" inline={true} />
            </span>
            <br />
          </div>
  
          <div>
            <label for="haveExperience"><h3 className={styles.contentTitle}>Have Experience in</h3></label>
            <span name="haveExperience" className={styles.individualTechs}>
                <p className={styles.techList}>HTML</p>
                <Icon icon="akar-icons:html-fill" inline={true} />
                <br />

                <p className={styles.techList}>CSS </p>
                <Icon icon="akar-icons:css-fill" inline={true} />
                <br />

                <p className={styles.techList}>MongoDB </p>
                <Icon icon="bxl:mongodb" inline={true} />
                <br />

                <p className={styles.techList}>Express.js </p>
                <Icon icon="logos:express" inline={true} />
            </span>
            <br />
          </div>
  
          <div>
            <label for="interested"><h3 className={styles.contentTitle}>Interested in</h3></label>
            <span name="interested" className={styles.individualTechs}>
              <p className={styles.techList}>Go </p>
              <Icon icon="fa6-brands:golang" inline={true} />
              <br />

              <p className={styles.techList}>Solidity </p>
              <Icon icon="file-icons:solidity" inline={true} />
              <br />

              <p className={styles.techList}>C++ </p>
              <Icon icon="bxl:c-plus-plus" inline={true} />
              <br />

              <p className={styles.techList}>SQL </p>
              <Icon icon="carbon:sql" inline={true} />
              <br />

              <p className={styles.techList}>TypeScript </p>
              <Icon icon="cib:typescript" inline={true} />
            </span>
          </div>
  
        </div>
  
      </div>
    )
  }