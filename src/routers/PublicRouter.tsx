import React from "react";
import { Route } from "react-router-dom";

export const PublicRouter: React.FC<IPublicRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
