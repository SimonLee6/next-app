import React from "react";
import { Layout } from "antd";
import BlogHeader from "@com/blog-header/blog-header";
import BlogFooter from "@com/blog-footer/blog-footer";
import { Props } from "@interface/interfaces";

const BlogContainer = (props: Props) => {
  return(
    <Layout className="blog-container">
      <BlogHeader></BlogHeader>
      <Layout.Content className="blog-content">{ props.children }</Layout.Content>
      <BlogFooter webInfo={props.webInfo}></BlogFooter>
    </Layout>
  )
}
export default BlogContainer;
