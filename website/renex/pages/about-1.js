import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import TeamMember from '../components/Common/TeamMember';
import PriceTable from '../components/PricingPlans/PriceTable';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import WhatWeDoingBest from '../components/HomeFive/WhatWeDoingBest';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Partners from '../components/Common/Partners';

const AboutOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle="About One"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About One"
                BGImage="item-bg3"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="card-subtitle">
                        <span>[todo]</span>
                        <ul>
                            <li>main image (relevant IT image)</li>
                            <li>sub image 회사 소개 (relevant IT image)
                            </li>

                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">

                                <h3>고객사가 비전을 달성할 수 있도록 럭스피엠이 지원합니다</h3>
                                <div className="bar"></div>
                                <strong>2018년 캐나다 온타리오 주에서 설립된 럭스피엠은 포춘 500대 기업과 지속해서 협업하고 있습니다. 지난 몇 년 동안 당사는 LG CNS, Bitrix24, Resy, Good Doctors 및 Medical Clinics 등과 협업하였습니다.</strong>
                                <p>당사는 한국, 베트남, 싱가포르, 중국, 일본, 인도, 러시아를 포함한 아시아에서 비즈니스를 수행하고 있습니다. 세계 최대 IT 기업을 목표로 글로벌 시장에 진출하기 위해 역량을 발휘하고 있습니다.
                                </p>
                                <p>당사는 한국, 베트남, 싱가포르, 중국, 일본, 인도, 러시아를 포함한 아시아에서 비즈니스를 수행하고 있습니다. 세계 최대 IT 기업을 목표로 글로벌 시장에 진출하기 위해 역량을 발휘하고 있습니다.
                                    .</p>
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



            <div className="pt-100">
                <Partners />
            </div>

            <Footer />
		</>
    )
}

export default AboutOne;
