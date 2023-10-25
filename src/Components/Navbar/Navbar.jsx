import styles from './Navbar.module.scss';
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <section className={styles.navbar} >
            <div className={styles.nav}>

                <div className={styles.logo}><a href="#">Port<span>fólio</span></a></div>
                <nav>
                    <ul className={styles.links}>
                        <li><a href="#">Inicio</a></li>
                        <li>
                            <Link activeClass='active' smooth spy duration={10} to='specialities'>
                                Especialidades
                            </Link>
                        </li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="">Contate-me</a></li>
                    </ul>
                </nav>
            </div>



        </section>
    )
}

export default Navbar;