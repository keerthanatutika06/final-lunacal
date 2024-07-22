import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

const Info = () => {
    return(
        
            <div className='info-card-container'>
                <div className='info-card'>
                    <p className='info-title'>Levels</p>
                    <div className='info-detail-card-container'>
                        <FontAwesomeIcon icon={faBook} className='detail-icon'/>
                        <p className='info-detail-title'>Three (13 papers)</p>
                    </div>
                </div>
                <div className='info-card'>
                    <p className='info-title'>Duration</p>
                    <div className='info-detail-card-container'>
                        <FontAwesomeIcon icon={faClock} className='detail-icon'/>
                        <p className='info-detail-title'>6-10 (Months)</p>
                    </div>
                </div>
                <div className='info-card'>
                    <p className='info-title'>Exams</p>
                    <div className='info-detail-card-container'>
                        <FontAwesomeIcon icon={faBook} className='detail-icon'/>
                        <p className='info-detail-title'>Quartile (Online)</p>
                    </div>
                </div>
                <div className='info-card'>
                    <p className='info-title'>Exemptions</p>
                    <div className='info-detail-card-container'>
                        <FontAwesomeIcon icon={faCalendarDays} className='detail-icon'/>
                        <p className='info-detail-title'>Upto 9 papers</p>
                    </div>
                </div>
            </div>
 
    )
}

export default Info