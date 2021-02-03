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
        <hr />
        {logo}
        <h2>
          <span>
            <span style={{ color: '#f0582a' }}>[</span> DIGITAL DEVELOPMENT - PROYECTOS INNOCEAN MÉXICO<span style={{ color: '#f0582a' }}>]</span>
          </span>
        </h2>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src="images/logo-kia.jpg" class="card-img-top" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                <div className="card-body">
                  <h2 className="card-title">KIA</h2>
                  <hr/>
                  <h4>LINKS</h4>
                  <p>https://www.kia.com/</p>
                  <p>https://www.apartatukia.com/</p>
                  <p>https://www.kia.com.mx/</p>
                  <h4>APPS</h4>
                  <p>CHATBOX</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="images/logo-hyundai.jpg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                <div className="card-body">
                  <h2 className="card-title">HYUNDAI</h2>
                  <hr/>
                  <h4>LINKS</h4>
                  <p>https://www.hyundai.com.mx/</p>
                  <h4>SERVICES</h4>
                  <p>BACKEND</p>
                  <p>ADOBE SCOPE</p>
                  <p>IWN & APLIC</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="images/logo-cinsa.jpg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                <div className="card-body">
                  <h2 className="card-title">CINSA</h2>
                  <hr/>
                  <h4>LINKS</h4>
                  <p>https://www.cinsa.com.mx/</p>
                  <h4>SERVICES</h4>
                  <p>UX / UI</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="images/logo-santaanita_negro.png" className="img-fluid" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" style={{width: '200px', margin: '0 auto'}} />
                <div className="card-body">
                  <h2 className="card-title">SANTA ANITA</h2>
                  <hr/>
                  <h4>LINKS</h4>
                  <p>http://www.santaanita.com.mx/</p>
                  <h4>SERVICES</h4>
                  <p>UX / UI</p>
                  <p>DESARROLLO / PROPUESTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
