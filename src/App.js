import React from 'react';
import './style2.scss';

import logo from './Assets/imagenes/logo.svg';
import mascotas from './Assets/imagenes/mascotas.jpg';
import gato1 from './Assets/imagenes/347.jpg';
import perrogato from './Assets/imagenes/perro-y-gato.jpg';
import btn0 from './Assets/imagenes/btn0.svg';
import btn1 from './Assets/imagenes/btn1.svg';
import perropel from './Assets/imagenes/756803-22.jpg';
import perrocons from './Assets/imagenes/756802-11.jpg';
import consultas from './Assets/imagenes/consultas.svg';
import vacunacion from './Assets/imagenes/vacunacion.svg';
import analisis from './Assets/imagenes/analisis.svg';
import peluque from './Assets/imagenes/peluquerias.svg';
import pensiones from './Assets/imagenes/pensiones.svg';
import certificados from './Assets/imagenes/certificados.svg';
import tito from './Assets/imagenes/Tito.jpg';
import icn_what from './Assets/imagenes/icn_whatsapp.png';
import icn_mail from './Assets/imagenes/icn_mail.png';
import logoDF from './Assets/imagenes/Logo-web-white.png';


function App() {
  return (
    <div className="container-fluid">
        <div id="cnBarraNav">
            <Barranav />
        </div>
        
        <div id="contenido">
            <div id="homeSlide">
                <Carrousel />
            </div>
            <div id="promos">
                <Promociones />
            </div>
            <div id="servicios">
                <Servicios />
            </div>
            <div id="acerca">
                <Acerca />
            </div>
            <div id="contacto">
                <Contacto />
            </div>
        </div>
    </div>
  );
}


function Barranav(props) {
    return(
    <nav className="navbar navbar-expand-md fixed-top bg-light navbar-light" id="navbar">
        <div className="logo">
            <a className="navbar-brand" href="#" id="navbarbrand"><img src={logo} alt="Consultas a domicilio" /></a>
        </div>
  <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navb">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="navbar-collapse collapse justify-content-end" id="navb">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavbarTgl
                    firslst={1}
                    href="#promos"
                    text="Promociones" />
              </li>
              <li className="nav-item">
                <NavbarTgl
                    firslst={0}
                    href="#servicios"
                    text="Servicios" />
              </li>
              <li className="nav-item">
                <NavbarTgl
                    firslst={0}
                    href="#acerca"
                    text="Acerca" />
              </li>
              <li className="nav-item">
                <NavbarTgl
                    firslst={2}
                    href="#contacto"
                    text="Contacto" />
              </li>
            </ul>
        </div>
    </nav>
);
}

class NavbarTgl extends React.Component {
    
constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWinDim = this.updateWinDim.bind(this);
}

componentDidMount() {
  this.updateWinDim();
  window.addEventListener('resize', this.updateWinDim);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWinDim);
}

updateWinDim() {
  this.setState({ width: window.innerWidth, 
                 height: window.innerHeight });
}

render() {
    const wwidth = this.state.width;
    
    if (wwidth < 768) { // TABLET
        return(
            <RndNavbar
                disp={1}
                index={this.props.firslst}
                href={this.props.href}
                text={this.props.text} />
        );
    } else { // DESKTOP
        return(
            <RndNavbar
                disp={0}
                index={this.props.firslst}
                href={this.props.href}
                text={this.props.text} />
        );
    }
}
}

function RndNavbar(props) {

if (props.disp === 0) { // DESKTOP
    return <a className="nav-link" href={props.href}>{props.text}</a>;
} else { // TABLET
if (props.index === 1) { //primer item
    return <span className="navbar-toggler" data-toggle="collapse" data-target="#navb"><a className="nav-link" id="pr" href={props.href}>{props.text}</a></span>;
        
} else if (props.index === 0) { //item intermedio
    return <span className="navbar-toggler" data-toggle="collapse" data-target="#navb"><a className="nav-link" href={props.href}>{props.text}</a></span>;
    
} else if (props.index === 2) { //último item
    return <span className="navbar-toggler" data-toggle="collapse" data-target="#navb"><a className="nav-link" id="ul" href={props.href}>{props.text}</a></span>;
}
}
}


