import React from "react";

function ProductAdmin({ products }) {
  return (
    <>
      <div class="bg-white grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map((product) => (
          <div class=" border-2 border-blue-400 " key={product.id}>
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              {product.tile}
            </h2>
              <div class="group relative border-2 h-full border-green-400">
                <div class=" w-64  h-64 mx-auto ">
                  <img className=" max-w-full max-h-full" src={product.image} alt="" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#" className="line-clamp-2">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 "
                        ></span>
                        {product.description}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductAdmin;
