import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonial-area ptb-100">
            <div className="card-subtitle text-white ">
                <span>[todo]</span>
                <ul>
                    <li>Related images
                    </li>
                    <li>Background should be a related image that is coloured in blue or yellow

                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="testimonial-content">
                            <span>Testimonials</span>
                            <h2>시간과 비용을 절검하세요
                            </h2>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>


                {display ? <OwlCarousel
                    className="testimonial-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image"></div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>개발자를 고용하는데 시간을 투자하지 마세요. 번거로움 없이 빠른 시장 피드백과 개발 제공으로 모든 IT 요구 사항을 해결할 수 있습니다.

                                    </p>

                                    <div className="info-text">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image image-two"></div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>모든 IT 솔루션이 준비되어 있습니다. 소프트웨어 관리에서 커뮤니케이션에 이르는 모든 개발 패키지를 제공합니다.
                                    </p>

                                    <div className="info-text">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image image-three"></div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>모든 IT 솔루션이 준비되어 있습니다. 소프트웨어 관리에서 커뮤니케이션에 이르는 모든 개발 패키지를 제공합니다 .
                                    </p>

                                    <div className="info-text">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials;
