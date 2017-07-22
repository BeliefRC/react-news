import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css'
import PcIndex from './js/pages/pc_index';
import MobileIndex from "./js/pages/mobile_index";
import MobileContainer from './js/components/mobile_container'
import PCNewsContainer from './js/components/pc_news_container'
import Test from './js/pages/test'

ReactDOM.render(
    <div>
        <MediaQuery query="(min-device-width: 1224px)">
            <Router history={hashHistory}>
                <Route path='/' component={PcIndex}>
                    <IndexRoute component={PCNewsContainer}/>
                    <Route path='test' component={Test}></Route>

                </Route>
            </Router>

        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">

            <Router history={hashHistory}>
                <Route path='/' component={MobileIndex}>
                    <IndexRoute component={MobileContainer}/>
                    <Route path='test' component={Test}></Route>

                </Route>
            </Router>

        </MediaQuery>
    </div>
    , document.getElementById('root'));

