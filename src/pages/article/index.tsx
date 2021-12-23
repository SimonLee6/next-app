import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import BlogList from "@com/blog-list/blog-list"
import ArticleApi from "@api/article.api";
import style from "./article.module.scss";


type ArticleData = {
  data: any[];
  pagingInfo: {
    page: number;
    total: number;
    size: number
  };
}
interface Props {
  articleData: ArticleData;
  pageTitle: string
}


export default function BlogArticle(props: Props) {

  const articleData = props.articleData

  return(
    <div className={style.articleWrap}>
      <div className={style.articleList}>
        <BlogList blogList={articleData.data} pagingInfo={articleData.pagingInfo}></BlogList>
      </div>
    </div> 
  )
}

export async function getServerSideProps() {
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
        pageTitle: "个人文章",
        pageBgImage: "https://blog-simon.oss-cn-beijing.aliyuncs.com/blog-image/articles.png"
      }
    }
  } catch (error) {
    return {
      props: { 
        articleData: defaultData,
        pageTitle: "个人文章",
        pageBgImage: "https://blog-simon.oss-cn-beijing.aliyuncs.com/blog-image/articles.png"
      }
    }
  }
  
  
}
