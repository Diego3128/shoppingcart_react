import {
  ShoppingBagIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import { Dispatch, useMemo, useState } from "react";
import type { CartItem } from "../types";
import type { CartActions } from "../reducers/cartReducer";

type CartProps = {
  cartItems: CartItem[];
  cartDispatch: Dispatch<CartActions>;
};

export default function Cart({ cartItems, cartDispatch }: CartProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isCartEmpty = useMemo(() => cartItems.length < 1, [cartItems]);

  const numItems = useMemo(() => cartItems.length, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="relative mx-auto w-auto max-w-80 md:mx-0  md:w-80">
      <div className="flex justify-center md:justify-end">
        <button className=" relative">
          <ShoppingBagIcon
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="size-8 text-cyan-400 mx-auto hover:cursor-pointer md:mr-0"
          />

          {!isCartEmpty ? (
            <span className="absolute -top-1.5 -left-3.5 h-5 w-5 bg-cyan-300 rounded-full flex items-center justify-center font-black text-[10px]">
              {numItems}
            </span>
          ) : (
            ""
          )}
        </button>
      </div>

      {isHovered ? (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" absolute w-full left-0 md:-left-2.5 top-5  pt-3.5  z-10"
        >
          <div className=" border border-cyan-200 overflow-hidden min-h-52 bg-gray-900 rounded-md">
            {isCartEmpty ? (
              <p className="absolute inset-0 flex justify-center items-center text-gray-400 capitalize text-center  font-black">
                cart is empty
              </p>
            ) : (
              <>
                <ul className="w-full max-h-96 overflow-y-auto">
                  {cartItems.map((cartItem) => (
                    <li
                      key={cartItem.id}
                      className="p-1 md:p-2.5 hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <img
                          src={`/img/${cartItem.image}.png`}
                          alt={cartItem.name}
                          className="w-16 h-16 object-contain rounded-md border border-gray-700"
                        />

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="min-[360px]:flex flex-wrap justify-between items-center">
                            <h3 className="text-white font-medium truncate">
                              {cartItem.name}
                            </h3>
                            <p className="text-cyan-400 font-bold">
                              ${(cartItem.price * cartItem.quantity).toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 mt-2">
                            <button
                              onClick={() =>
                                cartDispatch({
                                  type: "decrement-quantity",
                                  payload: { cartItemId: cartItem.id },
                                })
                              }
                              className="hover:cursor-pointer p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              <MinusCircleIcon className="size-4" />
                            </button>
                            <span className="text-cyan-400  font-medium">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() =>
                                cartDispatch({
                                  type: "increment-quantity",
                                  payload: { cartItemId: cartItem.id },
                                })
                              }
                              className="hover:cursor-pointer p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              <PlusCircleIcon className="size-4" />
                            </button>
                            <button
                              onClick={() =>
                                cartDispatch({
                                  type: "delete-from-cart",
                                  payload: { cartItemId: cartItem.id },
                                })
                              }
                              className="p-1 text-red-400 hover:text-red-300 transition-colors ml-auto"
                            >
                              <TrashIcon className="size-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-gray-800 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Total:</span>
                    <span className="text-cyan-400 font-bold text-lg">
                      ${cartTotal}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => cartDispatch({ type: "clear-cart" })}
                      className="hover:cursor-pointer w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-cyan-500 transition-colors font-medium"
                    >
                      Order
                    </button>

                    <button
                      onClick={() => cartDispatch({ type: "clear-cart" })}
                      className="hover:cursor-pointer w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors font-medium"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
