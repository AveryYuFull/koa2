import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu } from 'antd'

import 'antd/dist/antd.css'

const { Header } = Layout

class HeaderNav extends React.Component {
    constructor (props) {
        super(props)
        this.key = props.key || '1'
    }

    render () {
        return (
            <Header className='header'>
                <div className='logo'></div>
                <Menu theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={[this.key]}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key='1'><a href='/'>Home</a></Menu.Item>
                    <Menu.Item key='2'><a href='/admin'>Admin</a></Menu.Item>
                    <Menu.Item key='3'><a href='/work'>Work</a></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default HeaderNav