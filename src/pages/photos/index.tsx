
export default function Photos() {
  return(
    <div>照片</div>
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