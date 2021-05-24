import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router'
const PortfolioDetails = ( ) => {
    const info = [{title:'Bitrix'},{title:'Free Stuff Finders'}];
    const router = useRouter();
    const {index} = router.query;


    return (
        <>
			<Navbar />
            <div className="card-subtitle">
                <span>[todo]{index}</span>
                <ul>
                    <li>main banner relevant image as the background</li>
                    <li>content relevant image as the background</li>
                </ul>
            </div>
			<PageBanner
                pageTitle="최근 진행된 프로젝트: 세일즈 현업 플랫폼 "
                homePageUrl="/"
                homePageText="Home"
                activePageText="Portfolio Details"
                BGImage="item-bg4"
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <img src="/images/portfolio-details.jpg" alt="portfolio" />
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>Bitrix는 최적의 커뮤니케이션 및 작업 관리를 지원하기 위한 비즈니스 소프트웨어입니다.</h3>
                                <p>고객은 Bitrix24를 사용하여 내부 커뮤니케이션 및 프로젝트 관리를 쉽게 진행하고 편리하게 관리 할 수 있었습니다.
                                </p>



                                <h3>당사의 역할</h3>
                                <p>당사는 Bitrix24 웹 사이트의 수정 및 확장을 담당했습니다. HTML 및 Javascript와 같은 다양한 도구를 구현하여 웹 사이트의 프런트엔드와 백엔드를 효율적으로 개발 및 수정하였습니다.
                                </p>

                                <h3>프로젝트 정보</h3>
                                <p>대시 보드 및 유저 차트를 수정함으로써 웹 사이트는 시각적 효과와 매끄러운 인터페이스로 강화되었습니다. 또한 Bitrix24의 데이터베이스 스키마를 개선하여 최적의 데이터 수집을 위한 API를 만들었습니다. 현재 Bitrix24는 고객에게 영업 관리 및 팀 협업을 위한 손쉬운 플랫폼을 제공합니다.
                                </p>

                                <h4>제작 결과</h4>
                                <p>Bitrix24의 프런트엔드와 백엔드를 수정하고 확장하여 사용자 친화적인 웹 사이트로 제작 및 개선하였습니다.  웹 사이트의 개선으로 8,000,000개 이상의 조직이 Bitrix24를 그들의 비즈니스 운용에 사용하고 있습니다.
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
                                        {info[index].title}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bxs-map'></i>
                                        </div>
                                        <span>제작기간:</span>
                                        4 개월
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-purchase-tag'></i>
                                        </div>
                                        <span>개발팀 규모:</span>
                                        1
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-check'></i>
                                        </div>
                                        <span>개발 유형:</span>
                                        웹사이트
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-globe'></i>
                                        </div>
                                        <span>개발 도구:</span>
                                        HTML, Javascript, PHP, React JS, MySQL
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
