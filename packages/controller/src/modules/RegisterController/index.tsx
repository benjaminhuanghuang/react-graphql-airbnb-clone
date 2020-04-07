import React from "react";

interface RegisterControllerProps {
  children: (data: { submit: (values: any) => Promise<null> }) => JSX.Element | null;
}

export class RegisterController extends React.PureComponent<RegisterControllerProps> {
  render() {
    const submit = async (values: any) => {
      return null;
    };

    return this.props.children({ submit: submit });
  }
}
