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

                            <h3>Email Here</h3>
                            <p><a href="mailto:sales@luxpmsoft.com">sales@luxpmsoft.com</a></p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Location Here</h3>
                            <p><a href="https://www.google.com/maps/@37.4004578,127.1104545" target="_blank">49, Daewangpangyo-ro 644beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>Call Here</h3>
                            <p><a href="tel:+82317144530">+82 31-714-4530</a></p>

                            <p><a href="fax:+82317144531">Fax : +82 31-714-4531</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
