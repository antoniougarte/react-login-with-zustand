import { Navigate } from "react-router-dom"
import { Menu } from "../components/Menu"
export const Home = () => {
  if (!localStorage.getItem("tokenAuth")) return <Navigate to="/login" />
  return (
    <>
      <Menu />
    </>
  )
}
