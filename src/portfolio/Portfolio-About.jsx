import styles from './Portfolio-Index.module.css';
import loginBg from '../images/loginbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact, faBootstrap, faGit, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faPhotoFilm, faT } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import MyWork from './MyWork';

function PortfolioAbout() {
    return (
        <>
            <div>
                <h2 className="text-center">Anil Lucky</h2>
                <div className={styles.content}>
                    <div className={styles.biography} >
                        <h3>Biography</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            <br></br> adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore <br></br>et dolore magna aliqua.</p>
                    </div>

                    <div className={styles.imageContainer}>
                        <img
                            src={loginBg}

                            className={styles.roundedImage}
                        />
                    </div>
                    <div className={styles.skills}>
                        <h3 >Skills</h3>
                        <ul>
                            <li>Web Development</li>
                            <li>UI & UX Design</li>
                            <li>SEO</li>

                        </ul>
                    </div>

                </div>
                <section className={styles.main}>

                    <div>
                        <h2 className="text-center"> Languages Known</h2>
                        <div className={styles.gap} >
                            <div className=' d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faHtml5} size="10x" className='me-5' />
                                <FontAwesomeIcon icon={faCss3Alt} size="10x" className='me-5' />
                                <FontAwesomeIcon icon={faJs} size="10x" className='me-5' />
                                <FontAwesomeIcon icon={faBootstrap} size="10x" className='me-5' />
                                <FontAwesomeIcon icon={faJava} size="10x" className='me-5' />
                            </div>

                        </div>

                        <div className=' d-flex justify-content-center align-items-center mt-4'>
                            <FontAwesomeIcon icon={faReact} size="10x" className='me-5' />
                            <FontAwesomeIcon icon={faGithub} size="10x" className='me-5' />
                        </div>
                    </div>
                    <div>
                        <div className={styles.gap}>
                            <h2 className="text-center">Recent Works</h2>

                        </div>
                        <div  >
                            <MyWork></MyWork>
                        </div>
                        <div className={styles.featuresContainer}>

                            <div className={styles.feature}>
                                <i className="bi bi-music-note-beamed"></i>
                                <h3>High Quality Sound</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>
                            <div className={styles.featuretop}>
                                <i className="bi bi-bluetooth"></i>
                                <h3>Easy Wireless Listening</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>


                            <div className={styles.feature}>
                                <i className="bi bi-battery-charging"></i>
                                <h3>Longer Battery Life</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>
                            <div className={styles.featuretop}>
                                <i className="bi bi-headphones"></i>
                                <h3>Sleek Updated Design</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>

                        </div>
                    </div>


                </section>
            </div>
        </>
    );
}

export default PortfolioAbout;
