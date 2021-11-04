const path = require("path")
module.exports = {
  env: {
    dev: "",
    prod: ""
  },
  redirects: async () => {
    // 重定向
    return [
      // {
      //   source: '/',
      //   destination: '/home',
      //   permanent: true,
      // },
    ]
  },
  webpack: (config, options) => {
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./pages"),
      "@util": path.resolve(__dirname, "./src/utils"),
      "@com": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@interface": path.resolve(__dirname, "./src/interfaces"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@styledComponents": path.resolve(__dirname, "./src/layout/styled-components/base.tsx"),
    }

    return config
  }
}