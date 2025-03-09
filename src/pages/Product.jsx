import StarRatings from "react-star-ratings";
import { FaMinus, FaPlus } from "react-icons/fa";

function Product() {
  return (
    <div className="container d-flex flex-column flex-md-row p-4">
      {/* LEFT */}
      <div className="flex-fill">
        <img
          src="/lotion2.jpg"
          alt=""
          className="img-fluid rounded shadow-sm"
          style={{ width: "600px",height: "350px", objectFit: "cover" }}
        />
      </div>

      {/* RIGHT */}
      <div className="flex-fill ms-md-4 mt-4 mt-md-0">
        <h2 className="fw-semibold fs-4 mb-3">
          Bajaj Almond Drops, 6X Vitamin E Nourishment
        </h2>
        <p className="small">
          The new and better Bajaj Almond Drops Hair Oil has 6x Vitamin E that helps reduce hair 
          fall and gives beautiful, strong hair. It is light, non-sticky, and the perfect solution 
          for your hair worries. Now style your hair any way you want without fear of hair fall worries.
        </p>
        <h3 className="fw-semibold fs-5 text-black">KES: 1500</h3>

        {/* Star Ratings */}
        <div className="d-flex align-items-center mt-3">
          <StarRatings
            rating={2.4}
            starDimension="20px"
            starRatedColor="yellow"
            starSpacing="3px"
          />
          <span className="ms-2 small">(2)</span>
        </div>

        {/* What's in the Box */}
        <div className="border rounded p-3 shadow-sm mt-3" style={{ maxWidth: "400px" }}>
          <h5 className="text-center fw-semibold text-secondary">WHAT'S IN THE BOX</h5>
          <hr />
          <p className="small">1 Garnier Ever & Matte Vitamin C Cleansing Foam 500ml</p>
        </div>

        {/* Wholesale Info */}
        <div className="mt-3 py-2 px-4 text-white rounded-pill d-inline-block" style={{ backgroundColor: "#ef93db" }}>
          Wholesale Available: KES 1400 as from 10 items
        </div>

        {/* Quantity Selector */}
        <div className="d-flex align-items-center mt-4">
          <FaMinus className="p-2 rounded-circle me-3" style={{ backgroundColor: "#ef93db", color: "#fff",fontSize: "25px", display: "inline-block" }} /> 
          <span className="fs-5 fw-semibold">1</span>
          <FaPlus className="p-2 rounded-circle ms-3" style={{ backgroundColor: "#ef93db", color: "#fff", fontSize: "25px", display: "inline-block" }} />
        </div>

        {/* Add to Cart Button */}
        <button className="btn btn-dark mt-4 w-40">Add to Cart</button>

        <hr className="my-4" />

        {/* Reviews Section */}
        <h5 className="fw-semibold fs-6">Reviews</h5>
        <div className="d-flex align-items-center">
          <StarRatings
            rating={2.4}
            starDimension="20px"
            starRatedColor="yellow"
            starSpacing="3px"
          />
          <span className="fw-semibold ms-3">Patrick</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
