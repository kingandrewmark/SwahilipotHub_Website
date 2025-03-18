import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

export default function SwahiliTechWomen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 py-20">
        {/* Left Side - Text & Buttons */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-pink-700 leading-tight">
            Empowering <span className="text-gray-800">Swahili Tech Women</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg">
            Join a movement that bridges the gender gap in tech. Connect, learn, and grow with a supportive community.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="/stwdonate/membership"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg py-3 px-6 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
              Join Us
            </a>
            <a
              href="/stwdonate/support-stw"
              className="border border-pink-600 hover:bg-pink-600 hover:text-white text-pink-700 font-semibold text-lg py-3 px-6 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
              Support Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-4">
            <Image
              src="/micky.jpeg"
              alt="Swahili Tech Women"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-4">
              <Image
                src="/image-10.jpg"
                alt="Women in Tech Event"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900">About Our Initiative</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl">
              <em className="font-semibold text-pink-700">
                "Hakuna kikwazo kinachoweza kusimamisha mbele ya ndoto zetu zinazounganishwa na teknolojia."
              </em>
              <br />
              Empowering women in technology is more than providing tools. It’s about nurturing a community where women
              thrive, innovate, and lead. Join us in rewriting the narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">Our Activities</h2>
          <p className="text-center text-lg text-gray-700 mt-2">
            Explore our initiatives and opportunities.
          </p>

          {/* Activity Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Donate", text: "Support our Pad Initiative and help provide essential products.", color: "pink" },
              { title: "Training Programs", text: "Access a diverse range of digital skills training and mentorship.", color: "gray" },
              { title: "Mentorship & Guidance", text: "Connect with experienced tech professionals for guidance.", color: "rose" },
            ].map(({ title, text, color }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200"
              >
                <span className={`text-${color}-600 text-sm font-bold uppercase tracking-wide`}>{title}</span>
                <h3 className="text-2xl font-semibold mt-3">{title}</h3>
                <p className="text-gray-700 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
