import React from 'react'
//
import { Form, Input, Button, Checkbox } from 'antd';

export class RegisterView extends React.PureComponent {
  render (){
    return (
      <Form style={{ display: "flex" }}>
      <div style={{ width: 400, margin: "auto" }}>
        <Field
          name="email"
          prefix={
            <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
          }
          placeholder="Email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          prefix={
            <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
          }
          placeholder="Password"
          component={InputField}
        />
        <FormItem>
          <Link to="/forgot-password">Forgot password</Link>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </FormItem>
        <FormItem>
          Or <Link to="/login">login now!</Link>
        </FormItem>
      </div>
    </Form>
    )
  }
}
