import React from 'react';

const FunFacts = () => {
    return (
        <div className="fun-facts-area pb-70">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact">
                            <div className="icon">
                                <i className="flaticon-checked"></i>
                            </div>
                            <h3>30</h3>
                            <p>Number of completed projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact">
                            <div className="icon">
                                <i className="flaticon-happy"></i>
                            </div>
                            <h3>25</h3>
                            <p>number of satisfied clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact">
                            <div className="icon">
                                <i className="flaticon-technical-support"></i>
                            </div>
                            <h3>4</h3>
                            <p>number of countries</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact">
                            <div className="icon">
                                <i className="flaticon-trophy"></i>
                            </div>
                            <h3>4</h3>
                            <p>number of winning awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;
