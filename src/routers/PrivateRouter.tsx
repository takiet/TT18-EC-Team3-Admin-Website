import React, { useEffect } from "react";
import {Route} from 'react-router-dom';

export const PrivateRouter: React.FC<IPrivateRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  sidebar: Sidebar,
}) => {
  // const dispatch = useAppDispatch();

  // const tokenLogin = window.localStorage.getItem(EToken.loginToken);

  useEffect(() => {
    // dispatch(doGetUserProfile());
  }, []);

  // let query = new URLSearchParams(useLocation().search).get('text');

  return (
    // <Route
    //   exact={exact}
    //   path={path}
    //   render={(props) => {
    //     if (!tokenLogin) {
    //       logout();
    //     }

    //     // if (Number.parseInt(errorCurrentUser) === 401) {
    //     //   logout();
    //     // }

    //     return (
    //       <Layout sidebar={<Sidebar />}>
    //         <Component {...props} />
    //       </Layout>
    //     );
    //   }}
    // />
    <div>private router</div>
  );
};
