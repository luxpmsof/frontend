import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import Features from '../components/HomeFive/Features';
import AboutContent from '../components/HomeFive/AboutContent';
import ServicesStyleTwo from '../components/Common/ServicesStyleTwo';
import DigitalExperience from '../components/Common/DigitalExperience';
import FunFacts from '../components/Common/FunFacts';
import PriceTableTwo from '../components/PricingPlans/PriceTableTwo';
import TeamMemberStyleTwo from '../components/Common/TeamMemberStyleTwo';
import Testimonials from '../components/Common/Testimonials';
import WhatWeDoingBest from '../components/HomeFive/WhatWeDoingBest';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import OurProjects from "../components/Common/OurProjects";

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            {/** <Features />

            <AboutContent />
             */}


            <DigitalExperience />

            <FunFacts />

            <OurProjects />
            <Testimonials />



            <div className="pt-100">
                <Partners />
            </div>

            <Footer />
        </>
    )
}

export default Index;
