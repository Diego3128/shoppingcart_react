import { Dispatch } from "react";
import type { CartItem } from "../types";
import Cart from "./Cart";
import type { CartActions } from "../reducers/cartReducer";

type HeaderProps = {
  cartItems: CartItem[];
  cartDispatch: Dispatch<CartActions>;
};

export default function Header({ cartItems, cartDispatch }: HeaderProps) {
  return (
    <>
      <header
        className="md:sticky top-0 z-20 bg-slate-800 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/img/header.jpg')" }}
      >
        <div className="md:flex md:justify-between md:items-center container mx-auto p-8 ">
          <h1 className="mb-2.5 md:mb-0 font-black text-xl text-sky-100 uppercase text-center md:text-left">
            <span className="text-sky-300 text-2xl md:text-4xl">guitar</span>
            <span className="bg-[#ff9300] rounded-md p-0.5 text-[14px]">
              hub
            </span>
          </h1>

          <Cart cartItems={cartItems} cartDispatch={cartDispatch} />
        </div>
      </header>
    </>
  );
}
