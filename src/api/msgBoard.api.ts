
import axios from "axios";
import { ApiConfigItem, ApiServiceObj } from "@interface/interfaces";

const baseUrl = "http://localhost:3002"


export const getSysComments = () => {
  return axios({
    url: `${baseUrl}/blogPage/getSysComments`,
    method: "get"
  })
}

