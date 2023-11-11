import React, { useState } from 'react';
import axios from 'axios';
import HeaderAdmin from './HeaderAdmin';
import Swal from 'sweetalert2'; 



export function IconAddRopa() {
    return (
      <>
        <Link className="" to="/add">
          <div className=" border-2 hover:bg-[#9dc49c] border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center hover:top-1">
            <img src="" alt="" />
          </div>
        </Link>
      </>
    );
  }


function FormAddRopa() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    color: '',
    size: '',
    type: '',
    image: '',
    amount: '',
    id_usuario_fk: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/products', formData);
      console.log('Producto registrado:', response.data);

      Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: 'El producto se ha agregado correctamente.',
      });

      // Redirige al usuario a /home/admin
    } catch (error) {
      console.error('Error al registrar el producto:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 border-2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Product title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product title"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Color"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Size
            </label>
            <input
              type="text"
              id="size"
              name="size"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Size"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image URL"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="id_usuario_fk"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User ID
            </label>
            <input
              type="text"
              id="id_usuario_fk"
              name="id_usuario_fk"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="User ID"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Product
        </button>
      </form>
    </>
  );
}

export default FormAddRopa;
