import Body from "./components/body";
import Header from "./components/header";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="max-w-7xl px-5 md:px` mx-auto mt-5 flex flex-col gap-10">
      <CartProvider>
        <Header />
        <Body />
      </CartProvider>
    </div>
  );
}

export default App;
