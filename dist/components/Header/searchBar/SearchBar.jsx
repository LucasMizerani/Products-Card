"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bs_1 = require("react-icons/bs");
require("./SearchBar.css");
const react_1 = require("react");
const fetchProducts_1 = __importDefault(require("../../../Api/fetchProducts"));
const ContextApp_1 = __importDefault(require("../../../context/ContextApp"));
const react_2 = __importDefault(require("react"));
const SearchBar = () => {
    const { setProducts, setLoading } = (0, react_1.useContext)(ContextApp_1.default);
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    const handleSearch = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        const products = yield (0, fetchProducts_1.default)(searchValue);
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    });
    return (<form className='search_bar' onSubmit={handleSearch}>
            <input type='search' value={searchValue} placeholder='Buscar Produtos' className='search_input' onChange={({ target }) => setSearchValue(target.value)} required>

            </input>

            <button type='submit' className='search_button'>
                <bs_1.BsSearch />
            </button>
        </form>);
};
exports.default = SearchBar;
