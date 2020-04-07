import React from "react";
//
import { Form, Input, Button, Checkbox } from "antd";

export class RegisterView extends React.PureComponent {
  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          or <a href="">Login now!</a>
        </Form.Item>
      </Form>
    );
  }
}