class Carrousel extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            elementos: 3,
            elactivo: [true, false, false]
        };
      this.hBclick = this.hBclick.bind(this);
  }
    
    componentDidMount() {
        this.setTimer();
    }
    
    setTimer(){
        this.timerID = setInterval(
          () => this.tick(),
          8000
        );
    }

    componentWillUnmount() {
        this.clearTimer();
    }
    
    clearTimer() {
        clearInterval(this.timerID);
    }

    tick() {
        //buscar el elemento true dentro del array y devolver index
        var elActivo = this.state.elactivo.indexOf(true);
        const newarray = this.state.elactivo.map(x => false);
        const elementos = this.state.elementos;
        
        //por cada tick pasar al siguiente elemento y hacer
        //efecto opacity
        if (!(elActivo + 1 > elementos - 1)) {
            elActivo++;
        } else {
            elActivo = 0;
        }
        newarray[elActivo] = true;
        this.setState({elactivo: newarray});
    }
    
    hBclick(e) {
        //creo un array nuevo y lo seteo con el id
        var newarray = this.state.elactivo.map(x => false);
        newarray[e] = true;
        this.setState({ elactivo: newarray });

        //Reiniciar timer
        this.clearTimer();
        this.setTimer();
    }

render() {
    const imgarr = [mascotas, gato1, perrogato];
    const titarr = ["ATENCIÓN PROFESIONAL A DOMICILIO", 
                    "32 AÑOS DE EXPERIENCIA", 
                    "PENSIÓN DE MASCOTAS"];
    const parrarr = ["Realizamos consultas profesionales a domicilio para su comodidad y la de su mascota. Trabajamos en Capital Federal y Zona Norte.", 
                     "Cuidando la salud de su mascota con amor y dedicación, realizando consultas generales, urgencias, vacunaciones y análisis clínicos.", "Cuidamos a su mascota dandole la seguridad y el cariño que se merece para que se sienta como en casa."];
    const elact = this.state.elactivo.indexOf(true);

    return(
        <div id="cnCarr">
        <ElemCarr
            img={imgarr[elact]}
            tit={titarr[elact]} 
            parr={parrarr[elact]} />

        <BotoneraCarr 
            cbotones={this.state.elementos}
            botactivo={this.state.elactivo}
            onClickBut={(index) => this.hBclick(index)} />
        </div>
    );
}
}

function ElemCarr(props) {
    return(
        <div className="cnelemcarr">
            <div className="row" id="rowcarr">
                <div className="col-md" id="imgcarr">
                    <div className="imgElim">
                        <img src={props.img} alt="Atención profesional a domicilio" />
                    </div>
                </div>
                <div className="col-md" id="coltitparr">
                    <div className="titpar">
                        <h2>{props.tit}</h2>
                        <p>{props.parr}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BotoneraCarr(props) {
    
const botones = props.botactivo.map((item, index) => {
    return(
    <BtnBotonera
        key={index}
        bact={item}
        onButClick={() => props.onClickBut(index)} />
    );
    });

return(
    <div id="cnbotonera">
        {botones}
    </div>
);
}

function BtnBotonera(props) {
    
return(
    <button className="btnbotonera" onClick={props.onButClick}>
        <img src={props.bact ? 
            btn1 : btn0} alt="Botón" />
    </button>
);
}


function Promociones(props) {

return(
  <div id="cnPromos">
  <div className="row">
    <div className="col-md" id="titulo">
        <h1>PROMOCIONES</h1>
    </div>
  </div>
    <ElemPromos flipped={false}
        titulo="BAÑO Y PELUQUERÍA" 
        parrafo="La belleza de su mascota es nuestra prioridad. Ofrecemos descuentos en baños y peluquerías, comuníquese con nosotros y pida su turno." 
        imgPath={perropel} />
    <ElemPromos flipped={true}
        titulo="CONSULTA Y VACUNACIÓN" 
        parrafo="La salud de su mascota es nuestra prioridad. Ofrecemos descuentos en consultas a domicilio y vacunación, comuníquese con nosotros y pida un turno." 
        imgPath={perrocons} />
    </div>
);
}

class ElemPromos extends React.Component {

constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, 
                 height: window.innerHeight });
}

render() {
    //Si no está flippeado y el ancho de la ventana es > a 1086
    const winwidth = this.state.width;
    
    if (!this.props.flipped && (winwidth > 1086)) {
    return(
        <div className="row" id="elempromos">
            <div className="col-md" id="titparbot">
            <div className="titPromos">
                <h2>{this.props.titulo}</h2>
            </div>
            <div className="parrPromos">
                <p>{this.props.parrafo}</p>
            </div>
            <div className="botSolic">
                <a href="#contacto" class="btn btn-primary">SOLICITAR TURNO</a>
            </div>
            </div>
            <div className="col-md" id="imgpromos">
                <div className="imgPromos">
                    <img src={this.props.imgPath} alt="Promociones" />
                </div>
            </div>
        </div>
    );
    } else {
    return(
        <div className="row" id="elempromos">
            <div className="col-md" id="imgpromos">
                <div className="imgPromos">
                    <img src={this.props.imgPath} alt="Atención profesional a domicilio" />
                </div>
            </div>
            <div className="col-md" id="titparbot">
                <div className="titPromos">
                    <h2>{this.props.titulo}</h2>
                </div>
                <div className="parrPromos">
                    <p>{this.props.parrafo}</p>
                </div>
                <div className="botSolic">
                    <a href="#contacto" class="btn btn-primary">SOLICITAR TURNO</a>
                </div>
            </div>
        </div>
    );
    }
}
}


