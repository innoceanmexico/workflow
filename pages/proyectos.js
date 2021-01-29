import Link from 'next/link'
import logo from '../components/logo'
import Layout from '../components/layout'

export default function Proyectos() {
  return (
    <Layout>
      <div className="proceso">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <span className="lnr lnr-arrow-left"></span>
        </Link>
        <hr/>
        {logo}
        <h2>
          <span>
            <span style={{color: '#f0582a'}}>[</span> DIGITAL DEVELOPMENT PROYECTOS<span style={{color: '#f0582a'}}>]</span>
          </span>
        </h2>
        <hr/>
        <div className="marcas">
          <div>
            <hr/>
            <h2>KIA</h2>
            <hr/>
            <h3>URL: https://www.kia.com/</h3>
            <h3>URL: https://www.kia.com.mx/</h3>
          </div>
          <div>
            <hr/>
            <h2>HYUNDAI</h2>
            <hr/>
            <h3>URL: https://www.hyundai.com.mx/</h3>
          </div>
        </div>
        <div className="marcas">
          <div>
            <hr/>
            <h2>COMEX</h2>
            <hr/>
            <h3>URL: https://www.kia.com/</h3>
            <h3>URL: https://www.kia.com.mx/</h3>
          </div>
          <div>
            <hr/>
            <h2>CINSA</h2>
            <hr/>
            <h3>URL: https://www.hyundai.com.mx/</h3>
          </div>
        </div>
        <div className="marcas">
          <div>
            <hr/>
            <h2>SANTA ANITA</h2>
            <hr/>
            <h3>URL: https://www.kia.com/</h3>
            <h3>URL: https://www.kia.com.mx/</h3>
          </div>
          <div>
            <hr/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
