
import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"

const apiConfig: ApiConfigItem[] = [
  { name: "getArticleList", type: "post", controller: `${baseUrl}/blogPage/getBlogList` }
];

const apiServiceObj = {} as ApiServiceObj;

export const getBlogDetail = (blogId: any) => {
  return axios({
    url: `${baseUrl}/blogPage/getBlogDetail/${blogId}`,
    method: "get"
  })
}

export const getBlogComments = (blogId: any) => {
  return axios({
    url: `${baseUrl}/blogPage/getBlogComments?blogId=${blogId}`,
    method: "get"
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