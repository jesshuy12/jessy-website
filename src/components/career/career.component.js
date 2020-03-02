import React from 'react'

import './career.styles.scss'

const CareerInfo = () => (
    <div className="career-info">
        <div className="career-container">
            <div className="career-header">CAREER</div>
                <span className="career-container-contents">
                    <div className="career-item">
                        <div className="job-title">WalkMe</div>
                        <div className="job-duration">August 2019 - Present</div>
                    </div>
                    <div className="career-item">
                        <div className="job-title">GlobalFoundries</div>
                        <div className="job-duration">August 2018 - January 2019</div>
                    </div>
                    <div className="career-item">
                        <div className="job-title">HYPR</div>
                        <div className="job-duration">June 2017 - August 2017</div>
                    </div>
                </span>
        </div>

        <div className="career-information-container">
        </div>
    </div>
)

export default CareerInfo