"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ContextApp_1 = __importDefault(require("./ContextApp"));
const prop_types_1 = __importDefault(require("prop-types"));
const Provider = ({ children }) => {
    const [products, setProducts] = (0, react_1.useState)([]);
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [cartVisible, setCartVisible] = (0, react_1.useState)(false);
    const [displayConfirm, setDisplayConfirm] = (0, react_1.useState)(false);
    const [selectedProduct, setSelectedProduct] = (0, react_1.useState)(null);
    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        cartVisible,
        setCartVisible,
        displayConfirm,
        setDisplayConfirm,
        selectedProduct,
        setSelectedProduct
    };
    return (<ContextApp_1.default.Provider value={value}>
            {children}
        </ContextApp_1.default.Provider>);
};
exports.default = Provider;
Provider.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
