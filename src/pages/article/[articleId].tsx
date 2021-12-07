
import React, { Component, useState, useEffect } from "react";
import { withRouter, useRouter } from "next/router";
import { Props } from "@interface/interfaces";
import { Button } from "antd";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import style from "./detail.module.scss";
import BlogComments from "@com/blog-comments/blog-comments";


import {
  getBlogDetail,
  getBlogComments
} from "@api/article.api";


function ArticleDetail(props: Props) {
  const { blogDetail } = props
  const router = useRouter()
  const blogUrl = typeof window !== "undefined" ? location.href : ""
  
  const [comments, setComments] = useState({
    blogComments: []
  })
  useEffect(() => {
    const getComments = async () => {
      let res = await getBlogComments(blogDetail.id)
      setComments({ blogComments: res.data.data })
    }
    getComments()
  }, [])
  

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
    <div className={style.blogDetailWrap}>
      <div className={style.blogDetail}>
        <div className={style.blogMarkdown} dangerouslySetInnerHTML={{__html: articleContent }}></div>
      </div>
      
      <div className={style.blogBottom}>
        <hr className="icon-hr"/>
        <div className={style.blogBelong}>
          <div className={style.belongItem}>
            <i className="tip-circle icon-user"></i>
            <span className={style.belongItemText}>
              <span className={style.textTitle}>版权属于:</span>isimon
            </span>
          </div>
          <div className={style.belongItem}>
            <i className="tip-circle icon-link"></i>
            <span className={style.belongItemText}>
            <span className={style.textTitle}>本文链接:</span>{ blogUrl }
            </span>
          </div>
          
          <div className={style.belongItem}>
            <i className="tip-circle icon-share"></i>
            <span className={style.belongItemText}>
            <span className={style.textTitle}>作品采用:</span>知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议 进行许可
            </span>
          </div>
          
        </div>
        {/* <hr className="icon-hr bottom"/> */}
        {/* <div className={style.operateBtn}>
          <span className={style.btnSupport}>赞</span>
        </div> */}
      </div>
      <BlogComments title="文章评论" comments={comments.blogComments}></BlogComments>
      
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


