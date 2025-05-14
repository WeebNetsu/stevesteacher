import './style.scss';

import React from 'react';

const HomePage: React.FC = () => {
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
                <div class="video-carousel">
                    <div class="video-thumbnail navigation-image prev">
                        <a
                            href="https://youtube.com/playlist?list=PLYBJzqz8zpWbIZrm_U_Bg83qYfyduoflT&si=VDr5mzbCjcz3PctC"
                            target="_blank"
                            class="image-link"
                        >
                            <img
                                class="rounded mx-auto d-block img-fluid blur"
                                style="width: 100%; max-width: 500px"
                                src="/src/assets/images/meteorjs.jpg"
                                alt="Meteor.js Programming Framework Thumbnail"
                            />
                        </a>

                        <i class="nav-icon bi bi-chevron-double-left"></i>
                    </div>

                    <div class="video-thumbnail">
                        <a
                            href="https://youtube.com/playlist?list=PLYBJzqz8zpWaiGbFcSdlh08zlpe8Tl_Gh&si=cb8WlQayDPHOkuFm"
                            target="_blank"
                            class="image-link"
                        >
                            <img
                                class="rounded mx-auto d-block img-fluid"
                                style="width: 100%; max-width: 500px"
                                src="/src/assets/images/nim.jpg"
                                alt="Nim Programming Language Thumbnail"
                            />
                        </a>
                    </div>

                    <div class="video-thumbnail navigation-image next">
                        <a
                            href="https://youtube.com/playlist?list=PLYBJzqz8zpWYHDS2qS-UstfWdQRLrbQ9L&si=1rLHHpQDiuCOEu7u"
                            target="_blank"
                            class="image-link"
                        >
                            <img
                                class="rounded mx-auto d-block img-fluid blur"
                                style="width: 100%; max-width: 500px"
                                src="/src/assets/images/python.jpg"
                                alt="Python Programming Language Thumbnail"
                            />
                        </a>

                        <i class="nav-icon bi bi-chevron-double-right"></i>
                    </div>
                </div>

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
