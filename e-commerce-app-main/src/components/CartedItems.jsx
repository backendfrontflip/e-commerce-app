import React from "react";

const CartedItems = ({ cartItems, setShowCart }) => {
  return (
    <div className="absolute top-16 right-8 bg-white p-4 rounded-lg shadow-lg w-64">
      <h2 className="text-lg font-bold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.thumbnail}
                alt={`Thumbnail of ${item.name}`}
                className="w-12 h-12 rounded-lg border border-gray-300"
              />
              <div>
                <p className="text-sm">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-center">
        <button
          className="border border-b p-2 rounded-full w-full mt-2 bg-orange-500 font-bold"
          onClick={() => setShowCart(false)} // Hide the cart
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartedItems;
