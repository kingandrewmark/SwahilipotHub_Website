import Counter from "./Counter";
const NumberCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={65} />
            </span>
            %
          </h2>
          <h6>of our members are Youth</h6>
          <p>Empowering the next generation through innovation and creativity.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={4000} />
            </span>
            +
          </h2>
          <h6>Community Members</h6>
          <p>Building a thriving community committed to digital excellence.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={25} />
            </span>
          </h2>
          <h6>Programs and Activities</h6>
          <p>Offering diverse programs to foster skills and growth opportunities.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={90} />
            </span>
            %
          </h2>
          <h6>Professional Team Members</h6>
          <p>Driven by a team of passionate and skilled professionals.</p>
        </div>
      </div>
    </div>
  );
};
export default NumberCounter;
