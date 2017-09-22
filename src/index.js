import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import MediaQuery from 'react-responsive';
import PcIndex from './js/pages/pc_index';
import MobileIndex from "./js/pages/mobile_index";
import MobileContainer from './js/components/mobile_container'
import PCNewsContainer from './js/components/pc_news_container'
import PCNewsDetails from './js/pages/pc_news_details'
import PCNewsImagesBlock from './js/pages/mobile_news_details'
import PCUserCenter from './js/pages/pc_user_center'
import MobileUserCenter from './js/pages/mobile_user_center'


ReactDOM.render(
    <div>
        <MediaQuery query="(min-device-width: 1224px)">
            <Router history={hashHistory}>
                <Route path='/' component={PcIndex}>
                    <IndexRoute component={PCNewsContainer}/>
                    <Route path='details/:uniquekey' component={PCNewsDetails}/>
                    <Route path='userCenter' component={PCUserCenter}/>
                </Route>
            </Router>

        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">

            <Router history={hashHistory}>
                <Route path='/' component={MobileIndex}>
                    <IndexRoute component={MobileContainer}/>
                    <Route path='details/:uniquekey' component={PCNewsImagesBlock}/>
                    <Route path='userCenter' component={MobileUserCenter}/>
                </Route>
            </Router>

        </MediaQuery>
    </div>
    , document.getElementById('root'));

