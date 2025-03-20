import NumberCounter from "@/components/NumberCounter";
import Pillars from "@/components/Pillars";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1}>
      <section
          className="hero-section hero-1 bg-cover fix"
          style={{ backgroundImage: 'url("/assets/img/hero/swahilipot-bg.jpg")' }}
        >
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s">
                    Empowering Innovation, <br />
                    Creativity, &amp; Community <br />
                    at Swahilipot Hub
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Join a collaborative space where technology meets creativity. 
                    We nurture talent and foster innovation for a brighter future.
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/about/aboutus"
                      className="theme-btn hover-white wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      Learn More <i className="far fa-arrow-right" />
                    </Link>
                    <Link
                      href="/spaces"
                      className="btn-link wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Explore Spaces <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div
                    className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <img src="/assets/img/hero/community.png" alt="Community" />
                    <p className="text-white">
                      Supporting 10K+ innovators <br />
                      across the Coast region
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="hero-contact-box">
                  <h4>Join Our Community</h4>
                  <p>Be part of our mission to inspire and innovate.</p>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-item"
                  >
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Tell us why you want to join"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn">
                          Apply Now <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Service Section Start */}
      <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Empowering Communities Through Innovation and Digital Transformation
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer">
                      Swahilipot FM &amp; <br />
                      Creative Media
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/service/spfm.jpg" alt="img" width={250} height={250} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="#">
                      Advancing Digital <br />
                      Literacy Programs
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="#">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/service/digital.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="#">
                      Entrepreneurship <br />
                      &amp; Business Development
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="#">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/service/entpre.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>8+ Years Of Existence</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Tech Arts Heritage</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/about/02.jpg" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Preparing Your Success Trusted IT Services
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    temes accusantium doloremque laudantium, totam rem
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connect with leads with zero hassle.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Take quick payments direct from meetings
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Start finding leads that get coverts quickly
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Learn More Us
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Lucas J. Swe / <span>CO Founder</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="service-details">
                    Data Center and Cloud Services
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/04.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">
                    Web Development Software Renew
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/05.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">
                    IT Management Machine Learning
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/06.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="service-details">
                    Digital Product UI/UX Design
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/07.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("/assets/img/cta/sphamp.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=b5Uqa7UsZ9I&ab_channel=SwahilipotHubFoundation"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Swahili</span>
                <span className="text-slider">Pot </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Hub</span>
                <span className="text-slider">Foundation </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Documentary</span>
                <span className="text-slider">Swahili </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Pot </span>
                <span className="text-slider">Hub</span>
                <span className="text-slider">Foundation</span>
                <span className="text-slider">Documentary </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Swahili</span>
                <span className="text-slider">Pot </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Hub </span>
                <span className="text-slider">Foundation </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Documentary </span>
                <span className="text-slider">Swahili</span>
                <span className="text-slider">Pot</span>
                <span className="text-slider">Hub </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Foundation</span>
                <span className="text-slider">Documentary </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SwahiliPot</span>
                <span className="text-slider">Hub </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Foundation </span>
                <span className="text-slider">Documentary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Team Section Start */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Board Members
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Meet Our Professional <br />
                  Board Members
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Our board members bring a wealth of experience and strategic vision,
                <br /> driving innovation and excellence in every aspect of our organization.
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/mentor.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Mr. Mahmood Noor</Link>
                  </h4>
                  <p>Founder & Chief Mentor</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/atrash.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Atrash Ali</Link>
                  </h4>
                  <p>Chief Operations Officer</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/zuhra.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Zuhra Shariff</Link>
                  </h4>
                  <p>Head Of HR & Admin</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/jacqueline.webp" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Jacqueline Jepkoech</Link>
                  </h4>
                  <p>Global Opportunity Youth Network (GOYN) Mombasa</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/chri-achinga.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Chirs Achinga</Link>
                  </h4>
                  <p>Technology Lead</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xxl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link href="team" className="theme-btn">
                View More Members
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Swahilipot Hub in Numbers
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Our Impacts in Numbers
            </h2>
          </div>
          <NumberCounter />
        </div>
      </section>
      {/* Popular Case Study Section Start */}
      <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="/assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="/assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="/assets/img/bale.png" alt="img" />
                Swahilipot Spaces
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Discover Our Popular Spaces <br /> Explore all Space guides and resources.
              </h2>
            </div>
            <Link href="spaces" className="theme-btn white-border">
              View More Spaces
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="/assets/img/spaces/Mekatilili.webp" alt="img" />
                </div>
                <div className="content">
                  <p>Mekatilili</p>
                  <h3>
                    <Link href="case-study-details">
                      Swahilipot HUB Mekatilili Space
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="/assets/img/spaces/ali.webp" alt="img" />
                </div>
                <div className="content">
                  <p>Ali Mazurui</p>
                  <h3>
                    <Link href="case-study-details">
                    Swahilipot HUB Ali Mazurui Space
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="/assets/img/spaces/Amp.webp" alt="img" />
                </div>
                <div className="content">
                  <p>Amphitheatre</p>
                  <h3>
                    <Link href="case-study-details">
                    Swahilipot HUB Amphitheatre Space
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <Pillars />
      {/* Testimonial Section Start */}
      <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="/assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Latest News &amp; Blog
            </h2>
          </div>
          <div className="row">
          <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>Mar 19, 2025</p>
                  <h4>
                    <Link href="#">
                    Awarded for Exemplary Work in the Community
                    </Link>
                  </h4>
                  <Link className="link-btn" href="#">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/award.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>Mar 18, 2025</p>
                  <h4>
                    <Link href="https://thecodefather.substack.com/p/untitled-0?r=jlxxp&utm_campaign=post&utm_medium=web&triedRedirect=true" target="_blank" rel="noopener noreferrer">
                    Trying Out MongoDB database Backend for Django
                    </Link>
                  </h4>
                  <Link className="link-btn" href="https://thecodefather.substack.com/p/untitled-0?r=jlxxp&utm_campaign=post&utm_medium=web&triedRedirect=true" target="_blank" rel="noopener noreferrer">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/untitled.webp")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>May 31, 2024</p>
                  <h4>
                    <Link href="https://medium.com/@swahilipotengineering/a-comprehensive-guide-to-building-ats-compliant-resumes-ab52933d517f" target="_blank" rel="noopener noreferrer">
                    A Comprehensive Guide to Building ATS-Compliant Resumes
                    </Link>
                  </h4>
                  <Link className="link-btn" href="https://medium.com/@swahilipotengineering/a-comprehensive-guide-to-building-ats-compliant-resumes-ab52933d517f" target="_blank" rel="noopener noreferrer">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/resume.webp")' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
