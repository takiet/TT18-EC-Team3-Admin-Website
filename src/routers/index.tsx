import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AddCourse, Course, Homepage, Tutor } from "../containers";
import { CourseDetail } from "../containers/CourseDetail/CourseDetail";
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
          path={"/add-course"}
          component={AddCourse}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/course-detail/:uid"}
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
