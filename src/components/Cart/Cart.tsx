import { useContext } from 'react';
import CartComponent from '../CartComponent/CartComponent';
import './Cart.css'
import AppContext from '../../context/ContextApp';
import priceCurrency from '../Utilits/Currency';
import { BsFillCartXFill, BsCashCoin, BsCart } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi'
import { toast } from 'react-toastify';
import { ImSad2 } from 'react-icons/im'

const Cart: React.FC = () => {

    const { cartItems, cartVisible, setCartItems, setDisplayConfirm, displayConfirm } = useContext(AppContext);

    const handleRemoveAll = (): void => {

        if (cartItems.length === 0) {
            toast.error('O carrinho já está vazio!', {
                icon:<BsCart />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              return;
            }
        toast.error('Itens removidos do seu carrinho', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return setCartItems([]);
    };

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);

    const handleConfirm = (): void => {

        if (cartItems.length === 0) {

            toast.warn('Carrinho vazio! Não é possível confirmar a compra.', {
                icon: <ImSad2 />,
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }); return
        }
        setDisplayConfirm(true);
        setCartItems([]);
        toast.success('COMPRA FINALIZADA COM SUCESSO', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <section className={`cart ${cartVisible ? 'cart_active' : ''}`}>

            <div className="itens_cart">
                {cartItems.map((cartItem) => <CartComponent key={cartItem.id} infos={cartItem} />)}
            </div>

            <div className="resume_cart">{priceCurrency(totalPrice)}
                <button
                    type="button"
                    className="remove_all_button"
                    onClick={handleRemoveAll}
                >
                    <BsFillCartXFill />
                </button>
                <button
                    type="button"
                    className="confirm_button"
                    onClick={handleConfirm}
                >
                    CONFIRMAR COMPRA <BsCashCoin />
                </button>
                {displayConfirm && (
                    <div className="confirm">
                        <GiConfirmed className='confirm_icon' />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Cart;