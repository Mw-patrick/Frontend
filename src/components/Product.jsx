import StarRatings from "react-star-ratings";

function Product() {
  return (
    <div 
      className="text-center m-3 p-3 rounded shadow-sm border"
      style={{ width: "300px", cursor: "pointer" }}
    >
      {/* Product Image */}
      <img 
        src="/serum1.jpg" 
        alt="Product" 
        className="img-fluid rounded mb-2"
        style={{ height: "400px", width: "100%", objectFit: "cover" }} 
      />

      {/* Product Title */}
      <h2 
        className="fw-semibold mb-2"
        style={{ fontSize: "18px" }}
      >
        Rosehip Seed, Argan, Sweet Almond & Vitamin E Oil - Anti-aging
      </h2>

      {/* Product Price */}
      <span 
        className="fw-semibold mb-2 d-block"
        style={{ fontSize: "18px" }}
      >
        KES: 1000
      </span>

      {/* Star Ratings */}
      <span className="d-flex align-items-center justify-content-center">
        <StarRatings 
          rating={2.4} 
          starDimension="25px" 
          starRatedColor="yellow" 
          starSpacing="5px" 
        />
        <span className="ms-2">(2)</span>
      </span>
    </div>
  );
}

export default Product;
