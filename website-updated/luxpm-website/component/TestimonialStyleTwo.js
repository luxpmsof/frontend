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

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonial-area testimonial-two">
            <div className="container">

                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                        <li>The Agile development process circle image
                        </li>


                    </ul>
                </div>

                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="testimonial-content">
                            <br/>
                            <h2>애자일 개발 </h2>
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
                                    <p>당사는 모든 프로젝트를 성공적으로 완료하기 위한 전략의 일환으로 에자일 개발 프로세스를 구축하였습니다. 비용과 시간을 절약할 수 있는 쉬운 방법을 찾는 대신, 당사는 문제를 해결하고 지속 가능한 성장을 촉진할 수 있는 최선의 방법을 찾았습니다. 당사는 계획, 분석, 설계, 구현, 테스트 및 유지보수의 여섯 단계를 활용하여 다양한 잠재적 위험을 예방하고자 합니다.
                                    </p>


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
                                    <p>당사는 모든 프로젝트를 성공적으로 완료하기 위한 전략의 일환으로 에자일 개발 프로세스를 구축하였습니다. 비용과 시간을 절약할 수 있는 쉬운 방법을 찾는 대신, 당사는 문제를 해결하고 지속 가능한 성장을 촉진할 수 있는 최선의 방법을 찾았습니다. 당사는 계획, 분석, 설계, 구현, 테스트 및 유지보수의 여섯 단계를 활용하여 다양한 잠재적 위험을 예방하고자 합니다.</p>

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
                                    <p>당사는 모든 프로젝트를 성공적으로 완료하기 위한 전략의 일환으로 에자일 개발 프로세스를 구축하였습니다. 비용과 시간을 절약할 수 있는 쉬운 방법을 찾는 대신, 당사는 문제를 해결하고 지속 가능한 성장을 촉진할 수 있는 최선의 방법을 찾았습니다. 당사는 계획, 분석, 설계, 구현, 테스트 및 유지보수의 여섯 단계를 활용하여 다양한 잠재적 위험을 예방하고자 합니다.</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TestimonialStyleTwo;
