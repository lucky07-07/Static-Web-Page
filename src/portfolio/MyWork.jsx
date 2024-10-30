import React from 'react';
import styles from './MyWork.module.css';
import image1 from '../images/project1.png';
import image2 from '../images/project2.png';
import image3 from '../images/project3.png';

const MyWork = () => {
    const cards = [
        {
            title: 'Project 1',
            description: 'Description for Project 1',
            imageUrl: image1,
        },
        {
            title: 'Project 2',
            description: 'Description for Project 2',
            imageUrl: image2,
        },
        {
            title: 'Project 3',
            description: 'Description for Project 3',
            imageUrl: image3,
        },
    ];

    return (
        <div className={styles.slider}>
            {cards.map((card, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.imageContainer}>
                        <img src={card.imageUrl} alt={card.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyWork;
