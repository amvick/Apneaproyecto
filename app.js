
import { mostrarCardsProductos } from "./productos.js";
import { vaciarCarrito } from "./carrito.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarCardsProductos();

  const btnVaciar = document.getElementById("clear-cart");
  if (btnVaciar) btnVaciar.addEventListener("click", vaciarCarrito);
});
import { confirmarSalir } from "./notificaciones.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarCardsProductos();
});

document.addEventListener("click", () => {
  confirmarSalir();
});
