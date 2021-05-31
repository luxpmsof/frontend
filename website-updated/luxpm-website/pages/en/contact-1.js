import React from 'react';
import Navbar from '/component/layout/en/Navbar';
import PageBanner from '/component/en/PageBanner';
import Footer from '/component/layout/en/Footer';
import SubscribeForm from '/component/en/SubscribeForm';
import ContactInfo from '/component/en/ContactInfo';
import ContactForm from '/component/en/ContactForm';

const Contact = () => {
    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle="Contact Us "
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
