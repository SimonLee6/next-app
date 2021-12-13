
import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"


export const QuerySysComments = () => {
  return axios({
    url: `${baseUrl}/blogPage/getSysComments`,
    method: "get"
  })
}

export const AddSysComments = (params: any) => {
  return axios({
    url: `${baseUrl}/blogPage/addSysComments`,
    method: "post",
    data: params
  })
}

