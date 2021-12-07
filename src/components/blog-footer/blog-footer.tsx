import React, { Component } from "react";
import { useRouter } from "next/router"
import { Layout } from "antd";
import style from "./blog-footer.module.scss";
import dayjs from "dayjs";
import router from "next/router";


export default function BlogFooter() {
  
  let curYear = dayjs(Date.now()).format("YYYY")
  let router = useRouter()

  return (
    <Layout.Footer className={style.footer}>
      <div className={style.websiteInfo}>
        <span className={style.websiteName}>
          Copyright ©{curYear}
          <span className={style.name} onClick={() => router.push("/")}>风入松林</span>
        </span>
        <span className={style.websiteProvider}>
          <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2020043669号-2</a>
        </span>
        <span className={style.websiteProvider}></span>
      </div>
    </Layout.Footer>
  )
}