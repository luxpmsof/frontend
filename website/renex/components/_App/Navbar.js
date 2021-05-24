import React, { useState } from "react";
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/index-2" activeClassName="active">
                                            <a  className="nav-link">
                                                홈페이지 <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                    </li>


                                    <li className="nav-item">
                                        <Link href="/about-1"  activeClassName="active">
                                            <a  className="nav-link">
                                                회사소개 <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/portfolio-1/">
                                            <a className="nav-link">
                                                포트폴리오 <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style Three</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact-1">
                                            <a   className="nav-link">
                                                연락처 <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/portfolio-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Portfolio Two Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Portfolio Three Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Portfolio Four Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Portfolio Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Two Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Three Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Four Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Contact <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact Style Two</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <i className="search-btn flaticon-loupe" onClick={handleToggleSearchModal} ></i>
                                </div>

                                <div className="option-item">
                                    <Link href="/contact-1">
                                        <a className="default-btn">
                                            Get Quote
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default Navbar;
