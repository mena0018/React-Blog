import { Link } from "react-router-dom"
import "./Navbar.scss"


export default function Navbar() {

  return (
    <nav>
        <ul className='liste-nav'>

            <li className='item-nav'>
              <Link to="/"> ACCUEIL </Link> 
            </li>

            <li className='item-nav'>
              <Link to="/ecrire"> ECRIRE </Link> 
            </li>

            <li className='item-nav'>
              <Link to="/contact"> CONTACT </Link> 
            </li>

        </ul>
    </nav>
  )
}
