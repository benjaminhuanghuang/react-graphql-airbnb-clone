import React from "react";
import {graphql, ChildMutateProps} from "react-apollo"
import gql from 'graphql-tag'

interface RegisterControllerProps {
  children: (data: { submit: (values: any) => Promise<null> }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<RegisterControllerProps, any, any>> {
  submit = async (values: any) => {
    console.log("Submit of register: ", values)
    const response = await this.props.mutate({
        variables: values
    })
    console.log("Response of resiger submit", response)
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}


const registerMutation = gql `
  mutation($email: String!, $password: String!){
    register(email: $email, password: $password){
      path
      message
    }
  }
`

export const RegisterController = graphql(registerMutation)(C)