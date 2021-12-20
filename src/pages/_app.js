import '../../styles/globals.css'
import 'antd/dist/antd.css';
import "../scss/common.scss";
import "@com/blog-live2d/live2d/css/live2d.css";
import BlogLive2d from "@com/blog-live2d/blog-live2d"
import BlogContainer from "@layout/blog-container/blog-container";
import BlogMiniComponent from "@com/blog-miniComponent/index";
import BlogAside from "@com/blog-aside/blog-aside"
import MainHeader from "@/layout/mainPage/mainHeader/mainHeader";
import { useRouter } from "next/router";
import App from "next/app";
import {
  QueryWebInfo
} from "@api/blogInfo.api"



function MyApp({ Component, pageProps, webInfo }) {
  console.log(pageProps, webInfo)
  const myProps = {
    ...pageProps,
    webInfo
  }
  return (
    <BlogContainer webInfo={webInfo}>
      
      {/* <BlogLive2d /> */}
      <BlogMiniComponent />
      <div className="main-page">
        <MainHeader {...myProps }/>
        <div className="main-content">
          <div className="content-wrap"><Component {...myProps} /></div>
          <div className="aside-wrap"><BlogAside {...myProps}/></div>
        </div>
      </div>
      
    </BlogContainer>
  )
}

MyApp.getInitialProps = async (appContext) => {
  try {
    let res = await QueryWebInfo()

    const appProps = await App.getInitialProps(appContext)

    console.log(res.data.data)
    return {
      ...appProps,
      webInfo: res.data.data
    }
  } catch (error) {
    return {}
  }
}

export default MyApp
