function Category() {
    return (
      <div className="d-flex flex-wrap justify-content-center m-3">
        {/* Serum */}
        <div 
          className="position-relative d-flex align-items-center justify-content-center text-white m-3 rounded" 
          style={{
            backgroundImage: "url('/serum.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "270px"
          }}
        >
          {/* Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded"></div>
          
          {/* Text */}
          <div className="position-relative text-center">
            <h2 className="fw-semibold fs-2">Serums</h2>
          </div>
        </div>
  
        {/* Toner */}
        <div 
          className="position-relative d-flex align-items-center justify-content-center text-white m-3 rounded" 
          style={{
            backgroundImage: "url('/serum1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "270px"
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded"></div>
          <div className="position-relative text-center">
            <h2 className="fw-semibold fs-2">Toners</h2>
          </div>
        </div>
  
        {/* Lotion */}
        <div 
          className="position-relative d-flex align-items-center justify-content-center text-white m-3 rounded" 
          style={{
            backgroundImage: "url('/lotion.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "270px"
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded"></div>
          <div className="position-relative text-center">
            <h2 className="fw-semibold fs-2">Lotions</h2>
          </div>
        </div>
  
        {/* Foundation */}
        <div 
          className="position-relative d-flex align-items-center justify-content-center text-white m-3 rounded" 
          style={{
            backgroundImage: "url('/foundation.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "270px"
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded"></div>
          <div className="position-relative text-center">
            <h2 className="fw-semibold fs-2">Foundation</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default Category;
  