import React from 'react';
import Navbar from '../component/layout/Navbar';
import MainBanner from '../component/MainBanner';

import DigitalExperience from '../component/DigitalExperience';
import FunFacts from '../component/FunFacts';

import Testimonials from '../component/Testimonials';

import Partners from '../component/Partners';
import Footer from '../component/layout/Footer';
import OurProjects from "../component/OurProjects";

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
