import React from 'react';
import Link from 'next/link';

const WhatWeDoingBest = () => {
    return (
        <div className="overview-area ptb-100">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="overview-content">

                            <h3>Our Values
                            </h3>

                            <h2>We are an organization run by engineers</h2>
                            <p>
                                With our IT experts at LuxPM, we have solved many technical issues and understand the most ideal and cost-effective solutions to any issues without compromising the security or safety of our customers or the public
                            </p>
                            <h2>We Provide customized services for our customer</h2>
                            <p>
                                Do you experience inefficiency in your operations and implementing a number of platforms? If you are looking to enhance your team’s performance with a customized solution tailored to your company’s needs, we can help. Our team of experts are specialized in analyzing and solving issues without compromising defects.
                            </p>
                            <h2>We help our customers seamlessly enter a market</h2>
                            <p>
                                We are not simply a group of tech experts. We have created over 30 prototypes for our customers, helping them enter the market. With experience in various  projects, our portfolio ranges from eCommerce to sales automation. Some of the platforms that we have contributed in creating have now amassed to over 1 million users from all around the world. Thus, we believe that we provide value to those who implement our services.
                            </p>
                            <h2>We guarantee that all our projects finish on time and within budget</h2>
                            <p>
                                By being cost and time efficient, it is one of the biggest reasons why we are chosen by Fortune 500 companies. Moreover, we go above and beyond to exceed our customer’s expectation for their projects. We guarantee that your projects will finish on time and within budget by meeting and even exceeding your expectations.
                            </p>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="overview-image">
                            <img src="/images/overview.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoingBest;
