
import React, { Component, useState, useEffect } from "react"
import { Layout, message } from "antd";
import router from "next/router";
import { Props } from "@interface/interfaces";
import BlogContainer from "@layout/blog-container/blog-container";
import BlogComments from "@com/blog-comments/blog-comments";
import style from "./index.module.scss";
import { QuerySysComments, AddSysComments } from "@api/msgBoard.api";

export default function BlogMsgBoard(props: Props) {

  const { sysComments = [] } = props

  const [comments, setComments] = useState(sysComments)
  const [isUpdate, setUpdateFlag] = useState(false)
  useEffect(() => {
    const getSysCommentsList = async () => {
      let res = await QuerySysComments()
      setComments(res.data.data)
    }
    getSysCommentsList()
  }, [isUpdate])

  const addSysComments = async (params: any) => {
    try {
      console.log("params", params)
      let res = await AddSysComments(params)
      if (res.data.code === 200) {
        message.success(res.data.data)
        setUpdateFlag(!isUpdate)
        return
      }
      message.error("留言失败, 请稍后再试")
    } catch (error) {
      message.error("留言失败, 请稍后再试")
    }

  }




  // setComments({ sysComments })




  return(
    <div className={style.msgBoard}>
      <div className={style.boardTitle}>
        来吐吐槽吧~
      </div>
      <BlogComments title="留言板" comments={comments} addCommentsMethod={addSysComments}></BlogComments>
    </div>
    
  )
}

export const getStaticProps = async (ctx: any) => {

  try {
    // let res = await getSysComments()
    // const sysComments = res.data.data
    return {
      props: {
        pageTitle: "留言板",
        // sysComments
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