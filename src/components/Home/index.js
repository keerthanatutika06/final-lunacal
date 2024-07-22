import React, { useState } from 'react';
import Header from '../Header';
import ChoseUs from '../ChoseUs';
import Info from '../Info';
import SuccessModal from '../SuccessModal';
import BottomSection from '../BottomSection';
import LearnSection from '../LearnSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBook } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="app-container">
            <Header />
            <div className='top-container'>
                <div className='top-detail-container'>
                    <h1 className='heading'>Become ACCA in 18 months</h1>
                    <p className='heading-desc'>Achieving the ACCA (Association of Chartered Certified Accountants) qualification in 18 months is an ambitious 
                        and rewarding journey that can significantly enhance your career in finance and accounting.</p>
                    <div className='detail-cards-container'>
                        <div className='detail-card'>
                            <div className='detail-icon-container'>
                                <FontAwesomeIcon icon={faUsers} className='detail-icon'/>
                                <p className='detail-title'>Beginners/Users</p>
                            </div>
                            <p className='value'>168716</p>
                        </div>
                        <div className='detail-card'>
                            <div className='detail-icon-container'>
                                <FontAwesomeIcon icon={faBook} className='detail-icon'/>
                                <p className='detail-title'>Courses Enrolled</p>
                            </div>
                            <p className='value'># 1147</p>
                        </div>
                        <div className='detail-card'>
                            <div className='detail-icon-container'>
                                <FontAwesomeIcon icon={faBook} className='detail-icon'/>
                                <p className='detail-title'>Information/Updates</p>
                            </div>
                            <p className='value'>28983011483</p>
                        </div>
                        <div className='detail-card'>
                            <div className='detail-icon-container'>
                                <FontAwesomeIcon icon={faUsers} className='detail-icon'/>
                                <p className='detail-title'>Faculty</p>
                            </div>
                            <p className='value'># Experts</p>
                        </div>
                    </div>
                    <div className='top-buttons-container'>
                        <button className='brochure-button'>Download Brochure</button>
                        <button className='register-exam-button'>Subscribe Now</button>
                    </div>
                </div>
                <div className='request-call-back-section'>
                    <p className='form-heading'>Aspiring to be an ACCA? Get in touch with us!</p>
                    <form className='request-form'>
                        <input type="text" className='input-field' placeholder='Phone Number'  />
                        <input type="text" className='input-field' placeholder='Email ID'  />
                        <select className='input-field select' defaultValue="">
                            <option value="" disabled>Current Qualification</option>
                            <option>Student</option>
                            <option>Employee</option>
                            <option>Graduate</option>
                            <option>Teacher</option>
                        </select>
                        <select className='input-field select' defaultValue="">
                            <option value="" disabled>Interested in</option>
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
            <ChoseUs />
            <Info/>
            <LearnSection />
            <div className='placement-container'>
                <h1 className='placement-heading'>100% Placement Assistance</h1>
                <hr className='horiz'/>
                <div className='placement-info'>
                    <h4 className='placement-info-title'>Resume Building</h4>
                    <p className='placement-info-desc'>It provides professional guidance to help you create an effective resume 
                        to help to create a good impression
                    </p>
                    <h4 className='placement-info-title'>Career Counselling</h4>
                    <p className='placement-info-desc'>We provide career counselling for conducting mock interviews and aptitude tests
                    </p>
                    <h4 className='placement-info-title'>Jobs</h4>
                    <p className='placement-info-desc'>Access to a network of top employers and job openings tailored to ACCA graduates.
                    </p>
                </div>
            </div>
            <BottomSection/>
        </div>
    );
}

export default Home;
