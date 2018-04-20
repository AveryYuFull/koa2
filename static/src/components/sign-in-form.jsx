import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { signInApi } from '../api/sign-in'

import 'antd/dist/antd.css'

const FormItem = Form.Item

class loginForm extends Component {
    async handleSubmit (e) {
        e.preventDefault()
        let values = await this.getFormValues()
        if (values) {
            let result = await signInApi(values)
            if (result && result.success) {
                message.success('登录成功')
            } else if (result && result.message) {
                message.error(result.message)
            }
        } else {
            message.error('系统繁忙, 稍后再试!')
        }
    }

    getFormValues = () => {
        return new Promise((resolve, reject) => {
            let form = this.props.form
            form.validateFields((err, values) => {
                if (!err) {
                    resolve(values)
                } else {
                    reject(err)
                }
            })
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div style={{ width: "280px", margin: "0 auto" }}>
                <Form onSubmit={this.handleSubmit.bind(this)} className='login-form'>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input yourr username!' }]
                        })(
                            <Input prefix={<Icon type='user' />} placeholder='Username' />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }]
                        })(
                            <Input prefix={<Icon type='lock' />} placeholder='Password'/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className='login-form-forgot' href=''>Forgot password</a><br/>
                        <Button type='primary' htmlType='submit' className='login-form-button'>Sign In</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(loginForm)