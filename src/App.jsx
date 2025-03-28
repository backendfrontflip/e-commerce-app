import { useState } from "react";
import data from "./data.json";
import { FaMinus, FaPlus, FaCartPlus } from "react-icons/fa";
import Header from "./components/Header.jsx";
import CartedItems from "./components/CartedItems";

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const addToCart = () => {
    if (count > 0) {
      setCartItems((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === products[value].id);

        if (existingItem) {
          return prevCart.map((item) =>
            item.id === products[value].id
              ? { ...item, quantity: item.quantity + count }
              : item
          );
        } else {
          return [...prevCart, { ...products[value], quantity: count }];
        }
      });

      setCount(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto px-4">
        <Header toggleCart={toggleCart} />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
          <article className="flex flex-col items-center">
            {products.length > 0 && (
              <img src={products[value].mainImage} alt="Main Product" className="mx-auto mt-6 w-72 rounded-lg" />
            )}
            <ul className="flex justify-center gap-4 mt-3 flex-wrap">
              {products.map((item, index) => (
                <li key={item.id} onClick={() => setValue(index)}>
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail of ${item.name}`}
                    className="w-16 cursor-pointer hover:opacity-75 border-2 border-transparent hover:border-orange-500 rounded-md"
                  />
                </li>
              ))}
            </ul>
          </article>
          <main className="text-center lg:text-left p-4">
            <p className="uppercase mb-4 text-gray-500 font-bold mt-6">Sneaker Company</p>
            <h2 className="text-2xl lg:text-3xl font-bold">Fall Limited Edition <br /> Sneakers</h2>
            <p className="text-gray-600 mt-4">These low-profile sneakers are your perfect casual wear companion.</p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-3xl font-bold">$125.00</span>
              <span className="text-lg text-white bg-black px-2 py-1 rounded">50%</span>
            </div>
            <p className="text-gray-400 line-through text-xl font-bold mt-3">$250.00</p>
            <div className="flex flex-col items-center lg:flex-row mt-6 gap-6 w-full">
              <div className="flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-lg">
                <button onClick={decreaseCount} className="text-orange-500 p-2 bg-transparent rounded-md hover:bg-gray-300">
                  <FaMinus />
                </button>
                <p className="text-xl font-bold">{count}</p>
                <button onClick={increaseCount} className="text-orange-500 p-2 bg-transparent rounded-md hover:bg-gray-300">
                  <FaPlus />
                </button>
              </div>
              <button onClick={addToCart} className="flex items-center bg-orange-500 gap-4 text-black px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                <FaCartPlus />
                Add to cart
              </button>
            </div>
          </main>
        </section>
        {showCart && <CartedItems cartItems={cartItems} setShowCart={setShowCart} />}
      </div>
    </div>
  );
}

export default App;
