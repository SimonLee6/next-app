

import React, { Component } from "react"
// import { Layout } from "antd"

// import styled, { keyframes } from "styled-components"
import style from "./index.module.scss"
import Util from "@util/util"

interface State {
  isScroll: Boolean;
  scrollWidth: number
}

export default class BlogMiniComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isScroll: false,
      scrollWidth: 0
    }
  }

  componentDidMount() {
    this.scroll()
  }

  scrollStyle() {
    if (!this.state.isScroll) {
      return `${style["scroll-out"]}`
    } else {
      return `${style["scroll-in"]}`
    }
  }

  scroll () {
    let _this = this
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 10) {
      _this.setState({ isScroll: true })
    } else {
      _this.setState({ isScroll: false })
    }
    const viewPortW = document.documentElement.clientWidth
    const viewPortH = document.documentElement.clientHeight
    const scrollH = document.documentElement.scrollHeight - viewPortH
    document.addEventListener("scroll", function() {
      const scrollTop = document.documentElement.scrollTop
      const radio = scrollTop / scrollH
      const scrollW = viewPortW * radio
      _this.setState({ scrollWidth: scrollW })
      if (scrollTop > 10) {
        _this.setState({ isScroll: true })
      } else {
        _this.setState({ isScroll: false })
      }
    })
  }
  scrollToTop() {
    Util.scrollToPosition(0)
  }
  render() {
    
    return (
      <div className="mini-wrap">
        <div className={`${style["scroll-wrap"]} ${this.scrollStyle()}`}>
          <span className={style["scroll-btn"]} onClick={this.scrollToTop}></span>
        </div>
        <div className={style["scroll-line-wrap"]} style={{ width: `${this.state.scrollWidth}px`}}>
        </div>
      </div>
    )
  }
}