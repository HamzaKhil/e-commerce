import React from "react";

const Electronics = ({ products = [] }) => {
  return (
    <div>
      <h1 className="title">Electronics</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Electronics;
