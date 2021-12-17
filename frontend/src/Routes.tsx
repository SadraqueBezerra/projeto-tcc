import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from 'pages/Home';
import Team from 'pages/Team';
import Navbar from "./components/NavBar";


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
                <Route path="/test" >
                    <Navbar />
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;