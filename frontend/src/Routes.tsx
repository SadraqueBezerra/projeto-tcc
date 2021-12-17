import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from 'pages/Home';
import Team from 'pages/Team';
import Artigo from "./pages/Artigo"
import ConteudoAdicional from "./pages/Conteudoadicional"


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/team" >
                    <Team />
                </Route>
                <Route path="/artigo" >
                    <Artigo />
                </Route>
                <Route path="/conteudoadicional" >
                    <ConteudoAdicional />
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;