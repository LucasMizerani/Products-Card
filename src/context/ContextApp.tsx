import { createContext } from "react";

interface AppContextProps {
    cartItems: Array<any>;
    cartVisible: boolean;
    setCartVisible: any;
    setLoading: any;
    setProducts: any;
    products: Array<any>;
    loading: boolean;
    setCartItems: any;
    setDisplayConfirm: any;
    displayConfirm: any;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;