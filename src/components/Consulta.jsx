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

    const imagenes = [
        {
            original: "https://picsum.photos/id/866/1600/900",
            thumbnail: "https://picsum.photos/id/866/150/80"
        },

        {
            original: "https://picsum.photos/id/867/1600/900",
            thumbnail: "https://picsum.photos/id/867/150/80"
        }

    ];

    return (
        <body>
            <Container className="container-consulta">
                <div className="titulo-pagina">
                    <div className="icono-salir">
                        <Link href="#" className="icon-salir" ><LogoutIcon sx={{ fontSize: 35, color: '#ffa600' }} /></Link>
                    </div>
                    <div className="name-logo">
                        <h1>Device Doctor</h1>
                        <br />
                    </div>
                </div>
                <div className="contenido-izq">
                    <br />
                    <h2>Progreso de Reparación</h2>
                    <br />
                    <Container>
                        <div className="vzl-fotos">
                            <ImageGallery
                                items={imagenes}
                                showPlayButton={false}
                            />
                            <br />
                        </div>
                    </Container>
                </div>

                <div className="contenido-der">
                    <br />
                    <h1>Descripcion</h1>
                    <Container>
                        <div className="descripcion-comentario">
                            <label for="descripcion1" id="descripcion1">1- Lorem</label>
                            <br />
                            <label for="descripcion2" id="descripcion2">2- Lorem</label>
                            <br />
                            <label for="descripcion3" id="descripcion3">3- Lorem</label>
                            <br />
                            <br />
                            <div className="comentario">
                                <textarea name="comentario" id="comentario" placeholder="Comentario" style={{ marginRight: '10px' }}></textarea>
                                <Button className="btn-comentario" variant="contained" color="secondary"><AddCommentIcon /></Button>
                            </div>
                            <br />
                        </div>
                    </Container>
                </div>
            </Container>

        </body>
    );
}

export default Consulta;