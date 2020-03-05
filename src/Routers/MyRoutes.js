import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Reader from "../Components/ReadDocs/Reader";

const MyRouters = props => {
    return (
        <React.Fragment>
            <Route exact path="/" component = {Reader} />
            <Switch>
                <Route path="/:id" component = {Reader} />
                {/* <Route path="*" render ={() => <h1>404 NOT FOUND</h1>}/> */}
            </Switch>
        </React.Fragment>
    );
}

export default MyRouters;
