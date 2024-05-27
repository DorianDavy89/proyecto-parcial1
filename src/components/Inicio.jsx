import React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
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
        <body>
            <Container class={`container ${containerActive ? 'active' : ''}`}>
                <div class="form-container sign-up">
                    <FormControl className="form">
                        <h1>Crear Cuenta</h1>
                        <div class="social-icons">
                            <Link href="#" className="icon"><GoogleIcon /></Link>
                            <Link href="#" className="icon"><FacebookIcon /></Link>
                            <Link href="#" className="icon"><GitHubIcon /></Link>
                            <Link href="#" className="icon"><InstagramIcon /></Link>
                        </div>
                        <span>O Usa tu Email para Registrarte</span>
                        <TextField id="standard-basic" type="text" label="Nombre" variant="standard" />
                        <TextField id="standard-basic" type="email" label="Email" variant="standard" />
                        <TextField id="standard-basic" type="password" label="Password" variant="standard" />
                        <br />
                        <div className="button-sing">
                            <Button className="sing" variant="contained">Crear<AccountBoxIcon sx={{ ml: 1 }} /></Button>
                        </div>

                    </FormControl>
                </div>

                <div class="form-container sign-in">
                    <FormControl className="form">
                        <h1>Iniciar Sesion</h1>
                        <div class="social-icons">
                            <Link href="#" className="icon"><GoogleIcon /></Link>
                            <Link href="#" className="icon"><FacebookIcon /></Link>
                            <Link href="#" className="icon"><GitHubIcon /></Link>
                            <Link href="#" className="icon"><InstagramIcon /></Link>
                        </div>
                        <span>O Usa tu Email/Password</span>
                        <TextField id="standard-basic" type="email" label="Email" variant="standard" />
                        <TextField id="standard-basic" type="password" label="Password" variant="standard" />
                        <br />
                        <Link href="#" className="forget" underline="none">Ha Olvidado su Password?</Link>
                        <br />
                        <div className="button-sing">
                            <Button className="sing" variant="contained">Login<LoginIcon sx={{ ml: 1 }}/></Button>
                        </div>
                    </FormControl>
                </div>

                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
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
                            <h1>Hola, Amigo!</h1>
                            <p>Registrate con Algunos Datos</p>
                            <Button
                                variant="contained"
                                class="hidden"
                                id="register"
                                onClick={activateContainer}>
                                Crear
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </body>
    );

}
export default Inicio;