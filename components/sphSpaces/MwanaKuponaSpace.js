import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const MwanaKuponaSpace = () => {
  return (
    <NextLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Jitume Lab" />

      {/* Hero Section */}
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              {/* Left Image */}
              <div className="col-lg-8">
                <div className="project-details-image">
                  <Image
                    src="/jitume1.webp"
                    alt="Jitume Lab"
                    width={800}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Learning Centre</h5>
                  <h2>Jitume Lab</h2>
                  <p className="mt-4">
                    <strong>Jitume</strong> is a bundled program designed to
                    address key challenges preventing citizens from accessing
                    digital opportunities. These challenges include access to
                    digital devices, internet connectivity, training, and
                    skills for the 4th Industrial Revolution (4IR).
                  </p>
                  <p>
                    With the support of Jitume Labs, Swahilipot was equipped
                    with **50 desktop computers**, unlocking new opportunities
                    for youth who were eager to learn but lacked the necessary
                    resources. This initiative fosters digital skills,
                    certification, and access to online jobs, empowering the
                    community.
                  </p>

                  <h4 className="mt-50">Benefits to the Community</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      <strong>Community Learning</strong> - Engages local
                      expertise and partnerships to facilitate learning for
                      individuals from diverse backgrounds.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Hands-on Training</strong> - Provides interactive
                      workshops, technical mentorship, and practical skills
                      development.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Innovation & Creativity</strong> - Fosters a
                      collaborative learning ecosystem, encouraging creativity
                      and skill-sharing within the community.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>MwanaKupona Info</h4>
                  <ul>
                    <li>
                      Location <span>Mombasa, Kenya</span>
                    </li>
                    <li>
                      Focus <span>Digital Learning & Skill Development</span>
                    </li>
                    <li>
                      Impact <span>Empowering Youth through Digital Access</span>
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
                      src="/jitume1.webp"
                      alt="Jitume Lab"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/jitume1.webp"
                      alt="Jitume Lab"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <h4 className="mb-3">Empowering the Future</h4>
            <p className="mt-3">
              By equipping young people with **digital literacy** and
              **professional skills**, Jitume Lab is shaping a future where
              learning and innovation are accessible to all. It stands as a
              beacon of opportunity for the community, ensuring that no one is
              left behind in the digital age.
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
            <h2>Explore Other Learning Spaces</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/MekatiLili.webp"
                        alt="Learning Space"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Tech Innovation Hub</p>
                      <h3>
                        <a href="#">
                          SwahiliTech <br />
                          Digital Academy
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
                        alt="Learning Community"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Education & Digital Skills</p>
                      <h3>
                        <a href="#">
                          Mombasa Digital <br />
                          Skills Center
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

export default MwanaKuponaSpace;
