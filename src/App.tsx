import './App.css';
import BodyContent from './components/Body/Body';
import FooterPage from './components/Footer/Footer';
import HeaderPage from './components/Header/Header';
import Provider from './context/Provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className='App'>
    <Provider>
        <HeaderPage />
        <BodyContent />
        <FooterPage />
        <ToastContainer />
      </Provider>
      </div>
  );
}

export default App;
