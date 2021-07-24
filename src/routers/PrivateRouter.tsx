import React, { useEffect } from "react";
import {Route} from 'react-router-dom';
import {EToken} from '../constants';
import { logout } from '../helpers';
export const PrivateRouter: React.FC<IPrivateRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  sidebar: Sidebar,
}) => {
  // const dispatch = useAppDispatch();

  const tokenLogin = window.localStorage.getItem(EToken.loginToken);

  useEffect(() => {
    // dispatch(doGetUserProfile());
  }, []);

  // let query = new URLSearchParams(useLocation().search).get('text');

  return (
    <Route
      exact={exact}
      path={path}
      render={(props: any) => {
        if (!tokenLogin) {
          logout();
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
