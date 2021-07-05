interface IPrivateRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  sidebar?: any;
}

interface IPublicRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  header?: any;
  footer?: any;
  isHasFooter?: boolean;
  isHasHeader?: boolean;
  titleHeader?: string;
  backPath?: string;
  isBackBtn?: boolean;
  backgroundColor?: boolean;
  isNotifyBtn?: boolean;
}



