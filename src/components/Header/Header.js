import styles from './Header.module.css';
import { BsMastodon } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { HiViewList } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function Header() {
    const [toggle, setToggle] = useState({
        isNavbar:false
    })
    function toggleLogo(){
        setToggle({...toggle, isNavbar:!toggle.isNavbar})
    }
    return ( 
        <div>
            <div className={styles.header_container}>
                <div className={styles.header}>
                    <div className={styles.logo_container}>
                        <div className={styles.company_logo}>
                            <BsMastodon size={40} />
                        </div>
                        <div onClick={toggleLogo} className={styles.navbar_button}>
                            {toggle.isNavbar?<AiFillCloseCircle size={40}/>:<HiViewList size={40}/>}
                        </div>
                    </div>
                        
                    <div className={toggle.isNavbar?(`${styles.navbar_container}`):(`${styles.navbar_container_disable}`)}>
                        <div className={styles.sample}>Sample</div>
                        <div className={styles.feature}>Feature</div>
                        <div className={styles.layout}>Layout</div>
                        <div className={styles.ourshop}>Our Shop</div>
                        <div className={styles.buy_theme}>Buy Theme</div>
                        <div className={styles.search_container}><BsSearch/></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;