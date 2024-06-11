import React from "react";
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Swal from 'sweetalert2';
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/EstilosConsulta.css';

function Consulta() {

    const { idUsuario, requerimientoUsuario, accesoriosUsuario, estadoEquipoUsuario, pagoUsuario, nombreUsuario } = useParams();

    const [comentario, setComentario] = useState('');

    const actualizarComentario = async () => {

        try {
            const response = await fetch(`http://localhost:3200/actualizarComentario/${idUsuario}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    COMENTARIO: comentario
                })
            });

            const data = await response.json();
            if (response.ok) {

                Swal.fire({
                    icon: "success",
                    title: "Perfecto",
                    text: "Comentario enviado!",
                    footer: 'Puede Seguir Revisando'
                });
            }
            else if (response.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salio mal!",
                    footer: 'Vuelve a Revisar'
                });

            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salio mal!",
                footer: 'Vuelve a Revisar'
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actualizarComentario();
        setTimeout(() => {
        }, 2000);
        
    };

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
                                <h3><DataThresholdingIcon style={{ fontSize: 40, color: '#bc5090' }} /> Datos</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="datos" id="datos" readOnly value={nombreUsuario}></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                                <h3><HeadsetMicIcon style={{ fontSize: 40, color: '#bc5090' }} /> Accesorios</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="accesorios" id="accesorios" readOnly value={accesoriosUsuario}></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                                <h3><PaymentIcon style={{ fontSize: 40, color: '#bc5090' }} /> Informacion Pago</h3>
                                <div className="item izq">
                                    <h4>Detalle</h4>
                                    <textarea name="pago" id="pago" readOnly value={pagoUsuario}></textarea>
                                    <div class="conectori">
                                        <div class="circuloi"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col derecha">
                                <h3><AppSettingsAltIcon style={{ fontSize: 40, color: '#bc5090' }} /> Falla o Requerimiento</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="falla" id="falla" readOnly value={requerimientoUsuario}></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <h3><ConstructionIcon style={{ fontSize: 40, color: '#bc5090', }} /> Estado de Reparacion</h3>
                                <div className="item der">
                                    <h4>Detalle</h4>
                                    <textarea name="estado" id="estado" readOnly value={estadoEquipoUsuario}></textarea>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <h3><CommentIcon style={{ fontSize: 40, color: '#bc5090' }} /> Comentario</h3>
                                <div className="item der">
                                    <h4>Comentario</h4>
                                    <div className="zona-comentario">
                                        <textarea name="comentario" id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                                        <Button className="enviarCom" variant="contained" onClick={handleSubmit} ><SendIcon /></Button>
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