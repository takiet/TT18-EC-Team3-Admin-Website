import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Course, CourseDetail, Homepage, Tutor } from "../containers";
import { Customer } from "../containers/Customer/Customer";
import { Login } from "../containers/Login/Login";
import { BlankLayout, SidebarLayout } from "../layouts";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouter
          exact={true}
          path={"/customer"}
          component={Customer}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/"}
          component={Tutor}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/payment"}
          component={Homepage}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/course"}
          component={Course}
          layout={SidebarLayout}
        />
         <PrivateRouter
          exact={true}
          path={"/course-detail"}
          component={CourseDetail}
          layout={SidebarLayout}
        />
        <PublicRouter
          exact={true}
          path={"/login"}
          component={Login}
          layout={BlankLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};
