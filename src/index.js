class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgpath: "./imagenes/"
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/React.createElement("div", {
      id: "cnBarraNav"
    }, /*#__PURE__*/React.createElement(Barranav, {
      imgpath: this.state.imgpath
    })), /*#__PURE__*/React.createElement("div", {
      id: "contenido"
    }, /*#__PURE__*/React.createElement("div", {
      id: "homeSlide"
    }, /*#__PURE__*/React.createElement(Carrousel, {
      imgpath: this.state.imgpath
    })), /*#__PURE__*/React.createElement("div", {
      id: "promos"
    }, /*#__PURE__*/React.createElement(Promociones, {
      imgpath: this.state.imgpath
    })), /*#__PURE__*/React.createElement("div", {
      id: "servicios"
    }, /*#__PURE__*/React.createElement(Servicios, {
      imgpath: this.state.imgpath
    })), /*#__PURE__*/React.createElement("div", {
      id: "acerca"
    }, /*#__PURE__*/React.createElement(Acerca, {
      imgpath: this.state.imgpath
    })), /*#__PURE__*/React.createElement("div", {
      id: "contacto"
    }, /*#__PURE__*/React.createElement(Contacto, {
      imgpath: this.state.imgpath
    }))));
  }

}

function Barranav(props) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-expand-md fixed-top bg-light navbar-light",
    id: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "#",
    id: "navbarbrand"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.imgpath + "logo.svg"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler navbar-toggler-left",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navb"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "navbar-collapse collapse justify-content-end",
    id: "navb"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(NavbarTgl, {
    firslst: 1,
    href: "#promos",
    text: "Promociones"
  })), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(NavbarTgl, {
    firslst: 0,
    href: "#servicios",
    text: "Servicios"
  })), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(NavbarTgl, {
    firslst: 0,
    href: "#acerca",
    text: "Acerca"
  })), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(NavbarTgl, {
    firslst: 2,
    href: "#contacto",
    text: "Contacto"
  })))));
}

class NavbarTgl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
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
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    const wwidth = this.state.width;

    if (wwidth < 768) {
      // TABLET
      return /*#__PURE__*/React.createElement(RndNavbar, {
        disp: 1,
        index: this.props.firslst,
        href: this.props.href,
        text: this.props.text
      });
    } else {
      // DESKTOP
      return /*#__PURE__*/React.createElement(RndNavbar, {
        disp: 0,
        index: this.props.firslst,
        href: this.props.href,
        text: this.props.text
      });
    }
  }

}

