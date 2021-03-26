
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/LandigWeb.css';

import logo  from'./images/logo.svg';
import { Component } from 'react';
import { Link } from 'react-scroll';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false, isNavBar:'none', className:''
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });

        this.setState({
            isNavBar: 'block'
        });

    }
    

    handleClose(){
        this.setState({
            isExpanded: false
        });

    }



    componentDidMount =() =>{
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
              this.setState({ className: "header-scrolled" });   
            }
        }else{
            if(this.state.className){
              this.setState({ className: "" });
            }
        }
       
      }

    render(){
        const { isExpanded } = this.state;
        return (
            <div className="">
                <header id="header" className={`col-sm-12 fixed-top d-flex align-items-center header-transparent ${this.state.className}`}>
                    <div id="barra_menu" className="container d-flex justify-content-between align-items-center">

                        <div id="logo">
                            <a href="/"><img className="logoAccent" src={logo} alt="logo"/></a>
                        </div>

                        <nav id="navbar" className={`navbar ${isExpanded ? "navbar-mobile" : ""}`}>
                            <ul>
                                <li><Link activeClass="active" to="RedesSociales" onClick={this.handleClose} spy={true} smooth={true} duration={1000}>REDES SOCIALES
                                <i className="bi bi-chevron-down"></i></Link>
                                </li>
                                <li><Link activeClass="active" to="Web" onClick={this.handleClose} spy={true} smooth={true} duration={1000}>DISEÑO WEB</Link>
                                </li>
                                <li><Link activeClass="active" to="Ecommerce" onClick={this.handleClose} spy={true} smooth={true} duration={1000}>ECOMMERCE</Link>
                                </li>
                                <li><Link activeClass="active" className="nav-link scrollto" to="Embajador" onClick={this.handleClose} spy={true} smooth={true} duration={1000}>
                                    EMABAJADOR</Link>
                                </li>
                                <li>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/Accent-Digital-Agency-110173624447682" target="_blank" rel="noopener noreferrer" className="facebook">
                                            <i className="fa fa-facebook"></i></a>
                                        <a href="https://instagram.com/accentagency.ve?igshid=zgl7co1crmeb" target="_blank" rel="noopener noreferrer" className="instagram">
                                            <i className="fa fa-instagram"></i></a>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="https://wa.me/message/RHJ4Q3JG5RSPN1" 
                                            target="_blank" rel="noopener noreferrer" className="instagram">
                                            <i className="fa fa-whatsapp"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <i className="fa fa-bars mobile-nav-toggle" onClick={e => this.handleToggle(e)}></i>
                        </nav>
                    </div>
                    
                </header>
            </div>
        );
    }
}

export default Header;