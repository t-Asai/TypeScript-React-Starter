declare type Route = {
  path: string;
  name?: string;
  exact?: boolean;
  component: any;
  child?: any
};

declare type Routes = Array<Route>;
