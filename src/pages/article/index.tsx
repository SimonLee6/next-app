import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";

import ArticleApi from "@api/article.api";
import { Button } from 'antd';

type ArticleData = {
  data: any[];
  pagingInfo: {
    page: number;
    total: number;
    size: number
  };
}
interface Props {
  articleData: ArticleData
}
interface State {
  page: string
}
class BlogArticle extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      page: "列表"
    }
  }
  async componentDidMount() {
    console.log(this)
  }
  handlerClick = () => {
    this.setState({ page: "新列表"})
  }
  render() {
    const articleList = this.props.articleData.data
    const pagingInfo = this.props.articleData.pagingInfo
    return (
      <div className="article-wrap">
        <ul>
          {
            articleList.map(ele => (
              <li key={ele.id}>{ ele.title }</li>
            ))
          }
        </ul>
        <Button onClick={this.handlerClick}>点击</Button>
      </div>
    )
  }
}
export async function getStaticProps() {
  const defaultData: ArticleData = {
    data: [],
    pagingInfo: {
      size: 10,
      total: 0,
      page: 1
    }
  }
  try {
    let res = await ArticleApi.getArticleList()
    const articleData = res.data.data || defaultData;
    return {
      props: { 
        articleData,
        pageTitle: "文章"
      }
    }
  } catch (error) {
    return {
      props: { 
        articleData: defaultData,
        pageTitle: "文章"
      }
    }
  }
  
  
}

export default BlogArticle;