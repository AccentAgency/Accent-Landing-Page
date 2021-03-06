import React, { Component } from 'react';
import './css/LandigWeb.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@material-ui/core/Modal';
import Slider from "react-elastic-carousel";
import Header from './Header';
import Item from './Item';
import ItemImg from './Item-2';
import ItemMob from './Item-mobile';
import config from './config/config';
import axios from "axios";
import swal from 'sweetalert';
import * as emailjs from 'emailjs-com';


import ReactImageAppear from 'react-image-appear';
import { BackgroundImage } from 'react-image-and-background-image-fade'
import logo from './images/RedesSociales/logo.png';

//Banner
import banner1 from './images/banner/banner01.png';
import banner2 from './images/banner/banner2.png';
import banner3 from './images/banner/banner3.png';
import banner4 from './images/banner/banner4.png';

//Imagenes de Pagina Web
import pagina1 from './images/PaginaWeb/Pagina1.png';
import pagina4 from './images/PaginaWeb/Pagina4.png';
import pagina5 from './images/PaginaWeb/Pagina5.png';
import pagina6 from './images/PaginaWeb/Pagina6.png';
import pagina7 from './images/PaginaWeb/Pagina7.png';

import paginaTlf from './images/PaginaWeb/Telefono/PaginaTlf-1.png';
import paginaTlf2 from './images/PaginaWeb/Telefono/PaginaTlf-2.png';
import paginaTlf3 from './images/PaginaWeb/Telefono/PaginaTlf-3.png';
import paginaTlf4 from './images/PaginaWeb/Telefono/PaginaTlf-4.png';

//Imagenes Red social
import social1 from './images/RedesSociales/social1.png';
import social2 from './images/RedesSociales/social2.png';
import social3 from './images/RedesSociales/social3.png';
import social4 from './images/RedesSociales/social4.png';

import logo1 from './images/RedesSociales/logo1.svg';
import logo3 from './images/RedesSociales/logo3.svg';
import logo4 from './images/RedesSociales/logo4.svg';
import $ from 'jquery';

//Imagenes de E-commerce
import ecommerce1 from './images/Ecommerce/pagina1.png';
import ecommerce2 from './images/Ecommerce/pagina2.png';
import ecommerce3 from './images/Ecommerce/pagina3.png';


import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Iconos Landing embajador
import icono01 from './images/icono01.svg';
import icono02 from './images/icono02.svg';
import icono03 from './images/icono03.svg';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll:1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 1, itemsToScroll: 1 }
];

//Axios
const axiosInstance = axios.create({
    baseURL: config.backURL
});

axiosInstance.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
};

