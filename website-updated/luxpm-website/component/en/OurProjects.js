import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
    return (
        <div className="portfolio-area bg-fff5ee pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>PORTFOLIO SHOWCASE</h2>
                    <div className="bar"></div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/Bitrix24_1.jpg" alt="image" />

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
                                <img src="/images/portfolio/Freestufffinder_1.jpg" alt="image" />

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
                                <img src="/images/portfolio/Gooddoctors_1.jpg" alt="image" />
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
                                <img src="/images/portfolio/LGCNS_1.jpg" alt="image" />
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
                                <img src="/images/portfolio/Ziktalk_1.jpg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/Selenium_1.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href={{ pathname: '/en/portfolio-details', query: { index: 5 } }}>
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href={{ pathname: '/en/portfolio-details', query: { index: 5 } }}>
                                        <a>Selenium</a>
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
