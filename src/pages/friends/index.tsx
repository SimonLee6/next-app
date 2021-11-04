import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import BlogContainer from "@layout/blog-container/blog-container";
import styled  from "styled-components";

import { Wrapper } from "@styledComponents";

export default class Friends extends Component {

  render() {

    return (
      <Wrapper>友人帐</Wrapper>
    )
  }
}
