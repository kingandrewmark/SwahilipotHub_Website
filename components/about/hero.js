"use client";  // Ensure this file is treated as a Client Component

import { useState } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoId = "bscypssE8Ms"; // Your correct YouTube video ID

  return (
    <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h1 style={{ fontSize: "36px", color: "#1d3557", fontWeight: "bold" }}>
          About Swahilipot Hub
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
          Swahilipot Hub Foundation is a non-profit organization that meaningfully engages and empowers youth.
        </p>

        {/* YouTube Video Thumbnail with Play Button */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "20px auto",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
          }}
          onClick={() => setVideoLoaded(true)}
        >
          {!videoLoaded ? (
            <div style={{ position: "relative" }}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="YouTube Video Thumbnail"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "60px",
                  color: "white",
                  background: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "50%",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                ▶
              </div>
            </div>
          ) : (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
