import React,{memo} from "react";
import { HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';

import routes from './router';

import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import store from "@/redux/store"
export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <HYAppHeader/>
                {renderRoutes(routes)}
                <HYAppFooter/>
            </HashRouter>
        </Provider>
    );
})


