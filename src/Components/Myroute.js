import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import About from './About';
import Shop from './Shop';
import Menu from './Templates/Menu';
import Footer from './Templates/Footer';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import Contact from './Contact';
import { isBrowser } from 'react-device-detect';
import Mobilemenu from './Mobilemenu';

function Myroute() {
    return (
        <>
        {isBrowser? (<Menu />): (<Mobilemenu />)}
            {/* <Menu /> */}
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="/product-detail" element={<ProductDetail />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}
export default Myroute;
