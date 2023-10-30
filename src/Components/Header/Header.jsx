import Typed from 'typed.js';
import styles from './Header.module.scss';
import Model3dComponent from './Model3d';
import { useEffect, useRef } from 'react';

const Header = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Desenvolvedor web.", "Designer gráfico."], typeSpeed: 100, backSpeed: 60, loop: true
        })
    

    return () => {
        typed.destroy();
    };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.home}>
                    <span className={styles.text}>Olá, meu nome é</span>
                    <h1>Rodrigo Gomes</h1>
                    <p> eu sou <span ref={el}></span></p>
                </div>
                <div className={styles.model3d}>
                    <Model3dComponent />
                </div>
            </div>
        </header>
    )
}

export default Header;