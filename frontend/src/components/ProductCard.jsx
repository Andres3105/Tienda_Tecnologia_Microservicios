import { Link } from "react-router-dom";
import { api } from "../services/api";

function ProductCard({ product }) {

    const handleDelete = async () => {
        if(!window.confirm("¿Eliminar producto?")) return;

        try{

            await api.delete(`/products/${product.id}`);
            window.location.reload();

        }catch(error){
            console.log(error);
        }

    };
  const stockClass =
    product.stock === 0
      ? "stock stock-agotado"
      : product.stock < 10
      ? "stock stock-bajo"
      : "stock stock-normal";

  const stockText =
    product.stock === 0
      ? "❌ Agotado"
      : product.stock < 10
      ? "⚠ Stock Bajo"
      : "Disponible";

  return (
    <div className="col-md-4">
      <div className="card mb-3">

            {product.imagen && (

            <img
            src={`http://localhost:5000/uploads/${product.imagen}`}
            className="card-img-top"
            alt={product.nombre}
            />

            )}

        <div className="card-body">

          <h5 className="card-title">{product.nombre}</h5>

          <p>{product.descripcion}</p>

          <p className="precio">
            ${product.precio.toLocaleString("es-CO")}
          </p>

          <p>Stock: {product.stock}</p>

          <span className={stockClass}>{stockText}</span>
            <div className="d-flex justify-content-between mt-3">

                <Link
                    to={`/editar/${product.id}`}
                    className="btn btn-warning btn-sm"
                >
                    ✏ Editar
                </Link>

                <button
                className="btn btn-danger btn-sm"
                onClick={handleDelete}
                >
                🗑 Eliminar
                </button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;