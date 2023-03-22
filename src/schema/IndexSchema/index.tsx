import React, {useEffect, useRef} from 'react';
import Container from "@/components/Container";
import HTag from "@/components/HTag";
import styles from './index.module.css';
import {motion, useScroll} from "framer-motion";
import Skill from "@/components/Skill";
import Image from "next/image";
import world from './shape.svg'
import Case from "@/components/Case";
import PaddingContainer from "@/components/PaddingContainer";
import me from './me.png';
import dots from './dots.svg';
import P from "@/components/P";

const skills = ['HTML', 'CSS', 'REACT', 'JAVASCRIPT', 'REDUX', 'MOBX', 'NEXT',]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .3
        }
    }
}

const item = {
    hidden: { y: -200, opacity: 0 },
    visible: {
        transition: {
            duration: .5
        },
        duration: 2,
        y: 0,
        opacity: 1
    },
}

const p = {
    hidden: { x: -70, opacity: 0 },
    visible: {
        transition: {
            duration: .3,
        },
        x: 0,
        opacity: 1
    },
}
const Main = () => {
    const {scrollY} = useScroll()
    const cases = useRef(null)
    useEffect(() => {
        const element = cases.current
        console.log(element)
    }, [])
    return (
        <>
            <Container>
                <PaddingContainer>
                    <motion.div
                        className={styles.tags}
                        variants={container}
                        initial={'hidden'}
                        animate={'visible'}
                    >
                        <motion.div variants={item}>
                            <HTag>Frontend</HTag>
                        </motion.div>
                        <motion.div className={styles.dev} variants={item}>
                            <HTag>Developer</HTag>
                        </motion.div>
                        <Image className={styles.shape} src={world} alt={"l"}/>
                        <motion.p variants={p} className={styles.p}>
                            Serafim Kremnev
                        </motion.p>
                        <motion.div variants={item} className={styles.skills}>
                            {skills.map(e => <motion.div variants={p} key={e}><Skill>{e}</Skill></motion.div>)}
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    transition: {
                                        delay: 1,
                                        duration: .5
                                    },
                                    duration: 2,
                                    y: 0,
                                    opacity: 1
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={styles.casesTitle}
                        >
                        <HTag>Cases</HTag>
                        </motion.div>

                    </motion.div>
                </PaddingContainer>
                <motion.div
                    variants={{
                        hidden: { y: -100, opacity: 0 },
                        visible: {
                            transition: {
                                delay: .5,
                                duration: .5
                            },
                            duration: 2,
                            y: 0,
                            opacity: 1
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    <Case name={'Верстка адаптивного сайта с использованием многих конструкций JavaScript'} time={'8 часов'} year={'2023'} index={1}/>
                </motion.div>

                <div className={styles.cases}>
                    <motion.div
                        variants={{
                            hidden: { y: -100, opacity: 0 },
                            visible: {
                                transition: {
                                    delay: .5,
                                    duration: .5
                                },
                                duration: 2,
                                y: 0,
                                opacity: 1
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <Case name={'Верстка адаптивного сайта с использованием многих конструкций JavaScript'} time={'8 часов'} year={'2023'} index={2}/>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: {
                                transition: {
                                    delay: .3,
                                    duration: .5
                                },
                                duration: 2,
                                y: 0,
                                opacity: 1
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <Case name={'Верстка адаптивного сайта с использованием многих конструкций JavaScript'} time={'8 часов'} year={'2023'} index={3}/>
                    </motion.div>
                </div>
                <div className={styles.imageMe}>
                    <div className={styles.backImage}></div>
                    <motion.div
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: {
                                transition: {
                                    delay: 1,
                                    duration: .5
                                },
                                duration: 2,
                                y: 0,
                                opacity: 1
                            },
                        }}
                        className={styles.i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <HTag>{`I'm Seraphim`}</HTag>
                    </motion.div>

                    <Image className={styles.dots} src={dots} alt={""}/>
                    <Image className={styles.me} src={me} alt={''}/>
                    <div className={styles.wrapperP}>
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    transition: {
                                        delay: .3,
                                        duration: .5
                                    },
                                    duration: 2,
                                    y: 0,
                                    opacity: 1
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <P>Активно учился и программировал в 14 лет. Уже тогда писал небольшие программы на Python.</P>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    transition: {
                                        delay: .3,
                                        duration: .5
                                    },
                                    duration: 2,
                                    y: 0,
                                    opacity: 1
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <P>После заинтересовался геймдевом, реализовал две игры и решил полностью посвятить себя веб-разработке.</P>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    transition: {
                                        delay: .3,
                                        duration: .5
                                    },
                                    duration: 2,
                                    y: 0,
                                    opacity: 1
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <P>В 16 лет я разработал масштабную игру на unity. </P>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    transition: {
                                        delay: .3,
                                        duration: .5
                                    },
                                    duration: 2,
                                    y: 0,
                                    opacity: 1
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <P>На данном этапе я изучаю такие технологии как
                                React, TypeSctipt и git.</P>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: {
                            transition: {
                                delay: .3,
                                duration: .5
                            },
                            duration: 2,
                            y: 0,
                            opacity: 1
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    <P className={styles.dream}>Моя мечта - написать востребованный проект, который сделает нашу жизнь проще.</P>
                </motion.div>
            </Container>
        </>
    );
};

export default Main;