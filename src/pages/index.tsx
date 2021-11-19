import React, { Component } from "react"
import { BookOutlined } from "@ant-design/icons";
import router from "next/router";
import BlogContainer from "@layout/blog-container/blog-container";
import styled  from "styled-components";
import { Wrapper } from "@styledComponents";
import BlogList from "@com/blog-list/blog-list"
import ArticleApi from "@api/article.api";
import { Props, ArticleData } from "@interface/interfaces"
import MainHeader from "@/layout/mainPage/mainHeader/mainHeader";
import style from "./index.module.scss"
const MainWrap = styled(Wrapper)`
  // padding: 0 15px;
`

const blogList = [
  {}
]

export default function Home(props: Props) {
  // console.log(props)


  return (
    <MainWrap>
      {/* <MainHeader /> */}
      <div className={style.homeTitle}>
        <BookOutlined />
        <span className={style.title}>推荐</span>
      </div>
      <BlogList blogList={props.articleData} pagingInfo={props.pagingInfo}></BlogList>
    </MainWrap>
  )
}

export async function getServerSideProps() {
  const defaultData: ArticleData = {
    data: [
      {
        title: "基于next.js的博客系统",

      }
    ],
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
        articleData: articleData.data,
        pagingInfo: articleData.pagingInfo
      }
    }
  } catch (error) {
    return {
      props: { 
        articleData: defaultData
      }
    }
  }
  
  
}
