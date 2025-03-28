"use client";

import { useState } from "react";

const FAQs = () => {
  // State to manage which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle open state
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <>
      {/* FAQ */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <img
            className="mb-5 mx-auto"
            src="/faqs.svg"
            alt="Illustration"
            style={{ maxWidth: "15rem" }}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-7">
          <h3 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h3>
        </div>
        {/* End Heading */}

        {/* Accordion */}
        <div className="mx-auto w-full md:w-4/5 lg:w-3/5">
          <div className="space-y-4">
            {/* Accordion Items */}
            {[
              {
                question: "What is Swahilipot Hub?",
                answer:
                  "Swahilipot Hub is an innovation and technology hub located in Mombasa, Kenya. It serves as a community-driven space that promotes technology, entrepreneurship, and skills development in the coastal region of Kenya.",
              },
              {
                question: "What programs and services does Swahilipot Hub offer?",
                answer:
                  "SwahiliPot Hub offers a range of programs and services, including training workshops, mentorship programs, networking events, access to co-working spaces, and maker labs. These initiatives aim to empower individuals by providing them with the necessary resources and skills to participate in the digital economy.",
              },
              {
                question: "Who can benefit from Swahilipot Hub?",
                answer:
                  "Swahilipot Hub is open to entrepreneurs, developers, creatives, and anyone interested in technology and innovation. It caters to individuals who are looking to enhance their digital skills, collaborate on projects, and connect with like-minded individuals in the tech ecosystem.",
              },
              {
                question: "Can I visit Swahilipot Hub as a visitor?",
                answer:
                  "Yes, Swahilipot Hub welcomes visitors who are interested in learning more about their initiatives and the local tech ecosystem. You can visit the hub to attend events, participate in workshops, or simply network with professionals in the field. Swahilipot Hub promotes an inclusive and vibrant community where individuals can exchange ideas and explore opportunities in technology and innovation.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-md">
                <div
                  className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <h4 className="text-lg font-medium text-gray-800">{item.question}</h4>
                  <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="p-4 bg-white text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* End Accordion */}

        {/* Info */}
        <div className="text-center mt-8">
          <p className="mb-2 text-lg text-gray-700">Still have questions?</p>
          <a className="text-blue-600 hover:text-blue-800 font-medium" href="mailto:info@swahilipothub.co.ke">
            Contact our friendly support team {" "}
            <i className="bi-chevron-right small ms-1" />
          </a>
        </div>
        {/* End Info */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default FAQs;