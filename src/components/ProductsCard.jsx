import "./ProductsCard.css"

function ProductCard ({ title, price, image}){
    return (
        <div className="product-card">
           
           <div className="product-image-container">
                <img 
                src={image}
                alt={title}
                />
            </div>

            <div className="product-info">
                <h3>{title}</h3>
            </div>

            <div className="product-price">
                <p>₹{price}</p>
            </div>

        </div>
    );
}

export default ProductCard;