import Cards from "@/components/cards";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const Events = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Events" />

      {/* Events Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="Events" />
                    Our Events
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Explore Our Exciting <br /> <span className="text-warning">Events</span>
                  </h2>
                </div>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  Stay updated with our past and upcoming programs at Swahilipot Hub.
                  Engage, Learn, and Grow with our community!
                </p>
              </div>
            </div>

            {/* Events Cards */}
            <div className="row mt-5">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default Events;
