import { QqOutlined, GithubOutlined } from "@ant-design/icons";
import style from "./blog-aside.module.scss";

export default function BlogAside() {

  let blogNum = 0


  return (
    <div className={style.asideWrap}>
      <div className={style.blogInfo}>
        <div className={style.blogInfoTop}>
          <div className={style.imgBg}></div>
          <div className={style.avatar}></div>
          <div className={style.name}>isimon</div>
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
      {/* <div className={[style.blogRandom, style.asideTitle].join(" ")}>
        <div className={style.asideTitle}>随便看看</div>
      </div> */}
      
      {/* <div className={style.contactWrap}>
        <div className={style.contactTitle}>Contact</div>
        <div className={style.contactItem}>
          <span className="icon-email"></span>
          isimon1114@163.com
        </div>
        <div className={style.contactItem}>
          <span className={style.itemIcon}>
            <QqOutlined style={{fontSize: "20px"}}/>
          </span>
          951131455
        </div>
        <div className={style.contactTitle}>Follow</div>
        <div className={style.contactItem}>
          <span className={style.itemIcon}>
            <GithubOutlined style={{fontSize: "20px"}}/>
          </span>
          
        </div>
      </div> */}
    </div>
  )
}