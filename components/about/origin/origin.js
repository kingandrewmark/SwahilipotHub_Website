/* eslint-disable @next/next/no-img-element */
import React from "react";

const Origin = () => {
  const timeline = [
    {
      year: "2016",
      text: "Swahilipot Hub founded as a community-based organization (CBO) with programs focused on technology and innovation.",
    },
    {
      year: "2017",
      text: "Swahilipot Hub grows and transitions to a Non-Governmental Organization (NGO), officially becoming Swahilipot Hub Foundation.",
    },
    {
      year: "2018",
      text: "Hosted the first Pwani Innovation Week (PIW), a major event promoting technology & innovation, and introduced Pwani Got Talent.",
    },
    {
      year: "2021",
      text: "Became the anchor partner for the Global Opportunity Youth Network (GOYN) in Mombasa and secured its first grant as an NGO.",
    },
    {
      year: "2022",
      text: "Hosted the Modern Heritage of Africa (MoHoA) workshop, focusing on heritage preservation.",
    },
    {
      year: "2023",
      text: "Certified as equivalent to a Certified Public Charity in the United States.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      {/* Description */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          How did Swahilipot Hub come to be?
        </h2>
        <p className="text-gray-700 mt-2">
          Why are all technology, innovation, and incubation hubs based in Nairobi? Nairobi is not Kenya, and Kenya is not Nairobi. Something had to change. This realization inspired the founding of Swahilipot.
        </p>
        <p className="text-gray-700 mt-2">
          In 2016, Mahmoud Noor (alias Mentor001) took action and founded Swahilipot with support from National Museums of Kenya (NMK), Seacom, ICT Authority, and Cisco.
        </p>
        <p className="text-gray-700 mt-2">
          Swahilipot started as a community-based organization (CBO) focused on technology & innovation and has since grown into a non-profit organization (NGO) with diverse programs.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-blue-900 text-center">Timeline</h3>
        
        <div className="timeline-container mt-6">
          {timeline.map((event, index) => (
            <div key={index} className="year-card">
              <h4 className="year-title">{event.year}</h4>
              <p className="year-text">{event.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .timeline-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
          padding: 0 20px;
        }

        .year-card {
          background: #f8fafc;
          border-left: 5px solid #2563eb;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
          text-align: center;
        }

        .year-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .year-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 10px;
        }

        .year-text {
          font-size: 1rem;
          color: #374151;
        }
      `}</style>
    </section>
  );
};

export default Origin;
