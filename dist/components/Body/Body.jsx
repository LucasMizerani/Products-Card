"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../Cart/Cart"));
const Produts_1 = __importDefault(require("../Produts/Produts"));
require("./Body.css");
const BodyContent = () => {
    return (<div className='conteiner_products'>
      <Produts_1.default />
      <Cart_1.default />
      </div>);
};
exports.default = BodyContent;
