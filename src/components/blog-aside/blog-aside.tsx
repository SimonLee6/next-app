import style from "./blog-aside.module.scss"

export default function BlogAside() {

  let blogNum = 0


  return (
    <div className={style.asideWrap}>
      <div className={style.blogInfo}>
        <div className={style.blogInfoTop}>
          <div className={style.imgBg}></div>
          <div className={style.avatar}></div>
          <div className={style.name}>Simon</div>
        </div>
        <div className={style.infoShadow}></div>
        <div className={style.blogInfoBottom}>
          <span className={style.infoItem}>
            文章数 { blogNum }
          </span>
          <span className={style.infoItem}>
            评论 { blogNum }
          </span>
          <span className={style.infoItem}>
            标签 { blogNum }
          </span>
        </div>
      </div>
    </div>
  )
}