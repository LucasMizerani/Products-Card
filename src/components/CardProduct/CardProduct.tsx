import React, { useContext } from "react";
import './CardProduct.css'
import propTypes from 'prop-types'
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import priceCurrency from "../Utilits/Currency";
import AppContext from "../../context/ContextApp";
import { toast } from 'react-toastify';


interface CardProductProps {
    infos: {
        title: string;
        thumbnail: string;
        price: number;
    };
}

interface ProductInfo {
    title: string;
    thumbnail: string;
    price: number;
}

interface CardProductProps {
    infos: ProductInfo;
}


const CardProduct: React.FC<CardProductProps> = ({ infos }) => {

    const { title, thumbnail, price } = infos;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => {
        setCartItems([...cartItems, infos])
        toast.success('Produto adicionado ao carrinho!', {
            icon:<BsFillCartCheckFill />,
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    return (

        <section 
        className="product_card"
        onClick={handleAddCart}
        >
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="card_image" />
            <div className="card_infos">
                <h2 className="card_price">{priceCurrency(price)}</h2>
                <h2 className="card_title">{title}</h2>
            </div>
            <button type="button"
                className="button_card"
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill />

            </button>


        </section>
    );
}

export default CardProduct;

CardProduct.propTypes = {
    infos: propTypes.shape({
        title: propTypes.string.isRequired,
        thumbnail: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
    }).isRequired,
};
/*replace(/\w\.jpg/gi, "W.jpg") esse regex é incrivel! */