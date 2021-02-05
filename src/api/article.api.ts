
import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"

const apiConfig: ApiConfigItem[] = [
  { name: "getArticleList", type: "post", controller: `${baseUrl}/blogPage/getBlogList` }
];

const apiServiceObj = {} as ApiServiceObj;

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