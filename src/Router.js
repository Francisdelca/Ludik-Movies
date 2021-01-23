import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id" component={MovieDetail} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;