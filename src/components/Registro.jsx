import { React, useState } from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { styled } from '@mui/material/styles';
import '../styles/EstilosRegistro.css';
import { FormControl } from "@mui/material";


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

    const datos_estudiantes = [
        { id: 1, cedula: "0912345678", nombre: "Rex", apellido: "Asecas" },
        { id: 2, cedula: "0974185296", nombre: "Lucas", apellido: "Cat" },
        { id: 3, cedula: "0996385274", nombre: "karol", apellido: "Jones" },
        { id: 4, cedula: "0998765423", nombre: "Rufo", apellido: "Ruso" },
    ];

    const [data, setData] = useState(datos_estudiantes);
    const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({ id: 0, cedula: "", nombre: "", apellido: "" });
    const [banderaEditar, setBanderaEditar] = useState(false);
    const [banderaEliminar, setBanderaEliminar] = useState(false);
    const [banderaInsertar, setBanderaInsertar] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState("");


    const seleccionarEstudiante = (elemento, tipo) => {
        setEstudianteSeleccionado(elemento);
        (tipo === 'Editar') && setBanderaEditar(true);
        (tipo === 'Eliminar') && setBanderaEliminar(true);
        (tipo === 'Insertar') && setBanderaInsertar(true);

    }

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setEstudianteSeleccionado((prevState) => (
            { ...prevState, [name]: value }
        ))
        console.log(estudianteSeleccionado);
    }

    const editarEstudiante = () => {
        var datos_nuevos = data;
        datos_nuevos.map(estudiante => {
            if (estudiante.id === estudianteSeleccionado.id) {
                estudiante.cedula = estudianteSeleccionado.cedula;
                estudiante.nombre = estudianteSeleccionado.nombre;
                estudiante.apellido = estudianteSeleccionado.apellido;
            }
        })

        setData(datos_nuevos);
        setBanderaEditar(false);
        setMensajeAlerta(`Estudiante ${estudianteSeleccionado.nombre} ${estudianteSeleccionado.apellido} actualizado con exito`);
    }

    const eliminarEstudiante = () => {
        var nuevos_datos = data.filter(
            estudiante => estudiante.id !== estudianteSeleccionado.id
        );

        setData(nuevos_datos);
        setBanderaEliminar(false);
        setMensajeAlerta(`Estudiante ${estudianteSeleccionado.nombre} ${estudianteSeleccionado.apellido} eliminado con exito`);

    }

    const crearEstudiante = () => {
        var estudiante_a_ingresar = estudianteSeleccionado;
        var nuevos_datos = data;
        estudiante_a_ingresar.id = nuevos_datos[nuevos_datos.length - 1].id + 1;
        nuevos_datos.push(estudiante_a_ingresar);
        setData(nuevos_datos);
        setBanderaInsertar(false);
        setMensajeAlerta(`Estudiante ${estudianteSeleccionado.nombre} ${estudianteSeleccionado.apellido} ingresado con exito`);
    }

    return (
        <body>
            <Container className="container-registro">
                <div className="form-containerRegistro">
                    <br />
                    <h1>Rergistro Cliente</h1>
                    <br />
                    <div className="boton-nuevo">
                        <Button className="btn-nuevo"
                            variant="contained"
                            color="success"
                            onClick={() => seleccionarEstudiante(null, 'Insertar')}>
                            <CreateNewFolderIcon />
                        </Button>
                    </div>
                    <br />
                    <br />
                    <div className="tabla-container">
                        <TableContainer component={Paper}>
                            <div className="table">
                                <Table>
                                    <TableHead className="table-head">
                                        <TableRow>
                                            <StyledTableCell align="center">ID</StyledTableCell>
                                            <StyledTableCell align="center">Cedula</StyledTableCell>
                                            <StyledTableCell align="center">Nombre</StyledTableCell>
                                            <StyledTableCell align="center">Apellido</StyledTableCell>
                                            <StyledTableCell align="center">Acciones</StyledTableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody className="table-body">
                                        {
                                            data.map(elemento => (
                                                <StyledTableRow>
                                                    <StyledTableCell align="center">{elemento.id}</StyledTableCell>
                                                    <StyledTableCell align="center">{elemento.cedula}</StyledTableCell>
                                                    <StyledTableCell align="center">{elemento.nombre}</StyledTableCell>
                                                    <StyledTableCell align="center">{elemento.apellido}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div className="btn-acciones">
                                                            <div className="boton-editar">
                                                                <Button className="btn-editar"
                                                                    variant="contained"
                                                                    color='secondary'
                                                                    onClick={() => seleccionarEstudiante(elemento, 'Editar')}>
                                                                    <EditIcon />
                                                                </Button>
                                                            </div>
                                                            <div className="boton-eliminar">
                                                                <Button className="btn-eliminar"
                                                                    variant="contained"
                                                                    color='warning'
                                                                    onClick={() => seleccionarEstudiante(elemento, 'Eliminar')}>
                                                                    <DeleteForeverIcon />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </TableContainer>

                        <Alert variant="filled" severity="success" color='primary'>
                            {mensajeAlerta}
                        </Alert>
                        <br />
                    </div>
                </div>
            </Container>

            <Container className="container-modalEditar">
                <Modal open={banderaEditar}>
                    <Box sx={style}>
                        <div className="form-editar">
                            <FormControl>
                                <h1>Editar Estudiante</h1>
                                <label>ID</label>
                                <input
                                    type="text" name='id' readOnly
                                    value={estudianteSeleccionado && estudianteSeleccionado.id} />

                                <label>Cedula</label>
                                <input
                                    type="text" name='cedula'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado && estudianteSeleccionado.cedula} />

                                <label>Nombre</label>
                                <input
                                    type="text" name='nombre'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado && estudianteSeleccionado.nombre} />

                                <label>Apellido</label>
                                <input
                                    type="text" name='apellido'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado && estudianteSeleccionado.apellido} />
                                <br />
                                <div className="btn-modalEditar">
                                    <Button className="btn-guardar" variant="contained" onClick={() => editarEstudiante()}>
                                        Guardar
                                    </Button>
                                    <Button className="btn-cancelar" variant="contained" onClick={() => setBanderaEditar(false)}>
                                        Cancelar
                                    </Button>
                                </div>
                            </FormControl>
                        </div>
                    </Box>

                </Modal>
            </Container>

            <Container className="container-modalEliminar">
                <Modal open={banderaEliminar}>
                    <div className="alerta-eliminar">
                        <Box sx={style}>
                            <p>¿Está Seguro de Eliminar este Registro?</p>
                            <br />
                            <div className="btn-modalEliminar">
                                <Button className="btn-alertEliminar" variant="contained" onClick={() => eliminarEstudiante()}>
                                    Si
                                </Button>
                                <Button className="btn-alertCancelar" variant="contained" onClick={() => setBanderaEliminar(false)}>
                                    No
                                </Button>
                            </div>
                        </Box>
                    </div>
                </Modal>
            </Container>

            <Container className="container-modalInsertar">
                <Modal open={banderaInsertar}>
                    <div className="form-nuevo">
                        <Box sx={style}>
                            <FormControl className="form-modalNuevo">
                                <h1>Nuevo Estudiante</h1>
                                <label>ID</label>
                                <input
                                    type="text" name='id'
                                    readOnly
                                    value={data[data.length - 1].id + 1} />
                                <br />

                                <label>Cedula</label>
                                <input
                                    type="text" name='cedula'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado ? estudianteSeleccionado.cedula : ''} />
                                <br />

                                <label>Nombre</label>
                                <input
                                    type="text" name='nombre'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado ? estudianteSeleccionado.nombre : ''} />
                                <br />

                                <label>Apellido</label>
                                <input
                                    type="text" name='apellido'
                                    onChange={handleChangeInput}
                                    value={estudianteSeleccionado ? estudianteSeleccionado.apellido : ''} />
                                <br />
                                <div className="btn-modalRegistrar">
                                    <Button className="btn-registrar" variant="contained"
                                        onClick={() => crearEstudiante()}>
                                        Ingresar
                                    </Button>
                                    <Button className="btn-cancelarRegistro" variant="contained"
                                        onClick={() => setBanderaInsertar(false)}>
                                        Cancelar
                                    </Button>
                                </div>
                            </FormControl>
                        </Box>
                    </div>
                </Modal>
            </Container>

        </body>
    );
}

export default Registro;