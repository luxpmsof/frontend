import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                        <li>main banner relevant picture for the background</li>

                    </ul>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email-1"></i>
                            </div>

                            <h3>Email Here</h3>
                            <p><a href="mailto:info@luxpmsoft.com">info@luxpmsoft.com</a></p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Location Here</h3>
                            <p><a href="https://www.google.com/maps/@37.4004578,127.1104545" target="_blank">경기도 성남시 분당구 대왕판교로644번길 49 202호</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>Call Here</h3>
                            <p><a href="tel:+821099404534">+82 10-9940-4534</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
