import Products from "../components/Products";

function ProductList() {
  return (
    <div className="min-vh-100 bg-light p-4">    

      {/* FILTER & SORT ROW */}
      <div className="row mb-4 align-items-center">
        
        {/* FILTER (LEFT) */}
        <div className="col-md-8 d-flex flex-wrap align-items-center">
          <span className="fw-semibold me-3">Filter Products</span>
          <select name="concern" className="form-select me-3 mb-2 mb-md-0" style={{ width: "200px" }}>
            <option>Dry Skin</option>
            <option>Pigmentation</option>
            <option>Oil Control</option>
            <option>Anti Acne</option>
            <option>Sunburn</option>
            <option>Skin Brightening</option>
            <option>Tan Removal</option>
            <option>Night Routine</option>
            <option>UV Protection</option>
            <option>Damaged Hair</option>
            <option>Frizzy Hair</option>
            <option>Stretch Marks</option>
            <option>Color Protection</option>
            <option>Dry Hair</option>
            <option>Soothing</option>
            <option>Dandruff</option>
            <option>Greying</option>
            <option>Hairfall</option>
            <option>Hair Color</option>
            <option>Well Being</option>
            <option>Acne</option>
            <option>Hair Growth</option>
          </select>

          <select name="brand" className="form-select me-3 mb-2 mb-md-0" style={{ width: "200px" }}>
            <option>Garnier</option>
            <option>Kylie</option>
            <option>Kiss Beauty</option>
            <option>Dr Rashel</option>
            <option>Luron</option>
            <option>Nivea</option>
            <option>Heaven Dove</option>
            <option>Disaar</option>
            <option>Johnsons Baby</option>
            <option>Rexona</option>
            <option>Kylie</option>
          </select>
        </div>

        {/* SORT (MOVED TO FAR RIGHT) */}
        <div className="col-md-4 d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <span className="fw-semibold me-3">Sort Products</span>
            <select name="price" className="form-select" style={{ width: "200px" }}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        
      </div>

      {/* PRODUCT LIST */}
      <Products />
    </div>
  );
}

export default ProductList;
