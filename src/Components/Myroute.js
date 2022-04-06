import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import About from './About';
import Shop from './Shop';
import Menu from './Templates/Menu';
function Myroute() {
    return (
        <>
        <Menu />
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
        </Routes>  
        </>
    )}
export default Myroute;
