/**
 * Created by 10343 on 2017/7/13.
 */
import React from 'react'
import MobileHeader from '../components/mobile_header'
import MobileFooter from '../components/mobile_footer'
export default  class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                {this.props.children}
                <MobileFooter/>
            </div>
        )
    }
}
