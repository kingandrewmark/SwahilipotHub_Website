import React from "react";
import { FaBullseye } from "react-icons/fa"; // Importing an icon

const Mission = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Icon */}
        <div
          style={{
            fontSize: "50px",
            color: "#1d3557",
            marginBottom: "15px",
            display: "inline-block",
            background: "#fff",
            padding: "15px",
            borderRadius: "50%",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <FaBullseye />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#1d3557",
            marginBottom: "10px",
          }}
        >
          Our Mission
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "20px",
            color: "#444",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Enable the community to develop themselves.
        </p>
      </div>
    </section>
  );
};

export default Mission;
