import { Method } from "axios";
import { withRouter, NextRouter } from 'next/router'

export interface ApiConfigItem {
  name: string;
  type: Method;
  controller: string;
}
export interface ApiServiceObj {
  [key: string]: (params?: any ) => Promise<any>
}

export interface WithRouterProps {
  router: NextRouter
}

export interface ClassRouterComProps extends WithRouterProps{}