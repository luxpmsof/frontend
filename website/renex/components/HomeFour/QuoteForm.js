import React from 'react';

const QuoteForm = () => {
    return (
        <div className="quote-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="quote-form">
                            <div className="content">
                                <h3>Get A free Quote Now</h3>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                                </div>
        
                                <div className="form-group">
                                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" id="Phone" placeholder="Phone Number" />
                                </div>

                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Company</option>
                                        <option>Ellison Estate</option>
                                        <option>Four Fairfield Pond</option>
                                        <option>Les Palais Bulles</option>
                                        <option>Villa Les Cèdres</option>
                                        <option>Villa Leopolda</option>
                                        <option>Buckingham Palace</option>
                                    </select>	
                                </div>

                                <div className="form-group">
                                    <textarea name="message" className="form-control" placeholder="Message"></textarea>
                                </div>
                                    
                                <div className="quote-btn">
                                    <button type="submit" className="default-btn">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="quote-image">
                            <img src="/images/quote/quote-1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote-shape">
                <div className="shape-1">
                    <img src="/images/quote/quote-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="/images/quote/quote-shape-2.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default QuoteForm;