"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Body_1 = __importDefault(require("./components/Body/Body"));
const Footer_1 = __importDefault(require("./components/Footer/Footer"));
const Header_1 = __importDefault(require("./components/Header/Header"));
const Provider_1 = __importDefault(require("./context/Provider"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function App() {
    return (<div className='App'>
    <Provider_1.default>
        <Header_1.default />
        
        <Body_1.default />
        
        <Footer_1.default />
        <react_toastify_1.ToastContainer />
      </Provider_1.default>
      </div>);
}
exports.default = App;
