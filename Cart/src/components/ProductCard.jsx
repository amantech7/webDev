import React from 'react'


function ProductCard({ title, price, onAddToCart }) {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-5 flex flex-col gap-4 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-900/20">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="text-2xl font-bold text-emerald-400">${price.toFixed(2)}</div>

      <button
        onClick={onAddToCart}
        className="mt-auto bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard