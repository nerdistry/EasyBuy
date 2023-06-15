import '../styles/globals.css'
//Internal Import
import { NavBar } from '../components/componentIndex';


const EasyBuy = ({Component, pageProps}) => (
<div>
    <NavBar />
    <Component {...pageProps} />
</div>
);

export default EasyBuy;