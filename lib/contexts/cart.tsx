import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react"

type CartContextType = {
  cartItems: CartItem[]
  addItem: (item: CartItem, quantity: number) => void
}

interface CartProvider {
  children: ReactNode
}

const defaultValues: CartContextType = {
  cartItems: [],
  addItem: () => {},
}

interface CartItem {
  slug: string
  quantity: number
  title: string
  price: number
}

export const CartContext = createContext<CartContextType>(defaultValues)

export const CartProvider: FunctionComponent<CartProvider> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem, quantity: number): void => {
    // Check if item already exists in cart
    const itemExists = cartItems.find((cartItem) => cartItem.slug === item.slug)

    if (itemExists) {
      // Increase quantity
      setCartItems((previousState) =>
        previousState.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...itemExists, quantity: itemExists.quantity + quantity }
            : cartItem
        )
      )
    } else {
      // Add new item
      setCartItems((previousState) => [...previousState, { ...item, quantity }])
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
