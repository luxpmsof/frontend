import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area pb-100">
            <div className="container">
                <div className="section-title">

                    <h2>파트너 기업</h2>
                    <div className="bar"></div>
                </div>
                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                        <li>Logo of companies (should move automatically like a carousel but stop if the mouse hovers over it)</li>
                        <li>There(logo area) should be a “Get In Touch” button
                        </li>
                        <li>저작권, 개인정보 보호정책, 쿠키 설정, 전문
                        </li>
                        <li>Social Media Accounts
                        </li>
                    </ul>
                </div>

                {display ? <OwlCarousel
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-item">
                        <img src="/images/partner/partner-1.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-2.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-3.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-4.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-5.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-6.png" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partners;
