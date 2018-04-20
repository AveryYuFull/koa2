import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'

const { Footer } = Layout

class FooterCommon extends Component {
    render () {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Hello World ©2017 Created by hello world
            </Footer>
        )
    }
}

export default FooterCommon