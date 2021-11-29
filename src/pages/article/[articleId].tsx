
import React, { Component, useState } from "react";
import { withRouter, useRouter } from "next/router";
import { Props } from "@interface/interfaces";

import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import style from "./detail.module.scss";


import {
  getBlogDetail
} from "@api/article.api";


function ArticleDetail(props: Props) {
  const { blogDetail } = props

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false,
    highlight: function (code: string) {
      return hljs.highlightAuto(code).value;
    }
  })

  let articleContent = marked(blogDetail.content)

  return (
    <div className={style.blogDetail}>
      <div className={style.blogMarkdown} dangerouslySetInnerHTML={{__html: articleContent }}></div>
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  try {
    const articleId = ctx.query.articleId
    let res = await getBlogDetail(articleId)
    // console.log(res)
    return {
      props: {
        pageName: "blogDetail",
        blogDetail: res.data.data || {}
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        pageName: "blogDetail",
        blogDetail: {}
      }
    }
  }
  
  
}

export default ArticleDetail


