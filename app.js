

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

Swal.fire({
  title: "¿Queres continuar con la compra?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `no`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
