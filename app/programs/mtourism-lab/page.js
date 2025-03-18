"use client"; // ✅ Required for Next.js client components

import { useState } from "react";
import Image from "next/image";

const MombasaTourismLab = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", organization: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 bg-primary-dark flex items-center justify-center px-10 py-20">
          <h1 className="text-4xl font-bold text-white text-left">
            Mombasa Tourism Innovation Lab
          </h1>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/tourism.png"
            alt="Tourism Lab Event"
            width={800}
            height={405}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="container content-space-1">
        <div className="w-lg-65 text-center mx-lg-auto mb-10">
          <h2 className="text-primary mb-5">About</h2>
          <p className="fs-6 text-secondary">
            The Mombasa Innovation Lab, hosted at Swahilipot Hub Foundation,
            seeks to inspire the interest of opportunity youth in Mombasa in
            culture and heritage tourism as a means of job creation.
          </p>
          <div className="bg-gray-200 p-6 rounded-lg mt-6 shadow-md">
            <p className="italic text-lg text-gray-800">
              "It is no longer possible for travel and tourism providers, or
              destinations, to continue in a ‘business as usual’ model or
              mindset..."
            </p>
            <p className="mt-3 font-bold text-right text-gray-900">
              Hon. Najib Balala <br />
              <span className="text-sm text-gray-600">
                EGH Cabinet Secretary
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="container content-space-1">
        <div className="text-center mx-lg-auto">
          <h2 className="text-primary mb-5">
            Objectives of the Mombasa Tourism Innovation Lab
          </h2>
          <ul className="list-disc text-lg text-gray-700 text-left mx-auto w-full lg:w-2/3">
            {[
              "Create jobs for young people by developing new tourism products.",
              "Incubate grassroots tourism ideas in Mombasa County.",
              "Develop research and key data points for tourism industry advancement.",
              "Contribute to rejuvenating the coastal tourism product.",
            ].map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>

 {/* Contact Form Section */}
<section className="container mx-auto px-6 py-12 flex justify-center">
  <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
    <h2 className="text-3xl font-bold text-center text-gray-900">Talk to Us</h2>
    <p className="text-center text-gray-700 mt-2">
      Have questions? Reach out, and we'll get back to you.
    </p>

    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {[
        { label: "Name", name: "name", type: "text" },
        { label: "Organization", name: "organization", type: "text" },
        { label: "Phone Number", name: "phone", type: "tel" },
      ].map(({ label, name, type }) => (
        <div key={name}>
          <label className="block font-semibold text-gray-800">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={`Enter your ${label.toLowerCase()}...`}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          />
        </div>
      ))}

      {/* Message Field */}
      <div>
        <label className="block font-semibold text-gray-800">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-32 shadow-sm transition-all"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  </div>
</section>


      {/* Apply Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold text-primary">Apply</h2>
        <p className="mt-4 text-gray-700">
          We are receiving proposals from organizations and businesses in
          tourism, hospitality, and cultural heritage that can benefit from the
          pilot.
        </p>
        <p className="mt-4">
          Kindly click on this link to make your application:{" "}
          <a
            href="https://airtable.com/shru9sDlnYXqHsL1g"
            target="_blank"
            className="text-blue-600 font-semibold hover:underline"
          >
            Apply Here
          </a>
        </p>
      </section>

      {/* Shortlisting Sections */}
      {[
        {
          title: "Applicants",
          links: [
            "Preliminary Short Listed Applications",
            "Applications Dropped from the Preliminary Short List",
          ],
        },
        {
          title: "Panel Shortlisting",
          links: [
            "Organizations Made to the Panel Shortlist",
            "Organizations Did Not Make It to the Panel Shortlist",
          ],
        },
      ].map((section, idx) => (
        <section key={idx} className="text-center py-12 px-6">
          <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
          <ul className="mt-4 space-y-2">
            {section.links.map((link, i) => (
              <li key={i}>
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default MombasaTourismLab;
