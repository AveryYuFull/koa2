import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Breadcrumb } from 'antd'

import HeaderNav from '../components/header-nav'
import FooterCommon from '../components/footer-common'

import 'antd/dist/antd.css'

const { Content } = Layout

class Home extends Component {
    render () {
        return (
            <Layout className='layout'>
                <HeaderNav />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#FFF', padding: 24, minHeight: 280 }}>
                        Welcome to Home page.
                    </div>
                </Content>
                <FooterCommon />
            </Layout>
        )
    }
}

export default Home