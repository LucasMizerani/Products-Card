"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./CardProduct.css");
const prop_types_1 = __importDefault(require("prop-types"));
const bs_1 = require("react-icons/bs");
const Currency_1 = __importDefault(require("../Utilits/Currency"));
const ContextApp_1 = __importDefault(require("../../context/ContextApp"));
const react_toastify_1 = require("react-toastify");
const CardProduct = ({ infos }) => {
    const { title, thumbnail, price } = infos;
    const { cartItems, setCartItems } = (0, react_1.useContext)(ContextApp_1.default);
    const handleAddCart = () => {
        setCartItems([...cartItems, infos]);
        react_toastify_1.toast.success('Produto adicionado ao carrinho!', {
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
    return (<section className="product_card">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="card_image"/>
            <div className="card_infos">
                <h2 className="card_price">{(0, Currency_1.default)(price)}</h2>
                <h2 className="card_title">{title}</h2>
            </div>
            <button type="button" className="button_card" onClick={handleAddCart}>
                <bs_1.BsFillCartPlusFill />

            </button>


        </section>);
};
exports.default = CardProduct;
CardProduct.propTypes = {
    infos: prop_types_1.default.shape({
        title: prop_types_1.default.string.isRequired,
        thumbnail: prop_types_1.default.string.isRequired,
        price: prop_types_1.default.number.isRequired,
    }).isRequired,
};
/*replace(/\w\.jpg/gi, "W.jpg") esse regex é incrivel! */ 
