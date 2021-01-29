import Link from 'next/link'
import logo from '../components/logo'
import Layout from '../components/layout'

export default function Data() {
  return (
    <Layout>
      <div className="proceso">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <span class="lnr lnr-arrow-left"></span>
        </Link>
        <hr/>
        {logo}
        <h2>
          <span>
            <span style={{color: '#f0582a'}}>[</span> ANÁLISIS DE DATOS<span style={{color: '#f0582a'}}>]</span>
          </span>
        </h2>
        <hr/>
        <div className="marcas">
          <div>
            <hr/>
            <h2><span className="lnr lnr-arrow-right"></span> TEALIUM</h2>
            <hr/>
            <h3>URL: https://tealium.com/</h3>
            <h4>Unify your data</h4>
            <p>Connected organizations know their customers, identify untapped opportunities, and deliver incredible customer experiences.</p>
            <h4>Customer Data Hub</h4>
            <p>Unite your tools and teams with universally-accessible, real-time customer data.</p>
          </div>
          <div>
            <hr/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
