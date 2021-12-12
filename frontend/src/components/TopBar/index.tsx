import 'assets/css/styles.css';
import { BsFillPhoneFill, BsTwitter, BsEnvelopeFill, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";


function TopBar() {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope-fill"><BsEnvelopeFill /> </i><a href="mailto:iamedicina@example.com">iamedicina@example.com</a>
                    <i className="bi bi-phone-fill phone-icon"><BsFillPhoneFill /> </i> +1 5589 55488 55
                </div>

                <div className="social-links d-none d-md-block">
                    <a href="/" className="twitter"> <BsTwitter /><i className="bi bi-twitter"></i></a>
                    <a href="/" className="facebook"> <BsFacebook /><i className="bi bi-facebook"></i></a>
                    <a href="/" className="instagram"> <BsInstagram /><i className="bi bi-instagram"></i></a>
                    <a href="/" className="linkedin"> <BsLinkedin /><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </section>
    );
}

export default TopBar;