"use client";

import React from "react";
import Hero from "@/components/about/origin/hero";
import Origin from "@/components/about/origin/origin";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";

const OriginStory = () => {
  return (
    <NextLayout>
      <Breadcrumb />

      {/* Main Content */}
      <main className="origin-container">
        <Hero />

        {/* Styled Section */}
        <section className="origin-content">
          <Origin />

          {/* Divider */}
          <div className="divider" />
        </section>
      </main>

      {/* Global Styles */}
      <style jsx>{`
        .origin-container {
          padding: 50px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .origin-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          margin-top: 30px;
        }

        .divider {
          width: 60%;
          height: 2px;
          background-color: #ccc;
          margin: 40px auto;
        }
      `}</style>
    </NextLayout>
  );
};

export default OriginStory;
