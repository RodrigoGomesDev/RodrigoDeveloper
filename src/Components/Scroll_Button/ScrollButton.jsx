// import { Button } from './ScrollButton.module.scss';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ScrollButton.module.scss';
const ScrollButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div > 
            {" "}
            {showTopBtn && (
                <FontAwesomeIcon className={styles.btnUp} icon={faArrowUp} bounce size='2xs'  onClick={goToTop}/>
            )}{" "}
        </div>
    )
}

export default ScrollButton;