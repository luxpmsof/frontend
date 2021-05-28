import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner-item">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <h1>아시아-태평양 지역의 럭스피엠은최고의 소프트웨어 엔지니어링 기업 중 하나입니다</h1>
                                        <p>저희는 Full Stack과 AI를 전문으로 하는 글로벌 엔지니어링 기업입니다. 고객들에게 최고의 엔지니어링 팀을 제공하고, 다양한 각도에서 직면한 문제를 분석하며, 예산 및 시간표 요구사항을 충족하는 최상의 솔루션을 제공합니다.
                                        </p>
                                        {/*
                                        <div className="banner-btn">
                                            <Link href="/contact-1">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                        */}
                                    </div>
                                </div>
                                {/*
                                <div className="col-lg-6">
                                    <div className="main-banner-image">
                                        <img src="/images/banner/banner-image-1.png" alt="image" />
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner-shape">
                <div className="shape-1">
                    <img src="/images/banner/banner-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="/images/banner/banner-shape-2.png" alt="image" />
                </div>
                <div className="shape-3">
                    <img src="/images/banner/banner-shape-3.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
