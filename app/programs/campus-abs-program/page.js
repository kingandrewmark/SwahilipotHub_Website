import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const teamMembers = [
  { name: "Ayubu Mohamed", role: "Program Coordinator", image: "/ayubu.webp" },
  { name: "Amina Mahmud", role: "Assistant Coordinator", image: "/amina.webp" },
  { name: "Chris Achinga", role: "Program Technical Lead", image: "/chris.webp" },
  { name: "Rehema Said", role: "Student Engagement Lead", image: "/rehema.webp" },
  { name: "Swaleh Athuman", role: "Program Insight Specialist", image: "/swaleh.webp" },
];

const placeholderImage = "https://via.placeholder.com/150"; // Default placeholder image

const CampussAmbassador = () => {
  return (
    <NextLayout>
      <Head>
        <title>Campus Ambassador Program</title>
      </Head>
      <Breadcrumb pageName="Campus Ambassador" />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div>
          <h1 className="text-5xl font-extrabold">Campus Ambassador Program</h1>
          <p className="mt-4 text-lg text-gray-200">Empowering student leaders and innovators</p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-20 py-16">
        {/* About Section */}
        <section className="bg-white shadow-xl rounded-lg p-10 mb-12">
          <h2 className="text-4xl font-bold text-blue-700">About</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            The Swahilipot Hub Campus Ambassador Program fosters in-demand skills, effective communication, and teamwork
            while encouraging self-discovery, networking, and open-mindedness among ambassadors.
          </p>
        </section>

        {/* Campus Team Section */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
              <p className="mt-6 text-lg text-gray-600">
                We’re a dynamic group of individuals passionate about tech, innovation, and empowering students through leadership and collaboration.
              </p>
            </div>

            <ul role="list" className="grid gap-x-12 gap-y-12 sm:grid-cols-2 md:grid-cols-2 mt-10">
              {teamMembers.map((member, index) => (
                <li key={member.name} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="w-16 h-16 rounded-full object-cover"
                      src={member.image || placeholderImage}
                      alt={member.name}
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-gray-900">{member.name}</h3>
                      <p className="text-sm font-semibold text-blue-600">{member.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </NextLayout>
  );
};

export default CampussAmbassador;
