import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";

import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Image from "next/image";

const MombasaTourismLab = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Mombasa Tourism Innovation Lab" />

      {/* Hero Section */}
      <section className="hero-section fix section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content wow fadeInUp">
                <h1>Mombasa Tourism Innovation Lab</h1>
                <p>
                  The Mombasa Innovation Lab, hosted at Swahilipot Hub Foundation, seeks to inspire youth interest in tourism and job creation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <Image
                src="/tourism.png"
                alt="Tourism Lab Event"
                width={800}
                height={400}
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <h2>About</h2>
                <p>
                  The lab aims to develop innovative tourism products, incubate grassroots ideas, and rejuvenate the coastal tourism industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="service-video-section fix section-padding bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center wow fadeInUp">
              <h2>Objectives of the Mombasa Tourism Innovation Lab</h2>
              <ul className="list-unstyled mt-4">
                <li>Develop new tourism products for job creation</li>
                <li>Incubate grassroots tourism ideas</li>
                <li>Research and develop key data for industry advancement</li>
                <li>Rejuvenate the coastal tourism product</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInUp">
              <h2 className="text-center">Talk to Us</h2>
              <form className="mt-4">
                <input type="text" placeholder="Name" className="form-control mb-3" />
                <input type="text" placeholder="Organization" className="form-control mb-3" />
                <input type="text" placeholder="Phone Number" className="form-control mb-3" />
                <textarea placeholder="Message" className="form-control mb-3" rows="4"></textarea>
                <button className="theme-btn w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default MombasaTourismLab;
