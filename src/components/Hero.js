import React from 'react';
import img from '../assets/man-relaxing.jpg'
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h2>آمــــن , موثوق , ســهل الوصــول</h2>
      <p>تمكنك المنصة من الوصول إلى تقويم طبيبك أو مستشارك لحجز مواعيد الاستشارات عن بُعد في الوقت الذي يناسبك أفضل</p>
      <a href="#find-doctor" className="cta">إبحث عن طبيب</a>
    </div>
    <div className="hero-image">
      <img src={img} alt="Woman relaxing" />
    </div>
  </section>
);

export default Hero;
