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

export interface Props {
  [key: string]: any
}

export type ArticleData = {
  data: any[];
  pagingInfo: {
    page: number;
    total: number;
    size: number
  };
}

export type ArticleItem = {
  id: string;
  comments: number;
  content: string;
  cover_image: string;
  created_time: string;
  introduce: string;
  read_count: number;
  tag: string;
  title: string
}