import {
  Props,
  ArticleItem
} from "@interface/interfaces"

import { useRouter } from "next/router"
import style from "./blog-list.module.scss"




export default function BlogList(props: Props) {

  const blogList:[ArticleItem] = props.blogList
  const router = useRouter()

  const handlerBlogItem = (item: ArticleItem) => {
    
    // console.log(item, router)
    router.push(`/article/${item.id}`)
  }
  

  return(
    <div className={style.blogList}>
      {
        blogList.map((ele, i) => (
          <div
            className={[
              style.blogItem,
              i % 2 === 0 ? style.itemRow : style.itemRowReverse].join(" ")
            }
            key={ele.id}
            onClick={ () => handlerBlogItem(ele)}>
            <div className={style.itemBlur}>
              <img src={ele.cover_image} alt={ele.title} />
            </div>
            <div className={style.itemLeft}>
              <img src={ele.cover_image} alt={ele.title} />
            </div>
            <div className={style.itemRight}>
              <div className={style.blogTitle}>{ele.title}</div>
              <div className={style.blogIntroduce}>{ele.introduce}</div>
              <div className={style.blogInfo}>
                <span className={style.date}>
                  <i className="icon-tip__blog icon-date"></i>
                  { ele.created_time }
                </span>
                <div style={{float: "right"}}>
                  <span className={style.readCount}>
                    <i className="icon-tip__blog icon-readCount"></i>
                    { ele.read_count}阅读
                  </span>
                  <span className={style.tags}>
                    <i className="icon-tip__blog icon-tag"></i>
                    {ele.tag}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

