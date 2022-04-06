import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Myroute from './Components/Myroute';
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Templates/Footer";
function App() {
  return (
    
    <div className="bz-app">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Myroute />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
