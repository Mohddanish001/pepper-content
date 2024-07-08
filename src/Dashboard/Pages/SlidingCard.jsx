import React, { useEffect, useRef, useState } from 'react';
// import './SlidingCard.css';

const SlidingCard = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={`card ${isVisible ? 'slide-in' : ''}`} ref={cardRef}>
      <h2>Sliding Card</h2>
      <p>This card slides in from the left as you scroll down the page.</p>
      <img src="top100.webp" alt="" />
    </div>
  );
};

export default SlidingCard;
