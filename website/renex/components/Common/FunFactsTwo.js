import React from 'react';

const FunFactsTwo = () => {
    return (
        <div className="fun-facts-area pb-70">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-checked"></i>
                            </div>
                            <h3>30</h3>
                            <p>완료된 프로젝트 수</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-happy"></i>
                            </div>
                            <h3>25</h3>
                            <p>만족 고개 수</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-technical-support"></i>
                            </div>
                            <h3>4</h3>
                            <p>국가 수</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-trophy"></i>
                            </div>
                            <h3>4</h3>
                            <p>수상 횟수</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFactsTwo;
