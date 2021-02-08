
import React, { Component } from "react";
import { withRouter } from "next/router"

class ArticleDetail extends Component<any, any> {


  render () {
    console.log(this)
    return (
      <div>详情</div>
    )
  }
}
export default withRouter(ArticleDetail)