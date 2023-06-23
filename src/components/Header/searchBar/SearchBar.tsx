import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import { useState, useContext } from 'react';
import fetchProducts from '../../../Api/fetchProducts';
import AppContext from '../../../context/ContextApp';
import React from 'react'



const SearchBar: React.FC = () => {

    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        const products = await fetchProducts(searchValue);
        setProducts(products)
        setLoading(false)
        setSearchValue('');
    };

    return (
        <form className='search_bar' onSubmit={handleSearch}>
            <input type='search'
                value={searchValue}
                placeholder='Buscar Produtos'
                className='search_input'
                onChange={({ target }) => setSearchValue(target.value)}
                required>

            </input>

            <button type='submit' className='search_button'>
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;