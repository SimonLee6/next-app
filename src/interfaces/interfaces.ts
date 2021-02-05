import { Method } from "axios";

export interface ApiConfigItem {
  name: string;
  type: Method;
  controller: string;
}
export interface ApiServiceObj {
  [key: string]: (params?: any ) => Promise<any>
}