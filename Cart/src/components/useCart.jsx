import React from 'react'

function useCart() {
    const [items, setItems] = React.useState([])

    const addToCart = (product) => {
        setItems((currentItems) => {
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
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item,
            ),
        );
    };

    const removeItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id));
    };

  return (
    <div>useCart</div>
  )
}

export default useCart