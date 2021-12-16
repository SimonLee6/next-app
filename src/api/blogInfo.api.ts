import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"

export const QueryWebInfo = (blogId: any) => {
  return axios({
    url: `${baseUrl}/blogPage/getWebInfo`,
    method: "get"
  })
}