import React, { Component, useState } from "react";
import { useRouter } from "next/router"
import { Layout } from "antd";
import style from "./blog-footer.module.scss";
import dayjs from "dayjs";
import router from "next/router";
import { Props } from "@interface/interfaces";
import { formatDay } from "@util/util";

export default function BlogFooter(props: Props) {
  
  const webInfo = props.webInfo
  let curYear = dayjs(Date.now()).format("YYYY")
  let router = useRouter()

  const timeRange = Date.now() - Date.parse(webInfo.start_time)
  const [webTime, updateWebTime] = useState(formatDay(timeRange))

  if (typeof window !== "undefined") {
    setInterval(() => {
      const timeRange = Date.now() - Date.parse(webInfo.start_time)
      updateWebTime(formatDay(timeRange))
    }, 1000)
  }

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

        <div className={style.websiteTime}>
          小破站在各种灾难中苟活了: {webTime}
        </div>
      </div>
      
    </Layout.Footer>
  )
}