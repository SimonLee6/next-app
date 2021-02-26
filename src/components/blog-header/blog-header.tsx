import React, { Component } from "react"
import style from "./blog-header.module.scss"
import { Layout } from "antd";
import { useRouter, NextRouter } from "next/router"
import { TabItem } from "./interfaces"

const tabs: TabItem[] = [
  // { name: "首页", link: "/", value: "home" },
  // { name: "个人文章", link: "/article", value: "article" },
  // { name: "技术资源", link: "/resource", value: "resource" },
  // { name: "友人帐", link: "/friends", value: "friends" },
  // { name: "留言板", link: "/msgBoard", value: "msgBoard" },
]

const computedTabClass = (ele: TabItem, router: NextRouter) => `${style["tabs-item"]} ${
  ele.link === router.route
    ? style["tabs-item__active"] 
    : ""  
  }`

export default function BlogHeader () {
  
  const router = useRouter()

  return (
    <Layout className={style["blog-header--wrap"]}>
      <Layout.Header className={`z-blog-container ${style["blog-header"]}`}>
        {/* <span className={style["logo-wrap"]}>
          <i className={style["icon-logo"]}></i>
        </span> */}
        <ul className={style["tabs-list"]}>
          {
            tabs.map(ele => (
              <li className={computedTabClass(ele, router)}
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