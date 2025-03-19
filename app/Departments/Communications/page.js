import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const Communications = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Communications Department" />
      
      {/* Hero Section */}
      <section className="contact-section section-padding text-center text-white bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container">
          <h1 className="text-6xl font-extrabold bg-blue">Communications Department</h1>
          <p className="text-1g text-dark">Kujenga Mawasiliano, Kueneza Sauti</p>
        </div>
      </section>
      
      {/* Image Section */}
      <div className="container mt-10 text-center">
        <Image src="/comms.svg" alt="Creating an Inclusive Community" width={900} height={500} className="rounded-xl shadow-xl" />
      </div>
      
      {/* About Communications */}
      <section className="container section-padding g-white rounded-xl shadow-lg ">
        <h2 className="text-3xl font-bold text-blue-700">Creating an Inclusive Community</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to the Community Department at Swahilipot Hub! We are thrilled to have you join our vibrant community. Here, we believe in minding other people's business in the best way possible - by enabling community members to develop themselves and create an environment where talents can thrive and expertise can be shared.</p>
        <p className="text-lg text-gray-700 leading-relaxed">
        Our primary goal is to provide a platform for every individual to express their thoughts, ideas, and opinions. We want to ensure that everyone's voice is heard and respected within our community. Regardless of your tribe, religion, political affiliation, or social status, we strive to create a safe space where everyone feels included and valued. </p>
        <p className="text-lg text-gray-700 leading-relaxed">
        At the heart of our community lies our commitment to love, unity, and peaceful coexistence. We believe that by fostering a sense of togetherness and understanding, we can create a stronger and more harmonious society. We encourage meaningful partnerships among our members, as collaboration often leads to incredible achievements.
        </p>
      </section>
      
      {/* Collaboration and Partnership*/}
      <section className="container section-padding g-white rounded-xl shadow-lg ">
        <h3 className="text-3xl font-bold text-blue-700">Collaboration and Partnerships</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
        Remember, Swahilipot Hub is not just a physical building; it is the people who make up our community. Each and every member contributes to the vibrant tapestry of ideas, skills, and experiences that make our hub unique. Together, we can explore endless possibilities, support one another's growth, and make a positive impact on our society.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">We emphasize the importance of collaboration and partnerships within our community. We encourage community members to engage in meaningful collaborations, recognizing the power of working together for achieving remarkable results. By understanding and appreciating each other's perspectives and expertise, we can unlock the full potential of our diverse community.</p>
        
      </section>
      
      {/* Community Pillars */}
      <section className="container section-padding bg-white rounded-xl shadow-lg text-center">
        <h3 className="text-3xl font-bold text-gray-800">How We Empower Our Community</h3>
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="p-4 bg-blue-100 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">Inclusion</h4>
              <p className="text-gray-600">Creating a space where everyone belongs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-blue-100 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">Collaboration</h4>
              <p className="text-gray-600">Encouraging teamwork for a bigger impact.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-blue-100 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">Empowerment</h4>
              <p className="text-gray-600">Providing opportunities for growth.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="container section-padding bg-white rounded-xl shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-700">Become Part of Our Community</h3>
        <form id="join-form" className="contact-form-items mt-6">
          <div className="row g-4">
            <div className="col-md-6">
              <input type="text" name="name" placeholder="Full Name" className="form-control" required />
            </div>
            <div className="col-md-6">
              <input type="email" name="email" placeholder="Email Address" className="form-control" required />
            </div>
            <div className="col-md-12">
              <input type="tel" name="phone" placeholder="Phone Number" className="form-control" required />
            </div>
            <div className="col-md-6">
              <button type="submit" className="theme-btn">Join Now</button>
            </div>
          </div>
        </form>
      </section>
    </NextLayout>
  );
};

export default Communications;
