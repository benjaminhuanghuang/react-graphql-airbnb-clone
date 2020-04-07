import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<RouteComponentProps<{}>> {
  dummySubmit = async (values: any) =>{
    return {};
  }
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account",
    });
  };

  render() {
    return (
     <RegisterView submit={this.dummySubmit} />
    );
  }
}
