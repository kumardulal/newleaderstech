import React from 'react';
import { HashRouter , Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
// import ContentContainer from '../navigation/ContentContainer';


import Nav from '../navigation/Nav';

function Routing() {
    return (
        <>
            <Nav />
            <div className="Routing">
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <div className="inner-content">
                        <Switch>
                            <Route path="/newleaderstech" exact component={Homepage} />
                            <Route path="/newleaderstech/me" exact component={Me} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>

        </>

    );
}

export default Routing;

function Me() {
    return (
        <div style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div>Hello Vanja</div>
        </div>
    )
}





