import { useState } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const increaseCC = () => setCartCount((prevCC) => prevCC + 1);

  return (
    <div>
      <Announcement />
      <Navbar cartCount={cartCount} />
      <Slider />
      <Categories />
      <Products increaseCC={increaseCC} />
      <Newsletter />
      <Footer />
    </div>
  );
}
