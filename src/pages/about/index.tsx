import { useRouter } from "next/router";
import style from "./about.module.scss";


export default function AboutMe() {
  const router = useRouter()
  console.log(router)
  return(
    <div className={style.aboutWrap}>
      <div className={style.about1}>
        <h1 className={style.aboutTitle}>个人简介</h1>
        <div className={style.aboutCard}>
          <p className={style.subTitle}>isimon</p>
          <p>记仇的天蝎座 ? 非计算机专业, base北京, 毕业半跨界在FrontEnd的路上越走越远...</p>
          <p>来自碳水的天堂 ? 陕西, 羊肉泡馍, 凉皮肉夹馍, biangbiang面, 不要太香...</p>
          <p>我要把你筑进兵马俑里, 因为我是浪漫的陕西人, 哈哈哈哈</p>
        </div>
        <div className={style.aboutCard}>
          <p className={style.subTitle}>天蝎座性格</p>
          <p>外冷内热型, 喜欢独处, 向往自由, 又时候会比较极端, 记仇? 对我来说睡一觉就好了, 哈哈哈</p>
          <p>需要目标, 不然会有点无所事事, 有目标就不会轻易放手, 不达到目的誓不罢休</p>
        </div>
        <div className={style.aboutCard}>
        <p className={style.subTitle}>摄影爱好者</p>
          <p>索尼大法, 喜欢用镜头记录生活的美好, 人文, 风光, 建筑... 周末没事就出去扫街, 有大佬带带我...</p>
          <p>不过我还是喜欢一个人出去拍拍, 哈哈哈</p>
        </div>
      </div>
      <div className={style.about2}>
        <h1 className={style.aboutTitle}>关于小站</h1>
        <div className={style.aboutCard}>
          <p className={style.subTitle}>技术栈</p>
          <p>前端: next.js 使用react的服务端渲染框架, 方便SEO</p>
          <p>后端: nest.js 使用nodejs的号称对标spring的服务端开发框架 哈哈哈...</p>
          <p>数据库: mysql</p>
          <p>其他: nginx, pm2, </p>
          <p>纯手工打造, 体验一把全栈工程师的快乐? </p>
          <p className={style.subTitle}>服务器</p>
          <p>从腾讯云迁移到阿里云, 顺便改版了博客, 重构了技术栈, 算是边学习边开发... 真棒!</p>
        </div>
      </div>
      <div className={style.about2}>
        <h1 className={style.aboutTitle}>联系我</h1>
        <p>邮箱: isimon1114@163.com</p>
        <p>或者留言都可以</p>
      </div>
      <div className={style.about2}>
        <h1 className={style.aboutTitle}>站主其他联系方式</h1>
        <div>
          <p><a href="https://juejin.cn/user/1239904846876189" target="__blank">掘金</a></p>
          <p><a href="https://segmentfault.com/u/isimon123" target="__blank">思否</a></p>
          <p><a href="https://github.com/SimonLee6" target="__blank">github</a></p>
          <p>欢迎关注</p>
        </div>
      </div>
      <div className={style.about2}>
        <h1 className={style.aboutTitle}>版权声明</h1>
        <div>
          <p>
            若无特别说明, 本站所属内容均为原创, 并遵循
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="__blank">署名-非商业性使用-相同方式共享 4.0 国际</a>
            协议，版权归本人所有，转载请注明来源、链接，并使用相同方式共享。
          </p>
        </div>
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