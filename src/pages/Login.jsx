import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="d-flex bg-white shadow-lg rounded overflow-hidden">
        {/* IMAGE */}
        <div className="p-0" style={{ height: "400px", width: "500px" }}>
          <img src="/lotion1.jpg" alt="login" className="img-fluid h-100 w-100" style={{ objectFit: "cover" }} />
        </div>

        {/* FORM */}
        <div className="p-4 w-100" style={{ maxWidth: "500px" }}>
          <h2 className="fw-bold text-secondary mb-4">Login</h2>
          <form>
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
            Login
            </button>
            <div className="mt-3 text-secondary text-center">
              <span>Don't have an account?</span>
              <Link to="/create-account" className="text-danger ms-1 text-decoration-none">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
