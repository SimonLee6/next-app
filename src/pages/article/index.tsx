import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";

import ArticleApi from "@api/article.api";

class BlogArticle extends Component {

  async componentDidMount() {
    // let res = await ArticleApi.getArticleList()
    // console.log(res)
    console.log(this.props)
  }
  render() {
    return (
      "文章"
    )
  }
}
export async function getServerSideProps() {
  let res = await ArticleApi.getArticleList()
  const data = res.data.data
  return {
    props: { data }
  }
}

export default BlogArticle;