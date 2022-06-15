import Layout from 'components/Layout'
import 'public/styles/globals.css'
import 'public/styles/common.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
