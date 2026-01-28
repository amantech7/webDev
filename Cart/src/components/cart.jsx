import CartItem from "./cartItem.jsx";

export default function Cart({ items, updateQuantity, removeItem }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-fit sticky top-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Your cart is empty</p>
      ) : (
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
      )}

      <div className="border-t border-gray-700 pt-6 mt-6">
        <div className="flex justify-between text-xl mb-6">
          <span>Total:</span>
          <span className="font-bold text-emerald-400">${total.toFixed(2)}</span>
        </div>

        <button
          disabled={items.length === 0}
          className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg shadow-lg disabled:shadow-none"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}