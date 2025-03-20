import React from "react";
import Hero from "@/components/about/origin/hero";
import Origin from "@/components/about/origin/origin";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";

const OriginStory = () => {
  return (
    <>
    <NextLayout>

      {/* Main Content */}
      <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <Hero />
        <Origin />
        
        {/* Styled Divider */}
        <div 
          style={{
            width: "50%",
            height: "2px",
            backgroundColor: "#ccc",
            margin: "40px auto"
          }} 
        />
      </main>
    </NextLayout>
    </>
  );
};

export default OriginStory;
