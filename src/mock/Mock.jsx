const products = [
  {
    name: "Piano Digital 88 Teclas",
    category: "ingresos",
    price: 899.99,
    image: "../img/piano.png",
    description: "Piano digital con teclas contrapesadas",
    stock: 8,
  },
  {
    name: "Batería Acústica Completa",
    category: "promociones",
    price: 1299.99,
    image: "../img/bateria.png",
    description: "Set completo de 5 piezas con platillos",
    stock: 5,
  },
  {
    name: "Bajo Eléctrico Fender",
    category: "mas vendidos",
    price: 599.99,
    image: "../img/bajo.png",
    description: "Bajo de 4 cuerdas con sonido profundo",
    stock: 12,
  },
  {
    name: "Saxofón Alto",
    category: "promociones",
    price: 799.99,
    image: "../img/saxo.png",
    description: "Saxofón profesional con estuche incluido",
    stock: 7,
  },
  {
    name: "Violín 4/4",
    category: "mas vendidos",
    price: 449.99,
    image: "../img/violin.png",
    description: "Violín tamaño completo con arco y estuche",
    stock: 10,
  },
  {
    name: "Amplificador Marshall",
    category: "ingresos",
    price: 499.99,
    image: "../img/amplificador.png",
    description: "Amplificador de 50W con efectos integrados",
    stock: 18,
  },
  {
    name: "Micrófono Condensador",
    category: "ingresos",
    price: 199.99,
    image: "../img/microfono.png",
    description: "Micrófono profesional para estudio",
    stock: 25,
  },
  {
    name: "Guitarra Eléctrica Stratocaster",
    category: "promociones",
    price: 749.99,
    image: "../img/guitarra2.png",
    description: "Guitarra eléctrica icónica con 3 pastillas",
    stock: 14,
  },
  {
    name: "Sintetizador Analógico",
    category: "ingresos",
    price: 1499.99,
    image: "../img/sintetizador.png",
    description: "Sintetizador con 49 teclas y múltiples efectos",
    stock: 6,
  },
  {
    name: "Cajón Peruano",
    category: "mas vendidos",
    price: 129.99,
    image: "../img/cajon.png",
    description: "Cajón artesanal de madera de alta calidad",
    stock: 20,
  },
  {
    name: "Ukelele Soprano",
    category: "mas vendidos",
    price: 89.99,
    image: "../img/ukelele.png",
    description: "Ukelele perfecto para principiantes",
    stock: 30,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export const getOneProducts = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = products.find((item) => item.id === id);
      resolve(product);
    }, 3000);
  });
};
