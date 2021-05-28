import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area pt-100 pb-70">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="154" height="54" viewBox="0 0 144.016 37.02"><g id="Group_222" data-name="Group 222" transform="translate(-144.773 -80.59)"><path id="Path_65" data-name="Path 65" d="M86.811-13.762V0H82.545V-36.41h10q5.84,0,9.052,2.844t3.212,8.023a11.035,11.035,0,0,1-3.567,8.48q-3.567,3.3-9.636,3.3Zm0-18.789v14.93h4.469q4.418,0,6.741-2.019a7.146,7.146,0,0,0,2.323-5.7q0-7.211-8.531-7.211ZM148.789,0h-4.24V-24.426q0-2.895.355-7.084h-.1a22.648,22.648,0,0,1-1.092,3.529L131.27,0h-2.082L116.771-27.777a21.762,21.762,0,0,1-1.092-3.732h-.1q.2,2.184.2,7.135V0h-4.113V-36.41H117.3L128.477-11.02a32.51,32.51,0,0,1,1.676,4.367h.152q1.092-3,1.752-4.469l11.4-25.289h5.332Z" transform="translate(140 117)" fill="#008dff"></path><path id="Path_66" data-name="Path 66" d="M23.664,0H4.773V-36.41H9.039V-3.859H23.664ZM49.715,0H45.551V-4.113h-.1A8.551,8.551,0,0,1,37.426.609q-9.293,0-9.293-11.07V-26h4.139v14.879q0,8.227,6.3,8.227a6.37,6.37,0,0,0,5.015-2.247,8.6,8.6,0,0,0,1.968-5.878V-26h4.164Zm27.4-26L68.377-12.848,76.959,0h-4.85l-5.1-8.43q-.482-.787-1.143-1.98h-.1q-.127.229-1.193,1.98L59.363,0h-4.8l8.861-12.746L54.945-26h4.85l5.027,8.887q.559.99,1.092,2.031h.1L72.516-26Z" transform="translate(140 117)" fill="#ffba00"></path></g></svg>
                                        </a>
                                    </Link>
                                </div>

                                <p>Work with us: Join our global community by working together with some of the best software engineering consultants in the Asia-Pacific region</p>
                                {/*
                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" className="pinterest" target="_blank">
                                            <i className='bx bxl-pinterest-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-instagram-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                                */}



                                    <div className="option-item align-content-center">
                                        <Link href="/contact-1">
                                            <a className="default-btn btn-info">
                                                Get In Touch
                                            </a>
                                        </Link>
                                    </div>


                            </div>


                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Important Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-1">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-1">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/contact-1">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Featured Services</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/services-details">
                                            <a>IT Management</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Information</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Phone</span>
                                        <a href="tel:+82317144530">+82 31-714-4530</a>
                                        <span>Fax</span>
                                        <a href="fax:+82317144531">+82 31-714-4531</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>Email</span>
                                        <a href="mailto:sales@luxpmsoft.com">sales@luxpmsoft.com</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>Address</span>
                                        <a href="https://www.google.com/maps/@37.4004578,127.1104545" target="_blank">49, Daewangpangyo-ro 644beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy;{currentYear} LuxPM. All Rights Reserved by LuxPM
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/en/terms-of-service">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
