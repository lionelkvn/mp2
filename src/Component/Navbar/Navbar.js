import './Navbar.css';
const Navbar = () => {
    return(
        <div id="Navbar" className="container">
            <div className="Navbar">
            <h1><span class="primary-color">Ink</span><span>novative</span></h1>          
            </div>
            <div className="Navbar">
                <a href="#" className="active"><span>Home</span></a>
                <a href="#"><span>About</span></a>
                <a href="#"><span>Service</span></a>
                <a href="#"><span>Portfolio</span></a>
                <a href="#"><span>Contact</span></a>
            </div>
        </div>
    );
}
export default Navbar;