import { useEffect, useState } from "react";
import { api } from "../services/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <Link to="/nuevo" className="btn btn-success mb-3">
            ➕ Agregar Producto
        </Link>

        <div className="row">

          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;