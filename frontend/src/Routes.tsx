import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from 'components/Main';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;