import { useState } from "react";
import AppContext from "./ContextApp";
import propTypes from 'prop-types';

interface ProviderProps {
    children: React.ReactNode;
}


const Provider: React.FC<ProviderProps> = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartVisible, setCartVisible] = useState(false);
    const [displayConfirm, setDisplayConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

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
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.node.isRequired,
};