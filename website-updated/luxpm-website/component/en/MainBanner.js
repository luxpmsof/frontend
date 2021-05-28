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
                                        <h1>LuxPM is one of the top software engineering firms in the Asia-Pacific region</h1>
                                        <p>We are a global engineering firm specialized in full stake and AI. We provide the best engineering teams to our clients, analyze the problems faced from various angles, and provide the best solutions that meet the budget and timeline requirements.
                                        </p>


                                    </div>
                                </div>


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
