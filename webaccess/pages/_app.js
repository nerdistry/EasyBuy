import '../styles/globals.css'
//Internal Import
import { NavBar, Footer } from '../components/componentIndex';
import { AuthContextProvider } from "../context/AuthContext";



const EasyBuy = ({Component, pageProps}) => (
    <div>
    <AuthContextProvider>
      <NavBar />
    <Component {...pageProps} />
    <Footer />
</AuthContextProvider>
   
  </div>
);

export default EasyBuy;