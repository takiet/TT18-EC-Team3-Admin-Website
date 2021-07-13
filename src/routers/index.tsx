import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Homepage } from "../containers";
import { SidebarLayout } from "../layouts";
import { PublicRouter } from "./PublicRouter";

// import { PrivateRouter } from './PrivateRouter';

export const Routers = () => {
  return (
    <Router>
      <Switch>
        <PublicRouter
          exact={true}
          path={"/"}
          component={Homepage}
          layout={SidebarLayout}
        />
      
      </Switch>
    </Router>
  );
};
