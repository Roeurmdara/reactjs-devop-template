import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/homepageStyle.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="d-flex header-section flex-column flex-md-row mt-4">
        <div className="container pt-5 order-2 order-md-1">
          <h1 className="display-2 header-title">Jenkins</h1>
          <p className="lead">
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products. We build great
            products to solve your business problems.
          </p>
          <div className="d-flex align-items-center pt-4 gap-3">
            <button className="btn btn-success px-4 py-2 fw-bold">Join</button>
            <button className="btn btn-link nav-link d-flex align-items-center gap-2">
              <strong className="text-dark">Learn More</strong>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="order-1 order-md-2 text-center">
          <img
            className="img-fluid rounded"
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1940798.jpg"
            alt="Header logo"
          />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="container text-center mt-5 pt-5 mb-5">
        <h1 className="feature-title">
          Steps to Start{" "}
          <span className="text-success">Your Plan Off Right</span>
        </h1>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-5">
          <div className="item-card px-4 pb-3 col-12 col-md-4 col-lg-3">
            <img
              className="img-fluid p-4"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-5293900-4432198.png"
              alt="Plant sprout"
            />
            <h2>Inoculate</h2>
            <p>
              Protect against disease, error, or harm. In financial planning,
              inoculation means protecting against the risk of loss.
            </p>
          </div>
          <div className="item-card px-4 pb-3 col-12 col-md-4 col-lg-3">
            <img
              className="img-fluid p-4"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-6347424-5242126.png"
              alt="Growing plant"
            />
            <h2>Nurture</h2>
            <p>
              Provide consistent care and environment optimal for sustained
              growth and long-term stability.
            </p>
          </div>
          <div className="item-card px-4 pb-3 col-12 col-md-4 col-lg-3">
            <img
              className="img-fluid p-4"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-pot-5663958-4719914.png"
              alt="Potted plant"
            />
            <h2>Harvest</h2>
            <p>
              Reap the benefits of controlled development and resilient system
              architectures.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container section3 d-flex flex-column flex-md-row mt-5 pt-5 justify-content-center align-items-center gap-4">
        <div className="text-side col-12 col-md-8">
          <h1 className="feature-title">Make Your Garden Good Nutrition</h1>
          <ul className="mt-3">
            <li className="mb-2">
              <strong>Improved plant growth and health:</strong> Providing adequate nutrients yields stronger plants, better disease resistance, and vibrant health.
            </li>
            <li className="mb-2">
              <strong>Enhanced soil structure:</strong> Good nutrition improves soil retention and drainage, preventing erosion.
            </li>
            <li>
              <strong>Improved soil fertility:</strong> Long-term care increases land yield for subsequent growth cycles.
            </li>
          </ul>
        </div>
      </div>

  
    </div>
  );
};

export default HomePage;