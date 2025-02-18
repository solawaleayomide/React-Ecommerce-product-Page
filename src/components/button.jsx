import { useCart } from "../context/CartContext";

function Button() {
  const {
    quantity,
    handleIncreaseBtn,
    handleDecreaseBtn,
    handleAddtoCart,
    items,
  } = useCart();

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="lg:flex-1">
        <div className="flex flex-row items-center justify-between gap-7 bg-slate-200 py-3 px-5 rounded-md  ">
          <div onClick={handleDecreaseBtn}>
            <img src="/assets/icon-minus.svg" alt="minus" />
          </div>

          <span className="font-semibold">{quantity}</span>

          <div onClick={handleIncreaseBtn}>
            <img src="/assets/icon-plus.svg" alt="plus" />
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center  justify-center gap-3 bg-orange-500 py-3 px-16 rounded-md"
        onClick={() => handleAddtoCart(items)}
      >
        <img src="/assets/icon-cart.svg" />
        <span className="font-semibold">Add to cart</span>
      </div>
    </div>
  );
}

export default Button;
