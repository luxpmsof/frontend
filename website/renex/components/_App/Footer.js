import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="card-subtitle">
                        <span>[todo]</span>
                        <ul>
                            <li>"Get In Touch" button</li>
                            <li>Social Media Accounts</li>
                            <li>저작권, 개인정보 보호정책, 쿠키 설정, 전문
                            </li>

                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <p>당사와 협업을 희망하신다면: 아시아-태평양 지역에서 가장 우수한 소프트웨어 엔지니어링 컨설턴트와 협업하여 글로벌 커뮤니티에 참여하십시오</p>

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
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Important Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-2">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-2">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-2">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-2">
                                            <a>Blog</a>
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
                                    <li>
                                        <Link href="/services-details">
                                            <a>Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Support Engineer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Website Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>App Development</a>
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
                                        <span>전화번호</span>
                                        <a href="tel:+821099404534">+82 10-9940-4534</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>이메일</span>
                                        <a href="mailto:info@luxpmsoft.com">info@luxpmsoft.com</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>주소</span>
                                        <a href="https://www.google.com/maps/@37.4004578,127.1104545" target="_blank">경기도 성남시 분당구 대왕판교로644번길 49 202호</a>
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
                                    Copyright &copy;{currentYear} Renex. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms of Service</a>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
