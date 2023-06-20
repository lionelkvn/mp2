import './About.css';
const About = () => {
    return(
        <div id="About" class="About">
            <div class="AboutImage">
                <img src="./AboutImage.jpg"/>
            </div>
            <div class='AboutContent'>
                <h1><span class="secondary-color">About </span><span>Us</span></h1> 
                <h3>a graphic design studio specializing in branding, branded illustration systems, and packaging.
                     Our goal is to create meaningful and timeless design for our clients and their audience.</h3>
                <h3>We believe that great work comes from building great relationships. We work one on one with our
                    clients and collaborate with them every step of the way.</h3>
                <h3><span>Our </span><span class="secondary-color">GOAL</span></h3><h3> is to inspire and attract the target audience.</h3>
            </div>
        </div>
    );
}
export default About;