"use client";

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define common styles
const sectionContainer = "container mx-auto py-16 px-4";
const sectionTitle = "text-4xl font-bold text-gray-900 text-center mb-12";
const cardStyle = "p-8 rounded-lg shadow-md";
const textGray = "text-lg text-gray-700";

const EngineeringDepartment = () => {
  // Counter states
  const [traffic, setTraffic] = useState(0);
  const [platformsDev, setPlatformsDev] = useState(0);
  const [platformsLive, setPlatformsLive] = useState(0);

  // Animate counters
  useEffect(() => {
    const animateCount = (setter, target) => {
      let start = 0;
      const duration = 2000;
      const step = Math.ceil(target / (duration / 50));

      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(start);
        }
      }, 50);
    };

    animateCount(setTraffic, 5000);
    animateCount(setPlatformsDev, 9);
    animateCount(setPlatformsLive, 4);
  }, []);

  return (
    <NextLayout>
      <Breadcrumb pageName="Engineering Department" />

      {/* Hero Section */}
      <section className="section-padding text-center text-white bg-gradient-to-r from-blue-500 to-blue-700 py-20">
        <h2 className="text-6xl font-extrabold">Mafundi wa Teknolojia, Mabadiliko ya Kesho</h2>
        
      </section>

      {/* Image Section */}
      <div className="container flex justify-center mt-10">
        <Image
          src="/workspace.png"
          alt="Engineering Workspace"
          width={900}
          height={500}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* About Section */}
      <section className={`${sectionContainer} bg-white rounded-xl shadow-lg mt-10`}>
        <h2 className="text-3xl font-bold text-blue-700 text-center">About Us</h2>
        <p className={`${textGray} leading-relaxed text-center mt-4`}>
          The Engineering Team under the Technology Department at Swahilipot Hub Foundation develops and maintains
          the organization’s platforms while managing network infrastructure.
        </p>
      </section>

      {/* Focus Areas Section */}
      <section className={sectionContainer}>
        <h2 className={sectionTitle}>The Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className={`${cardStyle} ${area.bgColor}`}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <ul className="text-lg text-gray-700 space-y-2">
                {area.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`${sectionContainer} bg-white rounded-xl shadow-lg mt-10`}>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-700">Progress of the team (in numbers)</h2>
          <p className="text-lg text-gray-600 mt-4">All metrics recorded are up to May 2024:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-blue-900 text-center">
          {[
            { label: "Traffic in terms of reach", value: "5000+" },
            { label: "Platforms in development", value: "9+" },
            { label: "Platforms that are live", value: "4" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-6xl font-bold">{stat.value}</h3>
              <p className="text-xl mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-5xl font-bold text-blue-700 text-center mt-16">Meet the Team</h3>
      </section>

      {/* Meet the Team Section */}
      <section className={sectionContainer}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Oval Image */}
              <div className="w-56 h-72 overflow-hidden border-4 border-gray-300 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={224}
                  height={288}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "90% / 90%" }}
                />
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-semibold mt-6">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 max-w-xs mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </NextLayout>
  );
};

// Focus Areas Data
const focusAreas = [
  {
    title: "Role of the Team",
    bgColor: "bg-blue-50",
    points: [
      "Leading software, web, and digital product development.",
      "Designing technologies tailored to the organization’s needs.",
      "Optimizing solutions to enhance product performance.",
    ],
  },
  {
    title: "Team Goals",
    bgColor: "bg-orange-50",
    points: [
      "Developing sustainable solutions",
      "Fostering innovation",
      "Ensuring ethical and inclusive designs",
      "Network and system configuration",
      "Improving resource efficiency",
      "Documentation and knowledge sharing",
    ],
  },
  {
    title: "Impact of the Team",
    bgColor: "bg-blue-50",
    points: [
      "Managing and integrating platforms for various activities.",
      "Enhancing operational efficiency through streamlined processes.",
      "Collaborating with other departments to maximize productivity.",
    ],
  },
];

// Team Members Data
const teamMembers = [
  { name: "Chris Achinga", role: "Dude", description: "Maker of Softwares, Breaker of Systems.", image: "/chris.jpg" },
  { name: "Jesse Amianda", role: "Software Developer", description: "Frontend & UX design.", image: "/jesse.jpg" },
  { name: "Joy Ngugi", role: "Software Developer", description: "Focused on frontend frameworks.", image: "/joy.jpg" },
  { name: "Rose Ndinda", role: "Software Developer", description: "Passionate about cloud computing.", image: "/rose.jpg" },
  { name: "Mulky Mohamed", role: "Technical Support & Mentor", description: "Volunteer & Tech Support.", image: "/mulky.jpg" },
  { name: "Chris Mwalimo", role: "Software Engineer", description: "Specializes in AI & ML models.", image: "/mwalimo.jpg" },
  { name: "Bianca Gatwiri", role: "Tech Finance", description: "Oversees financial strategies and tech funding.", image: "/bianca.jpg" },
  { name: "Micky Maria", role: "Cybersecurity Engineer", description: "Ensuring system security and data protection.", image: "/micky.jpg" },
  { name: "Aaron Wanje", role: "Technical Support", description: "In charge of Digital Literacy classes.", image: "/aron.jpg" },
];

export default EngineeringDepartment;
