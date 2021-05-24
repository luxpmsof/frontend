import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">

                    <h2>작업 프로세스
                    </h2>
                    <div className="bar"></div>
                </div>
                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                        <li>Relevant images</li>
                        <li>Descriptions from agile development images
                        </li>
                        <li>Read More  keep??</li>


                    </ul>
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
                                <span>지속적인 의사소통</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a> 각 고객의 프로젝트팀에 커뮤니케이션 팀을 배정하여 요청 및 문의에 신속하게 대응하도록 합니다.
                                        </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
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
                                <span>문서 제공</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a> 고객에게 개발의 진행 상항을 파악하도록 일정, 와이어 프레임 및 개발 현황표와 같은 지속적인 문서를 제공하여 모든 단계를 업데이트합니다.</a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
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
                                <span>코드 검증</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a> 고객의 프로젝트에 품질 보증 팀을 배정함으로써 모든 결과물이 기대에 부응하도록 합니다.
                                        </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
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
