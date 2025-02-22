import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Cart() {
  const [isHovered, setIsHovered] = useState(false);

  const isCartEmpty = false;

  return (
    <div className="relative mx-auto w-auto max-w-2xs md:mx-0 md:w-2xs">
      <ShoppingBagIcon
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="size-8 text-cyan-400 mx-auto hover:cursor-pointer md:mr-0"
      />

      {isHovered ? (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute w-full left-0 md:-left-2.5 top-5  pt-2.5 bg-white"
        >
          <div className="flex border  min-h-52 ">
            {isCartEmpty ? (
              <p>the cart is empty</p>
            ) : (
              <ul>
                <li>cart items</li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
