import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'

import HeaderNav from '../components/header-nav'
import FooterCommon from '../components/footer-common'
import FormGroup from '../components/form-group'

const { Content } = Layout

class Admin extends Component {
    render () {
        return (
            <Layout class='layout'>
                <HeaderNav key={ '2' } />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#FFF', padding: 24, minHeight: 280 }}>
                        <FormGroup />
                    </div>
                </Content>
                <FooterCommon />
            </Layout>
        )
    }
}

export default Admin