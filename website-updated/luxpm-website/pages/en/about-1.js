import React from 'react';
import Navbar from '/component/layout/en/Navbar';
import PageBanner from '/component/en/PageBanner';
import Footer from '/component/layout/en/Footer';

import TestimonialStyleTwo from '/component/en/TestimonialStyleTwo';
import FunFactsTwo from '/component/en/FunFactsTwo';
import WhatWeDoingBest from '/component/en/WhatWeDoingBest';
import LatestBlogPost from '/component/en/LatestBlogPost';
import Partners from '/component/en/Partners';

const AboutOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle="About Us "
                homePageUrl="/"
                homePageText="Home"
                activePageText="About One"
                BGImage="item-bg3"
            />

            <div className="about-area ptb-100">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">

                                <h3>We Help Our Clients Achieve their Visions
                                </h3>
                                <div className="bar"></div>
                                <strong>Founded in Vaughan, Ontario in 2018, LuxPM has become a top selection for Fortune 500 companies. Over the past years, we have worked with companies such as LG CNS, Bitrix24, Resy, and Good Doctors Medical Clinics.
                                </strong>
                                <p>Our Operations cover the whole Asian continent, including South Korea, Vietnam, Singapore, China, Japan, India, and Russia. We are working hard to expand to other continents with the objective of becoming one of the largest IT companies in the world.
                                </p>
                                <p>Our aim is to help our communities grow by providing our clients the best software consultancy, helping them achieve their visions in a cost and time efficient manner.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="pb-100">
                <TestimonialStyleTwo />
            </div>
            <LatestBlogPost />
            <FunFactsTwo  />
            <WhatWeDoingBest />


            {/*
            <div className="pt-100">
                <Partners />
            </div>
*/}
            <Footer />
		</>
    )
}

export default AboutOne;
