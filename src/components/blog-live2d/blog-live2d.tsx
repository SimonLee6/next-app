import React, { Component } from "react"
import { Layout } from "antd";
import style from "./blog-live2d.module.scss";

if (typeof window !== "undefined") {
  require("./live2d/js/live2d.js");
}

declare const loadlive2d: Function


export default class BlogLive2d extends Component {

  componentDidMount() {
    loadlive2d("live2d", "/model/tia/model.json");
  }

  render() {
    return (
      <div className={style["live2d-wrap"]}>
        <canvas id="live2d" width="280" height="250" className="live2d"></canvas>
      </div>
    )
  }
}