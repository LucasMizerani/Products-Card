"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CartComponent_1 = __importDefault(require("../CartComponent/CartComponent"));
require("./Cart.css");
const ContextApp_1 = __importDefault(require("../../context/ContextApp"));
const Currency_1 = __importDefault(require("../Utilits/Currency"));
const bs_1 = require("react-icons/bs");
const Cart = () => {
    const { cartItems, cartVisible, setCartItems, setDisplayConfirm, displayConfirm } = (0, react_1.useContext)(ContextApp_1.default);
    const handleRemoveAll = () => {
        return setCartItems([]);
    };
    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);
    const handleConfirm = () => {
        setDisplayConfirm(true);
        setCartItems([]);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };
    return (<section className={`cart ${cartVisible ? 'cart_active' : ''}`}>

            <div className="itens_cart">
                {cartItems.map((cartItem) => <CartComponent_1.default key={cartItem.id} infos={cartItem}/>)}
            </div>

            <div className="resume_cart">{(0, Currency_1.default)(totalPrice)}
                <button type="button" className="remove_all_button" onClick={handleRemoveAll}>
                    <bs_1.BsFillCartXFill />
                </button>
                <button type="button" className="confirm_button" onClick={handleConfirm}>
                    Confirmar compra <bs_1.BsFillCreditCardFill />
                </button>
                {displayConfirm && (<div className="confirm">

                       TESTE DE COMPRA
                    </div>)}
            </div>
        </section>);
};
exports.default = Cart;
