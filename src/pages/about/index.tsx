import { useRouter } from "next/router";


export default function AboutMe() {
  const router = useRouter()
  console.log(router)
  return(
    <div>about</div>
  )
}

export const getStaticProps = (ctx: any) => {
  return {
    props: {
      pageTitle: "关于我"
    }
  }
}