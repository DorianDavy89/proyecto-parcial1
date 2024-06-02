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
                        <Link href="/" className="icon-salir" ><LogoutIcon sx={{ fontSize: 35, color: '#ffa600' }} /></Link>
                    </div>
                    <div className="name-logo">
                        <h1>Device Doctor</h1>
                    </div>
                </div>
                <div className="contenido-subtitulo">
                    <div className="titulo-cliente">
                        <h1>Registro Cliente</h1>
                    </div>
                    <div className="boton-nuevo">
                        <Button className="btn-nuevo"
                            variant="contained"
                            color="success"
                            onClick={() => openModal('Insertar')}>
                            <CreateNewFolderIcon />
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="center">01</StyledTableCell>
                                    <StyledTableCell align="center">user1</StyledTableCell>
                                    <StyledTableCell align="center">123</StyledTableCell>
                                    <StyledTableCell align="center">Dorian</StyledTableCell>
                                    <StyledTableCell align="center">Realme 7</StyledTableCell>
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
                            <FormControl>
                                <h2>Nuevo Cliente</h2>
                                <label>ID</label>
                                <input
                                    type="text" name='id'
                                    readOnly />
                                <br />
                                <div className="botones-formnuevo">
                                    <Button className="btn-registrar" variant="contained">
                                        Ingresar
                                    </Button>
                                    <Button className="btn-cancelarRegistro" variant="contained"
                                        onClick={() => setOpenNuevo(false)}>
                                        Cancelar
                                    </Button>
                                </div>
                            </FormControl>
                        </Box>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Registro;