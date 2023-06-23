"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bs_1 = require("react-icons/bs");
require("./CartComponent.css");
const Currency_1 = __importDefault(require("../Utilits/Currency"));
const react_1 = require("react");
const ContextApp_1 = __importDefault(require("../../context/ContextApp"));
const CartComponent = ({ infos }) => {
    const { cartItems, setCartItems } = (0, react_1.useContext)(ContextApp_1.default);
    const { id, thumbnail, title, price } = infos;
    const handleRemove = () => {
        const updatedItens = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItens);
    };
    return (<section className="cart_itens">
            <img src={thumbnail} alt="Imagem do produto" className="cart_item_image">

            </img>
            <div className="cart_item_content">

                <h3 className="cart_title">{title}</h3>
                <h3 className="cart_price">{(0, Currency_1.default)(price)}</h3>
                <button type="button" className="remove_button" onClick={handleRemove}>
                    <bs_1.BsFillCartDashFill />
                </button>

            </div>
           
        </section>);
};
exports.default = CartComponent;
