import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="d-flex bg-white shadow-lg rounded overflow-hidden">
        {/* IMAGE */}
        <div className="p-0" style={{ height: "500px", width: "500px" }}>
          <img src="/lotion1.jpg" alt="login" className="img-fluid h-100 w-100" style={{ objectFit: "cover" }} />
        </div>

        {/* FORM */}
        <div className="p-4 w-100" style={{ maxWidth: "500px" }}>
          <h2 className="fw-bold text-secondary mb-4">Create Account</h2>
          <form>
            <div className="mb-3">
              <label className="form-label text-secondary">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label className="form-label text-secondary">Email</label>
              <input type="text" className="form-control" placeholder="example@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label text-secondary">Password</label>
              <input type="password" className="form-control" placeholder="********" />
            </div>
            <button
             className="btn w-100 text-white fw-bold"
             style={{ backgroundColor: "#d55fbb" }}
             onMouseOver={(e) => (e.target.style.backgroundColor = "#b74c9d")}
             onMouseOut={(e) => (e.target.style.backgroundColor = "#d55fbb")}
             >
            Create an account
            </button>
            <div className="mt-3 text-secondary text-center">
              <span>Have an account already?</span>
              <Link to="/login" className="text-danger ms-1 text-decoration-none">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register