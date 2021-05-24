import React from 'react';
import Link from 'next/link';

const WhatWeDoingBest = () => {
    return (
        <div className="overview-area ptb-100">
            <div className="container">
                <div className="card-subtitle">
                    <span>[todo]</span>
                    <ul>
                        <li>Relevant IT Picture
                        </li>

                    </ul>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="overview-content">

                            <h3>우리들의 가치</h3>

                            <p>우리는 개발자들이 운영하는 기업입니다: 럭스피엠의 IT 전문가들은 고객의 보안 및 안전을 침해하지 않고 모든 문제에 대해 가장 이상적이고 효율적인 솔루션을 합리적인 비용으로 제공합니다.</p>

                            <p>우리는 고객을 위한 맞춤형 서비스를 제공합니다: 여러 플랫폼을 구현하면서 운영 효율성이 떨어집니까? 맞춤형 솔루션으로 팀의 성과를 높이고자 한다면, 저희가 도와드리겠습니다. 당사의 엔지니어 팀은 결함을 절충 하지 않고 문제를 분석하고 해결하는 데 특화되어 있습니다.</p>

                            <p>고객이 원활하게 시장에 진입 할 수 있도록 지원합니다: 우리는 단순한 기술 전문가가 아닙니다. 당사는 고객을 위해 30 개 이상의 프로토 타입을 만들어 아시아-태평양 시장에 진출 할 수 있도록 돕고 있습니다. 다양한 프로젝트에서 경험을 쌓은 당사의 포트폴리오는 전자 상거래에서 세일즈 자동화에 이르기까지 다양합니다. 당사가 제작한 일부 플랫폼은 이미 전 세계에서 1 백만 명 이상의 사용자를 보유하고 있습니다. 이러한 역량을 통해 당사는 서비스를 구현하는 모든 이들에게 가치를 제공한다고 믿고 있습니다.</p>

                            <p>우리는 모든 프로젝트가 시간과 예산 내에서 완료되도록 보장합니다: 포춘지 500대 기업에 선정된 당사의 고객들은 합리적인 비용과 시간 효율성을 고려하여 당사와 지속해서 협업하고 있습니다. 당사는 고객의 기대치를 뛰어넘기 위해 그 이상의 프로젝트 개발을 추구합니다.</p>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="overview-image">
                            <img src="/images/overview.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoingBest;
