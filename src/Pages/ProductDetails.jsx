import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {

  const { state } = useLocation();
  const [quantity,setQuantity]=useState(1);
  const navigate=useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 sm:p-8">   
      <div>
        <button 
        className="px-3 py-2 rounded bg-green-500 text-white"
        onClick={()=>navigate(-1)}>Back</button>
      </div>

      {/* conatiner */}
      <div className="border border-gray-300 shadow-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 rounded">
        
        {/* image */}
        <div className="w-full md:w-1/3 h-62.5 sm:h-87.5 md:h-[50vh]">
          <img className="rounded w-full h-full object-cover" src={`/${state.image}`} alt="Product Image" />
        </div>

          {/* details */}
        <div className="w-full md:w-2/3 flex flex-col items-start gap-4 px-2 sm:px-4">
          <h3 className="border border-green-500 px-4 py-2 text-green-500 rounded w-fit">{state.category}</h3>
          
          
          {/* name and price */}
          <div className="flex flex-col sm:flex-row flex-wrap w-full justify-between items-start sm:items-center">
            <h1 className="text-4xl">{state.name}</h1>
            <h1 className="pr-20 flex items-end gap-2"><span className="text-4xl text-green-500">&#8377;{state.price}</span> per unit</h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">About the Product</p>
            <p>{state.description}</p>
          </div>

          {/* quantity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center w-full gap-5">
            <h1>Quantity :</h1>
            <div className="flex w-32 h-10 items-center justify-center rounded border border-gray-300">
              <button 
              onClick={()=>setQuantity((pre)=>pre>2?pre-1:1)} 
              className="w-1/3 h-full hover:bg-gray-300 bg-gray-200">-</button>
              <button className="w-1/3 h-full">{quantity}</button>
              <button 
              onClick={()=>setQuantity((pre)=>pre+1)}
              className="w-1/3 hover:bg-gray-300 bg-gray-200 h-full">+</button>
            </div>
          </div>

          {/* add to cart */}
          <div className="w-full">
            <button className="py-2 px-4 rounded hover:bg-green-500 hover:scale-105 transition-transform duration-300 text-white bg-green-400 w-full">Add {quantity} to Cart -- &#8377;{quantity*state.price}</button>
          </div>
        </div>
      </div>
    </div>
  )
}       
export default ProductDetails;  