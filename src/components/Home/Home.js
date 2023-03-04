import styles from './Home.module.css';
import { BsDashLg } from "react-icons/bs";
import Footer from '../Footer/Footer';
import LearnMore from '../LearnMore/LearnMore';

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
                <div className={styles.brand_heading_container}>
                    <div className={styles.brand_heading}>We design brands.</div>
                    <div className={styles.brand_sub_heading}>A simple look is all you need to crush your competition.</div>
                </div>
                <div className={styles.brand_dash_container}>
                    <BsDashLg />
                </div>
                <div className={styles.brand_name_container}>
                    <div className={styles.brand_name_1}>les avenirs</div>
                    <div className={styles.brand_name_2}>avec'simple</div>
                    <div className={styles.brand_name_3}>WHITESPACE</div>
                    <div className={styles.brand_name_4}>m.n.mal.sm</div>
                    <div className={styles.brand_name_5}>barcelona33</div>
                    <div className={styles.brand_name_6}>smoothVANILLA</div>
                </div>
            </div>

            <div className={styles.home_container_4}>
                <div className={styles.image_heading_container}>
                    <div className={styles.image_heading}>
                        We create stories.
                    </div>
                    <div className={styles.image_sub_heading}>
                        A killer narrative will turn your readers into raving fans.
                    </div>
                </div>
                <div className={styles.image_dash}>
                    <BsDashLg/>
                </div>
                <div className={styles.image_container}>
                    <div className={styles.image}>
                        <img className={styles.fake_image} src='https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R94525060&ga=GA1.1.2027631365.1674120080&semt=robertav1' width="600" height="400"/>
                        <div className={styles.image_name}>OVEROCMMING CREATIVE BLOCK</div>
                        <div className={styles.image_time}>Brian Gardner. May 1, 2017</div>
                    </div>
                    <div className={styles.image}>
                        <img className={styles.fake_image} src='https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R94525060&ga=GA1.1.2027631365.1674120080&semt=robertav1' width="600" height="400"/>
                        <div className={styles.image_name}>WHY COMMUNICATION IS KEY</div>
                        <div className={styles.image_time}>Brian Gardner. May 1, 2017</div>
                    </div>
                        <div className={styles.image}>
                        <img className={styles.fake_image} src='https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R94525060&ga=GA1.1.2027631365.1674120080&semt=robertav1' width="600" height="400"/>
                        <div className={styles.image_name}>OVEROCMMING CREATIVE BLOCK</div>
                        <div className={styles.image_time}>Brain Gardner. May 1, 2017</div>
                    </div>
                    <div className={styles.image}>
                        <img className={styles.fake_image} src='https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R94525060&ga=GA1.1.2027631365.1674120080&semt=robertav1' width="600" height="400"/>
                        <div className={styles.image_name}>OVEROCMMING CREATIVE BLOCK</div>
                        <div className={styles.image_time}>Brain Gardner. May 1, 2017</div>
                    </div>
                </div>
                </div>
            <div>
                <LearnMore/>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
     );
}

export default Home;