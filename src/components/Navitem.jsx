import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Navitem.css';

const Navitem = ({ children, nav_icon, is_logo}) => {
    var item_name = is_logo ? 'logo' : 'nav-item';

	return (
        <>
            <li className={item_name}>
                <a href="#" className="nav-link">
                    <FontAwesomeIcon icon={nav_icon} className='icon'/>
                    <span className="link-text">{children}</span>
                </a>
            </li>
        </>
    );
};

Navitem.propTypes = {
    children: PropTypes.node.isRequired,
    nav_icon: PropTypes.object.isRequired,
    is_logo: PropTypes.bool
};
export default Navitem
