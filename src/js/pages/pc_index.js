/**
 * Created by 10343 on 2017/7/13.
 */
import React from 'react'
import PCHeader from '../components/pc_header'
import PCFooter from '../components/pc_footer'
export default  class PCIndex extends React.Component {
    render() {
        return (
            <div>
              <PCHeader/>
                {this.props.children}
              <PCFooter/>
            </div>
        )
    }
}
