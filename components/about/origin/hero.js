/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Our <span className="highlight">Origin Story</span>
          </h1>
          <p className="hero-subtitle">
            Learn how we have grown over the years
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-container {
          background: linear-gradient(135deg, #1e293b, #334155);
          padding: 100px 20px;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .highlight {
          color: #facc15;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          background: rgba(255, 255, 255, 0.1);
          display: inline-block;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 15px;
        }
      `}</style>
    </>
  );
};

export default Hero;
