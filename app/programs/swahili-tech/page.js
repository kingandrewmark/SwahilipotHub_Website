import Image from "next/image";
import Link from "next/link";
import NextLayout from "@/layouts/NextLayout";

export default function SwahiliTechWomen() {
  return (
    <NextLayout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-900 section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Left Side - Text & Buttons */}
            <div className="col-lg-6 text-center text-md-start">
              <h1 className="text-5xl font-extrabold text-pink-700 leading-tight">
                Empowering <span className="text-gray-800">Swahili Tech Women</span>
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-lg">
                Join a movement that bridges the gender gap in tech. Connect, learn, and grow with a supportive community.
              </p>
              <div className="mt-6 d-flex gap-4">
                <Link href="/stwdonate/membership" className="theme-btn">
                  Join Us <i className="far fa-arrow-right" />
                </Link>
                <Link href="/stwdonate/support-stw" className="theme-btn-outline">
                  Support Us <i className="far fa-heart" />
                </Link>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="col-lg-6 text-center">
              <div className="bg-white rounded-3xl shadow-2xl p-4">
                <Image 
                  src="/micky.jpeg" 
                  alt="Swahili Tech Women" 
                  width={600} 
                  height={400} 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white shadow-md rounded-lg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Image */}
            <div className="col-lg-6 text-center">
              <div className="bg-white rounded-3xl shadow-2xl p-4">
                <Image 
                  src="/image-10.jpg" 
                  alt="Women in Tech Event" 
                  width={600} 
                  height={400} 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <div className="col-lg-6">
              <h2 className="text-4xl font-bold text-gray-900">About Our Initiative</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                <em className="font-semibold text-pink-700">
                  "Hakuna kikwazo kinachoweza kusimamisha mbele ya ndoto zetu zinazounganishwa na teknolojia."
                </em>
                <br />
                Empowering women in technology is more than providing tools. It’s about nurturing a community where women
                thrive, innovate, and lead. Join us in rewriting the narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-gradient-to-b from-pink-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900">Our Activities</h2>
          <p className="text-center text-lg text-gray-700 mt-2">Explore our initiatives and opportunities.</p>
          {/* Activity Cards */}
          <div className="row g-4 mt-10">
            {["Donate", "Training Programs", "Mentorship & Guidance"].map((title, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                  <h3 className="text-2xl font-semibold mt-3">{title}</h3>
                  <p className="text-gray-700 mt-3">
                    {title === "Donate" && "Support our Pad Initiative and help provide essential products."}
                    {title === "Training Programs" && "Access a diverse range of digital skills training and mentorship."}
                    {title === "Mentorship & Guidance" && "Connect with experienced tech professionals for guidance."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
