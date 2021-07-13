import { BrowserRouter, Switch } from "react-router-dom";
import { Homepage, Tutor } from "../containers";
import { Customer } from "../containers/Customer/Customer";
import { SidebarLayout } from "../layouts";
import { PublicRouter } from "./PublicRouter";

// import { PrivateRouter } from './PrivateRouter';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter
          exact={true}
          path={"/"}
          component={Homepage}
          layout={SidebarLayout}
        />
        <PublicRouter
          exact={true}
          path={"/customer"}
          component={Customer}
          layout={SidebarLayout}
        />
        <PublicRouter
          exact={true}
          path={"/tutor"}
          component={Tutor}
          layout={SidebarLayout}
        />
        <PublicRouter
          exact={true}
          path={"/payment"}
          component={Homepage}
          layout={SidebarLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};
