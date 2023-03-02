import styles from './Footer.module.css';
import { BsMastodon } from 'react-icons/bs';
import { VscDash } from 'react-icons/vsc';

function Footer() {
    return ( 
        <div className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <BsMastodon size={40}/>
            </div>
            <div className={styles.footer_text}>Handcrafted with heart in Chicago. Powered by StudioPress</div>
            <div className={styles.media_link}>
                <div>FACEBOOK<VscDash/></div>
                <div>TWITTER<VscDash/></div>
                <div>INSTAGRAM</div>
            </div>
        </div>
     );
}

export default Footer;