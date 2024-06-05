import React from "react";
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsIcon from '@mui/icons-material/Details';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaymentIcon from '@mui/icons-material/Payment';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/EstilosConsulta.css';

function Consulta() {

    return (
        <div className="cuerpo-consulta">
            <Container>
                <div className="titulo-pagina">
                    <div className="icono-salir">
                        <Link href="/" className="icon-salir" ><LogoutIcon sx={{ fontSize: 35, color: '#ffa600' }} /></Link>
                    </div>
                    <div className="name-logo">
                        <h1>Device Doctor</h1>
                    </div>
                </div>

                <section className="consulta">
                    <div className="contenido-consulta">
                        <h2>Progreso Reparacion</h2>
                        <br />
                        <div className="fila">
                            <div className="col izquierda">
                                <h3><DataThresholdingIcon style={{ fontSize: 40, color: '#bc5090'}}/> Datos</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="datos" id="datos" readOnly></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                                <h3><HeadsetMicIcon style={{ fontSize: 40, color: '#bc5090'}}/> Accesorios</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="accesorios" id="accesorios" readOnly></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                                <h3><PaymentIcon style={{ fontSize: 40, color: '#bc5090' }}/> Informacion Pago</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="pago" id="pago" readOnly></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col derecha">
                                <h3><AppSettingsAltIcon style={{ fontSize: 40, color: '#bc5090'}}/> Falla o Requerimiento</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="falla" id="falla" readOnly></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <h3><ConstructionIcon style={{ fontSize: 40, color: '#bc5090',}}/> Estado del Equipo</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="estado" id="estado" readOnly></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <h3><CommentIcon style={{ fontSize: 40, color: '#bc5090'}}/> Comentario</h3>
                                <div className="item der">
                                    <h4>Comentario</h4>
                                    <div className="zona-comentario">
                                        <textarea name="comentario" id="comentario"></textarea>
                                        <Button className="enviarCom" variant="contained"><SendIcon /></Button>
                                    </div>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </div>
    );
}

export default Consulta;