function RndNavbar(props) {
  if (props.disp == 0) {
    // DESKTOP
    return /*#__PURE__*/React.createElement("a", {
      className: "nav-link",
      href: props.href
    }, props.text);
  } else {
    // TABLET
    if (props.index == 1) {
      //primer item
      return /*#__PURE__*/React.createElement("span", {
        className: "navbar-toggler",
        "data-toggle": "collapse",
        "data-target": "#navb"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        id: "pr",
        href: props.href
      }, props.text));
    } else if (props.index == 0) {
      //item intermedio
      return /*#__PURE__*/React.createElement("span", {
        className: "navbar-toggler",
        "data-toggle": "collapse",
        "data-target": "#navb"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: props.href
      }, props.text));
    } else if (props.index == 2) {
      //último item
      return /*#__PURE__*/React.createElement("span", {
        className: "navbar-toggler",
        "data-toggle": "collapse",
        "data-target": "#navb"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        id: "ul",
        href: props.href
      }, props.text));
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

  setTimer() {
    this.timerID = setInterval(() => this.tick(), 8000);
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
    const elementos = this.state.elementos; //por cada tick pasar al siguiente elemento y hacer
    //efecto opacity

    if (!(elActivo + 1 > elementos - 1)) {
      elActivo++;
    } else {
      elActivo = 0;
    }

    newarray[elActivo] = true;
    this.setState({
      elactivo: newarray
    });
  }

  hBclick(e) {
    //creo un array nuevo y lo seteo con el id
    var newarray = this.state.elactivo.map(x => false);
    newarray[e] = true;
    this.setState({
      elactivo: newarray
    }); //Reiniciar timer

    this.clearTimer();
    this.setTimer();
  }

  render() {
    const imgarr = ["mascotas.jpg", "347.jpg", "perro-y-gato.jpg"];
    const titarr = ["ATENCIÓN PROFESIONAL A DOMICILIO", "32 AÑOS DE EXPERIENCIA", "PENSIÓN DE MASCOTAS"];
    const parrarr = ["Realizamos consultas profesionales a domicilio para su comodidad y la de su mascota. Trabajamos en Capital Federal y Zona Norte.", "Cuidando la salud de su mascota con amor y dedicación, realizando consultas generales, urgencias, vacunaciones y análisis clínicos.", "Cuidamos a su mascota dandole la seguridad y el cariño que se merece para que se sienta como en casa."];
    const elact = this.state.elactivo.indexOf(true);
    return /*#__PURE__*/React.createElement("div", {
      id: "cnCarr"
    }, /*#__PURE__*/React.createElement(ElemCarr, {
      img: this.props.imgpath + imgarr[elact],
      tit: titarr[elact],
      parr: parrarr[elact]
    }), /*#__PURE__*/React.createElement(BotoneraCarr, {
      imgpath: this.props.imgpath,
      cbotones: this.state.elementos,
      botactivo: this.state.elactivo,
      onClickBut: index => this.hBclick(index)
    }));
  }

}

function ElemCarr(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cnelemcarr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    id: "rowcarr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md",
    id: "imgcarr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgElim"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.img
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md",
    id: "coltitparr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "titpar"
  }, /*#__PURE__*/React.createElement("h2", null, props.tit), /*#__PURE__*/React.createElement("p", null, props.parr)))));
}

class BotoneraCarr extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const botones = this.props.botactivo.map((item, index) => {
      return /*#__PURE__*/React.createElement(BtnBotonera, {
        key: index,
        imgpath: this.props.imgpath,
        bact: item,
        onButClick: () => this.props.onClickBut(index)
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      id: "cnbotonera"
    }, botones);
  }

}

class BtnBotonera extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: "btnbotonera",
      onClick: this.props.onButClick
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.imgpath + (this.props.bact ? 'btn1.svg' : 'btn0.svg')
    }));
  }

}

class Promociones extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "cnPromos"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "titulo"
    }, /*#__PURE__*/React.createElement("h1", null, "PROMOCIONES"))), /*#__PURE__*/React.createElement(ElemPromos, {
      flipped: false,
      titulo: "BA\xD1O Y PELUQUER\xCDA",
      parrafo: "La belleza de su mascota es nuestra prioridad. Ofrecemos descuentos en ba\xF1os y peluquer\xEDas, comun\xEDquese con nosotros y pida su turno.",
      imgPath: this.props.imgpath + '756803-22.jpg'
    }), /*#__PURE__*/React.createElement(ElemPromos, {
      flipped: true,
      titulo: "CONSULTA Y VACUNACI\xD3N",
      parrafo: "La salud de su mascota es nuestra prioridad. Ofrecemos descuentos en consultas a domicilio y vacunaci\xF3n, comun\xEDquese con nosotros y pida un turno.",
      imgPath: this.props.imgpath + '756802-11.jpg'
    }));
  }

}

