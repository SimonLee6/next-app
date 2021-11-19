import React from 'react';
import style from "./mainHeader.module.scss";
import { Props } from "@interface/interfaces"

function MainHeader(props: Props) {
  console.log(props.pageName)
  return (
    <div className={style.header}>
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
      <div className={style.headInfo}>
        <span className={style.title}>风入松林</span>
        <span className={style.subTitle}>
          Don't try so hard, the best things come when you least expect them to.
        </span>
      </div>
    </div>
  );
}

export default MainHeader;
