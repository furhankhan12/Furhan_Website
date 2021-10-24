import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '../styles/globals.css'
import Layout from '../components/Layout'
import 'intersection-observer'

//https://furhan-website.vercel.app/

function MyApp({ Component, pageProps }) {
 return( 
  <Layout>
 <Component {...pageProps} />
  </Layout>
 )
}

export default MyApp
