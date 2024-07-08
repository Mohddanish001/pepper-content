import React, { useEffect } from 'react';
// import './LogoSlider.css'; // Optional, if you prefer to use a separate CSS file


const LogoSlider = () => {
    useEffect(() => {
      const sliderTrack = document.querySelector('.slider-track');
      const logos = document.querySelectorAll('.logo-item');
  
      const cloneFirstSet = () => {
        for (let i = 0; i < logos.length; i++) {
          const clone = logos[i].cloneNode(true);
          sliderTrack.appendChild(clone);
        }
      };
  
      cloneFirstSet();
    }, []);
  
    const logos = [
        { src: 'HDFC_Bank_6f59349a07.svg', alt: 'HDFC Bank' },
        { src: 'Yale_11d27175e4.svg', alt: 'Yale' },
        { src: 'Mc_Kinsey_4f43b7c7ae.svg', alt: 'McKinsey & Company' },
        { src: 'Flipkart_39bf6fd138.svg', alt: 'Flipkart' },
        { src: 'Instacart_4778a4ead5.svg', alt: 'Instacart' },
        { src: 'R_Vshare_2e00bfe3af.svg', alt: 'RVshare' },
        { src: 'Adobe_Inc_Logo_wine_1_a01e3a3a7c.svg', alt: 'Adobe' },
        { src: 'Adani_71bc5ddd94.svg', alt: 'Adani' },
        {src:'P_and_G_17a5a3ecaf.svg', alt:"p &g"},
        {src:"Unilever_75a7eb2e41.svg", alt:"unilever"},
      ];
  
    return (
      <div className="logos-slider">
        <div className="slider-track">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    );
  };
export default LogoSlider;
