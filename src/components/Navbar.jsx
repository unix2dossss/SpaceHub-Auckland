import Navitem from "./Navitem"
import './Navbar.css'
import { faUserAstronaut, faStar, faCalendar, faSatellite, faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
	return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <Navitem is_logo={true} nav_icon={faSpaceAwesome}>SpaceHub</Navitem>
                    <Navitem nav_icon={faUserAstronaut}>About Us</Navitem>
                    <Navitem nav_icon={faStar}>Join Us</Navitem>
                    <Navitem nav_icon={faCalendar}>Events</Navitem> 
                    <Navitem nav_icon={faSatellite}>News</Navitem>
                    <Navitem nav_icon={faShuttleSpace}>Launches</Navitem>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
