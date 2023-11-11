import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [rol, setRol] = useState("cliente");


  const handleRegister = async (e) => {
    e.preventDefault(); // Previene que el formulario se envíe automáticamente

    if (nombre === "" || apellido === "" || correo === "" || contrasenia === "" || rol === "") {
      // Muestra una notificación si algún campo está vacío
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor, asegúrate de llenar todos los campos.",
        confirmButtonText: "OK",
      });
    } else {
      try {
        const response = await axios.post("http://localhost:3000/api/usuarios", {
          nombre,
          apellido,
          correo,
          contrasenia,
          rol,
        });

        if (response.status === 201) {
          // Registro exitoso, muestra una notificación SweetAlert2
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Tu cuenta ha sido registrada con éxito.",
            confirmButtonText: "OK",
          });

          // Puedes redirigir al usuario a la página de inicio de sesión después del registro exitoso si lo deseas.
          // Ejemplo de redirección:
          // history.push("/login");
        } else {
          console.error("Error en el registro");
        }
      } catch (error) {
        console.error("Error en el registro", error);

        // Muestra una notificación SweetAlert2 en caso de error en el registro
        Swal.fire({
          icon: "error",
          title: "Error en el registro",
          text: "Hubo un error al registrar tu cuenta. Por favor, inténtalo de nuevo.",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contrasenia" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="contrasenia"
                  name="contrasenia"
                  type="password"
                  autoComplete="new-password"
                  value={contrasenia}
                  onChange={(e) => setContrasenia(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">
                Rol
              </label>
              <div className="mt-2">
                <select
                  id="rol"
                  name="rol"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="cliente">Cliente</option>
                  <option value="administrador">Administrador</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#4a8549e1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5d8c5be1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>
          <Link to="/login">
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-[#4a8549e1] hover:text-indigo-500"
              >
                Login
              </a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
