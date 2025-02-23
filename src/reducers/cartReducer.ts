import type { CartItem, Item } from "../types/index";

export type CartActions =
  | {
      type: "add-to-cart";
      payload: { item: Item };
    }
  | {
      type: "delete-from-cart";
      payload: { cartItemId: CartItem["id"] };
    }
  | {
      type: "increment-quantity";
      payload: { cartItemId: CartItem["id"] };
    }
  | {
      type: "decrement-quantity";
      payload: { cartItemId: CartItem["id"] };
    }
  | { type: "clear-cart" };

type CartState = {
  cartItems: CartItem[];
};

const getCartItems = (): CartItem[] => {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
};

export const initialState: CartState = {
  cartItems: getCartItems(),
};

const MAX_CART_ITEMS = 5;
const MIN_CART_ITEMS = 1;

export const cartReducer = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case "add-to-cart": {
      let updatedCart = [...state.cartItems];
      // checks if the item is already in the cart
      const exists = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      // add only if it doesn't exist
      if (!exists) {
        const newCartItem: CartItem = { ...action.payload.item, quantity: 1 };
        updatedCart = [...updatedCart, newCartItem];
      }

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "delete-from-cart": {
      let updatedCart: CartItem[] = [];

      updatedCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "increment-quantity": {
      let updatedCart: CartItem[] = [];

      updatedCart = state.cartItems.map((cartItem) => {
        return cartItem.id === action.payload.cartItemId
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity < MAX_CART_ITEMS
                  ? cartItem.quantity + 1
                  : cartItem.quantity,
            }
          : cartItem;
      });
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "decrement-quantity": {
      let updatedCart: CartItem[] = [];

      updatedCart = state.cartItems.map((cartItem) => {
        return cartItem.id === action.payload.cartItemId
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity > MIN_CART_ITEMS
                  ? cartItem.quantity - 1
                  : cartItem.quantity,
            }
          : cartItem;
      });

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "clear-cart": {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};
