import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className="text-slate-900 py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-tight">
            Cart
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Your cart is empty.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="text-slate-900 py-16 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-tight">
          Cart
        </h1>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center rounded-lg border bg-white p-4 shadow"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>

                <p className="text-gray-500">${item.price}</p>
              </div>

              <div className="flex items-center gap-12 ml-auto">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-gray-300 px-3 py-1 cursor-pointer"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded bg-gray-300 px-3 py-1 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
