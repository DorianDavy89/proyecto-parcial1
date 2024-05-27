import React from "react";
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from "react-image-gallery";
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
        },

        {
            original: "https://picsum.photos/id/868/1600/900",
            thumbnail: "https://picsum.photos/id/868/150/80"
        }
    ];

    return (
        <body>
            <div className="contenido-izq">
                <h1>Bienvenido</h1>
                <Container>
                    <div className="vzl-fotos">
                        <ImageGallery
                            items={imagenes}
                            showPlayButton = {false}
                        />
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
                        <textarea name="comentario" id="comentario" placeholder="Comentario"></textarea>
                        </div>
                        <br />
                    </div>
                </Container>
            </div>

        </body>
    );
}

export default Consulta;