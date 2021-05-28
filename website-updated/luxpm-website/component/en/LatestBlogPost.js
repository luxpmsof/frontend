import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">

                    <h2>Our Work Process
                    </h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>Constant Communication</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>We respond quickly to requests and inquiries by assigning a communications team to each customer’s project team.
                                        </a>
                                    </Link>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>Documentation</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a> We keep our customers updated every step of the way so that they know where we are with their services and projects by providing them with constant documentation such as schedules, wireframes, and wire flows.</a>
                                    </Link>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>Code Review</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a> By assigning a Quality Assurance team to our customer’s project, we ensure that all our deliverables are up to expectations.
                                        </a>
                                    </Link>
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="default-shape">
                <div className="shape1">
                    <img src="/images/default-shape/default-shape1.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/default-shape/default-shape2.png" alt="image" />
                </div>
                <div className="shape3">
                    <img src="/images/default-shape/default-shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/default-shape/default-shape4.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost;
