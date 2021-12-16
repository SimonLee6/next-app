
import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"

const apiConfig: ApiConfigItem[] = [
  { name: "getArticleList", type: "post", controller: `${baseUrl}/blogPage/getBlogList` }
];

const apiServiceObj = {} as ApiServiceObj;

export const QueryBlogDetail = (blogId: any) => {
  return axios({
    url: `${baseUrl}/blogPage/getBlogDetail/${blogId}`,
    method: "get"
  })
}

export const QueryBlogComments = (blogId: any) => {
  return axios({
    url: `${baseUrl}/blogPage/getBlogComments?blogId=${blogId}`,
    method: "get"
  })
}

export const AddBlogComments = (params: any) => {
  return axios({
    url: `${baseUrl}/blogPage/addBlogComments`,
    method: "post",
    data: params
  })
}


apiConfig.forEach(ele => {
  apiServiceObj[ele.name] = function(params) {
    return axios({
      url: ele.controller,
      method: ele.type,
      data: params
    })
  }
})



export default apiServiceObj;