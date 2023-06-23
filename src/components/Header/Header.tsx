import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import SearchBar from './searchBar/SearchBar';
import { useContext } from 'react';
import AppContext from '../../context/ContextApp';
import React from 'react';
import { GrReactjs } from 'react-icons/gr'

const HeaderPage: React.FC = () => {

    const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);


    return (
        <header className="header_page">

            <div><GrReactjs className="icon_header" /> <h1 className='title_header'>meep</h1>
                <SearchBar />
                <button type="button"
                    className="shopp_cart"
                    onClick={() => setCartVisible(!cartVisible)}
                >
                    <FaShoppingCart />
                    {cartItems.length > 0 && <span className='cart_status'>{cartItems.length}</span>}
                </button>
            </div>

        </header>
    );
}

export default HeaderPage;

