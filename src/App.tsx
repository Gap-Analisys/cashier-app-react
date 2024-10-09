import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import HeaderNav from "./components/HeaderNav";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import TransaksiAdd from "./pages/TransaksiAdd";
import TransaksiHistory from "./pages/TransaksiHistory";
import Data from "./pages/Data";
import CustomerList from "./pages/Customers";
import ProductList from "./pages/Products";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <div className="relative flex items-center justify-center">
        <div className="absolute bg-black opacity-10 inset-0 z-0" />
        <div className="w-[400px] min-h-screen overflow-y-scroll space-y-3 bg-white z-10">
          <HeaderNav />
          <div className="px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/transaksi-add" element={<TransaksiAdd />} />
              <Route path="/transaksi-history" element={<TransaksiHistory />} />
              <Route path="/data" element={<Data />} />
              <Route path="/data/customers" element={<CustomerList />} />
              <Route path="/data/products" element={<ProductList />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}
