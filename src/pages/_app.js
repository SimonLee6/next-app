import '../../styles/globals.css'
import 'antd/dist/antd.css';
import "../sass/common.scss";
import "@com/blog-live2d/live2d/css/live2d.css";
import BlogLive2d from "@com/blog-live2d/blog-live2d"
import BlogContainer from "@layout/blog-container/blog-container";


function MyApp({ Component, pageProps }) {
  return (
    <BlogContainer>
      <Component {...pageProps} />
      <BlogLive2d />
    </BlogContainer>
  )
}

export default MyApp
