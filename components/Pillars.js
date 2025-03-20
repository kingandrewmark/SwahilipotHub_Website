import Link from "next/link";

const Pillars = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Swahilipot Core Pillars
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Tech | Arts | Heritage
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Technology</h3>
                <p>We equip young minds with essential tech skills through hands-on programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and dynamic Pitching Thursdays.</p>
              </div>
              <div className="pricing-button">
                <Link href="/Departments/Technology" className="theme-btn style-transparent">
                🔍 Discover Innovation
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Creatives & Arts</h3>
                <p>We foster creative expression through programs like Sanaa Show and Sanaart Shop, supporting talents in acting, voice arts, and visual storytelling to inspire community impact.</p>
              </div>
              <div className="pricing-button">
                <Link href="#" className="theme-btn style-transparent">
                📣 Unleash Your Creativity
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Heritage</h3>
                <p>We celebrate cultural heritage by preserving stories, traditions, and experiences, bridging the gap between history and future generations through immersive programs.</p>
              </div>
              <div className="pricing-button">
                <Link href="#" className="theme-btn style-transparent">
                🌍 Preserve Our Legacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pillars;

export const Pricing2 = ({
  priceingClass = "pricing-section-3",
  paddingTop = "0",
}) => {
  return (
    <section
      className={`fix section-padding pt-${paddingTop} ${priceingClass}`}
      id="pricing"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub-text-2 wow fadeInUp">Pricing Package</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Offer Amazing Pricing Package <br />
            keep Under Budget
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Regular Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>12 <span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items-2 active">
              <div className="pricing-header">
                <h3>Standard Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>45<span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow-2.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Premium Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>98<span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};