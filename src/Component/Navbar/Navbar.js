import './Navbar.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

const Navbar = () => {
    return(
        <div id="Navbar" className="container">
            <h1><span class="primary-color">Ink</span><span>novative</span></h1>       
            <div className="Navbar">
                <Anchor direction="horizontal" targetOffset="60">
                <div><Link href="#Home" title="Home"/></div>
                <div><Link href="#About" title="About" /></div>
                <div><Link href="#Services" title="Services" /></div>
                <div><Link href="#Portfolio" title="Portfolio" /></div>
                <div><Link href="#Contact" title="Contact" /></div>
                </Anchor>
            </div>
            <div><a href="#" class="button">Sign In</a></div> 
        </div>
    );
}
export default Navbar;



