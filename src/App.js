import "./App.css";
import Home from "./page/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Productdetails from "./page/Productdetails";
import Address from "./page/Address";
import Ordersummary from "./page/Ordersummary";
import Payments from "./page/Payments";
import Termsofuse from "./page/Termsofuse";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Paymentoptions from "./page/Paymentoptions";
import ScrollToTop from "./componets/ScrollToTop";
function App() {
  const Footer = () => {
    return (
      <>

      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>     
          <Route exact path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<Productdetails />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order-summary" element={<Ordersummary />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/payment-options" element={<Paymentoptions />} />
          <Route path="/terms-of-use" element={<Termsofuse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
