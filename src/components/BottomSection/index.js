import './index.css'
import React from 'react';
import SuccessModal from '../SuccessModal'
import {useState} from 'react'

const BottomSection = () => {

    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <div className='refernce-info-container'>
            <div className='website-reference-container'>
                <h2 className='reference-title'>Kick off your ACCA Prep journey with IndigoLearn</h2>
                <p className='reference-desc'>Sign up and get instant access to our FREE Courses</p>
                <button className='subscription-button'>Subscribe now</button>
            </div>
            <div className='request-call-back-section'>
                        <p className='form-heading'>Aspiring to be an ACCA? Get in touch with us!</p>
                        <form className='request-form'>
                            <input type = "text" className='input-field' placeholder='Phone Number' required />
                            <input type = "text" className='input-field' placeholder='Email ID' required />
                            <select className='input-field select'>
                            <option value="" disabled selected>Current Qualification</option>
                                <option>Student</option>
                                <option>Employee</option>
                                <option>Graduate</option>
                                <option>Teacher</option>
                            </select>
                            <select className='input-field select'>
                            <option value="" disabled selected>Intrested in</option>
                                <option>ACCA Qualification</option>
                                <option>ACCA Exam Preparation</option>
                                <option>ACCA Study Materials</option>
                                <option>ACCA Webinars</option>
                            </select>
                            <div className='button-container'>
                                <button className='requst-button' onClick={handleButtonClick}>Request Call Back</button>
                                    {showModal && (
                                    <SuccessModal
                                        message="Success! Your callback request has been received."
                                        onClose={handleCloseModal}
                                    />
                                    )}
                            </div>
                        </form>

                    </div>
        </div>
    )
}

export default BottomSection