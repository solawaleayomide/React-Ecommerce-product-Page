import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
import avatar from "/assets/image-avatar.png";
import { useState } from "react";
import Cart from "./cart";
import { useCart } from "../context/CartContext";

function Header() {
  const { quantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="relative flex justify-between border-b-2 pb-3">
      <div className="flex flex-row items-center gap-12">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-5 ">
            <li>
              <a href="/">Collection</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-row items-center  gap-5">
        <div
          onClick={() => setCartOpen(!cartOpen)}
          className="flex items-center gap-3"
        >
          <img src={cart} alt="cart" />
          <div className="flex-1 text-orange-500 font-bold">({quantity})</div>

          <div>{cartOpen && <Cart />}</div>
        </div>

        <div className="w-8">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
