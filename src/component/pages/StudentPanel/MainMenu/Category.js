import React, { useEffect, useState } from "react";
import "./Category.css"; 
import Card from "./Card"; 
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([{ name: "Todas" }]); // Opción "Todas" por defecto
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [products, setProducts] = useState([]); // Para almacenar los productos
    const categoryScrollRef = React.useRef();

    // Función para obtener las categorías desde el endpoint
    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:4000/categoria');
            const fetchedCategories = response.data.map(category => ({
                name: category.descripcion
            }));
            setCategories([{ name: "Todas" }, ...fetchedCategories]); // Asegurarnos de no duplicar las categorías
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
        }
    };

    // Función para obtener los productos desde el endpoint
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/producto');
            setProducts(response.data); // Guardar los productos obtenidos
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    // Llamar a fetchCategories y fetchProducts cuando el componente se monta
    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const scrollLeft = () => {
        if (categoryScrollRef.current) {
            categoryScrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoryScrollRef.current) {
            categoryScrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    // Filtrar los productos según la categoría seleccionada
    const filteredItems = selectedCategory === "Todas" 
        ? products 
        : products.filter(product => product.categoria.descripcion === selectedCategory);

    return (
        <>
            <div className="category-container">
                <button className="scroll-button" onClick={scrollLeft}>&lt;</button>
                <div className="category-scroll" ref={categoryScrollRef}>
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`category-item ${selectedCategory === category.name ? "selected" : ""}`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
                <button className="scroll-button" onClick={scrollRight}>&gt;</button>
            </div>
            <div className="card-grid">
                {filteredItems.map((item) => (
                    <Card 
                        key={item.idProducto} 
                        idProducto={item.idProducto} 
                        descripcion={item.descripcion} 
                        precio={item.precio} 
                        imagenProducto={item.imagenProducto} 
                    />
                ))}
            </div>
        </>
    );
};

export default Category;
