import React from "react";
import { FaSearch, FaUser, FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between shadow px-3" style={{ height: "60px" }}>
      
      {/* Logo Section */}
      <div className="cursor-pointer m-2 d-flex">
        <img src="/blisslogo1.png" style={{ height: "50px", width: "80px" }} alt="Bliss Logo" />
      </div>
      
      {/* Search Bar */}
      <div className="d-flex align-items-center m-2">
        <div className="input-group" style={{ width: "400px" }}>
          <input 
            type="text" 
            placeholder="Search" 
            className="form-control border border-2" 
            style={{
              borderColor: "#f096dd",
              padding: "10px",
              outline: "none",
              borderRadius: "8px 0 0 8px"
            }}
          />
          <span 
            className="input-group-text" 
            style={{
              backgroundColor: "#f096dd",
              color: "white",
              borderRadius: "0 8px 8px 0",
              border: "2px solid #f096dd",
              cursor: "pointer"
            }}
          >
            <FaSearch />
          </span>
        </div>
      </div>
      {/* Cart & User Section */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Cart Icon */}
        <div className="position-relative">
          <FaShoppingBasket style={{ fontSize: "24px", color: "#e455c5", cursor: "pointer" }} />
          {/* Custom Badge */}
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "12px", padding: "5px 8px" }}
          >
            2
          </span>
        </div>
        {/* Login Button */}
        <div className="d-flex align-items-center border border-pink-300 px-3 py-2 rounded-lg hover:bg-pink-100 transition">
          <FaUser style={{ color: "#e455c5", marginRight: "5px" }} />
          <span style={{ color: "#e455c5", fontWeight: "600" }}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
