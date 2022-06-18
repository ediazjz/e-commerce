import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react"

type QuantityContextType = {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

interface QuantityProvider {
  children: ReactNode
}

const defaultValues: QuantityContextType = {
  quantity: 1,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
}

export const QuantityContext = createContext<QuantityContextType>(defaultValues)

export const QuantityProvider: FunctionComponent<QuantityProvider> = ({
  children,
}) => {
  const [quantity, setQuantity] = useState<number>(1)

  const increaseQuantity = (): void =>
    setQuantity((previousState) => previousState + 1)

  const decreaseQuantity = (): void => {
    if (quantity - 1 < 1) return
    setQuantity((previousState) => previousState - 1)
  }

  return (
    <QuantityContext.Provider
      value={{ quantity, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  )
}

export const useQuantity = () => useContext(QuantityContext)
