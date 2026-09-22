import { useEffect, useState } from "react";
import ProductCard from "../components/ProductsCard";
import "./Products.css"


function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')

            .then(res=>res.json())            

            .then((data)=>{
                setProducts(data)
            })
            
            .catch((
                console.log("Error")
            ))
    },[]);


    return (
        <div className="products-page">
            <h2 className="products-title">Products</h2>
            <div className="products-grid">
                {products.map((item)=>(
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        />
                ))}
            </div> 
        </div>
    );
}

export default Products;