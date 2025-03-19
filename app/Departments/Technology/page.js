import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const TechnologyDepartment = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Technology Department" />

      {/* Hero Section */}
      <section className="contact-section section-padding text-center text-white bg-gradient-to-r from-blue-500 to-blue-700">
        <h2 className="text-6xl font-extrabold bg-blue">Technology Department</h2>
        <p className="text-1g text-dark">
          Kuwezesha Ustadi wa Teknolojia, Kukuza Vipaji
        </p>
      </section>

      {/* Image Section */}
      <div className="container flex justify-center mt-10">
        <Image
          src="/tech.svg"
          alt="Technology Empowerment"
          width={900}
          height={500}
          className="rounded-xl shadow-xl"
        />
      </div>


      {/* About Section */}
      <section className="container section-padding bg-white rounded-xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-blue-700">
          Empowering Young Individuals in Technology
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Building skills, fostering innovation, and creating opportunities in the digital space.
        </p>
      </section>

      
    
      {/* Programs Section */}
      <section className="container section-padding bg-white  rounded-xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Our Programs
        </h2>
     <div className="max-w-6xl mx-auto space-y-8">
     {programs.map((program, index) => (
      <div key={index}>
        <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-2">
          {program.description}
        </p>
      </div>
    ))}
  </div>
</section>
    </NextLayout>
  );
};

// Data for Programs
const programs = [
  {
    title: "Data & Research",
    description: "Our Data and Research programs focus on data collection and analysis. Through partnerships with organizations like Decodis and UN Habitat, we provide opportunities for young people to earn a stipend and participate in this program. Over 100 youths have gained valuable skills in data collection and analysis through this initiative.",
  },
  {
    title: "Digital Literacy",
    description: "We conduct programs aimed at enhancing digital skills among young people, enabling them to thrive in the digital space. In collaboration with industry leaders like Cisco, Huawei, 21Skills, and the Red Cross Innovation Unit, we offer technical and soft skills training. To date, more than 150 youths have acquired valuable digital skills through this program.",
  },
  {
    title: "Industrial Attachment",
    description: "Our Industrial Attachment program offers a well-structured curriculum for attachés from various institutions to acquire industry-specific skills. Participants gain hands-on experience in fields such as web development, networking, and essential soft skills like working with young people and effective communication. We prioritize teaching 21st-century skills to equip participants for success.",
  },
  {
    title: "Campus Ambassador",
    description: "Through our Campus Ambassador program, we collaborate closely with six tertiary institutions. Our ambassadors share information about the opportunities and benefits that Swahilipot provides to young people. In return, we offer support to these ambassadors through workshops, meetups, online courses, and hackathons. This program nurtures young talents and fosters a vibrant tech community.",
  },
  {
    title: "Pitching Thursday",
    description: `
    Our enterprise program, known as Pitching Thursday, provides a platform for young individuals to pitch their ideas or ventures. Participants receive valuable feedback from judges and the audience on the spot. This program offers exposure and serves as a catalyst for growth and development. We have supported over 10 ventures to date, aiding them in their entrepreneurial journeys.
    
    Through these initiatives, we aim to create a conducive environment for young individuals to explore and excel in the tech industry. Our diverse programs and opportunities nurture talent, encourage innovation, and empower the next generation of tech leaders.
  `,
  },
];

export default TechnologyDepartment;
