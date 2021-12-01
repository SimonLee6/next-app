import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import BlogContainer from "@layout/blog-container/blog-container";
import styled  from "styled-components";

import { Wrapper } from "@styledComponents";

export default function Friends() {

  return (
    <Wrapper>友人帐</Wrapper>
  )
}

export const getStaticProps = (ctx: any) => {
  return {
    props: {
      pageTitle: "友人帐"
    }
  }
}
