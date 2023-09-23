//tuve que colocar el array de productos acá ya que no se porque si lo coloco
//otro archivo js no lo tomaba, igual dejo el otro js creado e invocado en el HTML
//el error que dice que productosDisponibles no está definido

const productosDisponibles = [
  {
    id: 1,
    nombre: "Notebook",
    tipo: "notebook",
    descripcion: "Notebook para trabajo o diversión",
    precio: 500000,
    cantidad: 0,
  },

  {
    id: 2,
    nombre: "Impresora",
    tipo: "impresora",
    descripcion: "Impresora para trabajo o plasmar tus recuerdos",
    precio: 100000,
    cantidad: 0,
  },

  {
    id: 3,
    nombre: "Teléfono",
    tipo: "telefono",
    descripcion: "Telefono para estar siempre conectado",
    precio: 200000,
    cantidad: 0,
  },

  {
    id: 4,
    nombre: "Televisor",
    tipo: "televisor",
    descripcion: "Televisor para que disfrutes de tus programas favoritos",
    precio: 300000,
    cantidad: 0,
  },

  {
    id: 5,
    nombre: "Tablet",
    tipo: "tablet",
    descripcion: "Tablet para que puedas llevarla a cualquier lado",
    precio: 130000,
    cantidad: 0,
  },

  {
    id: 6,
    nombre: "Mochila",
    tipo: "mochila",
    descripcion: "Mochila para que puedas transportar tus objetos favoritos",
    precio: 20000,
    cantidad: 0,
  },

  {
    id: 7,
    nombre: "Audífonos",
    tipo: "audifonos",
    descripcion: "Audifonos para que disfrutes de tu musica preferida",
    precio: 50000,
    cantidad: 0,
  },

  {
    id: 8,
    nombre: "Consola",
    tipo: "consola",
    descripcion: "Consola para que puedas jugar tus juegos favoritos",
    precio: 300000,
    cantidad: 0,
  },
];

const mostrarProductosDisponibles = () => {
  const listaProductos = productosDisponibles.map(
    (producto) => `${producto.nombre}: $${producto.precio.toLocaleString()}`
  );
  listaProductos[0] = "- " + listaProductos[0];
  const productosTexto = listaProductos.join("\n- ");

  const mensaje = "Productos disponibles en nuestra tienda:\n" + productosTexto;
  alert(mensaje);
};

const agregarAlCarrito = (carrito) => {
  const nombreProducto = prompt("¿Qué producto desea comprar?");
  const cantidad = parseInt(
    prompt("Ingrese la cantidad de productos que desea comprar:")
  );

  const productoElegido = productosDisponibles.find(
    (producto) => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
  );

  if (productoElegido) {
    carrito.push({ producto: productoElegido, cantidad: cantidad });
    alert(`${cantidad} ${nombreProducto + "(s/es)"} añadido(s) al carrito.`);
  } else {
    alert("El producto ingresado no está disponible.");
  }
};

const mostrarResumenCarrito = (carrito) => {
  let resumen = "Resumen de su Compra:\n";
  let total = 0;

  carrito.forEach((item) => {
    const subtotal = item.producto.precio * item.cantidad;
    resumen += `${item.cantidad} ${
      item.producto.nombre
    }: $${subtotal.toLocaleString()}\n`;
    total += subtotal;
  });

  resumen += `\nTotal a Pagar: $ ${total.toLocaleString()}`;
  return resumen;
};

const carritoDeCompras = () => {
  alert("Bienvenido a TecnoCoder, los precios están en pesos Chilenos");
  const carrito = [];

  while (true) {
    mostrarProductosDisponibles();
    agregarAlCarrito(carrito);

    const continuar = confirm("¿Desea agregar otro producto a su carrito?");
    if (!continuar) {
      const resumen = mostrarResumenCarrito(carrito);
      alert(resumen);
      break;
    }
  }
};

carritoDeCompras();
