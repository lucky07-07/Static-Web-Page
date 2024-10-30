import React from 'react';
import styles from './Portfolio-Home.module.css';
import PortfolioAbout from './Portfolio-About';
import { Link } from 'react-router-dom';
import Footer from './Portfolio-Footer';
import PortfolioContact from './Portfolio-Contact';

function PortfolioHome() {
    return (
        <div className={styles.container}>
            <section className={styles.section1}>
                <div className={styles.overlay}>
                    <header className={styles.heading}>
                        <h1>Welcome to My Portfolio</h1>
                        <p>Hi, I'm Anil Lucky, a Web Developer.</p>
                    </header>
                </div>
            </section>

            <section className={styles.section2}>
                <div className={styles.overlay}>
                    <div className={styles.about}>
                        <h2>About Me</h2>
                        <p>
                            I'm a passionate Web Developer with experience in HTML, CSS, React, JavaScript, TypeScript, and UX design.
                            I love creating efficient and visually appealing solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className={styles.overlay}>
                    <div className={styles.projects}>
                        <h2>My Projects</h2>
                        <ul>
                            <li>
                                <h3>Project One</h3>
                                <p>A brief description of your project.</p>
                            </li>
                            <li>
                                <h3>Project Two</h3>
                                <p>A brief description of your project.</p>
                            </li>
                            <li>
                                <h3>Project Three</h3>
                                <p>A brief description of your project.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Get in Touch</h2>
                <p>If you'd like to reach out, feel free to contact me via email at [your email].</p>
            </section>
            <PortfolioAbout />
            <PortfolioContact />
            <Footer></Footer>
        </div>
    );
}

export default PortfolioHome;
