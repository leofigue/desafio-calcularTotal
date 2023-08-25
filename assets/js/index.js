//ETIQUETAS
const precioSpan = document.querySelector(".precio-inicial");
const valorTotal = document.querySelector(".valor-total");
const objCantidad = document.querySelector('.cantidad');


//Variables
const precio = 400000;


precioSpan.innerHTML = Intl.NumberFormat('es-CL').format(Number(precio));


valorTotal.innerHTML = 0;
