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
          <p>Propuesta de flujos de trabajo para el área de <b>DIGITAL DEVELOPMENT</b> - <b>INNOCEAN MÉXICO</b>.</p>
        </div>
        <div className="links">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a><span className="lnr lnr-plus-circle"></span> HOME</a>
          </Link>
          <Link href="/proyectos" as={process.env.BACKEND_URL + '/proyectos'}>
            <a><span className="lnr lnr-plus-circle"></span> PROYECTOS</a>
          </Link>
          <Link href="/proceso" as={process.env.BACKEND_URL + '/proceso'}>
            <a><span className="lnr lnr-plus-circle"></span> DESARROLLO</a>
          </Link>
          <Link href="/tools" as={process.env.BACKEND_URL + '/tools'}>
            <a><span className="lnr lnr-plus-circle"></span> HERRAMIENTAS</a>
          </Link>
          <Link href="/data" as={process.env.BACKEND_URL + '/data'}>
            <a><span className="lnr lnr-plus-circle"></span> DATA ANÁLISIS</a>
          </Link>
          <Link href="/flujos" as={process.env.BACKEND_URL + '/flujos'}>
            <a><span className="lnr lnr-plus-circle"></span> FLUJOS</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
