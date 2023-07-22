import { NavLink } from "react-router-dom";
import Main from "./Main";
import Section from "./Section";
import About from "./About";
import Contact from "./Contact";

function Nav() {
    return(
        <>
        <header className="nav">
        <h2> <i class="fa-solid fa-utensils"></i> RestoBar </h2>
        <nav>        
            <NavLink to={'/'}>Home</NavLink> {' '}{' '}{' '}
            <NavLink to={'/menu'}>Menu</NavLink> {' '}{' '}{' '}
            <NavLink to={'/reservation'}>Reservation</NavLink> {' '}{' '}{' '}
            <NavLink to={'/aboutus'}>About Us</NavLink> {' '}{' '}{' '}
            <NavLink to={'/contact'}>Contact Us</NavLink> {' '}{' '}
        </nav>
        </header>
        <h3 className="heading">Welcome to Our Food Paradise</h3>
        <Main />
        <Section />
        <About />
        <Contact />
        </>
    )
}
export default Nav
  