function Servicios(props) {

return(
    <div id="cnServicios">
    <div className="row">
        <div className="col-md" id="titulo">
            <h1>SERVICIOS</h1>
        </div>
    </div>
    <div className="row" id="cnelemserv">
    <ElemServ
        imgsrc={consultas}
        titulo="CONSULTAS"
        parrafo="Realizamos consultas profesionales a domicilio en la comodidad de su hogar. En Capital Federal y Zona Norte." />
    <ElemServ
        imgsrc={vacunacion}
        titulo="VACUNACIÓN"
        parrafo="Cuidamos la salud de su mascota con las mejores vacunas disponibles en el mercado." />
    <ElemServ
        imgsrc={analisis}
        titulo="ANÁLISIS CLÍNICOS"
        parrafo="Realizamos análisis clínicos. Para estudios más especificos los derivamos a laboratorios especializados." />
    <ElemServ
        imgsrc={peluque}
        titulo="PELUQUERÍAS"
        parrafo="Mantener el pelaje de su mascota no solo es una cuestión estética sino también de salud.
Ofrecemos baños, cortes de pelo y de uñas." />

    <ElemServ
        imgsrc={pensiones}
        titulo="PENSIONES"
        parrafo="Cuidamos a su mascota dandole la seguridad y el cariño que se merece para que se sienta como en casa." />
    <ElemServ
        imgsrc={certificados}
        titulo="CERTIFICADOS"
        parrafo="Realizamos certificados para que su mascota viaje sin problemas." />
    </div>
    </div>
);
}

function ElemServ(props) {
    return(
        <div className="col-md" id="elemserv">
            <div className="elemImg">
                <img src={props.imgsrc} alt="Items" />
            </div>
            <h3>{props.titulo}</h3>
            <p>{props.parrafo}</p>
        </div>
    );
}


function Acerca(props) {

return(
    <div id="cnAcerca">
        <div className="row">
            <div className="col-md" id="titulo">
                <h1>ACERCA</h1>
            </div>
        </div>
        <div className="row" id="cnelimg">
        <ElimgTp
            img={tito}
            tit="32 AÑOS AL SERVICIO DE SU MASCOTA" 
            parr="Cuidando la salud de su mascota con amor y dedicación, realizando consultas generales, urgencias, vacunaciones, operaciones, análisis clínicos, baños y peluquerías." />
        </div>
        <div className="row">
            <div className="col-md-6" id="cnMaria">
            <h2>MARÍA GABRIELA BALZOLA, MÉDICA VETERINARIA.</h2>
            <p>Gabriela estudió y se recibió en la Facultad de Ciencias Veterinarias perteneciente a la Universidad de Buenos Aires. Desde entonces trabajó en veterinarias con otros profesionales y de forma autónoma.</p>
            </div>
            <div className="col" id="colfantasma"></div>
        </div>
    </div>
);
}

function ElimgTp(props) {
    return(
        <div className="row" id="rowelem">
            <div className="col-md" id="imgelim">
                <div className="imgElim">
                    <img src={props.img} alt="Imágen" />
                </div>
            </div>
            <div className="col-md" id="titpar">
                <h2>{props.tit}</h2>
                <p>{props.parr}</p>
            </div>
        </div>
    );
}


