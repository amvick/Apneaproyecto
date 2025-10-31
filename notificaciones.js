export function confirmarSalir () {

return Swal.fire({
  title: "¿Queres continuar con la compra?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `no`
}).then((result) => {
  
  if (result.isConfirmed) {
    Swal.fire("Seguí comprando", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Saliste del carrito", "", "info");
  }
});
}


export function confirmarAgregarProducto(title) {
  return Swal.fire({
    title: `¿Agregar "${title}" al carrito?`,
    showDenyButton: true,
    confirmButtonText: "Sí, agregar",
    denyButtonText: "Cancelar",
  });
}
export function confirmarEliminarProducto(title) {
  return Swal.fire({
    title: `¿Agregar "${title}" al carrito?`,
    showDenyButton: true,
    confirmButtonText: "Sí, agregar",
    denyButtonText: "Cancelar",
  });
}
export function mostrarToastExito(mensaje) {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
  });
}
export function confirmarVaciarCarrito() {
  return Swal.fire({
    title: "¿Vaciar todo el carrito?",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar",
  });
}

export function confirmarFinalizarCompra() {
  return Swal.fire({
    icon: "success",
    title: "¡Gracias por tu compra!",
    text: "Te enviaremos la confirmación por correo.",
  });
}
