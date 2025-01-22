import { Typography } from '@mui/material'
import FormNuevo from "../../components/FormNuevo"
import TituloStyled from "../../components/Titulo"
import styled from 'styled-components'

const Contenedor = styled.section`
//display:flex;
background-color: #666;
padding:10px
`
function NuevoVideo() {

    return (
        <>
            <Contenedor>
                <Typography variant="h4" align="center" sx={{ mt: '2', color: '#fff' }}>  NUEVO VIDEO</Typography>
                <Typography variant="subtitle1" align="center" sx={{ color: '#fff' }}>
                    COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                </Typography >
                <TituloStyled> Crear Tarjeta </TituloStyled>
                <FormNuevo />
            </Contenedor>
        </>
    )
}
export default NuevoVideo