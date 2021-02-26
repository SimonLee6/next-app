import React, { Component } from "react"
import { Layout } from "antd";
import style from "./blog-footer.module.scss";

export default class BlogFooter extends Component {

  componentDidMount() {
    let arr: any[] = [
      [123,234,444],
      [123,222,445],
      [121,222,111],
    ]
    let reg = /\[?=\d+,/gm;
    let str = JSON.stringify(arr)
    let res = str.match(reg);
    console.log(str, res)

    
  }

  render() {
    
    return (
      <Layout.Footer className={style["blog-footer"]}>
        
      </Layout.Footer>
    )
  }
}