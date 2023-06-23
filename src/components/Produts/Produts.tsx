import React, { useContext, useEffect } from "react";
import './Produts.css'
import fetchProducts from "../../Api/fetchProducts";
import CardProduct from "../CardProduct/CardProduct";
import Loading from "../Loading/Loading";
import AppContext from "../../context/ContextApp";
import NoProducts from "../NoProducts/NoProducts";

const Products: React.FC = () => {

    const { products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {

        fetchProducts('computador gamer').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    return (

       <section className="products_section container">
      {loading ? (
        <Loading />
      ) : products.length === 0 ? (
        <NoProducts />
      ) : (
        products.map((product) => (
          <CardProduct key={product.id} infos={product} />
        ))
      )}
    </section>

    )
}


export default Products;