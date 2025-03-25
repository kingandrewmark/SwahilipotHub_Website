import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const CommunitySpace = () => {
  return (
    <NextLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Community Space" />

      {/* Hero Section */}
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              {/* Left Image */}
              <div className="col-lg-8">
                <div className="project-details-image">
                  <Image
                    src="/community.jpg"
                    alt="Community Space"
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
                    src="/community.jpg"
                    alt="Community Space"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Community & Engagement</h5>
                  <h2>
                    Your Place, Your Space, <br /> Your Community.
                  </h2>
                  <p className="mt-4">
                    The Community Space is a vibrant and welcoming environment
                    where individuals gather to share knowledge, celebrate
                    culture, and foster innovation. It serves as a hub for
                    workshops, discussions, and collaborative initiatives.
                  </p>

                  <h4 className="mt-50">Benefits to the Community</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      <strong>Versatility</strong> - Ideal for meetings,
                      workshops, exhibitions, and social gatherings.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Community Engagement</strong> - A space to share
                      ideas, collaborate, and discuss local initiatives.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Cultural Celebrations</strong> - Honoring diverse
                      traditions through art, performances, and exhibitions.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Empowerment & Growth</strong> - Fostering
                      knowledge-sharing and skill development for all.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>Community Space</h4>
                  <ul>
                    <li>
                      Location <span>Mombasa, Kenya</span>
                    </li>
                    <li>
                      Purpose <span>Community Gathering & Events</span>
                    </li>
                    <li>
                      Activities <span>Meetings, Workshops, Cultural Events</span>
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
                      src="/community.jpg"
                      alt="Community Space"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/community.jpg"
                      alt="Community Space"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <h4 className="mb-3">Where Community Thrives</h4>
            <p className="mt-3">
              The Community Space at Swahilipot Hub is more than just a venue;
              it’s a reflection of shared values, aspirations, and creativity.
              It’s a space where people connect, innovate, and celebrate the
              spirit of community.
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
            <h2>Explore Similar Community Spaces</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/community.jpg"
                        alt="Community Space"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Community Hub</p>
                      <h3>
                        <a href="#">
                          Nyali Youth Resource <br />
                          Center
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/community.jpg"
                        alt="Community Gathering"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Cultural Center</p>
                      <h3>
                        <a href="#">
                          Swahili Heritage <br />
                          Museum
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

export default CommunitySpace;
