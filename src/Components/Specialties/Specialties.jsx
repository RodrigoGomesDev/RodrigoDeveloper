import React, { useState } from 'react';
import styles from './Specialties.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Specialties = () => { 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <section className={styles.skills} id='specialities'>
            <h2>Especialidades</h2>
            <div className={styles.skillsContent}>
                <h3>Minhas habilidades criativas e experiências</h3>
                <p>Conheça algumas das minhas habilidades, busco sempre melhorar em todas as minhas qualidades e defeitos para que assim eu possa suprir com as necessidade de qualquer projeto.</p>
            </div>
            <div className={styles.container}>
                <Carousel showIndicators={false} autoPlay={true} interval={3500} infiniteLoop={true} showStatus={0} showThumbs={false}>
                        <div className={styles.skillsInfo}>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>HTML</span>
                                    <span>86%</span>
                                </div>
                                <div className={`${styles.line} ${styles.html}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className={`${styles.line} ${styles.css}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Javascript</span>
                                    <span>77%</span>
                                </div>
                                <div className={`${styles.line} ${styles.js}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>React</span>
                                    <span>80%</span>
                                </div>
                                <div className={`${styles.line} ${styles.react}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Typescript</span>
                                    <span>83%</span>
                                </div>
                                <div className={`${styles.line} ${styles.ts}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>NextJS</span>
                                    <span>75%</span>
                                </div>
                                <div className={`${styles.line} ${styles.next}`}></div>
                            </div>
                        </div>

                        <div className={styles.skillsInfo}>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Comunicação</span>
                                    <span>95%</span>
                                </div>
                                <div className={`${styles.line} ${styles.comunication}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Trabalho em equipe</span>
                                    <span>86%</span>
                                </div>
                                <div className={`${styles.line} ${styles.teamwork}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Adaptabilidade</span>
                                    <span>90%</span>
                                </div>
                                <div className={`${styles.line} ${styles.adaptability}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Criatividade</span>
                                    <span>89%</span>
                                </div>
                                <div className={`${styles.line} ${styles.criativity}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Resolução de problemas</span>
                                    <span>97%</span>
                                </div>
                                <div className={`${styles.line} ${styles.problem_solving}`}></div>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.info}>
                                    <span>Tomada de decisões</span>
                                    <span>92%</span>
                                </div>
                                <div className={`${styles.line} ${styles.decision_making}`}></div>
                            </div>
                        </div>
                        </Carousel>
            </div>
        </section>
    )
}

export default Specialties;