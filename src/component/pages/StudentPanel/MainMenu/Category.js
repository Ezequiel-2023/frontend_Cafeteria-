import React from "react";
import "./Category.css"; 
import Card from "./Card"; 
import MenuItems from './MenuItems'; 

const categories = [...new Set(MenuItems.map(item => item.category))].map(category => ({
    name: category,
    items: MenuItems.filter(item => item.category === category),
}));

const Category = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const categoryScrollRef = React.useRef();

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
                {selectedCategory && categories.find(cat => cat.name === selectedCategory).items.map((item) => (
                    <Card key={item.id} id={item.id} description={item.description} price={item.price} image={item.image} />
                ))}
            </div>
        </>
    );
};

export default Category;
