import React from 'react';
import Navbar from '../component/layout/Navbar';
import PageBanner from '../component/PageBanner';
import Footer from '../component/layout/Footer';
import { useRouter } from 'next/router'
const PortfolioDetails = ( ) => {
    const info = [
        {clientName:'Bitrix',title:'세일즈 현업 플랫폼',introMain:'Bitrix는 최적의 커뮤니케이션 및 작업 관리를 지원하기 위한 비즈니스 소프트웨어입니다.'
            ,introSub:'고객은 Bitrix24를 사용하여 내부 커뮤니케이션 및 프로젝트 관리를 쉽게 진행하고 편리하게 관리 할 수 있었습니다.'
            ,prodPeriod:'4',scale:'1',devType:'웹사이트',devUtil:'HTML, Javascript, PHP, React JS, MySQL'
            ,role:'당사는 Bitrix24 웹 사이트의 수정 및 확장을 담당했습니다. HTML 및 Javascript와 같은 다양한 도구를 구현하여 웹 사이트의 프런트엔드와 백엔드를 효율적으로 개발 및 수정하였습니다.'
            ,info:'대시 보드 및 유저 차트를 수정함으로써 웹 사이트는 시각적 효과와 매끄러운 인터페이스로 강화되었습니다. 또한 Bitrix24의 데이터베이스 스키마를 개선하여 최적의 데이터 수집을 위한 API를 만들었습니다. 현재 Bitrix24는 고객에게 영업 관리 및 팀 협업을 위한 손쉬운 플랫폼을 제공합니다.'
            ,result:'Bitrix24의 프런트엔드와 백엔드를 수정하고 확장하여 사용자 친화적인 웹 사이트로 제작 및 개선하였습니다. 웹 사이트의 개선으로 8,000,000개 이상의 조직이 Bitrix24를 그들의 비즈니스 운용에 사용하고 있습니다.'
        ,images:['BItrix24_2.jpg','BItrix24_3.jpg','BItrix24_4.jpg','BItrix24_5.jpg']},
        {clientName:'Free Stuff Finders',title:'제품 정보 플렛폼',introMain:'Free Stuff Finder는 시청자가 블로그, 동영상 및 뉴스를 통해 인지한 다양한 제품에 대한 상품검색을 할 수 있는 플랫폼입니다. '
            ,introSub:'링크를 클릭하면 많은 양의 정보가 제공되므로 물건을 쇼핑하는 것이 그 어느 때보다 쉬워졌습니다. 사용자는 가장 저렴하고 최고의 품질의 제품을 쉽게 찾을 수 있습니다. '
            ,prodPeriod:'4~5',scale:'3',devType:'iOS 및 안드로이드',devUtil:'HTML, Javascript, PHP, React JS, MySQL'
            ,role:'당사는 Node JS, MySQL 등 다양한 프로그램을 활용하여 사용자 친화적인 모바일 앱을 개발하였습니다.  새로운 유형의 모바일 앱 플랫폼을 개발하며 플랫폼을 이용하는 사용자가 휴대폰에서 최적의 상품을 쉽게 검색 할 수 있게 만들었습니다. '
            ,info:'기존 웹 사이트를 구현하여 iOS와 Android에서 호환되는 모바일 앱을 만들 수 있었습니다. 여러 프로그래밍 도구를 통해 편의를 위해 새로운 기능이 앱에 추가되었습니다. 이제 웹 브라우저에서 플랫폼을 볼 필요없이 모바일에서 다양한 제품 및 서비스 마케팅 콘텐츠를 쉽게 이용할 수 있습니다. '
            ,result:'웹 사이트를 성공적으로 구축한 후 플랫폼은 2000명이 넘는 사용자들로부터 4.4의 우수한 평가 등급을 받았습니다. 당사의 솔루션을 통해 모바일 앱을 사용하는 사용자가 꾸준히 유입되고 있으며 사용량이 증가하고 있습니다.'
            ,images:['Freestufffinder_2.jpg','Freestufffinder_3.jpg','Freestufffinder_4.jpg','Freestufffinder_5.jpg']},
        {
            clientName:'Good Doctors',title:'원격 진료 플렛폼 '
            ,introMain:'원격 의료 응용 프로그램인 Good Doctors는 진료 혜택을 받기 어려운 지역의 사람들이 의사와 직접 통신 할 수 있도록 도와주는 가상 인터페이스입니다.'
            ,introSub:'캐나다의 가장 큰 원격 의료 회사인 Good Doctors는 비 대면 진료를 필요로 하는 환자를 100,000개 이상의 의료 기관에 연결해 주는 화상 컨설팅 서비스를 운영하고 있습니다.'
            ,prodPeriod:'12',scale:'5',devType:'CMS, 웹사이트, 웹 애플리케이션, iOS 및 안드로이드',devUtil:'Reach JS, Node JS, Swift, Java, HTML, CSS, JavaScript'
            ,role:'당사는 웹 사이트 수정, 전체 CMS 구축, 안드로이 및 iOS에서 사용할 수 있는 모바일 상담 앱 제작을 담당했습니다. 현재 Good Doctors는 100,000개 이상의 의료 기관과 연계되어 있습니다.'
            ,info:'이 프로젝트는 전체 CMS 구축과 iOS 및 안드로이드와 호환되는 모바일 상담 애플리케이션으로 구성되었습니다. 당사는 안전한 클라우드 시스템을 구축하여 고객의 개인 정보 유출을 방지하였으며 발생한 환자를 의료기관으로 이송하는 프로세스를 자동화했습니다.'
            ,result:'당사와 협업한 고객은 현재 캐나다 온타리오에서 운영되는 가장 큰 원격 의료 회사로 발돋움하였으며 버튼 클릭 한 번으로 지역 사회 구성원에게 접근성 있는 의료 서비스를 제공 할 수 있도록 지원하고 있습니다. 이제 환자는 언제 어디서나 의료 종사자와 직접 또는 화상으로 의료 상담을 예약 할 수 있습니다. '
            ,images:['Gooddoctors_2.jpg','Gooddoctors_3.jpg','Gooddoctors_4.jpg','Gooddoctors_5.jpg']},
        {
            clientName:' LG CNS',title:'제품 정보 플렛폼  '
            ,introMain:'대한민국 최고의 IT 컨설팅 회사 중 하나인 당사의 고객은 혁신적이고 성공적인 계획을 통해 기술 구현에 전념하고 있습니다.'
            ,introSub:'기술 중심의 세상을 위한 IT 솔루션을 제공하는 당사의 고객은 4차 산업 혁명을 통해 대한민국과 세계를 선도하고자 합니다.'
            ,prodPeriod:'4',scale:'4',devType:'소프트웨어',devUtil:'React JS, Node JS, MySQL'
            ,role:'당사는 고객이 요구하는 자동화 플랫폼 구축을 위해 MySQL, Node JS 및 React JS를 활용하여 고객의 요구를 충족 할 수 있는 솔루션을 제작하였습니다.'
            ,info:'당사는 고객이 사용하기 편리한 세일즈 견적 자동화 플랫폼을 구축하여 고객으로 하여금 쉽게 인보이스를 작성하고, 업로드 및 그들의 공급 업체에 인보이스를 편리하게 보낼 수 있게 하였습니다 '
            ,result:'고객의 세일즈 비용 견적 계산을 자동화하여 업무 효율을 최상으로 향상시켰습니다.'
            ,images:['LGCNS_2.jpg','LGCNS_3.jpg','LGCNS_4.jpg','LGCNS_5.jpg']}
        ,{
            clientName:' Ziktalk',title:'언어 교환 플랫폼 '
            ,introMain:'소셜미디어 형태인 Ziktalk는 블록체인을 구현하는 지식 교환 플랫폼입니다.'
            ,introSub:' 암호 화폐를 구현함으로써 사용자는 재미있는 콘텐츠를 공유하고 이러한 통화를 모아 사용자는 실제 화폐로 전환할 수 있습니다.'
            ,prodPeriod:'3',scale:'3',devType:'웹사이트',devUtil:'Swift, Java, C#'
            ,role:'당사는 안드로이드와 iOS에서 모두 호환되는 모바일 애플리케이션을 제작하였습니다. Swift 및 Java와 같은 도구를 사용하여 플랫폼을 위한 블록체인 기술을 성공적으로 통합했습니다. 당사는 사용자가 즐거운 콘텐츠에 대해 보상을 주고받을 수 있도록 직관적이고 창의적으로 소셜 미디어 플랫폼을 설계하여 고객에게 제공하였습니다. '
            ,info:'Dunamu가 개발한 블록체인을 구현하는 세계적인 SNS 플랫폼인 Ziktalk은 사용자가 다양한 활동을 통해 암호화폐를 채굴하고 화폐를 구현해낼 수 있도록 했습니다.'
            ,result:'당사의 서비스를 통해 고객은 Zik의 암호 화폐와 사용자의 현지 통화와 같은 안정적인 통화 교환을 구현하였습니다. 또한, 고객의 모바일 앱은 전 세계적으로 인정 받아 수천 명 이상의 사용자들이 이용하고 있습니다.'
            ,images:['Ziktalk_2.jpg','Ziktalk_3.jpg','Ziktalk_4.jpg','Ziktalk_5.jpg']}
        ,{
            clientName:'The Selenium Group',title:'데이터 수집 및 분석 '
            ,introMain:'Selenium Group은 최고의 IT 서비스를 제공하는 캐나다 최대의 IT 회사입니다.'
            ,introSub:'20 년 이상의 IT 전문가로서 경험을 쌓은 이 서비스는 크고 작은 모든 비즈니스를 위한 맞춤형 서비스를 제공합니다. '
            ,prodPeriod:'4',scale:'1',devType:'로봇 스크립트(크롤러)',devUtil:'Python, Bash'
            ,role:'기존과 차별된 새로운 자동화 시스템을 Python (Beautiful Soup, Selenium) 및 Bash와 같은 개발 도구를 활용하여 제작하였습니다. 고객은 이를 통해 Google에서 방대한 데이터에서 원하는 정보를 찾아내어 Excel로 변환하는 Robot을 활용할 수 있게 되었습니다.\n'
            ,info:'웹 사이트의 데이터 스크래핑 자동화 프로세스를 통해 고객은 획득하고자 하는 연락처 세부 정보, 소셜 미디어 존재 여부, 보안 수준 및 IP 주소와 같은 다양한 데이터를 수집할 수 있었습니다. 이 모든 산출물은 편의를 위해 Excel 파일로 변환되었습니다. '
            ,result:'데이터 스크래핑 자동화는 고객의 수작업을 줄였을 뿐만 아니라 이를 활용하여 30만 개 이상의 회사 웹 사이트에서 데이터를 수집 할 수 있었고 이를 로펌에 판매했습니다. \n'
            ,images:['Selenium_2.jpg','Selenium_3.jpg','Selenium_4.jpg','Selenium_5.jpg']}];
    const router = useRouter();
    let {index} = router.query;
    index = index === undefined ? 0 : index;

    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle={info[index].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Portfolio Details"
                BGImage={"portfolio-detail-bg".concat(index)}
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <img src={"/images/portfolio/" + info[index].images[0]} alt="portfolio" />
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>개요</h3>
                                <p>{info[index].introMain}<br/>
                                    {info[index].introSub}
                                </p>
                                <div className="row ">
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="img-thumbnail">
                                            <img src={"/images/portfolio/" + info[index].images[1]} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-6">

                                        <div className="img-thumbnail">
                                            <img src={"/images/portfolio/" + info[index].images[2]} alt="image" />
                                        </div>


                                    </div>

                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className=" img-thumbnail">
                                            <img src={"/images/portfolio/" + info[index].images[3]} alt="image" />
                                        </div>
                                    </div>


                                </div>
                                <p></p>


                                <h3>당사의 역할</h3>
                                <p>{info[index].role}
                                </p>

                                <h3>프로젝트 정보</h3>
                                <p>{info[index].info}
                                </p>

                                <h4>제작 결과</h4>
                                <p>{info[index].result}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="portfolio-details-information ml-10">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-user'></i>
                                        </div>
                                        <span>고객사:</span>
                                        {info[index].clientName}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bxs-map'></i>
                                        </div>
                                        <span>제작기간:</span>
                                        {info[index].prodPeriod} 개월
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-purchase-tag'></i>
                                        </div>
                                        <span>개발팀 규모:</span>
                                        {info[index].scale}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-check'></i>
                                        </div>
                                        <span>개발 유형:</span>
                                        {info[index].devType}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-globe'></i>
                                        </div>
                                        <span>개발 도구:</span>
                                        {info[index].devUtil}
                                    </li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioDetails;
