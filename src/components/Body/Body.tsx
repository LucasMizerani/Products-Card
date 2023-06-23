import Cart from '../Cart/Cart';
import Products from '../Produts/Produts';
import './Body.css'


const BodyContent: React.FC = () => {
  return (
    <div className='conteiner_products'>
      <Products />
      <Cart />
    </div>
  );
}

export default BodyContent;