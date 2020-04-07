import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnb-clone/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <RegisterController>
        {({ submit}:any) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
