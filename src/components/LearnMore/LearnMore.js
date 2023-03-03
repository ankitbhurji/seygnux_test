import styles from './LearnMore.module.css';

function LearnMore() {
    return ( 
        <div className={styles.container}>
            <div className={styles.learn_more}>
                <div className={styles.info}>
                    Hit the ground running with a minimalist look.
                </div>
                <button className={styles.button}>LEARN MORE</button>
            </div>
        </div>
     );
}

export default LearnMore;