import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Dropdown } from 'semantic-ui-react'
import Link from '../../util/ActiveLink';
//import Drop from ''


const countryOptions = [
    { key: 'kr', value: 'kr', flag: 'kr', text: '한국어' },
    { key: 'uk', value: 'uk', flag: 'uk', text: 'English' }
]



const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
    const router = useRouter()

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
    const changeLang = (e, data) => {
        e.preventDefault()

        if(data.value ==='kr') {

            router.push('/')

        }else {
            router.push('/en/')
        }
    }
    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="154" height="54" viewBox="0 0 144.016 37.02"><g id="Group_222" data-name="Group 222" transform="translate(-144.773 -80.59)"><path id="Path_65" data-name="Path 65" d="M86.811-13.762V0H82.545V-36.41h10q5.84,0,9.052,2.844t3.212,8.023a11.035,11.035,0,0,1-3.567,8.48q-3.567,3.3-9.636,3.3Zm0-18.789v14.93h4.469q4.418,0,6.741-2.019a7.146,7.146,0,0,0,2.323-5.7q0-7.211-8.531-7.211ZM148.789,0h-4.24V-24.426q0-2.895.355-7.084h-.1a22.648,22.648,0,0,1-1.092,3.529L131.27,0h-2.082L116.771-27.777a21.762,21.762,0,0,1-1.092-3.732h-.1q.2,2.184.2,7.135V0h-4.113V-36.41H117.3L128.477-11.02a32.51,32.51,0,0,1,1.676,4.367h.152q1.092-3,1.752-4.469l11.4-25.289h5.332Z" transform="translate(140 117)" fill="#008dff"></path><path id="Path_66" data-name="Path 66" d="M23.664,0H4.773V-36.41H9.039V-3.859H23.664ZM49.715,0H45.551V-4.113h-.1A8.551,8.551,0,0,1,37.426.609q-9.293,0-9.293-11.07V-26h4.139v14.879q0,8.227,6.3,8.227a6.37,6.37,0,0,0,5.015-2.247,8.6,8.6,0,0,0,1.968-5.878V-26h4.164Zm27.4-26L68.377-12.848,76.959,0h-4.85l-5.1-8.43q-.482-.787-1.143-1.98h-.1q-.127.229-1.193,1.98L59.363,0h-4.8l8.861-12.746L54.945-26h4.85l5.027,8.887q.559.99,1.092,2.031h.1L72.516-26Z" transform="translate(140 117)" fill="#ffba00"></path></g></svg>
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
                                        <Link href="/" activeClassName="active">
                                            <a  className="nav-link">
                                                홈페이지
                                            </a>
                                        </Link>

                                    </li>


                                    <li className="nav-item">
                                        <Link href="/about-1"  activeClassName="active">
                                            <a  className="nav-link">
                                                회사소개
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/portfolio-1/"   activeClassName="active">
                                            <a className="nav-link">
                                                포트폴리오
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact-1"  activeClassName="active">
                                            <a   className="nav-link">
                                                연락처
                                            </a>
                                        </Link>

                                    </li>

                                </ul>
                            </div>

                            <div className="others-options d-flex ">
                                <Dropdown
                                    placeholder='언어선택'
                                    selection

                                    options={countryOptions}
                                    compact={true}
                                    onChange={changeLang}
                                    defaultValue={'kr'}

                                />

                                {/*
                                <div className="option-item">
                                    <i className="search-btn flaticon-loupe" onClick={handleToggleSearchModal} ></i>
                                </div>

                                <div >
                                    <Link href="/en/">

                                        <a>
                                            <img src={'https://silvaco.co.kr/company/events/images/UK.jpg'} width={25} height={25}/> English
                                        </a>
                                    </Link>
                                </div>
                                */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;
