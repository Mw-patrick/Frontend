const Banner = () => {
    return (
      <div
        className="d-flex align-items-center position-relative text-white"
        style={{
          backgroundImage: "url('/beautybanner2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          padding: "0 200px"
        }}
      >
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
  
        {/* Content */}
        <div className="position-relative w-50 pt-5">
          <span className="fs-4 d-block mt-3">
            Discover Your Radiance with Our Handpicked Beauty Essentials
          </span>
          <h1 className="fs-2 fw-bold mt-3">Glow with Confidence</h1>
  
          {/* Buttons */}
          <div className="d-flex mt-4">
            <button className="btn text-white me-3" style={{ backgroundColor: "#e48bcd", width: "210px" }}>
              Shop Now
            </button>
            <button className="btn btn-secondary" style={{ width: "210px" }}>
              CALL: (+254) 740 788 529
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  