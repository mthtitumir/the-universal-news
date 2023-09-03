"use client"
import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full transition-transform transform hover:scale-110"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill className='w-5 h-5'/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
