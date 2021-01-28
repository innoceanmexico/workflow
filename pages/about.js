import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="about">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <img src="images/logo.png" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
        </Link>
        <div className="texto">
          <h2>INNOCEAN WORLDWIDE</h2>
          <h3>DIGITAL DEVELOPMENT MÉXICO</h3>
          <hr/>
          <p><b>INNOCEAN</b> Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados.</p>
          <p>Propuesta de flujos de trabajo para el área de <b>DIGITAL DEVELOPMENT</b> de <b>INNOCEAN MÉXICO</b>.</p>
        </div>
        <div className="links">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> INICIO</a>
          </Link>
          <Link href="/proceso" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> PROCESO</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> PRESUPUESTO</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> FLUJOS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> MAPAS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> DIAGRAMAS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span class="lnr lnr-plus-circle"></span> TIMELINE</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
