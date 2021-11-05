import '../../styles/globals.css'
import 'antd/dist/antd.css';
import "../scss/common.scss";
import "@com/blog-live2d/live2d/css/live2d.css";
import BlogLive2d from "@com/blog-live2d/blog-live2d"
import BlogContainer from "@layout/blog-container/blog-container";
import BlogMiniComponent from "@com/blog-miniComponent/index";
import BlogAside from "@com/blog-aside/blog-aside"
import MainHeader from "@/layout/mainPage/mainHeader/mainHeader";

function MyApp({ Component, pageProps }) {
  return (
    <BlogContainer>
      <BlogLive2d />
      <BlogMiniComponent />
      <div className="main-page">
        <MainHeader />
        <div className="main-content">
          <div className="content-wrap"><Component {...pageProps} /></div>
          <div className="aside-wrap"><BlogAside /></div>
        </div>
        
        
      </div>
      
    </BlogContainer>
  )
}

export default MyApp
