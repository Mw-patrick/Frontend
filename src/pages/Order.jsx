import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
  return (
    <div className="container min-vh-100 py-5">
      {/* Order Confirmation */}
      <div className="card shadow-lg mx-auto p-4" style={{ maxWidth: "800px" }}>
        <div className="text-center">
          <FaCheckCircle className="text-success display-1 mb-3" />
          <h1 className="fw-bold">Thank You for Your Order</h1>
          <p className="text-muted">Here are the details of your recent order.</p>
        </div>

        {/* Order Details */}
        <div className="mt-4">
          <h2 className="fw-semibold">Order #1</h2>

          {/* Items Ordered */}
          <div className="border p-3 rounded bg-light my-3">
            <h3 className="fw-semibold">Items Ordered</h3>

            {/* Product 1 */}
            <div className="d-flex align-items-center border-bottom pb-3">
              <img
                src="/lotion.jpg"
                alt="product"
                className="rounded me-3"
                width="80"
                height="80"
              />
              <div className="flex-grow-1">
                <h5 className="mb-1">Mekis Grapeseed & Sweet Almond Oil - 30Ml</h5>
                <small className="text-muted">Quantity: 2</small>
              </div>
              <strong className="ms-3">KES: 1400</strong>
            </div>

            {/* Rating and Review */}
            <div className="mt-3">
              <h5>Rate this product</h5>
              <StarRatings
                rating={2.4}
                starDimension="20px"
                starRatedColor="#aaa"
                starSpacing="3px"
              />
              <textarea
                className="form-control mt-2"
                placeholder="Leave a message"
                rows="2"
              ></textarea>
              <button className="btn btn-dark mt-2">Submit</button>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-3 rounded bg-light my-3">
            <h3 className="fw-semibold">Shipping Information</h3>
            <p className="mb-1">mwisenezapatrick2025@gmail.com</p>
            <p className="mb-1">(+254) 740 788 529</p>
            <p className="mb-1">Mwiseneza Patrick</p>
          </div>

          {/* Payment Method */}
          <div className="border p-3 rounded bg-light my-3">
            <h3 className="fw-semibold">Payment Method</h3>
            <p>VISA</p>
          </div>

          {/* Order Summary */}
          <div className="border p-3 rounded bg-light my-3">
            <h3 className="fw-semibold">Order Summary</h3>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>KES: 1400</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <strong>KES: 400</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <strong>KES: 1800</strong>
            </div>
          </div>

          {/* Continue Shopping Button */}
          <div className="text-center mt-4">
            <button className="btn btn-lg text-white" style={{ backgroundColor: "#ef93db" }}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
