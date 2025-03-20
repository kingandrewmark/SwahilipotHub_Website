import Image from "next/image";

export default function SwahiliTechWomen() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-pink-700 to-pink-500 flex items-center justify-center px-10 py-20">
          <h1 className="text-4xl font-bold text-white text-left drop-shadow-lg wow fadeInUp">
            Empowering Swahili Tech Women
          </h1>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative wow fadeInUp" data-wow-delay=".3s">
          <Image
            src="/micky.jpeg"
            alt="Swahili Tech Women"
            width={800}
            height={405}
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 wow fadeInUp" data-wow-delay=".5s">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image-10.jpg"
              alt="Women in Tech Event"
              width={600}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-pink-900">About Our Initiative</h2>
            <p className="mt-4 text-lg leading-relaxed">
              <em className="font-semibold text-pink-700">
                "Hakuna kikwazo kinachoweza kusimamisha mbele ya ndoto zetu zinazounganishwa na teknolojia."
              </em>
              <br />
              We strive to create an inclusive space where women can thrive, innovate, and lead in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-500 text-white p-10 rounded-lg shadow-lg mb-10 wow fadeInUp" data-wow-delay=".3s">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Activities</h2>
          <ul className="mt-6 space-y-4 text-lg text-left md:text-center list-disc md:list-none">
            {["Donate to support our Pad Initiative.", "Enroll in digital skills training programs.", "Connect with experienced mentors in tech."].map((item, index) => (
              <li key={index} className="relative pl-6 md:pl-0 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white before:rounded-full md:before:hidden wow fadeInUp" data-wow-delay={`${0.5 + index * 0.2}s`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
