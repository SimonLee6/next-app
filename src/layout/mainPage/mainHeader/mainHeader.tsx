import React from 'react';
import style from "./mainHeader.module.scss";
import { Props } from "@interface/interfaces";


const HeaderInfo = (props: Props) => {
  const pageName = props.pageName
  
  if (pageName === "home") {
    return(
      <div className={style.headInfo}>
        <div className={style.title}>风入松林</div>
        <div className={style.subTitle}>
          Don't try so hard, the best things come when you least expect them to.
        </div>
      </div>
    )
  } else if (pageName === "blogDetail") {
    const { blogDetail } = props
    return (
      <div className={style.headInfo}>
        <div className={style.title}>{blogDetail.title}</div>
        <div className={style.subTitle}>
          <span className={style.titleItem}>
            <i className="icon-tip__blog icon-date"></i>
            { blogDetail.created_time }
          </span>
          <span className={style.titleItem}>
            <i className="icon-tip__blog icon-readCount"></i>
            { blogDetail.read_count }
            <span className={style.titleItemSuffix}>阅读</span>
          </span>
          <span className={style.titleItem}>
            <i className="icon-tip__blog icon-tag"></i>
            { blogDetail.tag }
          </span>
          <span className={style.titleItem}>
            <i className="icon-tip__blog icon-msg"></i>
            { blogDetail.comments }
            <span className={style.titleItemSuffix}>评论</span>
          </span>
        </div>
      </div>
    )
  } else {
    const { pageTitle, pageSubTitle } = props
    return (
      <div className={style.headInfo}>
        <div className={style.title}>{ pageTitle }</div>
        <div className={style.subTitle}>{ pageSubTitle || "" }</div>
      </div>
    )
  }
}


function MainHeader(props: Props) {
  console.log(props)
  let img = "https://blog-simon.oss-cn-beijing.aliyuncs.com/blog-image/main-header.png"
  if (props.pageName === "blogDetail") {
    img = props.blogDetail.cover_image
  } else {
    props.headerBgImg && (img = props.headerBgImg)
  }
  return (
    <div className={style.header}>
      <div className={style.bgImage}>
        <img src={img} alt="logo" />
      </div>
      <div className={style.ripple}>
        <svg className={style.rippleSvg} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="ripple-path1" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"></path>
          </defs>
          <g className={style["ripple-g"]}>
            <use xlinkHref="#ripple-path1" x="48" y="0"></use>
            <use xlinkHref="#ripple-path1" x="48" y="3"></use>
            <use xlinkHref="#ripple-path1" x="48" y="5"></use>
            <use xlinkHref="#ripple-path1" x="48" y="7"></use>
          </g>
        </svg>
      </div>
      <HeaderInfo {...props}></HeaderInfo>
    </div>
  );
}

export default MainHeader;
