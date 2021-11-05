import style from "./blog-aside.module.scss"

export default function BlogAside() {

  return (
    <div className={style.asideWrap}>
      <div className={style.blogInfo}>
        <div className={style.blogInfoTop}>
          <div className={style.imgBg}></div>
          <div className={style.avatar}></div>
          <div className={style.name}>Simon</div>
        </div>
        <div className={style.blogInfoBottom}>
          <span></span>
        </div>
      </div>
    </div>
  )
}