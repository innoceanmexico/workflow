import Link from 'next/link'
import logo from '../components/logo'
import Layout from '../components/layout'
import UncontrolledDiagram from '../components/charts/diagrama'


export default function Flujos() {
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
            <span style={{color: '#f0582a'}}>[</span>FLUJOS DE TRABAJO<span style={{color: '#f0582a'}}>]</span>
          </span>
        </h2>
        <hr/>
        <UncontrolledDiagram />
      </div>
    </Layout>
  )
}
