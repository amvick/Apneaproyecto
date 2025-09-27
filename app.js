console.log("Bienvenido a tu carrito de compras");

prompt("Ingresa tu usuario");
//VARIABLES//
let claveUsuario = "";
let contraseña ="123";
let intentosClave ="(0)";

function mostrarCarrito() {
    console.log("¡Tu carrito de compras te espera!");

} 

confirm("¿Queres continuar con la compra?")

let carrito= [];

let producto = {
    id:1,
    nombre: "set Ambar",
    precio:"60000",
    color:"Menta",
    cantidad: 1,
};

carrito.push(producto)

function actualizarCarrito() {
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  let totalCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  let totalPrecio = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  cartCount.textContent = totalCantidad;
  cartTotal.textContent = totalPrecio.toLocaleString("es-AR");
}
const buttonIncrementar = document.getElementById("incrementar");
const buttonDecrementar = document.getElementById("decrementar");

buttonIncrementar.addEventListener("click", () => {
  carrito[0].cantidad++; 
  actualizarCarrito();   
});

buttonDecrementar.addEventListener("click", () => {
  if (carrito[0].cantidad > 1) {
    carrito[0].cantidad--; 
    actualizarCarrito();
  }
});
