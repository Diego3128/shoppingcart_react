import { Dispatch } from "react";
import type { Item as ItemType } from "../types";
import { StarIcon, PlusIcon } from "@heroicons/react/16/solid";
import { CartActions } from "../reducers/cartReducer";

type ItemCardProps = {
  item: ItemType;
  cartDispatch: Dispatch<CartActions>;
};

export const ItemCard = ({ item, cartDispatch }: ItemCardProps) => {
  return (
    <div className="max-w-sm bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] border border-gray-700">
      {/* Image Container */}
      <div className="relative group">
        <img
          src={`/img/${item.image}.png`}
          alt={item.name}
          className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1 line-clamp-1">
              {item.name}
            </h3>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="fill-cyan-400 text-cyan-400 size-4"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">(4.8)</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-cyan-400">
            ${item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 line-clamp-2">{item.description}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() =>
            cartDispatch({ type: "add-to-cart", payload: { item } })
          }
          className="hover:cursor-pointer w-full bg-cyan-500 text-gray-900 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-cyan-400 active:transform active:scale-[0.98] transition-all duration-200 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
        >
          <PlusIcon className="size-6" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
