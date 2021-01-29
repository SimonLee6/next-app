
export default function Home() {


  const arr = [1, 2, 3]
  const res = arr.reduce(
    (prev: number[], next) => prev.concat([next + 1]),
    []
  )
  console.log(res)

  return (
    <div className="blog-app">
      
    </div>
  )
}
