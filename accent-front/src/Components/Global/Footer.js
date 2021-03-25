
import './css/Footer.css';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <div className="">

        <footer id="footer" className="footer color-bg">
            <div className="footer-bottom">
                <div className="container-accent">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-center">

                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                <h3>Accent Digital Agency</h3>
                                <p><strong>Valencia.</strong>Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral.</p>
                            </div>

                            
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div className="social-links">
                                    <a href="https://www.facebook.com/Accent-Digital-Agency-110173624447682" target="_blank" rel="noopener noreferrer" className="facebook">
                                        <i className="fa fa-facebook"></i></a>
                                    <a href="https://instagram.com/accentagency.ve?igshid=zgl7co1crmeb" target="_blank" rel="noopener noreferrer" className="instagram">
                                        <i className="fa fa-instagram"></i></a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=584126917617&text=Hola,%20Accent%20estoy%20interesado%20en%20su%20servicio." 
                                    target="_blank" rel="noopener noreferrer" className="whatsapp"><i className="fa fa-whatsapp"></i></a>
                                </div>
                            </div>

                            <div id="footer-det" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                    <div className="module-heading">
                                        <h4 className="module-title">PROGRAMACIÓN</h4>
                                    </div>
                                    

                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Páginas Web">Páginas Web</span></li>
                                            <li><span title="E-Commerce">E-Commerce</span></li>
                                            <li><span title="Landing Page">Landing Page</span></li>
                                            <li><span title="App Móviles">App Móviles</span></li>
                                            <li><span title="App Web">Aplicaciones Web</span></li>
                                            <li><span title="Software">Software</span></li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                    <div className="module-heading">
                                        <h4 className="module-title">REDES SOCIALES</h4>
                                    </div>

                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Instagram">Instagram</span></li>
                                            <li><span title="Facebook">Facebook</span></li>
                                            <li><span title="Twitter">Twitter</span></li>
                                            <li><span title="TikTok">TikTok</span></li>
                                        </ul>
                                    </div>
                                </div>


                                <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                    <div className="module-heading">
                                        <h4 className="module-title">DISEÑO GRÁFICO</h4>
                                    </div>


                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Logos">Logos</span></li>
                                            <li><span title="Branding">Branding</span></li>
                                            <li><span title="Flyers">Flyers</span></li>
                                            <li><span title="Gigantografía">Gigantografía</span></li>
                                        </ul>
                                    </div>
                                </div>


                                <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div className="module-heading">
                                        <h4 className="module-title">FOTOGRAFÍA</h4>
                                    </div>

                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Foto Producto">Foto Producto</span></li>
                                            <li><span title="Gastronomía">Gastronomía</span></li>
                                            <li><span title="Retratos">Retratos</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-bar">
                <div className="container">
                    <div className="col-xs-12 col-sm-12 no-padding copyright">&copy; Copyright 2021 Accent. </div>
                </div>
            </div>
        </footer>

    </div>

    
  );
}

export default Footer;