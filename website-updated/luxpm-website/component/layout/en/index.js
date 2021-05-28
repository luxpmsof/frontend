import React from 'react'
import Head from "next/head"
import GoTop from '../common/GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>LuxPM</title>
                <meta charSet="utf-8"/>
                <meta content="website" property="og:type"/>
                <meta content="LuxPM is one of the top software engineering firms in the Asia-Pacific region" property="title"/>
                <meta content="LuxPM is one of the top software engineering firms in the Asia-Pacific region" property="og:title"/>
                <meta content="We are a global engineering firm specialized in full stake and AI. We provide the best engineering teams to our clients, analyze the problems faced from various angles, and provide the best solutions that meet the budget and timeline requirements" name="description"/>
                <meta content="https://www.luxpmsoft.com/static/media/portfolio-banner.c361fa01.webp" property="og:image"/>
                <meta name="keywords" content="Full Stack,AI,Android,Swift,Kotlin,Python,React,React Native,Vue,API Development,APP Development,IOS Development,IOS App Developer,IT Development"
                      className="next-head" />
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;
