import React from 'react';
import Navbar from '/component/layout/en/Navbar';
import MainBanner from '/component/en/MainBanner';

import DigitalExperience from '/component/en/DigitalExperience';
import FunFacts from '/component/en/FunFacts';

import Testimonials from '/component/en/Testimonials';

import Partners from '/component/en/Partners';
import Footer from '/component/layout/en/Footer';
import OurProjects from "/component/en/OurProjects";

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
