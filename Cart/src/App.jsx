import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/cart.jsx";
function App() {


  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shoppingCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 99.99,
    },

    {
      id: 2,
      name: "SmartWatch Elite",
      price: 199.99,
    },

    {
      id: 3,
      name: "Premium Bluetooth Speaker",
      price: 79.99,
    },
    {
      id: 4,
      name: "Ergonomic Laptop Stand",
      price: 29.99,
    },
  ];

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id);
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item,  quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
       
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {/* Cart */}
        <div>
          <div className="lg:col-span-1">
            <Cart
              items={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
