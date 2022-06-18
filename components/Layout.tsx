import { FunctionComponent } from "react"
import { Navbar } from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
