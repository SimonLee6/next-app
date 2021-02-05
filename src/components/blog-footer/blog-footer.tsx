import React, { Component } from "react"
import { Layout } from "antd";
import style from "./blog-footer.module.scss";

export default class BlogFooter extends Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <Layout.Footer className={style["blog-footer"]}>
        footer
      </Layout.Footer>
    )
  }
}