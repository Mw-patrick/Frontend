const Footer = () => {
  return (
    <div className="bg-light px-5 py-5 mt-4">
      {/* UPPER PART */}
      <div className="container">
        <div className="row py-4">
          {/* Logo & Tagline */}
          <div className="col-md-4 text-center text-md-start">
            <img src="/blisslogo1.png" alt="Logo" height={90} width={90} />
            <p className="mt-2">
              LET'S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-md-4">
            <h3 className="fw-semibold">Quick Links</h3>
            <ul className="list-unstyled mt-2">
              <li><a href="#" className="text-dark text-decoration-none d-block py-1">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block py-1">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block py-1">Shop</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block py-1">Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="col-md-4">
            <h3 className="fw-semibold">Contact Us</h3>
            <p className="mt-2">123 BeautyBliss Ave, City, Country</p>
            <p>Phone: (+254) 740-788 529</p>
            <p>Email: info@beautybliss.com</p>
          </div>
        </div>
      </div>
      {/* LOWER PART */}
      <div className="container text-center border-top pt-4">
        <p>&copy; 2025 BeautyBliss. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="#" className="text-dark"><i className="bi bi-github fs-4"></i></a>
          <a href="#" className="text-blue"><i className="bi bi-twitter fs-4"></i></a>
          <a href="#" className="text-blue"><i className="bi bi-facebook fs-4"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
