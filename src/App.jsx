import './scrollbar.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <div className="relative bg-body overflow-hidden">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
