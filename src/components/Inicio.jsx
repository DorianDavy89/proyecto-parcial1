import React from "react";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import logo1 from '../imagenes/_19850dc1-c22c-4629-a862-f2e4853ec30e.jpg';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import '../styles/EstilosInicio.css';



function Inicio() {


    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const response = await fetch('http://localhost:3200/validacionLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    contrasena
                })
            });

            const data = await response.json();

            if (response.status === 200) {
                    if (data.tipoUsuario === 'administrador') {
                        Swal.fire({
                            icon: "success",
                            title: "Perfecto",
                            text: "Credenciales Correctas!",
                            footer: 'Bienvenido Administrador'
                          });
                        navigate('/registro/');
                    }
                    else if (data.tipoUsuario === 'cliente') {
                        Swal.fire({
                            icon: "success",
                            title: "Perfecto",
                            text: "Credenciales Correctas!",
                            footer: 'Bienvenido Cliente'
                          });        
                        navigate(`/consulta/${data.idUsuario}/${data.requerimientoUsuario}/
                            ${data.accesoriosUsuario}/${data.estadoEquipoUsuario}/${data.pagoUsuario}/
                            ${data.nombreUsuario}`);
                    }
                
            }
            else if (response.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Credenciales incorrectas!",
                    footer: 'Vuelve a Revisar'
                  });
                
            }
        } catch (error) {
            setMensaje('Error al iniciar sesión');
        }
    };

    useEffect(() => {
        if (mensaje) {
            alert(mensaje);
        }
    }, [mensaje]);

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
                        <input id="user-login" type="text" placeholder="Usuario" value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} />
                        <br />
                        <input id="password-login" type="password" placeholder="Contraseña" value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)} />
                        <br />
                        <Link href="#" className="forget" underline="none" fontWeight={'bold'}
                            color={"#fff"} fontSize={'12px'}>Has Olvidado tu Password?</Link>
                        <br />
                        <div className="button-sing">
                            <Button className="sing" variant="contained" color="success" onClick={handleLogin} >Login<LoginIcon sx={{ ml: 1 }} /></Button>
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