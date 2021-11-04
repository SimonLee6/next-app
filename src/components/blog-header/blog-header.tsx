import React, { Component } from "react"
import style from "./blog-header.module.scss"
import { Layout } from "antd";
import { useRouter, NextRouter, withRouter } from "next/router"
import { TabItem, BlogHeaderState } from "./interfaces"
import { ClassRouterComProps } from "@interface/interfaces"

const tabs: TabItem[] = [
  // { name: "主页", link: "/", value: "home" },
  { name: "个人文章", link: "/article", value: "article" },
  { name: "技术资源", link: "/resource", value: "resource" },
  { name: "友人帐", link: "/friends", value: "friends" },
  { name: "留言板", link: "/msgBoard", value: "msgBoard" },
]
const headerH = 70

const computedTabClass = (ele: TabItem, router: NextRouter) => `${style["tabs-item"]} ${
  ele.link === router.route
    ? style["tabs-item__active"] 
    : ""
  }`


class BlogHeader extends Component<ClassRouterComProps, BlogHeaderState> {

  constructor(props: any) {
    super(props)
    this.state = {
      headActive: false
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (param) => {
        const top = window.pageYOffset
        this.setState({
          headActive: top > headerH
        })
      })
    }
  }

  render() {
    const router = this.props.router

    return (
      <Layout className={`${style["blog-header--wrap"]} blog-header`}>
        <Layout.Header className={`${style["blog-header"]} ${ this.state.headActive ? style["header-active"]: ""}`}>
          <span className={style["logo-wrap"]}>
            
            {/* <i className={style["icon-logo"]}></i> */}
          </span>
          <ul className={style["tabs-list"]}>
            {
              tabs.map(ele => (
                <li className={`${style["tabs-item"]} ${computedTabClass(ele, router)}`}
                  key={ele.value}
                  onClick={() => router.push(ele.link)}>
                  { ele.name }
                </li>
              ))
            }
          </ul>
        </Layout.Header>
      </Layout>
    )
  }
}

export default withRouter(BlogHeader)