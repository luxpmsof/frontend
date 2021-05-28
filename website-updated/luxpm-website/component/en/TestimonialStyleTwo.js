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



                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="testimonial-content">
                            <br/>
                            <h2>Agile Development
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
                                <div className="testimonial-image image-four"></div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>We have integrated the agile development process as part of our strategy for the successful completion of all projects/ Instead of finding an easy way to save costs and time, we emphasize on finding the best way to solve problems and promote sustainable growth. Thus, we mitigate various potential risks by utilizing the six steps: planning, analysis, design, implementation, testing, and maintenance.
                                    </p>


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
