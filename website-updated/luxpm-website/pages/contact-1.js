import React from 'react';
import Navbar from '../component/layout/Navbar';
import PageBanner from '../component/PageBanner';
import Footer from '../component/layout/Footer';
import SubscribeForm from '../component/SubscribeForm';
import ContactInfo from '../component/ContactInfo';
import ContactForm from '../component/ContactForm';

const Contact = () => {
    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle="연락처"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Style One"
                BGImage="item-bg4"
            />

            <ContactInfo />
            {/*
            <ContactForm />
*/}
			<Footer />
		</>
    )
}

export default Contact;