class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '',
            feedback: '',
            lblstyle: {
                display: 'none',
                margin: '0 0 0 17px'
            }
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeMail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangeArea(event) {
        this.setState({ feedback: event.target.value });
    }

    handleSubmit (event) {
        const serviceId = 'gaby_gmail';
        const templateId = 'template_sFXuicab';
        var validMail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        console.log(validMail);
        // Validar datos
        if (this.state.name !== '') {
            if (this.state.email !== '' && validMail) {
                if (this.state.feedback !== '') {
                    this.sendFeedback(serviceId, templateId, 
                        { message_html: this.state.feedback, from_name: this.state.name, 
                            reply_to: this.state.email, from_mail: this.state.email, to_name: 'Gabriela' });
                } else {
                    // Completar campo mensaje
                    this.setState(prevState => ({
                    lblstyle: {                  
                            ...prevState.lblstyle,    
                            display: 'none'      
                        }
                    }));
                }
            } else {
                // Completar campo email
                this.setState(prevState => ({
                lblstyle: {                  
                        ...prevState.lblstyle,    
                        display: 'none'      
                    }
                }));
            }
        } else {
            // Completar campo nombre
            this.setState(prevState => ({
            lblstyle: {                  
                    ...prevState.lblstyle,    
                    display: 'none'      
                }
            }));
        }
    }

    sendFeedback (serviceId, templateId, variables) {
        window.emailjs.send(serviceId, templateId,
            variables
            ).then(res => {
                console.log('Email enviado correctamente!');
                // Limpiar input boxes y mostrar mensaje
                this.setState({ name: '' });
                this.setState({ email: '' });
                this.setState({ feedback: '' });
                this.setState(prevState => ({
                    lblstyle: {                  
                        ...prevState.lblstyle,    
                        display: 'inline-block'      
                    }
                }));
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Error al enviar el mail: ', err))
    }

render(){
return(
    <div>
        <div id="cnContacto">
        <div className="row">
        <div className="col-md" id="titulo">
            <h1>CONTACTO</h1>
        </div>
        </div>
        <div className="row">
            <div className="col-md" id="subtit">
                <p>Podés contactarme o solicitar un turno a través de los siguientes medios:</p>
            </div>
        </div>
        <div className="row" id="cndatosyform">
            <div className="col-md" id="cnDatos">
                <p><strong>DRA. MARÍA GABRIELA BALZOLA</strong></p>
                <ul className="list-group list-group-flush">
                    <Dato 
                        icnsrc={icn_what}
                        txt="11 3615-0796" />
                    <DatoLnk 
                        icnsrc={icn_mail}
                        href="mailto: m.balzola@gmail.com"
                        txtLnk="m.balzola@gmail.com" />
                </ul>
            </div>
            <div className="col-md" id="cnForm">
                <form className="form-contacto" id="form-contacto">
                    <div className="form-group row" id="formgroup">
                        <label htmlFor="name" class="col-md-2 col-form-label">Nombre: </label>
                        <div className="col-md-10">
                            <input className="form-control inp-name" 
                            type="text" 
                            name="name" 
                            required
                            onChange={this.handleChangeName}
                            value={this.state.name} />
                        </div>
                    </div>
                    <div className="form-group row" id="formgroup">
                        <label htmlFor="email" class="col-md-2 col-form-label">E-mail: </label>
                        <div className="col-md-10">
                            <input type="email" 
                                className="form-control inp-mail" 
                                name="email"
                                aria-describedby="emailHelp"
                                required
                                onChange={this.handleChangeMail}
                                value={this.state.email} />
                        </div>
                    </div>
                    <div className="form-group row" id="formgroup">
                        <label htmlFor="msg" class="col-md-2 col-form-label">Mensaje: </label>
                        <div className="col-md-10">
                            <textarea className="form-control inp-text" rows="6" 
                                name="msg" 
                                onChange={this.handleChangeArea}
                                required
                                value={this.state.feedback} />
                        </div>
                        <div className="col-md-2" id="frmcolbut"></div>
                        <div className="col-md-10" id="frmcolbut">
                            <input className="btn btn-primary btn-send-form" 
                                type="submit" 
                                value="Enviar" 
                                onClick={this.handleSubmit} />
                            <label htmlFor="msg" class="col-form-label" 
                                style={this.state.lblstyle}>¡Mensaje enviado!</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

        <div id="cnFooter">
            <div className="row">
            <div className="col-md">
            <p>© Copyright 2020 Consultas a domicilio • Todos los derechos reservados • Diseño: <a href="http://dragonflystudio.com.ar"><img src={logoDF} alt="Dragonfly Studio" /></a></p>
            </div>
            </div>
        </div>
    </div>
);
}
}

function Dato(props) {
    return(
        <div className="row" id="cnDato">
            <div className="col-1">
                <div className="imgDato">
                    <img src={props.icnsrc} alt="Icon" />
                </div>
            </div>
            <div className="col-11">
                <p>{props.txt}</p>
            </div>
        </div>
    );
}

function DatoLnk(props) {
    return(
        <div className="row" id="cnDato">
            <div className="col-1">
                <div className="imgDato">
                    <img src={props.icnsrc} alt="Icon" />
                </div>
            </div>
            <div className="col-11">
                <a href={props.href}>{props.txtLnk}</a>
            </div>
        </div>
    );
}

export default App;
