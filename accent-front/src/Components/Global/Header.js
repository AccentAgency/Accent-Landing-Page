
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/LandigWeb.css';

import logo  from'./images/logo.svg';
import { Component } from 'react';


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
                                <li><a href="#RedesSociales" onClick={this.handleClose}>REDES SOCIALES<i className="bi bi-chevron-down"></i></a>
                                </li>
                                <li><a href="#Web" onClick={this.handleClose}>DISEÑO WEB</a>
                                </li>
                                <li><a href="#Ecommerce" onClick={this.handleClose}>ECOMMERCE</a>
                                </li>
                                <li><a className="nav-link scrollto" href="#Embajador" onClick={this.handleClose}>EMABAJADOR</a>
                                </li>
                                <li>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/Accent-Digital-Agency-110173624447682" target="_blank" rel="noopener noreferrer" className="facebook">
                                            <i className="fa fa-facebook"></i></a>
                                        <a href="https://instagram.com/accentagency.ve?igshid=zgl7co1crmeb" target="_blank" rel="noopener noreferrer" className="instagram">
                                            <i className="fa fa-instagram"></i></a>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="https://api.whatsapp.com/send?phone=584126917617&text=Hola,%20Accent%20estoy%20interesado%20en%20su%20servicio." 
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