import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductForm from "./pages/ProductForm";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/nuevo" element={<ProductForm />} />

        <Route path="/editar/:id" element={<ProductForm />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;