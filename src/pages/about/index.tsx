import { useRouter } from "next/router";
import style from "./about.module.scss";


export default function AboutMe() {
  const router = useRouter()
  console.log(router)
  return(
    <div className={style.aboutWrap}>
      <div className={style.about1}>
         <h1 className={style.aboutTitle}>自我介绍</h1>
      </div>
    </div>
  )
}

export const getStaticProps = (ctx: any) => {
  return {
    props: {
      pageTitle: "关于我",

    }
  }
}