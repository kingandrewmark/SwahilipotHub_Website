import React from "react";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import Team from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import Hero from "@/components/about/hero";
import Mission from "@/components/about/mission";
import Vision from "@/components/about/vision";

const About = () => {
  return (
    <NextLayout>
      {/* Breadcrumb Section */}
      <Breadcrumb />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Section */}
      <Mission />
      
      {/* Vision Section */}
      <Vision />
      
      {/* Team Section */}
      <Team />
      
      {/* Fun Fact Section */}
      <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section>
      
      {/* Working Process Section */}
      <WorkingProcess2 />
      
      {/* Testimonial Section */}
      <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>We’ve 1250+ Global Clients Say Us</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section>
    </NextLayout>
  );
};

export default About;
