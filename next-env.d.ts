/// <reference types="next" />
/// <reference types="next/types/global" />


// 申明styled-components包
declare module "styled-components" {
  import styled, { keyframes } from "styled-components";
  export { keyframes };
  export default styled;
};

declare module "marked" {
  import { marked } from "marked";
  export { marked };
}

declare module "*.png";

 

interface Window {
  returnCitySN: {
    [key: string]: any
  }
}