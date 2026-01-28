export default function CartItem({ name, price, quantity, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between bg-gray-800/40 p-4 rounded-lg border border-gray-700">
      <div className="flex-1">
        <h4 className="font-medium text-white">{name}</h4>
        <div className="text-emerald-400 font-semibold mt-0.5">${price.toFixed(2)}</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-900 rounded-full">
          <button
            onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            −
          </button>
          <span className="w-10 text-center font-medium">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            +
          </button>
        </div>

        <button
          onClick={onRemove}
          className="text-red-400 hover:text-red-300 transition-colors p-2"
          title="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}