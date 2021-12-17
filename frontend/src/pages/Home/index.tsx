import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AI from 'assets/img/AI1.svg';

import React from 'react';


import slide1 from "assets/img/slide/slide.jpg"
//import slide2 from "assets/img/slide/slide2.jpeg"
//import slide3 from "assets/img/slide/slide3.png"

import { FaHistory } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";



function Main() {
    return (
        <>
            <Navbar />
    
            <div className="carousell" >
                <div className="images">
                    <img src={slide1} alt=""></img>
                </div>
            </div>

            <main id="main">
                <section id="about" className="about">
                    <div className="container" >

                        <div className="row">
                            <div className="col-lg-6 ">
                                <br />
                                <img src={AI} className="img-fluid" alt="" height={500} width={500} />
                            </div>

                            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                                <div className="section-title">
                                    <br />
                                    <h2>Resumo</h2>
                                    <div className="sobre">
                                        <p>O presente artigo busca refletir e analisar sobre a temática Inteligência artificial na medicina, tendo como foco um estudo sobre a sua aplicabilidade na área da saúde e no tratamento de doenças. A necessidade de reunir dados sobre os atuais métodos de controle de dados na medicina, trazendo informações para o entendimento de como a IA é usada como ferramenta na medicina, justificou o desenvolvimento do estudo. Trata-se de uma pesquisa qualitativa, bibliográfica, com consulta a livros, artigos científicos, revistas acadêmicas, e entrevistas. Assim, permitiu-se entender a Inteligência Artificial na Medicina (IAM), trazendo a história da IA, como também seus conceitos, sua aplicabilidade na medicina, o uso dessa tecnologia no Brasil e as vantagens à área da saúde. Constatou-se com este estudo que Inteligência artificial trouxe diversas vantagens para a medicina e para o diagnóstico precoce e tratamentos de doenças.</p>
                                    </div>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bx bx-fingerprint">< FaHistory /></i></div>
                                    <h4 className="title"><a href="/">História</a></h4>
                                    <p className="description">A definição de Inteligência artificial (IA) está baseada na melhoria de processos, os quais podem atuar em diversas áreas, como por exemplo, educação, saúde e agricultura. Com o objetivo na melhoria da qualidade de vida.</p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bx bx-gift">< FaRobot /></i></div>
                                    <h4 className="title"><a href="/">Vantagens</a></h4>
                                    <p className="description">Notificação em tempo real, dados do usuário em nuvem, reforço no diagnótico para facilitar o diagnostico de doenças no início e a associação de sintomas podendo emitir alertas sobre as possíveis doenças que o paciente pode desenvolver. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Main;