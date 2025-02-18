import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import deleteBtn from "/assets/icon-delete.svg";

function Cart() {
  const { cartItem, handleRemoveFromCart, handleResetBtn } = useCart();
  const [cartStatus, setCartStatus] = useState(false);

  function checkCart() {
    if (cartItem.length === 0) {
      return (
        <div className="text-center font-semibold pb-7">Your cart is empty</div>
      );
    } else {
      return cartItem.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-row justify-between items-center px-5 md:px-10"
          >
            <div className="flex flex-row items-center gap-5">
              <div className="w-[5rem]">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-slate-600">{item.name}</span>
                <span className="flex flex-row gap-10 text-slate-600">
                  ${item.price} x {item.quantity}
                  <strong className="text-black">${item.totalPrice}</strong>
                </span>
              </div>
            </div>

            <div onClick={() => handleRemoveFromCart(item.id)}>
              <img src={deleteBtn} alt="delete-btn" />
            </div>
          </div>
        );
      });
    }
  }

  useEffect(() => {
    cartItem.length === 0 ? setCartStatus(false) : setCartStatus(true);
  }, [cartItem]);

  return (
    <div
      className="bg-white rounded-2xl shadow-2xl absolute top-20 left-1/2 transform -translate-x-1/2 md:translate-x-[10rem] w-full max-w-sm md:w-[32rem]"
      style={{
        zIndex: 1000,
      }}
    >
      <div className="flex flex-col gap-8">
        <div className="border-b-2 pt-3 pb-5">
          <span className="px-5 md:px-10 font-semibold">Cart</span>
        </div>

        <div>{checkCart()}</div>

        {cartStatus && (
          <div className="px-5 md:px-10 pb-5" onClick={handleResetBtn}>
            <button className="flex flex-row items-center justify-center gap-3 bg-orange-500 py-3 px-16 rounded-md font-semibold w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
