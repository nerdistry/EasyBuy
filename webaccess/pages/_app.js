import '../styles/globals.css'
//Internal Import
import { NavBar, Footer } from '../components/componentIndex';



const EasyBuy = ({Component, pageProps}) => (
    <div>
      <NavBar />
    <Component {...pageProps} />
    <Footer />
   
  </div>
);

export default EasyBuy;