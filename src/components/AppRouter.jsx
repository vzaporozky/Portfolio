import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import { AuthContext } from './../context/index';
import { publicRouter, privetRouter } from "../router";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        
        isAuth
            ?
            <Switch>
                { privetRouter.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/'/>
            </Switch>
            :
            <Switch>
                {publicRouter.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/Login'/>
            </Switch>
    )
}

export default AppRouter