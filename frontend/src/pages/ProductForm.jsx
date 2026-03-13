import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../services/api";

function ProductForm() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    precioFormateado: "",
    stock: "",
    imagen: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "precio") {
      const soloNumeros = value.replace(/\D/g, "");
      
      const precioFormateado = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      }).format(soloNumeros || 0);

      setForm({
        ...form,
        precio: soloNumeros,
        precioFormateado: precioFormateado
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      imagen: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", form.nombre);
    formData.append("descripcion", form.descripcion);
    formData.append("precio", form.precio || 0);
    formData.append("stock", form.stock);
    formData.append("imagen", form.imagen);

    try {
      if (id) {
        await axios.put(`http://localhost:5000/products/${id}`, formData);
      } else {
        await axios.post("http://localhost:5000/products", formData);
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/products/${id}`)
        .then((res) => {
          const data = res.data;
          setForm({
            nombre: data.nombre ?? "",
            descripcion: data.descripcion ?? "",
            precio: data.precio ?? "",
            precioFormateado: new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0
            }).format(data.precio || 0),
            stock: data.stock ?? "",
            imagen: null
          });
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">
                {id ? "Editar Producto" : "Agregar Producto"}
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea
                    name="descripcion"
                    className="form-control"
                    rows="3"
                    value={form.descripcion}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Precio</label>
                  <input
                    type="text"
                    name="precio"
                    className="form-control"
                    value={form.precioFormateado}
                    onChange={handleChange}
                    placeholder="$0"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    value={form.stock}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Imagen</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImage}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-success" type="submit">
                    💾 Guardar
                  </button>

                  <Link to="/" className="btn btn-secondary">
                    ❌ Cancelar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;