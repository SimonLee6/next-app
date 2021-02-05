import '../../styles/globals.css'
import 'antd/dist/antd.css';
import "../sass/common.scss";

import BlogContainer from "@layout/blog-container/blog-container";

function MyApp({ Component, pageProps }) {
  return (
    <BlogContainer>
      <Component {...pageProps} />
    </BlogContainer>
  )
}

export default MyApp
