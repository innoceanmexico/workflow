import Link from 'next/link'
import Layout from '../components/layout'
import Logo from '../components/logo'

export default function Proceso() {
  return (
    <Layout>
      <div className="tools">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <span class="lnr lnr-arrow-left"></span>
        </Link>
        <hr/>
        {Logo}
        <h2>
          <span>
            <span style={{color: '#f0582a'}}>[</span> TOOLS - DIGITAL DEVELOPMENT <span style={{color: '#f0582a'}}>]</span>
          </span>
        </h2>
        <hr/>
        <div style={{ height: 500 }}>
        </div>
      </div>
    </Layout>
  )
}
