import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AI from 'assets/img/AI1.svg';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Resumo</h2>
            <p className="lead">O presente artigo busca refletir e analisar sobre a temática Inteligência artificial na medicina, tendo como foco um estudo sobre a sua aplicabilidade na área da saúde e no tratamento de doenças. A necessidade de reunir dados sobre os atuais métodos de controle de dados na medicina, trazendo informações para o entendimento de como a IA é usada como ferramenta na medicina, justificou o desenvolvimento do estudo. Trata-se de uma pesquisa qualitativa, bibliográfica, com consulta a livros, artigos científicos, revistas acadêmicas, e entrevistas Assim, permitiu-se entender a Inteligência Artificial na Medicina (IAM), trazendo a história da IA, como também seus conceitos, sua aplicabilidade na medicina, o uso dessa tecnologia no Brasil e as vantagens à área da saúde. Constatou-se p Artificial. IA. Inteligência Artificial em Medicina.</p>
          </div>
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

export default App;
