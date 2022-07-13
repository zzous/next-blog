import { Provider } from 'react-redux';
import store from '@/store';

import Layout from 'components/Layout'
import 'public/styles/resets.css'
import 'public/styles/common.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
