import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const CaseManagement = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Case Management" />

      {/* Hero Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="Case Management" />
                      Case Management
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Anyone, Anywhere <br /> Empowering Youth
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    At the Swahili Pot Hub Foundation (SPH), we are committed to
                    making a positive impact on young individuals in Mombasa
                    County through strategic partnerships and mentorship.
                  </p>
                  <ul className="contact-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <a href="mailto:info@swahilipothub.co.ke">
                        info@swahilipothub.co.ke
                      </a>
                    </li>
                    <li>Mombasa, Kenya</li>
                    <li>
                      <a href="tel:+25412345678">+254 (123) 456 78</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Image
                  src="/casemgt.jpg"
                  alt="Case Management Program"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Management Project */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <h3 className="wow fadeInUp" data-wow-delay=".3s">
                The Case Management Project: A Path to Empowerment
              </h3>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                The primary objective of the Case Management Project is to
                connect 60,000 youth in Mombasa County to various opportunities
                and sustainable employment through a personalized case
                management approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="contact-section section-padding bg-blue-600 text-white text-center">
        <div className="container">
          <h2 className="wow fadeInUp">Interested in Offering Mentorship?</h2>
          <p className="wow fadeInUp mt-2">Let's get to work.</p>
        </div>
      </section>

      {/* Mentorship Form */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-right wow fadeInUp" data-wow-delay=".4s">
                  <h3>Send Us a Message</h3>
                  <form className="contact-form-items">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="email" placeholder="Email Address" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input type="tel" placeholder="Phone Number" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea placeholder="Tell us about your experience" rows={4} required></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="map-items">
                  <div className="googpemap">
                  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7893833802746!2d39.67731977474537!3d-4.063306044967009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ba0153b67%3A0x75a36ee817c3f38b!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1718785438427!5m2!1sen!2ske"
  width="100%"
  height="100"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default CaseManagement;
