import team1 from "assets/img/team/sadraque.jpeg";
import team2 from "assets/img/team/natan.jpeg";
import team3 from "assets/img/team/peter.jpeg";
import team4 from "assets/img/team/marcelo.jpeg";
import NavBar from "components/NavBar";
import Footer from "components/Footer";


import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub} from "react-icons/go"


function Team() {
    return (
        <>
            <NavBar />
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h1>Nosso Time</h1>
                       
                    </div>

                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="member">

                                <div className="pic">
                                    <img src={team1} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Sadraque Bezerra</h4>
                                    <div className="social">
                                        <a href="/" className="github"> <GoMarkGithub /><i className="bi bi-github"></i></a>
                                        <a href="/" className="linkedin"> <BsLinkedin /><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <div className="pic">
                                    <img src={team2} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Natan Pompeu</h4>
                                    <div className="social">
                                        <a href="/" className="github"> <GoMarkGithub /><i className="bi bi-github"></i></a>
                                        <a href="/" className="linkedin"> <BsLinkedin /><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <div className="pic">
                                    <img src={team3} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Peter Davison</h4>
                                    <div className="social">
                                        <a href="/" className="github"> <GoMarkGithub /><i className="bi bi-github"></i></a>
                                        <a href="/" className="linkedin"> <BsLinkedin /><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="pic">
                                    <img src={team4} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Marcelo Pereira</h4>
                                    <div className="social">
                                        <a href="/" className="github"> <GoMarkGithub /><i className="bi bi-github"></i></a>
                                        <a href="/" className="linkedin"> <BsLinkedin /><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default Team;