import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
    return (
        <div className="portfolio-area bg-fff5ee pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>포트폴리오 쇼케이스</h2>
                    <div className="bar"></div>
                </div>
                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                    <li>List of project related images</li>
                    <li>Hovering mouse on the image: the title of the project is shown with blue/yellow shading of the image. Clicking the image will redirect you to the portfolio page
</li>
                        <li>Color of the background should be yellow/blue
                        </li>
                    </ul>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-1.jpg" alt="image" />

                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/portfolio-details', query: { index: 0 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/portfolio-details', query: { index: 0 } }}>
                                        <a>Bitrix24</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-2.jpg" alt="image" />

                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/portfolio-details', query: { index: 1 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/portfolio-details', query: { index: 1 } }}>
                                        <a>Free Stuff Finder</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-3.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/portfolio-details', query: { index: 2 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/portfolio-details', query: { index: 2 } }}>
                                        <a>Good Doctors</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-4.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/portfolio-details', query: { index: 3 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/portfolio-details', query: { index: 3 } }}>
                                        <a>LG CNS</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-5.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/portfolio-details', query: { index: 4 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/portfolio-details', query: { index: 4 } }}>
                                        <a>Ziktalk</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="default-shape">
                <div className="shape1">
                    <img src="/images/default-shape/default-shape1.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/default-shape/default-shape2.png" alt="image" />
                </div>
                <div className="shape3">
                    <img src="/images/default-shape/default-shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/default-shape/default-shape4.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default OurProjects;
