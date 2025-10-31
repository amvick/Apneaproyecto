import {
  confirmarAgregarProducto,
  confirmarEliminarProducto,
  mostrarToastExito,
  confirmarVaciarCarrito,
  confirmarFinalizarCompra
} from "./notificaciones.js";

let carrito =[];

export async function manejarAgregarAlCarrito(id, title, precio) {
  const resultado = await confirmarAgregarProducto(title);

  if (resultado.isConfirmed) {
    agregarAlCarrito(title, precio);
    mostrarToastExito("Producto agregado del carrito");
  }
}

/* FUNCION QUE AGREGA UN PRODUCTO AL CARRITO */

function agregarAlCarrito(title, precio) {
  const divCarrito = document.getElementById("carrito");
  const itemCarrito = document.createElement("div");

  itemCarrito.innerHTML = `
    <span class="item-info"><strong>${title}</strong> - $${precio}</span>
    <button class="btn-eliminar">Eliminar</button>
  `;

  const botonEliminar = itemCarrito.querySelector(".btn-eliminar");
  botonEliminar.addEventListener("click", function () {
    manejarEliminarDelCarrito(itemCarrito, title);
  });

  divCarrito.appendChild(itemCarrito);
}

/* FUNCION QUE MANEJA LA ELIMINACION DE UN PRODUCTO DEL CARRITO */

async function manejarEliminarDelCarrito(itemCarrito, title) {
  const resultado = await confirmarEliminarProducto(title);

  if (resultado.isConfirmed) {
    itemCarrito.remove();
    mostrarToastExito("Producto eliminado del carrito");
  }
}
/** Renderiza visualmente el carrito */
function renderizarCarrito() {
  const divCarrito = document.getElementById("carrito");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  divCarrito.innerHTML = "";

  let totalCantidad = 0;
  let totalPrecio = 0;

  carrito.forEach((prod) => {
    totalCantidad += prod.cantidad;
    totalPrecio += prod.price * prod.cantidad;

    const item = document.createElement("div");
    item.classList.add("item-carrito");
    item.innerHTML = `
      <span>${prod.title} (${prod.cantidad}) - $${prod.price}</span>
      <button class="btn btn-danger btn-sm">Eliminar</button>
    `;

    item.querySelector("button").addEventListener("click", () => manejarEliminarDelCarrito(prod.id));
    divCarrito.appendChild(item);
  });

  cartCount.textContent = totalCantidad;
  cartTotal.textContent = totalPrecio.toLocaleString("es-AR");
}

export function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
}
export function inicializarEventosCarrito() {
  document.getElementById("vaciarCarrito").addEventListener("click", () => {
    confirmarVaciarCarrito().then((r) => {
      if (r.isConfirmed) {
        carrito = [];
        actualizarCarrito();
        mostrarToastExito("Carrito vaciado");
      }
    });
  });

  document.getElementById("finalizarCompra").addEventListener("click", () => {
    confirmarFinalizarCompra();
  });
}
