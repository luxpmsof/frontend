import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import Layout from '../component/layout';

const MyApp =  ({ Component, pageProps }) => {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
