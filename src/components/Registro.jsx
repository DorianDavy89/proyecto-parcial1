import { React, useState } from "react";
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { FormControl } from "@mui/material";
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PasswordIcon from '@mui/icons-material/Password';
import BadgeIcon from '@mui/icons-material/Badge';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HeadphonesBatteryIcon from '@mui/icons-material/HeadphonesBattery';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import '../styles/EstilosRegistro.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    backgroundColor: '#042940',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Registro() {

    const [openNuevo, setOpenNuevo] = useState(false);

    const openModal = (tipo) => {
        (tipo === 'Insertar') && setOpenNuevo(true);
    };


    return (
        <div className="cuerpo-registro">
            <Container>
                <div className="contenido-cabecera">
                    <div className="icono-salir">
                        <a href="/"><LogoutIcon sx={{ fontSize: 35, color: '#ffa600' }} /></a>
                    </div>
                    <div className="name-logo">
                        <h1>Device Doctor</h1>
                    </div>
                </div>
                <div className="contenido-subtitulo">
                    <div className="titulo-cliente">
                        <h1>Registro Cliente</h1>
                    </div>
                    <br />
                    <div className="boton-nuevo">
                        <Button className="btn-nuevo"
                            variant="contained"
                            color="success"
                            onClick={() => openModal('Insertar')}
                            endIcon={<CreateNewFolderIcon />}>
                            New
                        </Button>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="contenido-tabla">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">Usuario</StyledTableCell>
                                    <StyledTableCell align="center">Cedula</StyledTableCell>
                                    <StyledTableCell align="center">Nombre</StyledTableCell>
                                    <StyledTableCell align="center">Modelo Telefono</StyledTableCell>
                                    <StyledTableCell align="center">Acciones</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="center">01</StyledTableCell>
                                    <StyledTableCell align="center">user1</StyledTableCell>
                                    <StyledTableCell align="center">123</StyledTableCell>
                                    <StyledTableCell align="center">Dorian</StyledTableCell>
                                    <StyledTableCell align="center">Realme 7</StyledTableCell>
                                    <StyledTableCell align="center">Editar</StyledTableCell>
                                </StyledTableRow>


                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Alert variant="filled" severity="success" color='primary'>
                    </Alert>
                    <br />
                </div>
            </Container>


            {/* Modal registro cliente */}

            <div className="modal-registroN">
                <Modal >
                    <Box sx={style}>
                        <div className="cabecera-registro">
                            <h2>Nuevo Cliente</h2>
                        </div>
                        <br />
                        <div className="formulario-nuevo">
                            <FormControl>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <AssignmentIndIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="usuario" label="Usuario" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <PasswordIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="contra" label="Contraseña" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <BadgeIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="cedula" label="Cedula" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <EmojiEmotionsIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="nombre" label="Nombre" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2, }}>
                                    <AlternateEmailIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="email" label="Email" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <WhatsAppIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="whatsapp" label="Whatsapp" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <PhoneAndroidIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="marca" label="Marca Telefono" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>
                            </FormControl>
                            <br />
                            <br />
                        </div>
                        <div className="botones-formnuevo">
                            <Button className="btn-registrar" variant="contained" color="success">
                                Ingresar
                            </Button>
                            <Button className="btn-cancelarRegistro" variant="contained" color="info"
                                onClick={() => setOpenNuevo(false)}>
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>

            {/* Final modal registro cliente */}


            {/* Modal editar cliente */}

            <div className="modal-editar">
                <Modal open={openNuevo}>
                    <Box sx={style}>
                        <div className="cabecera-editar">
                            <h2>Editar Cliente</h2>
                        </div>
                        <br />
                        <div className="formulario-editar">
                            <FormControl>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <AssignmentIndIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="usuario" label="Usuario" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <PasswordIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="contra" label="Contraseña" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <BadgeIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="cedula" label="Cedula" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <EmojiEmotionsIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="nombre" label="Nombre" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <AlternateEmailIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="email" label="Email" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <WhatsAppIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="whatsapp" label="Whatsapp" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                    <PhoneAndroidIcon className="icono" style={{ fontSize: 40, color: '#bc5090', marginRight: '8px' }} />
                                    <TextField id="marca" label="Marca Telefono" variant="filled"
                                        sx={{ input: { color: 'black', backgroundColor: '#fff', width: '200px', height: '10px' } }} />
                                </Box>
                            </FormControl>
                            <br />
                            <br />
                        </div>
                        <div className="botones-formnuevo">
                            <Button className="btn-registrar" variant="contained" color="success">
                                Editar
                            </Button>
                            <Button className="btn-cancelarRegistro" variant="contained" color="info"
                                onClick={() => setOpenNuevo(false)}>
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>

            {/* Final modal editar cliente */}

            {/* Modal registrar mantenimiento */}

            <div className="modal-config">
                <Modal >
                    <Box sx={style}>
                        <div className="cabecera-config">
                            <h2>Mantenimiento</h2>
                        </div>
                        <div className="iconos-config">
                            <div className="lado-iz">
                                <AppSettingsAltIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                <HeadphonesBatteryIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                <EngineeringIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                <CreditCardIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                            </div>
                        </div>
                        <div className="formulario-config">
                            <div className="lado-der">
                                <FormControl>
                                    <br />
                                    <input type="text" name='usuario' placeholder="Ingrese Requerimiento" />
                                    <input type="text" name='contrasena' placeholder="Ingrese Accesorios" />
                                    <input type="text" name='cedula' placeholder="Ingrese Estado Equipo" />
                                    <input type="text" name='nombre' placeholder="Ingrese Pago" />
                                </FormControl>
                            </div>
                        </div>
                        <div className="botones-formconfig">
                            <Button className="btn-registrarconfig" variant="contained" color="success">
                                Ingresar
                            </Button>
                            <Button className="btn-cancelarconfig" variant="contained" color="info"
                                onClick={() => setOpenNuevo(false)}>
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>

            {/* Final modal registrar mantenimiento */}

        </div>
    );
}

export default Registro;