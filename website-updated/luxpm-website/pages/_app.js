import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/style.css'
import '../public/css/responsive.css'
import ReactGA from 'react-ga';

import Layout from '../component/layout';
import React, {useEffect} from "react";

const MyApp =  ({ Component, pageProps }) => {
    React.useEffect(() => {
        ReactGA.initialize('UA-200356276-1')
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, [])

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
