import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Shopping Cart</h2>
      <div className="row">
        {/* LEFT - Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4">
            <h3 className="fw-semibold mb-3">Your Items</h3>
            {["lotion1.jpg", "lotion.jpg", "lotion2.jpg"].map((img, index) => (
              <div key={index} className="d-flex align-items-center border-bottom py-3">
                <img src={`/${img}`} alt="" className="rounded" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                <div className="ms-3 flex-grow-1">
                  <h5 className="fw-semibold">Mekis Grapeseed & Sweet Almond Oil - 30ml</h5>
                  <p className="text-muted small">What's Good about Mekis Sweet Almond Oil with Grap seed combo for your Skin and Hair? Sweet almond</p>
                  {/* Quantity Selector */}
                  <div className="d-flex align-items-center">
                    <FaMinus className="btn btn-sm btn-outline-secondary me-2" style={{ backgroundColor: "#ef93db", color: "#fff", fontSize: "25px", display: "inline-block" }}/>
                    <span className="fw-semibold mx-2">1</span>
                    <FaPlus className="btn btn-sm btn-outline-secondary ms-2" style={{ backgroundColor: "#ef93db", color: "#fff", fontSize: "25px", display: "inline-block" }} />
                  </div>
                </div>
                <div className="text-end">
                  <p className="fw-bold text-dark">KES: 1500</p>
                  <FaTrashAlt className="text-danger cursor-pointer" />
                </div>
              </div>
            ))}
            <button className="btn btn-danger mt-3 w-25">Clear Cart</button>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-4">
            <h3 className="fw-semibold mb-3">Order Summary</h3>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>KES: 1400</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>KES: 400</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>KES: 1800</span>
            </div>
            <button className="btn btn-primary w-100 mt-3" style={{ backgroundColor: "#ef93db" }}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
