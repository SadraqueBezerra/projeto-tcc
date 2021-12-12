
import TopBar from "components/TopBar";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AI from 'assets/img/AI1.svg';
import about from 'assets/img/about.png';
import React from 'react';

import team1 from "assets/img/team/team-1.png";
import team2 from "assets/img/team/team-2.jpg";
import team3 from "assets/img/team/team-3.jpg";
import team4 from "assets/img/team/team-4.jpg";



function Main() {
    return (
        <>
            <TopBar />
            <NavBar />

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row no-gutters">
                            <div className="col-lg-6 video-box">
                                <img src={about} className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                                <div className="section-title">
                                    <h2>Sobre</h2>
                                    <p>O presente artigo busca refletir e analisar sobre a temática Inteligência artificial na medicina, tendo como foco um estudo sobre a sua aplicabilidade na área da saúde e no tratamento de doenças. A necessidade de reunir dados sobre os atuais métodos de controle de dados na medicina, trazendo informações para o entendimento de como a IA é usada como ferramenta na medicina, justificou o desenvolvimento do estudo. Trata-se de uma pesquisa qualitativa, bibliográfica, com consulta a livros, artigos científicos, revistas acadêmicas, e entrevistas Assim, permitiu-se entender a Inteligência Artificial na Medicina (IAM), trazendo a história da IA, como também seus conceitos, sua aplicabilidade na medicina, o uso dessa tecnologia no Brasil e as vantagens à área da saúde. Constatou-se p Artificial. IA. Inteligência Artificial em Medicina.</p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title"><a href="/">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title"><a href="/">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section className="counts section-bg">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                                <div className="count-box">
                                    <i className="bi bi-simple-smile" ></i>
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="count-box">
                                    <i className="bi bi-document-folder" ></i>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
                                <div className="count-box">
                                    <i className="bi bi-live-support" ></i>
                                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                                <div className="count-box">
                                    <i className="bi bi-users-alt-5" ></i>
                                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="team" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Our Team</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
                        </div>

                        <div className="row">

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                                <div className="member">
                                
                                    <div className="pic">
                                        <img src={team1} className="img-fluid" alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h4>Sadraque Bezerra</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href="/"><i className="bi bi-twitter"></i></a>
                                            <a href="/"><i className="bi bi-facebook"></i></a>
                                            <a href="/"><i className="bi bi-instagram"></i></a>
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
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
                                        <h4>Marcelo Pereira</h4>
                                        <span>Product Manager</span>
                                        <div className="social">
                                            <a href="/"><i className="bi bi-twitter"></i></a>
                                            <a href="/"><i className="bi bi-facebook"></i></a>
                                            <a href="/"><i className="bi bi-instagram"></i></a>
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
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
                                        <span>CTO</span>
                                        <div className="social">
                                            <a href="/"><i className="bi bi-twitter"></i></a>
                                            <a href="/"><i className="bi bi-facebook"></i></a>
                                            <a href="/"><i className="bi bi-instagram"></i></a>
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
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
                                        <h4>Natan Pompeu</h4>
                                        <span>Accountant</span>
                                        <div className="social">
                                            <a href="/"><i className="bi bi-twitter"></i></a>
                                            <a href="/"><i className="bi bi-facebook"></i></a>
                                            <a href="/"><i className="bi bi-instagram"></i></a>
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>







            </main>

            <div className="container">
                <div className="row featurette">
                    <div className="col-md-5">
                        <nav className="my-2 my-md-0 mr-md-3">
                            <img src={AI} alt="DevSuperior" width="450" />
                        </nav>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Main;