import Layout from '../src/components/Layout'
import '../styles/globals.css'
import '../styles/common.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
