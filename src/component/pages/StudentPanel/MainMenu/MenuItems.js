import axios from 'axios';
const response = await axios.get('http://localhost:4000/producto');
const menuItems = response.data;

export default menuItems;
/*
const menuItems = [
    {
        id: 1,
        description: "Huevos Rancheros: Tortillas fritas con huevos, salsa y frijoles.",
        price: "Q35.00",
        image: huevosRancheros,
        category: "Desayuno"
    },
    {
        id: 2,
        description: "Tostadas Francesas: Pan empapado en huevo y leche, frito y servido con miel.",
        price: "Q30.00",
        image: tostadasFrancesas,
        category: "Desayuno"
    },
    {
        id: 3,
        description: "Omelette Vegetariano: Huevos batidos con verduras frescas y queso.",
        price: "Q40.00",
        image: omeleteVegetariano,
        category: "Desayuno"
    },
    {
        id: 4,
        description: "Ensalada César: Lechuga, pollo a la parrilla, aderezo César y crutones.",
        price: "Q50.00",
        image: "/ruta/a/ensalada_cesar.png",
        category: "Almuerzo"
    },
    {
        id: 5,
        description: "Sopa de Pollo: Caldo de pollo con verduras y fideos.",
        price: "Q40.00",
        image: "/ruta/a/sopa_de_pollo.png",
        category: "Almuerzo"
    },
    {
        id: 6,
        description: "Taco de Pescado: Tortilla de maíz con pescado frito y salsa de aguacate.",
        price: "Q45.00",
        image: "/ruta/a/taco_de_pescado.png",
        category: "Almuerzo"
    },
    {
        id: 7,
        description: "Chips de Plátano: Plátano frito, crujiente y salado.",
        price: "Q15.00",
        image: "/ruta/a/chips_de_plantano.png",
        category: "Snacks"
    },
    {
        id: 8,
        description: "Guacamole: Aguacate machacado con cebolla, cilantro y limón.",
        price: "Q25.00",
        image: "/ruta/a/guacamole.png",
        category: "Snacks"
    },
    {
        id: 9,
        description: "Nachos: Tortilla frita con queso y jalapeños.",
        price: "Q30.00",
        image: "/ruta/a/nachos.png",
        category: "Snacks"
    },
    {
        id: 10,
        description: "Jugo Natural: Jugo fresco de fruta natural.",
        price: "Q20.00",
        image: "/ruta/a/jugo_natural.png",
        category: "Bebidas"
    },
    {
        id: 11,
        description: "Cerveza: Bebida alcohólica fría.",
        price: "Q30.00",
        image: "/ruta/a/cerveza.png",
        category: "Bebidas"
    },
    {
        id: 12,
        description: "Café: Café negro o con leche.",
        price: "Q15.00",
        image: "/ruta/a/cafe.png",
        category: "Bebidas"
    },
    {
        id: 13,
        description: "Brownie: Postre de chocolate húmedo.",
        price: "Q25.00",
        image: "/ruta/a/brownie.png",
        category: "Postres"
    },
    {
        id: 14,
        description: "Helado: Helado de vainilla o chocolate.",
        price: "Q20.00",
        image: "/ruta/a/helado.png",
        category: "Postres"
    },
    {
        id: 15,
        description: "Tarta de Frutas: Base de pastel con frutas frescas.",
        price: "Q35.00",
        image: "/ruta/a/tarta_de_frutas.png",
        category: "Postres"
    },
    {
        id: 16,
        description: "Pastel de Chocolate: Pastel húmedo de chocolate.",
        price: "Q40.00",
        image: "/ruta/a/pastel_de_chocolate.png",
        category: "Pasteles"
    },
    {
        id: 17,
        description: "Tarta de Queso: Tarta cremosa de queso.",
        price: "Q35.00",
        image: "/ruta/a/tarta_de_queso.png",
        category: "Pasteles"
    },
    {
        id: 18,
        description: "Cupcake de Vainilla: Pastelito decorado con crema.",
        price: "Q20.00",
        image: "/ruta/a/cupcake_de_vainilla.png",
        category: "Pasteles"
    },
    {
        id: 19,
        description: "Ensalada Mixta: Lechuga, tomate, y cebolla con aderezo.",
        price: "Q30.00",
        image: "/ruta/a/ensalada_mixta.png",
        category: "Ensaladas"
    },
    {
        id: 20,
        description: "Ensalada de Atún: Atún, mayonesa, y vegetales.",
        price: "Q35.00",
        image: "/ruta/a/ensalada_de_atun.png",
        category: "Ensaladas"
    },
    {
        id: 21,
        description: "Ensalada de Frutas: Frutas frescas de temporada.",
        price: "Q25.00",
        image: "/ruta/a/ensalada_de_frutas.png",
        category: "Ensaladas"
    },
    {
        id: 22,
        description: "Sopa de Verduras: Sopa caliente con verduras frescas.",
        price: "Q25.00",
        image: "/ruta/a/sopa_de_verduras.png",
        category: "Sopas"
    },
    {
        id: 23,
        description: "Sopa de Lentejas: Sopa de lentejas con especias.",
        price: "Q30.00",
        image: "/ruta/a/sopa_de_lentejas.png",
        category: "Sopas"
    },
    {
        id: 24,
        description: "Sopa de Pollo: Caldo de pollo con fideos.",
        price: "Q35.00",
        image: "/ruta/a/sopa_de_pollo.png",
        category: "Sopas"
    },
];*/



