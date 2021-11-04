
import { Wrapper } from "@styledComponents";


function Error({ statusCode }) {
  return (
    <Wrapper>404</Wrapper>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error