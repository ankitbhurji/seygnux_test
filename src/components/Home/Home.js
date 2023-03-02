import styles from './Home.module.css';
import { BsDashLg } from "react-icons/bs";

function Home() {
    return ( 
        <div className={styles.home_container}>
            <div className={styles.home_container_1}>
                <div className={styles.row_1}>
                    <div className={styles.row_1_text_1}>We crush minimal design.</div>
                    <div className={styles.row_1_text_2}>MONOCHROME is a creative agency based in chicago. We developed the Genesis Framework and build mobile-optimized theme for WordPress.</div>
                </div>
            </div>

            <div className={styles.home_container_2}>
                <div className={styles.container_2_row_1}>
                    <div className={styles.container_2_row_1_text_1}>We build experience.</div>
                    <div className={styles.container_2_row_1_text_2}>A milimistic aproach is the only way to design a website.</div>
                </div>
                <div className={styles.dash_icon}>
                    <BsDashLg/>
                </div>
                <div className={styles.container_2_row_2}>
                    <div className={styles.container_2_row_2_col}>
                        <div className={styles.container_2_row_2_col_heading}>DESIGN</div>
                        <div className={styles.container_2_row_2_col_discription}>With an emphasis on typography, white space, and mobile-optimized design, your website will look absolutely breathtakinig</div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className={styles.container_2_row_2_col}>
                        <div className={styles.container_2_row_2_col_heading}>CONTENT</div>
                        <div className={styles.container_2_row_2_col_discription}>Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve.</div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className={styles.container_2_row_2_col}>
                        <div className={styles.container_2_row_2_col_heading}>STRATEGY</div>
                        <div className={styles.container_2_row_2_col_discription}>We help creative entrepreneurs build their digital business by focucing on three key elements of a successful online plateform.</div>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className={styles.home_container_3}>
            </div>
            <div className={styles.home_container_4}></div>
        </div>
     );
}

export default Home;