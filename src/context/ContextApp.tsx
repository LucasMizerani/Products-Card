import { createContext } from "react";

interface ProductsArray {
    id: string;
    price: number;
    title: string;
    thumbnail: string;
};



interface AppContextProps {
    cartItems: Array<ProductsArray>;
    cartVisible: boolean;
    setCartVisible: any;
    setLoading: any;
    setProducts: any;
    products: Array<ProductsArray>;
    loading: boolean;
    setCartItems: any;
    setDisplayConfirm: any;
    displayConfirm: any;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;