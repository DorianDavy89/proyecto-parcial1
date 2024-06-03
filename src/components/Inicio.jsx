import React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo1 from '../imagenes/_19850dc1-c22c-4629-a862-f2e4853ec30e.jpg';
import '../styles/EstilosInicio.css';



function Inicio() {

    const [containerActive, setContainerActive] = useState(false);

    // Función para activar el contenedor
    const activateContainer = () => {
        setContainerActive(true);
    };

    // Función para desactivar el contenedor
    const deactivateContainer = () => {
        setContainerActive(false);
    };

    return (

        <div className="cuerpo-inicio">
            <div className="titulo">
                <label>Device Doctor</label>
            </div>
            <br />
            <Container class={`container ${containerActive ? 'active' : ''}`}>
                {/*<div class="form-container sign-up">
                    <FormControl className="form">
                        <h1>Crear Cuenta</h1>
                        <div class="social-icons">
                            <Link href="#" className="icon"><GoogleIcon sx={{ color: '#bc5090' }} /></Link>
                            <Link href="#" className="icon"><FacebookIcon sx={{ color: '#bc5090' }} /></Link>
                            <Link href="#" className="icon"><GitHubIcon sx={{ color: '#bc5090' }} /></Link>
                            <Link href="#" className="icon"><InstagramIcon sx={{ color: '#bc5090' }} /></Link>
                        </div>
                        <span>O Usa tu Email para Registrarte</span>
                        <br />
                        <input id="email-singup" type="email" placeholder="Email" />
                        <br />
                        <input id="nombre-singup" type="text" placeholder="Nombre" />
                        <br />
                        <input id="password-singup" type="password" placeholder="Password" />
                        <br />
                        <div className="button-sing">
                            <Button className="sing" variant="contained">Crear<AccountBoxIcon sx={{ ml: 1 }} /></Button>
                        </div>

                    </FormControl>
    </div>*/}

                <div class="form-container sign-in">
                    <FormControl className="form">
                        <h1>Iniciar Sesion</h1>
                        <div class="social-icons">
                            <Link href="#" className="icon"><GoogleIcon sx={{ color: '#ff6361' }} /></Link>
                            <Link href="#" className="icon"><FacebookIcon sx={{ color: '#ff6361' }} /></Link>
                            <Link href="#" className="icon"><GitHubIcon sx={{ color: '#ff6361' }} /></Link>
                            <Link href="#" className="icon"><InstagramIcon sx={{ color: '#ff6361' }} /></Link>
                        </div>
                        <span>O Usa tu User/Password</span>
                        <br />
                        <input id="email-login" type="text" placeholder="User" />
                        <br />
                        <input id="password-login" type="password" placeholder="Password" />
                        <br />
                        <Link href="#" className="forget" underline="none" fontWeight={'bold'}
                            color={"#fff"} fontSize={'12px'}>Has Olvidado tu Password?</Link>
                        <br />
                        <div className="button-sing">
                            <Button href="/registro" className="sing" variant="contained" color="success" >Login<LoginIcon sx={{ ml: 1 }} /></Button>
                        </div>
                    </FormControl>
                </div>

                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <div className="contenedor-imagen">
                                <img src={logo1} alt="" width="400"></img>
                            </div>
                            <br />
                            <h1>Bienvenido de Regreso!</h1>
                            <p>Usa tus Credenciales para Loguearte</p>
                            <Button
                                variant="contained"
                                class="hidden"
                                id="login"
                                onClick={deactivateContainer}>
                                Login
                            </Button>
                        </div>

                        <div class="toggle-panel toggle-right">
                            <div className="contenedor-imagen">
                                <img src={logo1} alt="" width="400"></img>
                            </div>
                            <br />
                            <h1>Hola, Amigo!</h1>
                            <p>Bienvenido de Regreso</p>

                            {/*<Button
                                variant="contained"
                                class="hidden"
                                id="register"
                                onClick={activateContainer}>
                                Crear
</Button>*/}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );

}
export default Inicio;