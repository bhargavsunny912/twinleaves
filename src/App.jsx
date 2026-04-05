import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home=lazy(()=>import("./Pages/Home"));
const ProductDetails=lazy(()=>import("./Pages/ProductDetails"));

const App=()=>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </Suspense>
  )
}   

export default App;