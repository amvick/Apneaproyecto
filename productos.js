import { manejarAgregarAlCarrito } from "./carrito.js";

/*** @description FUNCION QUE OBTIENE EL LISTADO DE PRODUCTOS DE LA API
 * @returns {object}
 */
async function obtenerListaProductos() {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await response.json();

    return data;
}

export async function mostrarCardsProductos() {
  try {
    const lista = await obtenerListaProductos();
    const div = document.getElementById("output");
    div.innerHTML = "";

    lista.forEach((producto) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "m-3");
      tarjeta.style.width = "18rem";
      tarjeta.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" class="card-img-top">
        <div class="card-body">
          <h5>${producto.title}</h5>
          <p>$${producto.price}</p>
          <button class="btn btn-dark">Agregar al carrito</button>
        </div>
      `;

      const btn = tarjeta.querySelector("button");
      btn.addEventListener("click", () =>
        manejarAgregarAlCarrito(producto.id, producto.title, producto.price)
      );

      div.appendChild(tarjeta);
    });
  } catch (err) {
    console.error("Error al mostrar productos:", err);
  }
}