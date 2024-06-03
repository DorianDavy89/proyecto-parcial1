import { React, useState } from "react";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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

            <div className="modal-registroN">
                <Modal open={openNuevo}>
                    <div className="formulario-nuevo">
                        <Box sx={style}>
                            <div className="lado-iz">
                                <FormControl>
                                    <h2>Nuevo Cliente</h2>
                                    <br />
                                    <input type="text" name='usuario' placeholder="Ingrese Usuario" />
                                    <br />
                                    <input type="text" name='contrasena' placeholder="Ingrese Password" />
                                    <br />
                                    <input type="text" name='cedula' placeholder="Ingrese Cedula" />
                                    <br />
                                    <input type="text" name='nombre' placeholder="Ingrese Nombre" />
                                    <br />
                                    <input type="text" name='marcatelefono' placeholder="Ingrese Marca Telefono" />
                                    <br />
                                    <div className="botones-formnuevo">
                                        <Button className="btn-registrar" variant="contained" color="success">
                                            Ingresar
                                        </Button>
                                        <Button className="btn-cancelarRegistro" variant="contained" color="info"
                                            onClick={() => setOpenNuevo(false)}>
                                            Cancelar
                                        </Button>
                                    </div>
                                </FormControl>
                                <div className="lado-derecho">
                                    <PhoneAndroidIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                    <EmojiEmotionsIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                    <BadgeIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                    <PasswordIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                    <AssignmentIndIcon className="icono" style={{ fontSize: 40, color: '#bc5090' }} />
                                </div>
                            </div>

                        </Box>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Registro;