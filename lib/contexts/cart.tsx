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
  removeItem: (item: CartItem) => void
  isCartOpen: boolean
  toggleCart: () => void
  totalQuantity: number
  totalPrice: number
}

interface CartProvider {
  children: ReactNode
}

const defaultValues: CartContextType = {
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  isCartOpen: false,
  toggleCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
}

interface CartItem {
  slug: string
  quantity: number
  title: string
  price: number
  image: any
}

export const CartContext = createContext<CartContextType>(defaultValues)

export const CartProvider: FunctionComponent<CartProvider> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [totalQuantity, setTotalQuantity] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const addItem = (item: CartItem, quantity: number): void => {
    // Increase total price
    setTotalPrice(totalPrice + item.price * quantity)

    // Increase total quantity
    setTotalQuantity((previousState) => previousState + quantity)

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

  const removeItem = (item: CartItem): void => {
    // Decrease total price
    setTotalPrice(totalPrice - item.price)

    // Decrease total quantity
    setTotalQuantity((previousState) => previousState - 1)

    // Check if item already exists in cart
    const itemExists = cartItems.find((cartItem) => cartItem.slug === item.slug)

    if (itemExists?.quantity === 1) {
      setCartItems((previousState) =>
        previousState.filter((cartItem) => cartItem.slug !== item.slug)
      )
    } else if (itemExists) {
      // Decrease quantity
      setCartItems((previousState) =>
        previousState.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : cartItem
        )
      )
    }
  }

  const toggleCart = (): void => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        isCartOpen,
        toggleCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
