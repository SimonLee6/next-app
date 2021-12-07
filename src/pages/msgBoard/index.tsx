import React, { Component } from "react"
import { Layout } from "antd";
import router from "next/router";
import { Props } from "@interface/interfaces";
import BlogContainer from "@layout/blog-container/blog-container";
import BlogComments from "@com/blog-comments/blog-comments";
import style from "./index.module.scss";
import { getSysComments } from "@api/msgBoard.api";


export default function BlogMsgBoard(props: Props) {

  const { sysComments = [] } = props
  return(
    <div className={style.msgBoard}>
      <div className={style.boardTitle}>
        来吐吐槽吧~
      </div>
      <BlogComments title="留言板" comments={sysComments}></BlogComments>
    </div>
    
  )
}

export const getStaticProps = async (ctx: any) => {

  try {
    let res = await getSysComments()
    const sysComments = res.data.data
    return {
      props: {
        pageTitle: "留言板",
        sysComments
      }
    }
  } catch (error) {
    return {
      props: {
        pageTitle: "留言板"
      }
    }
  }
  



  return {
    props: {
      pageTitle: "留言板"
    }
  }
}