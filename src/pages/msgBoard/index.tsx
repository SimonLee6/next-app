import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import BlogContainer from "@layout/blog-container/blog-container";

export default function BlogMsgBoard() {
  
  return(
    <div>留言板</div>
  )
}

export const getStaticProps = (ctx: any) => {
  return {
    props: {
      pageTitle: "留言板"
    }
  }
}