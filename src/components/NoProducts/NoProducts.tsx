import './NoProducts.css'
import { FaSadTear } from 'react-icons/fa'

const NoProducts = () => {
    return ( 
        <div className='div_noproducts'>
           <h1 className="title_noproducts"><FaSadTear className='icon' /> Nenhum produto encontrado</h1>

           <p>Tente realizar outra busca com um nome diferente.</p> 
        </div>
     );
}
 
export default NoProducts;