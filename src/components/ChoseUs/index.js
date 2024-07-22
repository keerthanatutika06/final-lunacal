import React from 'react';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

const ChoseUs = () => {
    return(
        <div className='choose-us-section'>
            <h1 className='choose-us-heading'>Why Choose Us?</h1>
            <hr className='horiz'/>
            <div className='choose-us-cards-section'>
                <div className='choose-us-card'>
                    <FontAwesomeIcon icon={faLightbulb} className='card-icon' />
                    <p className='card-title'>Expert faculty</p>
                    <p className='description'>Our expert faculty members are industry 
                        leaders who bring a
                        wealth of knowledge and practical experience to the classroom.
                    </p>
                </div>
                <div className='choose-us-card'>
                    <FontAwesomeIcon icon={faPeopleLine} className='card-icon' />
                    <p className='card-title'>Complete Success Package</p>
                    <p className='description'>
                    Our Complete Success Package is meticulously designed to provide you with everything 
                    you need to achieve your goals and excel in your career.
                    </p>
                </div>
                <div className='choose-us-card'>
                    <FontAwesomeIcon icon={faInfinity} className='card-icon' />
                    <p className='card-title'>Placements</p>
                    <p className='description'> Our comprehensive placement services are designed to 
                        help you not only complete your ACCA qualification but also 
                        to launch a successful career in the finance and accounting industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChoseUs