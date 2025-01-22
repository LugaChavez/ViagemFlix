import styled from "styled-components"
import FormNV from "../FormNuevo/index"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { IconButton } from '@mui/material'
import TituloStyled from "../Titulo"

const Overlay= styled.div`
background-color: rgba(0, 0, 0, .7);
position:fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
const DialogStyled =styled.dialog`
position:absolute;
top: 294px;
background: transparent;
padding:0;
border:0;
width: 1156px;
justify-content:center;
`

function Modal (){
    return <> 
        <Overlay/>
        <DialogStyled open={""} onClose={""}>
            <TituloStyled> EDITAR CARDS :</TituloStyled>
            <FormNV/>
            <IconButton 
                style={{ 
                position:'relative',
                rigth: '60px',
                top:'20px', 
                }}
            > 
                <HighlightOffIcon /> 
            </IconButton>
        </DialogStyled>

    </>
}
export default Modal