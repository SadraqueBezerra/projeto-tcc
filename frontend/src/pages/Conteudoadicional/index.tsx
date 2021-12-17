/* eslint-disable jsx-a11y/anchor-has-content */
import img1 from "assets/img/team/img1.jpeg";
import img2 from "assets/img/team/img2.jpeg";
import img3 from "assets/img/team/img3.jpeg";
import img4 from "assets/img/team/img4.jpeg";
import NavBar from "components/NavBar";
import Footer from "components/Footer";



import './ConteudoAdicional.css'


function ConteudoAdicional() {
    return (
        <>
            <NavBar />
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h1>Conteúdo Adicional</h1>
                       
                    </div>

                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="member">

                                <div className="pic">
                                    <img src={img1} className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=iqs6x3wXOAk" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <div className="pic">
                                    <img src={img2} className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=bJY3HfkGteQ" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <div className="pic">
                                    <img src={img3} className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=YrgGQr22soI" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="pic">
                                    <img src={img4} className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=SPbCST0udEs" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
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

export default ConteudoAdicional;