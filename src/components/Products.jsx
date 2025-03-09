import Product from './Product';

function Products() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/lotion2.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/lotion1.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/serum.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/serum1.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/lotion2.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/serum.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/lotion1.jpg"/>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <Product img="/serum1.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Products;