//Validaciones REGEX
const validEmailRegex = RegExp(
    /^(([^<>(),;:\s@]+(\.[^<>();:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i
);

const validPhone = RegExp(
    /^[04|02]{2}([\d]{2}[-]*){3}[\d]{3}$/
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};




class LandingPageWeb extends Component {

    constructor(props)
    {
        super(props);
        this.state={name:'',email:'',phone:'', tipoForm:'', display:'none', form:'Seleccione servicio interesado',
            open: false,
            errors: {
                name:'',
                email:'',
                phone:''
            }
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event){
        const target = event.target;
        const val = event.target.value;
        const name = target.name;
        this.setState({
            [name]: val
        });
    }

    handleClose(){
        this.setState({...this.state.open, open:false});
    }

    handleForm(value){
        this.setState({...this.state.open, open:true});
        this.setState({...this.state.form, form:value});
    }

    
    scroll(){
        $(window).on('scroll', function () {
            $('.ot-counter').each(function() {
                var pos_y   = $(this).offset().top - window.innerHeight;
                var $this   = $(this).find('.num'),
                    countTo = $this.attr('data-to'),
                    during  = parseInt( $this.attr('data-time') ),
                    topOfWindow = $(window).scrollTop();

                if ( pos_y < topOfWindow ) {    
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                    {
                        duration: during,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                }
            });
        });
    }


    handleChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
        [name]: value
        });

        //Validaciones
        let errors = this.state.errors;
    
        switch (name) {
        case 'name': 
            errors.name = 
            value.length === 0
                ? 'Favor ingresar un nombre v??lido.'
                : '';
            break;

            case 'email': 
            errors.email = 
                validEmailRegex.test(value)
                ? ''
                : 'Correo electr??nico inv??lido.';
            break;

            case 'phone':
            errors.phone =
                validPhone.test(value)
                ? ''
                : 'Ingrese un n??mero de telef??no v??lido.';
            break;

            default:
            break;
        }
    }    

    handleSubmit(e){
        e.preventDefault();
        var servicio = '';

        if(this.state.form === "P??gina Web"){
            servicio = "Web";
        }
        else if(this.state.form === "Redes Sociales"){
            servicio = "Social";
        }
        else if(this.state.form === "P??gina de Ecommerce"){
            servicio = "Ecommerce";
        }
        else if (this.state.form === "Embajador"){
            servicio = "Embajador";
        }
        else if (this.state.form === "Fotograf??a"){
            servicio = "Fotografia";
        }
        else{
            servicio = "Todos";
        }

        if(!this.state.name || !this.state.email || !this.state.phone){
            swal('Formulario Incompleto', 'Favor rellene los datos indicados para enviar su solicitud', 'warning');
        }
        else{
            if(validateForm(this.state.errors)) {
                this.setState({display:'flex'});
                axiosInstance.post('/sendLanding'+servicio, {
                    'name' : this.state.name,
                    'email': this.state.email,
                    'phone': this.state.phone
                }).then(res => {
                    this.setState({display:'none'});
                    swal('??Gracias por elegir Accent!', 'Pronto nos estaremos comunicando contigo', 'success');
                    this.setState({...this.state.open, open:false});
                    let templateParams = {
                        from_name: this.state.name,
                        servicio: this.state.form,
                        phone: this.state.phone,
                        email: this.state.email
                    }
                    emailjs.send("service_iqpr47s","template_lxhgbgh", templateParams, 'user_POUyNgSUrDp594hHzu7XQ');
                    this.resetForm();

                }).catch(error => {
                    this.setState({display:'none'});
                    swal('Ha ocurrido un error', 'Favor intente nuevamente', 'warning');
                })
            }
            else{
                this.setState({display:'none'});
                swal('Formulario Incompleto', 'Verifique que no exista campo de advertencia antes de enviar su solicitud', 'warning');
            }
        }
    }

    resetForm(){
        this.setState({
            name:'',
            email:'',
            phone:'',
            tipoForm:''
        })
    }


    componentDidMount = () =>{
        this.scroll();
    }
    


    render(){
        AOS.init();
        const {errors} = this.state;
        return(
            <div className="">
                <Header></Header>
                <div className="loader-page" style={{display: this.state.display}}>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
                <div className="whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=584244052247&text=Hola,%20Accent%20estoy%20interesado%20en%20su%20servicio." 
                        className="float" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp my-float"></i>
                    </a>
                </div>

                <div className="float-inf">
                    <div className="" target="_blank" rel="noopener noreferrer" onClick={this.handleForm.bind(this, "Todos los servicios")}>
                        <i className="fa fa-info my-float"></i>
                    </div>
                </div>

                
                <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                data-aos='fade-down' data-aos-delay="100">
                <div style={{ position: 'absolute', width: '400', backgroundColor:'white'}} className="modal-main">
                    <div className="contenedor-formulario">
                        <h4>??Estamos listos para ayudarte!</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input name="name" maxLength="20" type="text" className="formControl" placeholder="Nombre/Apellido" value={this.state.name}
                                onChange={this.handleChange}></input>
                                {errors.name.length > 0 && 
                                <span className='error'>{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <input name="email" maxLength="35" type="email" className="formControl" placeholder="E-mail" value={this.state.email}
                                onChange={this.handleChange}></input>
                                {errors.email.length > 0 && 
                                <span className='error'>{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input name="phone" maxLength="11" type="phone" className="formControl" placeholder="N??mero de Telefono" value={this.state.phone}
                                onChange={this.handleChange}></input>
                                {errors.phone.length > 0 && 
                                <span className='error'>{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <select name="form" className="formControl" value={this.state.form} onChange={this.handleSelect}>
                                    <option>Seleccione servicio interesado</option>
                                    <option>P??gina Web</option>
                                    <option>Redes Sociales</option>
                                    <option>P??gina de Ecommerce</option>
                                    <option>Embajador</option>
                                    <option>Fotograf??a</option>
                                    <option>Todos los servicios</option>
                                </select>

                            </div>

                            <button className="btn_form">ENVIAR</button>
                            
                        </form>
                    </div>
                </div>

                </Modal>
                <div id="Web" className="LandiPageWeb">
                    <div id="hero" className="banner banner_web" style={{backgroundImage:`url(${banner1})`}}>
                        <div className="contenedor-imagen">
                            <article>
                                <div className="texto">
                                    <h2><b>Mu??strale a tus clientes</b> la informaci??n que necesitan de una forma <b>m??s profesional.</b></h2>
                                </div>
                            </article>
                            <button className="btn_info"  onClick={this.handleForm.bind(this, "P??gina Web")}>??SOLIC??TALA <span className="bolder">YA!</span></button>
                        </div>
                    </div>

                    <main id="main">
                        <section id="about">
                            <div className="container" data-aos="fade-up">
                                <div className="row about-container">
                                    <div className="col-lg-12 content order-lg-1 order-2">
                                        <h2 className="title" data-aos="zoom-in" data-aos-delay="100">Comprometidos con <strong>Nuestros Clientes</strong></h2>

                                    </div>
                                </div>
                            </div>

                            <div className="page-image col-lg-12 col-md-12 col-sm-12">
                                <div className="container-accent">
                                    <div id="Pagina1" className="portafolio col-md-4 col-sm-12">
                                        <div className="card">
                                            <ReactImageAppear placeholderClass="imagen" src={pagina1} alt="pagina" animationDuration="1s"></ReactImageAppear>
                                        </div>
                                    </div>

                                    <div id="Pagina2" className="portafolio col-md-4 col-sm-12">
                                        <div className="card">
                                            <ReactImageAppear placeholderClass="imagen" src={pagina6} alt="pagina-2"  animationDuration="1s"></ReactImageAppear>
                                        </div>
                                    </div>

                                    <div id="Pagina3" className="portafolio col-md-4 col-sm-12">
                                        <div className="card">
                                            <ReactImageAppear placeholderClass="imagen" src={pagina7} alt="pagina-3" animationDuration="1s"></ReactImageAppear>
                                        </div>
                                    </div>
                                </div>


                                <div className="container-accent">
                                    <div id="Pagina1" className="portafolio col-md-5 offset-md-1 ">
                                        <div className="card2">
                                            <ReactImageAppear placeholderClass="imagen" src={pagina4} alt="pagina-4" animationDuration="1s"></ReactImageAppear>
                                        </div>
                                    </div>

                                    <div id="Pagina2" className="portafolio col-md-5 offset-md-accent">
                                        <div className="card2">
                                            <ReactImageAppear placeholderClass="imagen" src={pagina5} alt="pagina-5" animationDuration="1s"></ReactImageAppear>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div id="contMobile" className="container">
                                <div className="tab-content outer-top-xs">

                                    <Slider className="" breakPoints={breakPoints}>
                                        <ItemMob className="PapaJhons">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-mobile" src = {pagina1} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemMob>

                                        <ItemMob className="MovilPos">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-mobile" src={paginaTlf3} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemMob>

                                        <ItemMob className="CPV">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                            <BackgroundImage className="Contenedor-mobile" src= {paginaTlf4} lazyLoad>
                                            </BackgroundImage>
                                            </div>
                                        </ItemMob>

                                        <ItemMob className="CPV">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-mobile" src={paginaTlf} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemMob>

                                        <ItemMob className="CPV">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-mobile" src= {paginaTlf2} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemMob>
                                    </Slider>
                                    
                                </div> 
                            </div>

                        </section>
                    </main>
                
                </div>

                
                <div id="RedesSociales" className="LandingRedesSociales">
                    <section id="hero" className="banner banner_social" style={{backgroundImage:`url(${banner2})`}}>
                        <div className="contenedor-imagen">
                            <article>
                                <div className="texto">
                                    <h2><b>Atrae m??s clientes</b>a trav??s de tus <b>redes sociales.</b></h2>
                                </div>
                            </article>
                            <button className="btn_info"  onClick={this.handleForm.bind(this, "Redes Sociales")}>??SOLIC??TALA <span className="bolder">YA!</span></button>
                        </div>
                    </section>
      
                    
                    <main id="main">
                        <section id="about">
                            <div className="container" data-aos="fade-up">
                                <div className="row about-container">
                                    <div className="col-lg-12 content order-lg-1 order-2">
                                        <h2 className="title">Comprometidos con <strong>Nuestros Clientes</strong></h2>
                                    </div>
                                </div>
                            </div>


                            <div className="container">
                                <div className="tab-content outer-top-xs">

                                    <Slider className="" breakPoints={breakPoints}> 
                                        <Item className="PapaJhons">
                                            <div className="col-md-12 col-sm-12 tarjeta-card">
                                                <div className="Contenedor">
                                                    <div className="imagen_socialMedia" style={{backgroundImage:`url(${social2})`}}>
                                                    </div>

                                                    <div className="txt_information">
                                                        <img className="logo_empresa" src={logo} alt="PapaJhons"></img>
                                                        <div className="socialmedia">
                                                            <a href="https://instagram.com/papajohnsvln?igshid=1eor1cx2k7rti" 
                                                            target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                                            <a href="https://www.facebook.com/papajohnsvln/" 
                                                            target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                                            <span>@papajhons.vln</span>
                                                        </div>

                                                        <div className="estadisticas col-md-12">

                                                            <div id="margen_xs" className="col-md-6">
                                                                <h2 className="num">1.7K</h2>
                                                                <p>Publicaciones</p>
                                                            </div>
                                                                
                                                            <div className="col-md-6 ot-counter">
                                                                <h2>31K</h2>

                                                                <p>Seguidores</p>
                                                            </div>
                                                        </div>

                                                        <div className="Servicios">
                                                            <h4>SERVICIOS</h4>
                                                            <div className="icon-serv">
                                                                <a href="https://instagram.com/papajohnsvln?igshid=1eor1cx2k7rti" 
                                                                target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>

                                                                <a href="https://www.facebook.com/papajohnsvln/" 
                                                                target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>

                                                                <a href="https://linktr.ee/Papa.Johns.Valencia" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                <i className="fa fa-whatsapp"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>

                                        <Item className="MovilPos">
                                            <div className="col-md-12 col-sm-12 tarjeta-card">
                                                <div className="Contenedor">
                                                    <div className="imagen_socialMedia" style={{backgroundImage:`url(${social3})`}}>
                                                    </div>

                                                    <div className="txt_information">
                                                        <img className="logo_empresa" src={logo3} alt="MovilPos"></img>
                                                        <div className="socialmedia">
                                                            <a href="https://instagram.com/movilpos.ve?igshid=cp2nn9jvl3k8" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                <i className="fa fa-instagram"></i>
                                                            </a>

                                                            <span>@movilpos.ve</span>

                                                            <a href="https://www.facebook.com/Movilpos.ve/" 
                                                                    target="_blank" rel="noopener noreferrer">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>

                                                            <span>Movil Pos Venezuela</span>
                                                        </div>

                                                        <div className="estadisticas col-md-12">
                                                            <div className="col-md-6">
                                                                <h2>119</h2>
                                                                <p>Publicaciones</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h2>2.6 K</h2>
                                                                <p>Seguidores</p>
                                                            </div>
                                                        </div>

                                                        <div className="Servicios">
                                                            <h4>SERVICIOS</h4>
                                                            <div className="icon-serv">
                                                                <a href="https://instagram.com/movilpos.ve?igshid=cp2nn9jvl3k8" 
                                                                    target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i>
                                                                </a>

                                                                <a href="https://www.facebook.com/Movilpos.ve/" 
                                                                    target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i>
                                                                </a>

                                                                <a href="https://linktr.ee/Movilposvenezuela"> 
                                                                    <i className="fa fa-whatsapp"></i>
                                                                </a>   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>

                                        <Item className="CPV">
                                            <div className="col-md-12 col-sm-12 tarjeta-card">
                                                <div className="Contenedor">
                                                    <div className="imagen_socialMedia" style={{backgroundImage:`url(${social4})`}}>
                                                    </div>

                                                    <div className="txt_information">
                                                        <img className="logo_empresa" src={logo4} alt="CPV"></img>
                                                        <div className="socialmedia col-md-12">

                                                            <a href="https://instagram.com/cpv_val?igshid=1l6ns2le88thu" 
                                                                target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i>
                                                            </a>
                                                            <span>@cpv_val</span>

                                                            <a href="https://www.facebook.com/Centro-Producci??n-Venezuela-106993551354230/" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>    

                                                            <span>Centro Produccion Venezuela</span>
                                                        </div>

                                                        <div className="estadisticas col-md-12">
                                                            <div className="col-md-6">
                                                                <h2>107</h2>
                                                                <p>Publicaciones</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h2>1.3 K</h2>
                                                                <p>Seguidores</p>
                                                            </div>
                                                        </div>

                                                        <div className="Servicios">
                                                            <h4>SERVICIOS</h4>
                                                            <div className="icon-serv">
                                                                <a href="https://instagram.com/cpv_val?igshid=1l6ns2le88thu" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa fa-instagram"></i>
                                                                </a>
                                                                
                                                                <a href="https://www.facebook.com/Centro-Producci??n-Venezuela-106993551354230/" 
                                                                target="_blank" rel="noopener noreferrer">                                                                    
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>    

                                                                <a href="https://wa.me/584144019562" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa fa-whatsapp"></i>
                                                                </a>    
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>

                                        <Item className="ReparaTuPunto">
                                            <div className="col-md-12 col-sm-12 tarjeta-card">
                                                <div className="Contenedor">
                                                    <div className="imagen_socialMedia" style={{backgroundImage:`url(${social1})`}}>
                                                    </div>

                                                    <div className="txt_information">
                                                        <img className="logo_empresa" src={logo1} alt="Repara tu punto"></img>
                                                        <div className="socialmedia">
                                                            <a href="https://instagram.com/reparatupunto.ve?igshid=1po9l59uftl44" 
                                                                target="_blank" rel="noopener noreferrer">
                                                                <i className="fa fa-instagram"></i>
                                                            </a>
                                                            
                                                            <a href="https://www.facebook.com/Reparatupuntocom-113721013826719/" 
                                                                target="_blank" rel="noopener noreferrer">                                                               
                                                                <i className="fa fa-facebook"></i>
                                                            </a> 
                                                            <span>@reparatupunto.com</span>
                                                        </div>

                                                        <div className="estadisticas col-md-12">
                                                            <div className="col-md-6">
                                                                <h2>127</h2>
                                                                <p>Publicaciones</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h2>1.4 K</h2>
                                                                <p>Seguidores</p>
                                                            </div>
                                                        </div>

                                                        <div className="Servicios">
                                                            <h4>SERVICIOS</h4>
                                                            <div className="icon-serv">
                                                                <a href="https://instagram.com/reparatupunto.ve?igshid=1po9l59uftl44" 
                                                                    target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa fa-instagram"></i>
                                                                </a>

                                                                <a href="https://www.facebook.com/Reparatupuntocom-113721013826719/" 
                                                                    target="_blank" rel="noopener noreferrer">  
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                                
                                                                <a href="https://linktr.ee/Reparatupunto.com" 
                                                                    target="_blank" rel="noopener noreferrer">                                                                      
                                                                    <i className="fa fa-whatsapp"></i>
                                                                </a>    
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>
                                    </Slider>
                                    
                                </div> 
                            </div>


                        </section>
                    </main>
                </div>


                <div id="Ecommerce" className="LandingEcommerce">
                    <section id="hero" className="banner banner-ecom" style={{backgroundImage:`url(${banner3})`}}>
                        <div className="contenedor-imagen">
                            <article>
                                <div className="texto">
                                </div>
                            </article>
                            <button className="btn_info"  onClick={this.handleForm.bind(this, "P??gina de Ecommerce")}>??SOLIC??TALA <span className="bolder">YA!</span></button>
                        </div>
                    </section>
            

                    <main id="main">
                        <section id="about">
                            <div className="container" data-aos="fade-up">
                                <div className="row about-container">
                                    <div className="col-lg-12 content order-lg-1 order-2">
                                        <h2 className="title" data-aos="zoom-in" data-aos-delay="100">Comprometidos con <strong>Nuestros Clientes</strong></h2>
                                    </div>
                                </div>
                            </div>


                            <div id="cont" className="container">
                                <div className="tab-content outer-top-xs">

                                    <Slider className="" breakPoints={breakPoints}>
                                        <ItemImg className="PapaJhons">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-page pagina1" src={ecommerce1} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemImg>

                                        <ItemImg className="MovilPos">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-page pagina2" src ={ecommerce2} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemImg>

                                        <ItemImg className="CPV">
                                            <div className="col-md-12 col-sm-12 tarjeta-img">
                                                <BackgroundImage className="Contenedor-page pagina3" src ={ecommerce3} lazyLoad>
                                                </BackgroundImage>
                                            </div>
                                        </ItemImg>
                                    </Slider>
                                    
                                </div> 
                            </div>


                        </section>
                    </main>
                </div>

                <div id="Embajador" className="LandiEmbajador">
                    <section id="hero" className="banner banner_embajador" style={{backgroundImage:`url(${banner4})`}}>
                        <div className="contenedor-imagen">
                            <article>
                                <div className="texto">
                                </div>
                            </article>
                            <button className="btn_info" onClick={this.handleForm.bind(this,"Embajador")}>??SOLIC??TALA <span className="bolder">YA!</span></button>
                        </div>
                    </section>

                    <main id="main">
                        <section id="about">
                            <div className="container" data-aos="fade-up">
                                <div className="row about-container">
                                    <div className="col-lg-12 content order-lg-1 order-2">
                                        <h2 className="title tit-embj" data-aos="zoom-in" data-aos-delay="100"><strong>BENEFICIOS</strong></h2>
                                    </div>
                                </div>
                            </div>

                            <div id="cont" className="container-accent">
                                <div id="phone-embj" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="col-xs-12 col-sm-12 col-md-4">
                                        <div className="card-1">
                                            <div id="Ingresos" className="card-embj">
                                                <div className="icono">
                                                    <ReactImageAppear placeholderClass="imagen" className="" src={icono01} alt="ingresos" animationDuration="1s"></ReactImageAppear>
                                                </div>
                                                <div className="text-info">
                                                    <h3>Incrementa tus ingresos</h3>
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>

                                    <div id="second" className="col-xs-12 col-sm-12 col-md-4">
                                        <div className="card-1">
                                            <div id="Oportunidad" className="card-embj">
                                                <div className="icono">
                                                    <ReactImageAppear placeholderClass="imagen" className="" src={icono02} alt="ingresos" animationDuration="1s"></ReactImageAppear>
                                                </div>
                                                <div className="text-info">
                                                    <h3>Oportunidad de comercializar nuestros productos digitales</h3>
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>


                                    <div id="three" className="col-xs-12 col-sm-12 col-md-4">
                                        <div className="card-1">
                                            <div id="Empresarial" className="card-embj">
                                                <div className="icono">
                                                    <ReactImageAppear placeholderClass="imagen" src={icono03} alt="ingresos" animationDuration="1s"></ReactImageAppear>
                                                </div>
                                                <div className="text-info">
                                                    <h3>Desarrollo empresarial constante como embajador de Accent</h3>
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    <h2 className="title tit-embj-ben" data-aos="zoom-in" data-aos-delay="100"><strong>Representa a</strong></h2>
                                    <div id="beneficios-embj" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <h3 className="comentario">nuestra agencia luego de realizar una etapa de entrenamiento y ser calificado</h3>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </main>  
                </div>
                  
                <Footer></Footer>
            </div>
        )
    }
}

export default LandingPageWeb;    