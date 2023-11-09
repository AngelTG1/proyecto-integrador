import React from "react";

export default function CartItem({
  image,
  price,
  title,
  quantity,
  addToCart,
  removerFromCart,
  decreaseQuantity,
}) {
  return (
    <>
      {/* <li classNameName="border-2 border-red-300 flex flex-col gap-2 ">
            <img
              src={image}
              alt={title}
            />
            <div>
              <strong classNameName="">{title}</strong> - <span>${price}</span>
            </div>

            <footer classNameName="flex flex-row items-center gap-3">
              <small >qty: {quantity}</small>
              <button classNameName="bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-2xl" onClick={addToCart}>+</button>
            </footer>
          </li> */}

      <div className="flex flex-col md:flex-row gap-3 ">
        <div className="flex items-center justify-center h-56 w-60">
          <img
            className="  h-full lg:h-40 object-cover "
            src={image}
            alt={title}
          />
        </div>
        <div className="flex  borde2 w-full justify-between  p-3">
          <div className="flex">
            <div className=" flex flex-col justify-between">
              <div className="flex flex-col ">
                <h2 class=" text-gray-900 text-lg">{title}</h2>
                <p class="mt-1 text-2xl  font-bold text-gray-700 ">$MXN{price}</p>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center gap-4">
                      <small className="text-sm">cantidad: </small>

                      <button
                        classNameName="bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-2xl "
                        onClick={decreaseQuantity}
                      >
                      <img className="w-8 bg-blue-500 p-2 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAstJREFUWEfFWYFt4zAMPG2SbtJRkk1+k/Qn+W6SbqKCshxREimSjoM3UKCwqdPxSJ7sNsG8EoB8UpQE48c3SbSAhIRcafMNhM3qLQ8NA6lsTzHvuTSG5f7yYeXTx3RE2yNdB0/2WuYefL6W57QRnXh5CuYpRBRnVnGfjpdKH6MRix5lmEu/xHutJY5TpSFWrhgodwNPS0ydaC7yl16b1lhGLkKSaytET97dpGcH+BUV3W13DI8vCmQCejiICmhaG9jCPCNkjuthNVI10j7oEoGczj1Cjyhkv+rwtwzJWXN/WHESgbayRfM4Sd1w7aOvVN2m2Udw0tJYvKLQ8bX9Sg9OMhLZ/ecTwAXAD4DvhVgUcy1xCd/IJV4ztoqZfoC8wpyHSWmZfwAIdCdNm3+MdUvI1wzc2X2K+5uAP8LQMMyyQsCcO0MXKOGOXBQary8At8a9/Pbk0xIualEcV+wOpKvwedMwFcNctf0DSBcBtCjAeouS4Wrygt8yQCT261HbaGyKparz1PedPYB2D/laag0qp3SRogPRPvmGSiMju6t1hJJKrPRPyC8g3RgoDdFj/lIovKmfy1DV1QPmM7cRc4vvfFQ/uy9AugO5DtOy8a/Yeppfo5r0jJIisj1mwocopmX4bDcC3n82e9KML+GCnD6BTPFUbmZPXQIzpjYpa6IeC+bI0fjV/LZn49GtmEHklaFCuPlKZ+RmcHqxRppjGvx79QD3SQVWygjceuo9ChkxK4VOISpvEGUejdf7XjF8of7Lkuk9Z4+NJxlge3syrMHezBfhozRgVY/fFI0ivDteILUepqjraCPuE1w20J2DWxx3YJSVL54p6vn7kT5RtZWGhtdMWSfXVvR7dUTlsfIZ5RRl3IjaX9ej9ma+MrmjAhuqw/SfW1IcS7cAupO9Py219Ods3aPwQWn/BvLp5Cq9NomTLweyC4SWE+kXVb8CPX737z4AAAAASUVORK5CYII="/>
                      </button>
                        <p>{quantity}</p>
                        <button
                        classNameName=""
                        onClick={addToCart}
                      >
                        <img className=" w-8 bg-blue-500 p-2 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAplJREFUWEe9WNFxwzAIRZt0FGeUTtLrJB3FGaWbpCdZtpAA8ZBzzV1+YgSPxwPkJFr5JCJ68YPiB8Urt3Hslcf5JyIkjggdD7bCyXkmtXBLaJ3Yls9EiV61KFjcg1GHVswVyJeiAMT/wWhAPjqcyhASMSptRiNIhTSDZfMGObPSuwqYJhQlk6vNP5tIlh7m13evDhTsmDpj1PEEy7YP/EFE+Xt+nnDeTr1k6aPzsrffiWirPz2J0qONocrHLUa5PKOOevsBKD1iTW7XsWPUHs/axuRD+4IjGC0nA8mbGHwf1YIPXDF8r5Ls9OKlpwfin8tDV14m5e5HlD5tlf/cSKz0agWG6H3pSwInT40cP3eghkKjiFeEq4PRd3kjmjZTA8Tl1Idf06iTgPLYByoaG2MJ2EwhtDpQeHvYxZXNhCVoNYHPqCPIFn5srNnBwzavxB9E8GwrZfPf+kV64JuIhnXbM8Zu+CaULRHt3SuSYooUYqKAPMam9wJkjubdnUtqNa0YHNN+0TPygZrjoL1oZqBfHtCK9qNKxbk9iaifl0yMwpqM6gkMuhnfmpU5ikgC0b858BcD3O56rqNRQnZCxTIEWb898WskPJ7kxlKPhuA1D9NdP5WT8pDPVKTrEQmdNkul9xv6vOYt0qdkAAIN7FQmmz5e3Ac/X4BWF+U+OuWgPkR4+p/ST/U3v4icG5EBtfMKkLwTWTd8Z7h40wClXe569eSk6x1aPaCRlh5t+fiob5sbe+lst6doECOny806uxYS+4UOiTXeg7B8o54xr7qVx6jNS/sDAsYLG2IZAV2PRLQHotCxuL2CQIsjB0uz8ZcdFtbeMVYe3cDXYcTHip9YPB25mZBKT+PcdqBOoXev0Fa5KF5b5sXnHwDpEEC+uFdBAAAAAElFTkSuQmCC"/>
                      </button>
                  </div>
                </div>

               
                </div>
                  <div>
                    <h4>Ships in 3–4 weeks</h4>
                </div>
            </div>
          </div>

          <div>
            <button className="" onClick={removerFromCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2 2 18 18"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#969696] font-bold cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4 w-full" />
    </>
  );
}
