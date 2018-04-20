import React, { Component } from 'react'
import { Tabs } from 'antd'
import SignInForm from './sign-in-form'
import SignUpForm from './sign-up-form'
import 'antd/dist/antd.css'

const TabPane = Tabs.TabPane

class FormGroup extends Component {
    render () {
        return (
            <div style={{ width: "640px", margin: "0 auto" }}>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='login' key='1'>
                        <SignInForm />
                    </TabPane>
                    <TabPane tab='register' key='2'>
                        <SignUpForm />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default FormGroup