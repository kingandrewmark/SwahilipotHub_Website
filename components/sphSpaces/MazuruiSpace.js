import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";

const MazuruiSpace = () => {
  return (
    <NextLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Ali Mazrui Cultural Center" />

      {/* Hero Section */}
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              {/* Left Image */}
              <div className="col-lg-8">
                <div className="project-details-image">
                  <Image
                    src="/ali1.webp"
                    alt="Ali Mazrui Cultural Center"
                    width={800}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Celebrating Intellectual Excellence</h5>
                  <h2>Ali Mazrui Cultural Center</h2>
                  <p className="mt-4">
                    The Ali Mazrui Cultural Center is a space where the legacy
                    of one of Kenya's most distinguished scholars and
                    intellectuals, Ali Mazrui, continues to shine. This center
                    embodies his passion for knowledge, diversity, and the power
                    of ideas.
                  </p>

                  <h4 className="mt-50">Benefits to the Community</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      <strong>Learning and Research</strong> - A well-stocked
                      library with books, journals, and digital resources for
                      students and scholars.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Art and Culture</strong> - Showcasing African art,
                      exhibitions, and cultural workshops.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Community Dialogue</strong> - Hosting discussions,
                      lectures, and seminars for intellectual exchange.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      <strong>Youth Empowerment</strong> - Offering mentorship
                      programs, internships, and leadership events.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>Mazurui Info</h4>
                  <ul>
                    <li>
                      Location <span>Mombasa, Kenya</span>
                    </li>
                    <li>
                      Purpose <span>Education, Culture & Intellectual Growth</span>
                    </li>
                    <li>
                      Activities <span>Research, Exhibitions, Seminars</span>
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
                      src="/ali1.webp"
                      alt="Ali Mazrui Cultural Center"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <Image
                      src="/ali1.webp"
                      alt="Ali Mazrui Cultural Center"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <h4 className="mb-3">Ali Mazrui: A Scholar's Legacy</h4>
            <p className="mt-3">
              Ali Mazrui was a scholar, philosopher, and public intellectual who
              made significant contributions to the fields of political science
              and African studies. His commitment to addressing complex issues
              through intellectual discourse continues to influence our
              community. The Ali Mazrui Cultural Center is a tribute to his
              enduring legacy.
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
            <h2>Explore Similar Cultural Spaces</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/ali1.webp"
                        alt="Cultural Space"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Heritage Center</p>
                      <h3>
                        <a href="#">
                          Swahili Heritage <br />
                          Museum
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="project-card-items">
                    <div className="project-image">
                      <Image
                        src="/ali1.webp"
                        alt="Cultural Events"
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                    <div className="project-content">
                      <p>Educational Hub</p>
                      <h3>
                        <a href="#">
                          Mombasa Knowledge <br />
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

export default MazuruiSpace;
