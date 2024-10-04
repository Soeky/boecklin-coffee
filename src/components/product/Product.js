
import React from "react";
import "./Product.css"; // Du kannst dieses CSS-Styling später anpassen

function Product({ image, title, description }) {
	return (
		<div className="product-card">
			<img src={image} alt={title} className="product-image" />
			<h3 className="product-title">{title}</h3>
			<p className="product-description">{description}</p>
		</div>
	);
}

export default Product;
