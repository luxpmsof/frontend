import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const DigitalExperience = () => {
    return (
        <div className="digital-experience-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="tab align-items-center digital-experience-tab  ">
                    <Tabs>
                        <TabList style={{margin:"auto !important", display:"table",   display:"flex", justifyContent: "center"}}>
                            <Tab style={{display: "list-item"}}>
                                <span>
                                    <i className="flaticon-digital-marketing flex-fill"></i>
                                    Web Apps
                                </span>
                            </Tab>
                            <Tab style={{display: "list-item"}}>
                                <span>
                                    <i className="flaticon-profit"></i>
                                    Big Data
                                </span>
                            </Tab>
                            <Tab style={{display: "list-item"}}>
                                <span>
                                    <i className="flaticon-email-marketing"></i>
                                    Mobile
                                </span>
                            </Tab>
                            <Tab style={{display: "list-item"}}>
                                <span>
                                    <i className="flaticon-network"></i>
                                    Artificial intelligence
                                </span>
                            </Tab>

                        </TabList>

                        <TabPanel>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="digital-experience-content">
                                        <h3>Web Apps</h3>
                                        <p>Enhance your organization’s efficiency by automating your client management, accounting, and sales</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>High Performance</h3>
                                            <p>We ensure that your website can handle at least 500 transactions per second by performing stress test throughout the development period.
                                            </p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Trendy Design</h3>
                                            <p>We have a design cycle where our top designers draft designs and present them to our clients. Then, we take the feedback from our clients and optimize the design features.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Fast Delivery</h3>
                                            <p>We build a team for a project quickly, analyze risks daily, and mitigate the risks by utilizing the best solutions possible. This allows us to deliver our outputs on time and within budget.</p>
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
                                        <h3>Big Data</h3>
                                        <p>Reach out to potential customers quickly and efficiently by predicting the market’s demand with our big data solutions.</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Optimized Database Architecture:</h3>
                                            <p>our high-performance website starts with engineering the database architecture.</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>User Behavior</h3>
                                            <p>one of the key aspects when it comes to building database is that the database is structured in a way that it helps our client predict the users’ behaviors on their platform.</p>
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
                                        <h3>Mobile</h3>
                                        <p>Build the next TikTok, Snapchat, or Uber with LuxPM: our teams consist of the best mobile developers in town.</p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Optimized user interaction</h3>
                                            <p>we ensure that our UI / UX solutions enhance the platform’s quality.
                                            </p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>AR / VR / Videos </h3>
                                            <p>We can provide highly advanced technological solutions such as augmented reality, virtual reality and live stream videos.
                                            </p>
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
                                        <h3>Artificial intelligence</h3>
                                        <p>Your results will grow more than tenfold: by hiring our AI machines, make the impossible possible.
                                        </p>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Predictability</h3>
                                            <p>we ensure that the returned data from our AI machines is accurate and fast enough. </p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Efficiency</h3>
                                            <p>we do not provide a solution that costs beyond our client’s budget. Our interest is to find an AI solution that meets the client’s expectations regarding time and cost.
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
