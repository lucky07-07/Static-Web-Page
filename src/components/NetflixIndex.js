import React from 'react';
import './NetflixIndex.css';
import NetflixHeader from './NetflixHeader';
import NetflixMain from './NetflixMain';
import NetflixRegister from './NetflixRegister';

export default function NetflixIndex() {
    return (
        <div className="container-fluid">
            <div className="box">
                <header>
                    <NetflixHeader />
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMain />
                        <NetflixRegister />
                    </main>
                </section>

            </div>

        </div>

    );
}