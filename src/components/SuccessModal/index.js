import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const SuccessModal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
            <FontAwesomeIcon icon={faCircleCheck} size = "3x" color="green"/>
                <p>{message}</p>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SuccessModal;
