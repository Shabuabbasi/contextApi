import "./App.css";
import Logo from "./assets/logo.png";
import Cart from "./assets/cart.svg";
import HeroSection from "./components/herosection";
import FeatureSection from "./components/featuresection";
import Products from "./components/products";
import Banner from "./components/banner";
import NewArrivals from "./components/NewArrivals";
import Smallbanner from "./components/smallbanner";
import Copyright from "./components/Copyright";
import Footer from "./components/footer"
import Items from "./components/items";


function Navbar() {
  return (
    <div className="flex justify-between items-center sm:bg-slate-300 md:bg-slate-100 lg:bg-amber-100 bg-slate-500 p-4">
      <img src={Logo} alt="Logo" width={200} />
      <ul className="flex gap-6 font-normal text-xl">
        <li className="border-b-2 border-b-slate-700 hover:text-teal-600">
          Home
        </li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
        <li className="ml-6 relative hover:scale-[1.5]">
          <a href="/">
            <img src={Cart} alt="cart" width={30} />
          </a>
          <span className="bg-red-600 text-white font-bold px-[6px] py-[2px] text-sm rounded-full absolute -top-5 -right-3">
            2
          </span>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Products />
      <Items />
      <Banner />
      <NewArrivals />
      <Smallbanner />
      <Footer />
      <Copyright />
    </div>
  );
}
export default App;
