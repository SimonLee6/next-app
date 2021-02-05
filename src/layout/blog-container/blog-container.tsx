import React from "react";
import { Layout } from "antd";
import BlogHeader from "@com/blog-header/blog-header";
import BlogFooter from "@com/blog-footer/blog-footer";

const BlogContainer = (props: any) => {
  return(
    <Layout className="blog-container">
      <BlogHeader></BlogHeader>
      <Layout.Content>{ props.children }</Layout.Content>
      <BlogFooter></BlogFooter>
    </Layout>
  )
}
export default BlogContainer;