class ElemPromos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
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
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    //Si no está flippeado y el ancho de la ventana es > a 1086
    const winwidth = this.state.width;

    if (!this.props.flipped && winwidth > 1086) {
      return /*#__PURE__*/React.createElement("div", {
        className: "row",
        id: "elempromos"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md",
        id: "titparbot"
      }, /*#__PURE__*/React.createElement("div", {
        className: "titPromos"
      }, /*#__PURE__*/React.createElement("h2", null, this.props.titulo)), /*#__PURE__*/React.createElement("div", {
        className: "parrPromos"
      }, /*#__PURE__*/React.createElement("p", null, this.props.parrafo)), /*#__PURE__*/React.createElement("div", {
        className: "botSolic"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#contacto",
        class: "btn btn-primary"
      }, "SOLICITAR TURNO"))), /*#__PURE__*/React.createElement("div", {
        className: "col-md",
        id: "imgpromos"
      }, /*#__PURE__*/React.createElement("div", {
        className: "imgPromos"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.props.imgPath
      }))));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "row",
        id: "elempromos"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md",
        id: "imgpromos"
      }, /*#__PURE__*/React.createElement("div", {
        className: "imgPromos"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.props.imgPath
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-md",
        id: "titparbot"
      }, /*#__PURE__*/React.createElement("div", {
        className: "titPromos"
      }, /*#__PURE__*/React.createElement("h2", null, this.props.titulo)), /*#__PURE__*/React.createElement("div", {
        className: "parrPromos"
      }, /*#__PURE__*/React.createElement("p", null, this.props.parrafo)), /*#__PURE__*/React.createElement("div", {
        className: "botSolic"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#contacto",
        class: "btn btn-primary"
      }, "SOLICITAR TURNO"))));
    }
  }

}

class Servicios extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "cnServicios"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "titulo"
    }, /*#__PURE__*/React.createElement("h1", null, "SERVICIOS"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      id: "cnelemserv"
    }, /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "consultas.svg",
      titulo: "CONSULTAS",
      parrafo: "Realizamos consultas profesionales a domicilio en la comodidad de su hogar. En Capital Federal y Zona Norte."
    }), /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "vacunacion.svg",
      titulo: "VACUNACI\xD3N",
      parrafo: "Cuidamos la salud de su mascota con las mejores vacunas disponibles en el mercado."
    }), /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "analisis.svg",
      titulo: "AN\xC1LISIS CL\xCDNICOS",
      parrafo: "Realizamos an\xE1lisis cl\xEDnicos. Para estudios m\xE1s especificos los derivamos a laboratorios especializados."
    }), /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "peluquerias.svg",
      titulo: "PELUQUER\xCDAS",
      parrafo: "Mantener el pelaje de su mascota no solo es una cuesti\xF3n est\xE9tica sino tambi\xE9n de salud.\nOfrecemos ba\xF1os, cortes de pelo y de u\xF1as."
    }), /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "pensiones.svg",
      titulo: "PENSIONES",
      parrafo: "Cuidamos a su mascota dandole la seguridad y el cari\xF1o que se merece para que se sienta como en casa."
    }), /*#__PURE__*/React.createElement(ElemServ, {
      imgsrc: this.props.imgpath + "certificados.svg",
      titulo: "CERTIFICADOS",
      parrafo: "Realizamos certificados para que su mascota viaje sin problemas."
    })));
  }

}

function ElemServ(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-md",
    id: "elemserv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "elemImg"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.imgsrc
  })), /*#__PURE__*/React.createElement("h3", null, props.titulo), /*#__PURE__*/React.createElement("p", null, props.parrafo));
}

class Acerca extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "cnAcerca"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "titulo"
    }, /*#__PURE__*/React.createElement("h1", null, "ACERCA"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      id: "cnelimg"
    }, /*#__PURE__*/React.createElement(ElimgTp, {
      img: this.props.imgpath + "Tito.jpg",
      tit: "32 A\xD1OS AL SERVICIO DE SU MASCOTA",
      parr: "Cuidando la salud de su mascota con amor y dedicaci\xF3n, realizando consultas generales, urgencias, vacunaciones, operaciones, an\xE1lisis cl\xEDnicos, ba\xF1os y peluquer\xEDas."
    })), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6",
      id: "cnMaria"
    }, /*#__PURE__*/React.createElement("h2", null, "MAR\xCDA GABRIELA BALZOLA, M\xC9DICA VETERINARIA."), /*#__PURE__*/React.createElement("p", null, "Gabriela estudi\xF3 y se recibi\xF3 en la Facultad de Ciencias Veterinarias perteneciente a la Universidad de Buenos Aires. Desde entonces trabaj\xF3 en veterinarias con otros profesionales y de forma aut\xF3noma.")), /*#__PURE__*/React.createElement("div", {
      className: "col",
      id: "colfantasma"
    })));
  }

}

