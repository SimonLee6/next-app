
import React, { Component } from "react";
import { withRouter } from "next/router"

interface State {}
interface Props {}

class ArticleDetail extends Component<any, State> {


  render () {
    console.log(this)
    return (
      <div>详情</div>
    )
  }
}
export default withRouter(ArticleDetail)