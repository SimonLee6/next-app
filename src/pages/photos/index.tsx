import style from "./photos.module.scss";


export default function Photos() {
  return(
    <div className={style.photosWrap}>
      <div className={style.title}>欢迎大佬指点, 不喜勿喷哈~</div>
      <div className={style.photo1}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216173816.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo1}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216173727.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo1}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216173812.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo1}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216173800.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo1}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216174804.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo2}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216174317.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo2}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216174321.jpg" alt="" />
      </div>
      <p></p>
      <div className={style.photo2}>
        <img src="https://blog-simon.oss-cn-beijing.aliyuncs.com/photos/20211216174811.jpg" alt="" />
      </div>
    </div>
  )
}

export const getStaticProps = (ctx: any) => {
  return {
    props: {
      pageTitle: "随手拍",
      pageSubTitle: "用照片记录生活"
    }
  }
}