import Carousel from './components/Carousel';
import { CarouselThumbnailModel } from './components/CarouselThumbnail';
import './style.scss';

import React from 'react';

const HomePage: React.FC = () => {
    const carouselData: CarouselThumbnailModel[] = [
        {
            alt: 'Python Programming Language Thumbnail',
            image: '/src/assets/images/python.jpg',
            link: 'https://youtube.com/playlist?list=PLYBJzqz8zpWYHDS2qS-UstfWdQRLrbQ9L&si=1rLHHpQDiuCOEu7u',
        },
        {
            alt: 'Nim Programming Language Thumbnail',
            image: '/src/assets/images/nim.jpg',
            link: 'https://youtube.com/playlist?list=PLYBJzqz8zpWaiGbFcSdlh08zlpe8Tl_Gh&si=cb8WlQayDPHOkuFm',
        },
        {
            alt: 'Meteor.js Programming Framework Thumbnail',
            image: '/src/assets/images/meteorjs.jpg',
            link: 'https://youtube.com/playlist?list=PLYBJzqz8zpWbIZrm_U_Bg83qYfyduoflT&si=VDr5mzbCjcz3PctC',
        },
        {
            alt: 'Python Programming Language Thumbnail',
            image: '/src/assets/images/python.jpg',
            link: 'https://youtube.com/playlist?list=PLYBJzqz8zpWYHDS2qS-UstfWdQRLrbQ9L&si=1rLHHpQDiuCOEu7u',
        },
    ];

    return (
        <div>
            <header>
                <h1>Steve&apos;s teacher</h1>
                <p>
                    <a target="_blank" href="https://www.youtube.com/@stevesteacher">
                        Learn To Code
                    </a>
                </p>
            </header>

            <main class="main">
                <Carousel data={carouselData} />

                <p style="margin-top: 4rem">
                    Psst! Website is still in development, come back later for some cool stuff!
                </p>
            </main>

            <aside id="educational-navigation">
                <nav>
                    <ul>
                        <li>
                            <a href="/pages/learn/computers/systems-technologies/introduction-to-the-motherboard.html">
                                Learn Computers
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default HomePage;