function ElimgTp(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    id: "rowelem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md",
    id: "imgelim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgElim"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.img
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md",
    id: "titpar"
  }, /*#__PURE__*/React.createElement("h2", null, props.tit), /*#__PURE__*/React.createElement("p", null, props.parr)));
}

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      name: 'Nombre',
      email: 'email@example.com'
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeMail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeArea(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    const templateId = 'template_sFXuicab';
    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send('gmail', templateId, variables).then(res => {
      console.log('Email enviado correctamente!');
    }) // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Error al enviar el mail: ', err));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      id: "cnContacto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "titulo"
    }, /*#__PURE__*/React.createElement("h1", null, "CONTACTO"))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "subtit"
    }, /*#__PURE__*/React.createElement("p", null, "Pod\xE9s contactarme o solicitar un turno a trav\xE9s de los siguientes medios:"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      id: "cndatosyform"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "cnDatos"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "DRA. MAR\xCDA GABRIELA BALZOLA")), /*#__PURE__*/React.createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/React.createElement(Dato, {
      icnsrc: this.props.imgpath + "icn_whatsapp.png",
      txt: "11 3615-0796"
    }), /*#__PURE__*/React.createElement(DatoLnk, {
      icnsrc: this.props.imgpath + "icn_mail.png",
      href: "mailto: m.balzola@gmail.com",
      txtLnk: "m.balzola@gmail.com"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-md",
      id: "cnForm"
    }, /*#__PURE__*/React.createElement("form", {
      className: "form-contacto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group row",
      id: "formgroup"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "name",
      class: "col-md-2 col-form-label"
    }, "Nombre: "), /*#__PURE__*/React.createElement("div", {
      className: "col-md-10"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control inp-name",
      type: "text",
      name: "name",
      onChange: this.handleChangeName
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form-group row",
      id: "formgroup"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "email",
      class: "col-md-2 col-form-label"
    }, "E-mail: "), /*#__PURE__*/React.createElement("div", {
      className: "col-md-10"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      className: "form-control inp-mail",
      name: "email",
      onChange: this.handleChangeMail
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form-group row",
      id: "formgroup"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "msg",
      class: "col-md-2 col-form-label"
    }, "Mensaje: "), /*#__PURE__*/React.createElement("div", {
      className: "col-md-10"
    }, /*#__PURE__*/React.createElement("textarea", {
      className: "form-control inp-text",
      rows: "6",
      name: "msg",
      onChange: this.handleChangeArea,
      required: true,
      value: this.state.feedback
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2",
      id: "frmcolbut"
    }), /*#__PURE__*/React.createElement("div", {
      className: "col-md-10",
      id: "frmcolbut"
    }, /*#__PURE__*/React.createElement("input", {
      className: "btn btn-primary btn-send-form",
      type: "button",
      value: "Enviar",
      onClick: this.handleSubmit
    }))))))), /*#__PURE__*/React.createElement("div", {
      id: "cnFooter"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md"
    }, /*#__PURE__*/React.createElement("p", null, "\xA9 Copyright 2020 Consultas a domicilio \u2022 Todos los derechos reservados \u2022 Dise\xF1o: ", /*#__PURE__*/React.createElement("a", {
      href: "http://dragonflystudio.com.ar"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./imagenes/Logo-web-white.png"
    })))))));
  }

}

function Dato(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    id: "cnDato"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgDato"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.icnsrc
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-11"
  }, /*#__PURE__*/React.createElement("p", null, props.txt)));
}

function DatoLnk(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    id: "cnDato"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgDato"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.icnsrc
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-11"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.href
  }, props.txtLnk)));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Web, null), document.getElementById('root'));