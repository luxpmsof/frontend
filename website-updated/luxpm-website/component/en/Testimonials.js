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

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="testimonial-content">

                            <h2>We save your time and cost
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
                                    <p>With fast delivery and quick market feedback, why spend months on hiring a developer? We can help you with all your IT needs without the fuss.

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
                                    <p>With our team of stellar software consultants, we aim to deliver the best results at a minimum cost.
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
                                    <p>We have all the IT solutions for you. We offer our customers a full package in development ranging from software management to communication.
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
