import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email-1"></i>
                            </div>

                            <h3>이메일</h3>
                            <p><a href="mailto:sales@luxpmsoft.com">sales@luxpmsoft.com</a></p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>위치</h3>
                            <p><a href="https://www.google.com/maps/@37.4004578,127.1104545" target="_blank">경기도 성남시 분당구 대왕판교로644번길 49 202호</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>연락처</h3>
                            <p><a href="tel:+82317144530">+82 31-714-4530</a></p>

                            <p><a href="fax:+82317144530">팩스 : +82 31-714-4531</a></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
