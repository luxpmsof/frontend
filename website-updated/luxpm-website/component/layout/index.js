import React from 'react'
import Head from "next/head"
import GoTop from '../common/GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>LuxPM</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta charSet="utf-8"/>
                <meta content="website" property="og:type"/>
                <meta content="럭스피엠은 아시아-태평양 지역 최고의 소프트웨어 엔지니어링 기업입니다." property="title"/>
                <meta content="럭스피엠은 아시아-태평양 지역 최고의 소프트웨어 엔지니어링 기업입니다." property="og:title"/>
                <meta content="저희는 Full Stack과 AI를 전문으로 하는 글로벌 엔지니어링 기업입니다. 고객들에게 최고의 엔지니어링 팀을 제공하고, 다양한 각도에서 직면한 문제를 분석하며, 예산 및 시간표 요구사항을 충족하는 최상의 솔루션을 제공합니다" name="description"/>
                <meta content="https://www.luxpmsoft.com/static/media/portfolio-banner.c361fa01.webp" property="og:image"/>
                <meta name="keywords" content="Full Stack,AI,Android,Swift,Kotlin,Python,React,React Native,Vue,API 개발,APP 개발,IOS 개발,IOS 개발자,IOS 앱개발,IT 개발,모바일앱,모바일앱개발비용,모바일어플,모바일어플개발,모바일앱,모바일플랫폼,병원예약어플,쇼핑몰어플,스마트폰앱,안드로이드개발,안드로이드개발자,안드로이드앱,안드로이드앱개발,안드로이드어플,안드로이드어플만들기,안드로이드프로그래밍,앱개발,앱개발업체,앱개발프로그램,앱만들기,앱제작비용,어플개발비용,어플개발업체,어플개발회사,어플리케이션개발,어플만들기,어플제작,어플제작비용,어플제작업체,웹기획,웹서비스,웹어플리케이션,웹제작,웹페이지제작,차량관리어플,콘텐츠개발,프로그램개발,플랫폼개발,플랫폼구축,플랫폼제작,하이브리드웹,홈페이지개발,홈페이지구축,홈페이지업체"
                      className="next-head" />
                <meta content="LuxPM Inc,." name="author"/>

                <link rel="canonical" href="https://renex-react.envytheme.com/"></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;
