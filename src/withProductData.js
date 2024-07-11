import React, { useState, useEffect } from "react";

const withProductData = (WrappedComponent, category) => {
  return function ComponentWithProductData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter(
            (product) => product.category === category
          );
          setProducts(filteredData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
          setLoading(false);
        });
    }, [category]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent products={products} />;
  };
};

export default withProductData;
