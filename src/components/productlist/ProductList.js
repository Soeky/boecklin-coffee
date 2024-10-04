import React, { useRef } from 'react';
import Product from '../product/Product';
import './ProductList.css';

function ProductList({ products }) {
	const productListRef = useRef(null); // Referenz zum Produkt-Container

	// Handler für Draggen mit der Maus
	const handleMouseDown = (e) => {
		const container = productListRef.current;
		container.isDown = true;
		container.startX = e.pageX - container.offsetLeft;
		container.scrollLeft = container.scrollLeft;
		container.classList.add('active'); // Fügt aktiven Zustand hinzu
	};

	const handleMouseLeave = () => {
		const container = productListRef.current;
		container.isDown = false;
		container.classList.remove('active'); // Entfernt aktiven Zustand
	};

	const handleMouseUp = () => {
		const container = productListRef.current;
		container.isDown = false;
		container.classList.remove('active');
	};

	const handleMouseMove = (e) => {
		const container = productListRef.current;
		if (!container.isDown) return;
		e.preventDefault();
		const x = e.pageX - container.offsetLeft;
		const walk = (x - container.startX) * 2.5; // Erhöhter Multiplikator für flüssigeres Scrollen
		container.scrollLeft = container.scrollLeft - walk;
	};

	// Handler für Touch-Scrollen
	const handleTouchStart = (e) => {
		const container = productListRef.current;
		container.isDown = true;
		container.startX = e.touches[0].pageX - container.offsetLeft;
		container.scrollLeft = container.scrollLeft;
		container.classList.add('active');
	};

	const handleTouchEnd = () => {
		const container = productListRef.current;
		container.isDown = false;
		container.classList.remove('active');
	};

	const handleTouchMove = (e) => {
		const container = productListRef.current;
		if (!container.isDown) return;
		e.preventDefault();
		const x = e.touches[0].pageX - container.offsetLeft;
		const walk = (x - container.startX) * 1.5; // Erhöhter Multiplikator für flüssigeres Scrollen bei Touch
		container.scrollLeft = container.scrollLeft - walk;
	};

	return (
		<div
			className="product-list-container"
			ref={productListRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
			<div className="product-list">
				{products.map((product, index) => (
					<Product
						key={index}
						image={product.image}
						title={product.title}
						description={product.description}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductList;
