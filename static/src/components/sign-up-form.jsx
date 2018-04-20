import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Checkbox, Button, Cascader, Select } from 'antd'

import 'antd/dist/antd.css'

const FormItem = Form.Item

const residences = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖'
        }]
    }]
}, {
    value: 'jiangxi',
    label: '江西',
    children: [{
        value: 'shangrao',
        label: '上饶',
        children: [{
            value: 'guangfeng',
            label: '广丰'
        }]
    }]
}]

class RegisterForm extends Component {
    compareToFirstPassword (rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        }
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
        }
        const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
        })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
        )
        return (
            <Form onSubmit={ this.handleSubmit }>
                <FormItem 
                    {...formItemLayout}
                    label='E-mail'>
                    { getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!'
                        }, {
                            required: true, message: 'Please input your E-mail!'
                        }]
                    })(
                        <Input placeholder='E-mail'/>
                    ) }
                </FormItem>
                <FormItem 
                    {...formItemLayout}
                    label='Password'>
                    { getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!'
                        }]
                    })(
                        <Input type='password' placeholder='Password' />
                    ) }
                </FormItem>
                <FormItem 
                    { ...formItemLayout }
                    label='Confirm Password'>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!'
                        }, {
                            validator: this.compareToFirstPassword
                        }]
                    })(
                        <Input type='password' placeholder='Confirm Password' />
                    )}
                </FormItem>
                <FormItem 
                    {...formItemLayout}
                    label={(
                        <span>
                            Nickname&nbsp;
                            <Tooltip title='What do you want others to call you?'>
                                <Icon type='question-circle-o' />
                            </Tooltip>
                        </span>
                    )}>
                    {getFieldDecorator('nickname', {
                        rules: [{
                            required: true, message: 'Please input your nickname!'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Habitual Residence"
                    >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader options={residences} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(RegisterForm)