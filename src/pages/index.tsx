import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import BlogContainer from "@layout/blog-container/blog-container";
import styled  from "styled-components";
import { Wrapper } from "@styledComponents";
// import MainHeader from "@/layout/mainPage/mainHeader/mainHeader";

const MainWrap = styled(Wrapper)`
  // height: 900px;
`

export default class Home extends Component {

  render() {

    return (
      <Wrapper>
        {/* <MainHeader></MainHeader> */}
      </Wrapper>
    )
  }
}
