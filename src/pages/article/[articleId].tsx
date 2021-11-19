
import React, { Component } from "react";
import { withRouter, useRouter } from "next/router";
import { Props } from "@interface/interfaces"
// import ReactMarkdown from "react-markdown"

import {
  getBlogDetail
} from "@api/article.api";

interface State {}

function ArticleDetail(props: Props) {
  console.log(props)

  return (
    <div>
      {/* <ReactMarkdown children=""></ReactMarkdown> */}
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  try {
    const articleId = ctx.query.articleId
    let res = await getBlogDetail(articleId)
    console.log(res)
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


