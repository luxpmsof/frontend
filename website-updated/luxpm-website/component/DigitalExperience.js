import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const DigitalExperience = () => {
    return (
        <div className="digital-experience-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>우리의 서비스</h2>
                    <div className="bar"></div>
                </div>

                <div className="tab   digital-experience-tab  " style={{margin:"auto !important", alignItems:"center!important"}}>

                    <Tabs  fill >
                            <TabList style={{margin:"auto !important", display:"table",   display:"flex", justifyContent: "center"}}>

                                <Tab selected={true} style={{display: "list-item"}}>
                                    <span>
                                        <i className="flaticon-digital-marketing"></i>
                                        웹 애플리케이션
                                    </span>
                                </Tab >
                                <Tab style={{display: "list-item"}}>
                                    <span>
                                        <i className="flaticon-profit"></i>
                                        빅 데이터
                                    </span>
                                </Tab>
                                <Tab style={{display: "list-item"}}>
                                    <span>
                                        <i className="flaticon-email-marketing"></i>
                                        모바일 앱
                                    </span>
                                </Tab>
                                <Tab style={{display: "list-item"}}>
                                    <span>
                                        <i className="flaticon-network"></i>
                                        인공지능
                                    </span>
                                </Tab>


                            </TabList>
                            <br></br>
                        <TabPanel>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="digital-experience-content">
                                        <h3>웹 애플리케이션</h3>
                                        <p>고객 관리, 회계 및 영업 활동을 자동화하여 조직의 업무 효율성을 증대 시킬 수 있습니다</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>고성능</h3>
                                            <p>개발 기간 동안 스트레스 테스트를 수행하여 귀하의 웹 사이트가 초당 최소 500건의 트랜잭션을 처리할 수 있도록 보장합니다.
                                            </p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>트렌디한 디자인</h3>
                                            <p>우리는 최고의 디자이너들이 디자인을 초안하여 고객들에게 발표하는 디자인 주기를 가지고 있습니다. 그런 다음 고객사의 피드백을 받아 설계 기능을 최적화합니다.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>빠른 전송</h3>
                                            <p>프로젝트를 위한 팀을 신속하게 구성하고, 매일 리스크를 분석하며, 가능한 최고의 솔루션을 활용하여 리스크를 완화합니다. 이를 통해 예산 범위 내에서 제때에 결과를 제공할 수 있습니다.</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="digital-experience-image">
                                        <img src="/images/digital-experience/digital-experience-3.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>



                        <TabPanel>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="digital-experience-content">
                                        <h3>빅 데이터</h3>
                                        <p>빅 데이터 솔루션으로 시장의 수요를 예측하여 잠재 고객에게 신속하고 효율적으로 연락할 수 있습니다.</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>최적화된 데이터베이스 아키텍처</h3>
                                            <p>고성능 웹 사이트는 데이터베이스 아키텍처를 엔지니어링하는 것으로 시작합니다.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>사용자 행동</h3>
                                            <p>데이터베이스를 구축할 때 중요한 측면 중 하나는 클라이언트가 플랫폼에서 사용자의 행동을 예측할 수 있도록 데이터베이스를 구성한다는 것입니다.</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="digital-experience-image">
                                        <img src="/images/digital-experience/digital-experience-2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>


                        <TabPanel>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="digital-experience-content">
                                        <h3>모바일 앱</h3>
                                        <p>럭스피엠의 최고의 앱 개발자들과 함께 틱톡, 스냅쳇 또는 우버와 같은 차세대 플랫폼을 개발 할 수 있습니다.</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>럭스피엠의 최고의 앱 개발자들과 함께 틱톡, 스냅쳇 또는 우버와 같은 차세대 플랫폼을 개발 할 수 있습니다.</h3>
                                            <p>우리는 UI/UX 솔루션이 플랫폼의 품질을 향상시킬 수 있도록 보장합니다.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>AR/VR/비디오</h3>
                                            <p>AR, VR, 라이브 스트림 영상 등 기술 솔루션을 제공해 드립니다.</p>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="digital-experience-image">
                                        <img src="/images/digital-experience/digital-experience-4.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="digital-experience-content">
                                        <h3>인공지능</h3>
                                        <p>인공지능 환경 구축을 통해 업무 능력을 10배 이상 향상하여 불가능한 일은 가능하도록 합니다.</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>예측 가능성</h3>
                                            <p>우리는 우리의 AI 머신에서 반환된 데이터가 충분히 정확하고 빠를 수 있도록 보장합니다.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>효율성</h3>
                                            <p>고객의 예산을 초과하지 않도록 하는 것을 중요하게 생각합니다. 시간과 비용에 대한 고객의 기대에 부응하는 AI 솔루션을 찾는 것이Input relevant images for all of the tabs
                                                우리의 목표입니다.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="digital-experience-image">
                                        <img src="/images/digital-experience/digital-experience-5.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </div>



    )
}

export default DigitalExperience;
