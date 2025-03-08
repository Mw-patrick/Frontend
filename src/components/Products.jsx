import Product from './Product';

function Products() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Products;
