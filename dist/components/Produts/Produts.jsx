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
require("./Produts.css");
const fetchProducts_1 = __importDefault(require("../../Api/fetchProducts"));
const CardProduct_1 = __importDefault(require("../CardProduct/CardProduct"));
const Loading_1 = __importDefault(require("../Loading/Loading"));
const ContextApp_1 = __importDefault(require("../../context/ContextApp"));
const Products = () => {
    const { products, setProducts, loading, setLoading } = (0, react_1.useContext)(ContextApp_1.default);
    (0, react_1.useEffect)(() => {
        (0, fetchProducts_1.default)('computador gamer').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);
    return ((loading ? <Loading_1.default />
        :
            <section className="products_section container">
                {products.map((product) => <CardProduct_1.default key={product.id} infos={product}/>)}


            </section>));
};
exports.default = Products;
