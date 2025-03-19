import React from "react";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/about/hero";
import Mission from "@/components/about/mission";
import Vision from "@/components/about/vision";

const About = () => {
  return (
    <NextLayout>
      {/* Breadcrumb Section */}
      <Breadcrumb />
      
      {/* Hero Section with Video */}
      <Hero />

      <div className="content-container">
        {/* Mission Section */}
        <Mission />
        
        {/* Vision Section */}
        <Vision />
      </div>
    </NextLayout>
  );
};

export default About;
