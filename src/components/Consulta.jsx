import React from "react";
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from "react-image-gallery";
import AddCommentIcon from '@mui/icons-material/AddComment';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/EstilosConsulta.css';

function Consulta() {

    return (
        <body>
            <Container>
                <div className="titulo-pagina">
                    <div className="icono-salir">
                        <Link href="#" className="icon-salir" ><LogoutIcon sx={{ fontSize: 35, color: '#ffa600' }} /></Link>
                    </div>
                    <div className="name-logo">
                        <h1>Device Doctor</h1>
                        <br />
                    </div>
                </div>

                <section className="consulta">
                    <div className="contenido-consulta">
                        <h2>Progreso Reparacion</h2>
                        <div className="fila">
                            <div className="col izquierda">
                                <h3>Datos</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="datos" id="datos" readOnly></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                                <h3>Accesorios</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="accesorios" id="accesorios" readOnly></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col derecha">
                                <h3>Falla o Requerimiento</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="falla" id="falla" readOnly></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <h3>Estado del Equipo</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="estado" id="estado" readOnly></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </body>
    );
}

export default Consulta;