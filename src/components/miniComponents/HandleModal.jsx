"use client"
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './modal.css';
// Modal.setAppElement('#root');
import bg from '../../../public/congrats-7.gif'
import Image from 'next/image'
const HandleModal = () => {
    const wasModalClosed = localStorage.getItem('modalClosed');
    const [isOpen, setIsOpen] = useState(!wasModalClosed);
  
    const closeModal = () => {
        setIsOpen(false);
        // Save the modal's closed state in local storage
        localStorage.setItem('modalClosed', 'true');
    };

    return (
        <div >
            {/* Your page content here */}
            <Modal
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Auto Popup Modal"
            >
                <button
                    className='absolute top-0 right-0 m-2 p-2 text-teal-500'
                    onClick={closeModal}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M.293 1.293a1 1 0 0 1 1.414 0L8 6.586l6.293-6.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.293z" />
                    </svg>
                </button>
                <div className='md:flex justify-center items-center'>
                    <div className='mr-12'>
                        <h2 className='text-5xl font-bold text-teal-500 '>congratulation you have selected!!!</h2>
                        <h2 className='text-4xl font-bold text-teal-500 py-4'>For our wekly sports quize! </h2>
                        <p>This is an automatically opened modal.</p>
                        <button >start quize</button>
                    </div>
                    <div>
                        <Image src={bg} height='400px' width='800px' alt="imge" />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default HandleModal;
