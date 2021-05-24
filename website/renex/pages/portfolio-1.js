import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle="오직 고객만을 위한 우수한 제품을 개발하여 도움을 드리겠습니다 "
                homePageUrl="/"
                homePageText="Home"
                activePageText="Portfolio Two Column"
                BGImage="item-bg1"
            />

            <div className="portfolio-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-9.jpg" alt="image" />
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

                        <div className="col-lg-6 col-md-6">
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

                        <div className="col-lg-6 col-md-6">
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

                        <div className="col-lg-6 col-md-6">
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

                        <div className="col-lg-6 col-md-6">
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



                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers">
                                    <i className="flaticon-left-arrow"></i>
                                </a>

                                <span className="page-numbers current" aria-current="page">1</span>
                                {/*
                                <a href="#" className="page-numbers">4</a>
                                */}
                                <a href="#" className="next page-numbers">
                                    <i className="flaticon-next"></i>
                                </a>
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

			<Footer />
		</>
    )
}

export default Portfolio;
