// import { useState } from "react";
// import productData from "../productdata";

// export default function Product() {
//   const [filteredProducts, setFilteredProducts] = useState(productData);
//   const handleFilter = () => {
//     const filtered = productData.filter((product) => product.price < 50);
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="flex flex-col items-center mt-3">
//       <button
//         onClick={handleFilter}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-5 hover:bg-blue-600"
//       >
//         Filter Products Below $50
//       </button>

//       <div className="flex justify-center flex-wrap">
//         {filteredProducts.map((product) => (
//           <div
//             className="card mx-9 border p-3 rounded-2xl max-w-xs"
//             key={product.id}
//           >
//             <img
//               src={product.category.image}
//               alt={product.title}
//               width={300}
//               height={200}
//               className="rounded"
//             />
//             <h1 className="text-xl font-bold mt-2">{product.title}</h1>
//             <p className="text-gray-600">{product.description}</p>
//             <span className="text-green-600 font-semibold">
//               {product.price}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import productData from "../productdata";

export default function Product() {
  const [isFiltered, setIsFiltered] = useState(false);

  const filteredProducts = (
    isFiltered
      ? productData.filter((product) => Number(product.price) < 50)
      : productData
  ).slice(0, 4); // This will take only the first 12 products

  const handleToggleFilter = () => {
    setIsFiltered((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center mt-3">
      <button
        onClick={handleToggleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-5 hover:bg-blue-600"
      >
        {isFiltered ? "Show All Products" : "Show Products with Price < 50"}
      </button>

      <div className="flex justify-center flex-wrap">
        {filteredProducts.map((product) => (
          <div
            className="card mx-3 bg-base-100 shadow-sm border mb-5 p-3 rounded-2xl max-w-xs"
            key={product.id}
          >
            <img
              src={product.category.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded"
            />
            <div className="card-body">
              <h1 className="text-xl font-bold mt-2">{product.title}</h1>
              <p className="text-gray-600">{product.description}</p>
              <span className="text-green-600 font-semibold">
                {product.price}
              </span>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
}
