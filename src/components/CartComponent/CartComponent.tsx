import { BsBackspaceFill } from 'react-icons/bs'
import './CartComponent.css'
import priceCurrency from '../Utilits/Currency';
import { useContext } from 'react';
import AppContext from '../../context/ContextApp';
import { toast } from 'react-toastify';

interface ProductInfo {
    id: any;
    thumbnail: string;
    title: string;
    price: number;
}

interface CartComponentProps {
    infos: ProductInfo;
}

const CartComponent: React.FC<CartComponentProps> = ({ infos }) => {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = infos;

    const handleRemove = () => {

        const updatedItens = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItens);
        toast.error('Item removido do seu carrinho', {
            position: "top-right",
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
        <section className="cart_itens">
            <img
                src={thumbnail}
                alt="Imagem do produto"
                className="cart_item_image">

            </img>
            <div className="cart_item_content">

                <h3 className="cart_title">{title}</h3>
                <h3 className="cart_price">{priceCurrency(price)}</h3>
                <button
                    type="button"
                    className="remove_button"
                    onClick={handleRemove}
                >
                    <BsBackspaceFill />
                </button>

            </div>

        </section>
    );
}

export default CartComponent;