import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const MekatililiSpace = () => {
  return (
    <NextLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Mekatilili Space" />

      {/* Hero Section */}
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              {/* Left Image */}
              <div className="col-lg-8">
                <div className="project-details-image">
                  <Image
                    src="/Mekatilili.webp"
                    alt="Mekatilili Space"
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
                    src="/Mekatilili2.webp"
                    alt="Mekatilili Space"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Community & Culture</h5>
                  <h2>
                    Discover the Spirit of <br /> Mekatilili
                  </h2>
                  <p className="mt-4">
                    The Mekatilili Community Space is a versatile and welcoming
                    area designed to host a wide range of activities and events.
                    With its open, airy design and ample natural light, it's
                    the perfect setting for gatherings, workshops, and cultural
                    celebrations.
                  </p>

                  <h4 className="mt-50">Benefits to the Community</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      Education and Empowerment - A hub for workshops and
                      skill-building sessions.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Cultural Celebrations - Traditional performances and
                      storytelling.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Community Meetings - A space for local discussions and
                      events.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Unity and Collaboration - Bringing people together to
                      share ideas and initiatives.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>MekatiLili Info</h4>
                  <ul>
                    <li>
                      Location <span>Mombasa, Kenya</span>
                    </li>
                    <li>
                      Purpose <span>Community Hub</span>
                    </li>
                    <li>
                      Activities <span>Workshops, Meetings, Celebrations</span>
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
                      src="/Mekatilili.webp"
                      alt="Mekatilili Space"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/Mekatilili2.webp"
                      alt="Mekatilili Space"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Section */}
            <h4 className="mb-3">Mekatilili wa Menza: A Legacy of Strength</h4>
            <p className="mt-3">
              Mekatilili wa Menza was a fearless Kenyan woman who fought for the
              rights and freedom of her people during the colonial era. She
              serves as an inspiration to us all, and her legacy lives on in the
              Mekatilili Community Space.
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
                        src="/Mekatilili.webp"
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
                        src="/Mekatilili2.webp"
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

export default MekatililiSpace;
