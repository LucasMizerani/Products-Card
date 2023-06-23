"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Header.css");
const fa_1 = require("react-icons/fa");
const fa_2 = require("react-icons/fa");
const SearchBar_1 = __importDefault(require("./searchBar/SearchBar"));
const react_1 = require("react");
const ContextApp_1 = __importDefault(require("../../context/ContextApp"));
const react_2 = __importDefault(require("react"));
const HeaderPage = () => {
    const { cartItems, cartVisible, setCartVisible } = (0, react_1.useContext)(ContextApp_1.default);
    return (<header className="header_page">

            <div><fa_1.FaShopify className="icon_header"/> <h1 className='title_header'>MEEP</h1>
                <SearchBar_1.default />
                <button type="button" className="shopp_cart" onClick={() => setCartVisible(!cartVisible)}>
                    <fa_2.FaShoppingCart />
                    {cartItems.length > 0 && <span className='cart_status'>{cartItems.length}</span>}
                </button>
            </div>

        </header>);
};
exports.default = HeaderPage;
