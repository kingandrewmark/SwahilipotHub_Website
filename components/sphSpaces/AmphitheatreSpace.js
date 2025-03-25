import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const AmphitheatreSpace = () => {
  return (
    <NextLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Swahilipot Hub Amphitheater" />

      {/* Hero Section */}
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              {/* Left Image */}
              <div className="col-lg-8">
                <div className="project-details-image">
                  <Image
                    src="/Amp3.webp"
                    alt="Swahilipot Hub Amphitheater"
                    width={800}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Right Image */}
              <div className="col-lg-4">
                <div className="project-details-image">
                  <Image
                    src="/Amp1.webp"
                    alt="Amphitheater"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Where Art and Entertainment Flourish</h5>
                  <h2>
                    Experience the Vibrance of <br /> Swahilipot Hub Amphitheater
                  </h2>
                  <p className="mt-4">
                    Step into the Swahilipot Hub Amphitheater, a dynamic space
                    that brings together culture, creativity, and entertainment.
                    It serves as a hub for performances, community events, and
                    artistic expression.
                  </p>

                  <h4 className="mt-50">Benefits to the Community</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      Cultural Enrichment - A stage for traditional and modern performances.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Entertainment for All Ages - Events catering to diverse audiences.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Community Unity - A space where people connect through art.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Inspiration & Aspiration - A platform for emerging talent.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>Amphitheatre Info</h4>
                  <ul>
                    <li>
                      Location <span>Mombasa, Kenya</span>
                    </li>
                    <li>
                      Purpose <span>Performance & Art Space</span>
                    </li>
                    <li>
                      Activities <span>Concerts, Theater, Cultural Events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="project-details-img mt-50">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/Amp1.webp"
                      alt="Amphitheater Event"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/Amp3.webp"
                      alt="Live Performance"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Section */}
            <h4 className="mb-3">The Heart of Art and Entertainment</h4>
            <p className="mt-3">
              The Swahilipot Hub Amphitheater is more than just a venue; it's a
              cultural landmark where creative minds come together to celebrate
              music, theater, and storytelling. Join us in keeping the arts
              alive!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="project-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="/assets/img/bale.png" alt="img" />
              Work Gallery
            </span>
            <h2>Explore Similar Performance Spaces</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/Amp3.webp"
                        alt="Community Stage"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Performance Venue</p>
                      <h3>
                        <a href="#">
                          Mombasa Cultural <br />
                          Theatre
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/Amp1.webp"
                        alt="Art Center"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Art & Culture</p>
                      <h3>
                        <a href="#">
                          Coastal Arts <br />
                          Center
                        </a>
                      </h3>
                    </div>
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

export default AmphitheatreSpace;
